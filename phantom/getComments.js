'use strict';

var sys = require('system');
var args = sys.args;
var page = require('webpage').create();

//get params from system args
var params = JSON.parse(args[1]);

parseSite(params.config, params.id, params.url);

//TODO: use random user agents
var useragent = [];
useragent.push('Opera/9.80 (X11; Linux x86_64; U; fr) Presto/2.9.168 Version/11.50');
useragent.push('Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5355d Safari/8536.25');
useragent.push('Opera/12.02 (Android 4.1; Linux; Opera Mobi/ADR-1111101157; U; en-US) Presto/2.9.201 Version/12.02');

//block pages download
page.onResourceRequested = function (requestData, request) {
    if ((/http:\/\/.+?\.css$/gi).test(requestData['url'])) {
        request.abort();
    }
};

//block services
page.onResourceRequested = function (requestData, request) {
    if (
        (/\.doubleclick\./gi.test(requestData['url'])) ||
        (/\.pubmatic\.com$/gi.test(requestData['url'])) ||
        (/yandex/gi.test(requestData['url'])) ||
        (/google/gi.test(requestData['url'])) ||
        (/gstatic/gi.test(requestData['url']))
    ) {
        //console.error("BLOCKED: " + requestData['url']);
        request.abort();
        return;
    }
};

/*
 //for debug mode
 page.onResourceRequested = function (request) {
 console.log('Request ' + JSON.stringify(request, undefined, 4));
 };

 page.onError = function (msg, trace) {
 console.log(msg);
 trace.forEach(function (item) {
 console.log('  ', item.file, ':', item.line);
 });
 };*/

function exit(code) {
    setTimeout(function () {
        phantom.exit(code);
    }, 0);
    phantom.onError = function () {
    };
}

function parseSite(config, id, url) {
    console.log('start parsing ' + url);
    //for debug mode
    /* page.onConsoleMessage = function (msg) {
     console.log(msg);
     };*/
    page.open(url, function (status) {

        if (status === 'success') {

            var result = page.evaluate(function (config) {
                var comments = [];
                $(config.comments.parent).each(function (index) {
                    var social = $(this).find(config.comments.author.social).attr('href');
                    var avatar = $(this).find(config.comments.author.avatar).attr('src');
                    if(social != undefined && social[0] == '/') {
                        social = config.baseUrl + social;
                    }
                    if(avatar != undefined && avatar[0] == '/') {
                        avatar = config.baseUrl + avatar;
                    }
                    comments.push({
                        date: $(this).find(config.comments.date).text(),
                        text: $(this).find(config.comments.text).text(),
                        author: {
                            name: $(this).find(config.comments.author.name).text(),
                            social: social,
                            avatar: avatar
                        }
                    });
                });
                var result = {
                    title: $(config.article.title).text(),
                    date: $(config.article.date).text(),
                    keywords: $(config.article.keywords).attr('content'),
                    description: $(config.article.description).attr('content'),
                    body: $(config.article.body).html(),
                    comments: comments,
                };

                return result;

            }, config);

            sendResult(result, id);
        }
    });
}

function sendResult(result, id) {

    var url = 'http://91.196.196.24:8080/task';
    console.log('saving ' + result.comments.length + ' comments ' + ' id ' + id);
    var settings = {
        operation: "POST",
        encoding: "utf8",
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify({
            "id": id,
            "result": {
                "status": true,
                "comment": result
            }
        })
    };

    page.open(url, settings, function (status) {
        console.log('Saving status: ' + status);
        console.log(page.url);
        console.log(page.plainText);
        exit(); //close phantom
    });
}