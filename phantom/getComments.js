'use strict';

var sys = require('system');
var args = sys.args;
var page = require('webpage').create();


function exit(code) {
    setTimeout(function () {
        phantom.exit(code);
    }, 0);
    phantom.onError = function () {
    };
}

function getConfig() {
    page.open('http://91.196.196.24:8080/task', function (status) {
        console.log('Get config Status: ' + status);

        var body = JSON.parse(page.plainText);
        console.log('id ' + body.task._id);
        if (body.task == 'not found') {
            console.log('no tasks')
        } else {
            var config = JSON.parse(body.task.config).getComments;
            /*var config = {
                url: 'http://kp.ua/politics/526651-premer-polshy-zaiavyla-o-myllyone-pryniatykh-ukraynskykh-myhrantov',
                baseUrl: '',
                article: {
                    keywords: 'meta[name=keywords]',
                    description: 'meta[name=description]',
                    body: '.content'
                },
                comments: {
                    parent: '.comment',
                    text: '.comment__text',
                    date: '.comment__date',
                    author: {
                        name: '.comment__info > a',
                        social: '.comment__info > a'
                    }
                }
            };*/
            parse(config, body.task._id);
        }
    });
}

function parse(config, id) {
console.log('start parsing' + config.url);
    /*page.onConsoleMessage = function (msg) {
        console.log(msg);
    };*/
    page.open(config.url, function (status) {

        if (status === 'success') {

            var Links = page.evaluate(function (config, id, sendResult) {
                var comments = [];
                $(config.comments.parent).each(function (index) {
                    comments.push({
                        date: $(this).find(config.comments.date).text(),
                        text: $(this).find(config.comments.text).text(),
                        author: {
                            name: $(this).find(config.comments.author.name).text(),
                            social: config.baseUrl + $(this).find(config.comments.author.social).attr('href')
                        }
                    });
                });
                var result = {
                    keywords: $(config.article.keywords).attr('content'),
                    description: $(config.article.description).attr('content'),
                    body: $(config.article.body).html(),
                    comments: comments,
                    commentsCount: $(config.comments.parent).length
                };
                /*$.ajax({
                    async: false, // this
                    url: 'http://91.196.196.24:8080/task',
                    data: { filename: 'C:\\wamp\\www\\images\\0.png' },
                    type: 'post',
                    success: function (output) {
                        console.log('Solved');
                    },
                });*/
                //sendResult(result, id);
                return result;
            }, config, id, sendResult);

                // Вывод результата через обычный console.log
            console.log(Links.comments.length);
            sendResult(Links, id);
            //      console.log(process.argv[2])
        }

        // Закрываем PhantomJS
        //exit();
    });
}

function sendResult(result, id) {

var url = 'http://91.196.196.24:8080/task';
console.log('saving ' + result.comments.length + ' id ' +id);
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
        console.log(page.plainText)
    });
console.log(settings.toString());
    console.log(result.comments.length, result.keywords);
}

getConfig();
//setInterval(getConfig, 5000);