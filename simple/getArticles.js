var request = require('request');
var cheerio = require('cheerio');
var URL = require('url-parse');
var fs = require('fs');
var destination = fs.createWriteStream('./pageContent.txt');
/*var config = {
 url: 'http://korrespondent.net/all/2016/january/18/print/',
 baseUrl: '',
 article: {
 parent: '.article',
 title: '.article__title',
 date: '.article__date',
 href: '.article__title > h2 > a'
 },
 nextPage: '.pagination__link.pagination__forward',
 limit: 0

 };*/
/*var config = {
 url: 'http://tsn.ua/novini-dnya/',
 baseUrl: 'http://tsn.ua',
 article: {
 parent: '.list_type_1 > .item',
 title: '.title',
 date: '.date',
 href: '.title > a'
 },
 nextPage: '.c_foot > .navigate > .next > a',
 limit: 0
 };*/
/*var config = {
 url: 'http://www.segodnya.ua/allnews.html',
 baseUrl: 'http://www.segodnya.ua',
 article: {
 parent: '.c2_col_left.cardc, .c2_col_right.cardc',
 title: '.news_text.item_text_title',
 date: '.date',
 href: '.news_text.item_text_title'
 },
 nextPage: '.tape_pages > ul > li:last-child > a',
 limit: 0
 };*/
/*var config = {
 url: 'http://censor.net.ua/news/all/page/1/category/0/interval/5/sortby/date',
 baseUrl: 'http://censor.net.ua',
 article: {
 parent: '.curpane > .item',
 title: 'header > h3',
 date: 'header > time',
 href: 'header > h3 > a'
 },
 nextPage: '.pag_next',
 limit: 10
 };*/
/*var config = {
 url: 'http://uainfo.org/blognews',
 baseUrl: 'http://uainfo.org',
 article: {
 parent: '.catpost',
 title: 'header > h3',
 date: 'header > time',
 href: 'header > h3 > a'
 },
 nextPage: '.next.page-numbers',
 limit: 2
 };*/
/*var config = {
 url: 'http://kp.ua/politics/',
 baseUrl: '',
 article: {
 parent: '.other__content > dd',
 title: 'a',
 date: 'header > time',
 href: 'a'
 },
 nextPage: '.next.page-numbers',
 limit: 2
 };
 s(config, "56a0f371bb0a4db215f0d02f");*/


function getConfig() {
    var result = [];
    var visitedCount = 0;
    request.get('http://91.196.196.24:8080/task', function (error, response, body) {
        if (error) {
            console.log(error);
        } else {
            body = JSON.parse(body);
            if (body.task == 'not found') {
                console.log('no tasks')
            } else {
                var config = JSON.parse(body.task.value);
                s(config.getArticles.url, config.getArticles, body.task._id, visitedCount, result);
            }

        }
    });
}
setInterval(getConfig, 5000);


function s(url, config, id, visitedCount, result) {
    console.log("Visiting: " + url);
    request(url, function (error, response, body) {
        if (error) {
            console.log("Error: " + error);
        }
        // Check status code (200 is HTTP OK)
        console.log("Status code: " + response.statusCode);
        if (response.statusCode === 200) {
            // Parse the document body
            var $ = cheerio.load(body);
            //console.log($(config.article.parent).length);
            $(config.article.parent).each(function (index) {
                result.push({
                    title: $(this).find(config.article.title).text().trim(),
                    date: $(this).find(config.article.date).text().trim(),
                    href: config.baseUrl + $(this).find(config.article.href).attr('href')
                });
            });
            var nextPage = $(config.nextPage).attr('href');
            if (nextPage != undefined && (config.limit == 0 || config.limit > ++visitedCount)) {
                s(config.baseUrl + nextPage, config, id, visitedCount, result)
            } else {
                /*for(var i in result) {
                 console.log(result[i]);
                 console.log('================================')
                 }*/
                console.log(result.length);
                request({
                    url: 'http://91.196.196.24:8080/task',
                    json: {
                        "id": id,
                        "result": {
                            "status": true,
                            "post": result
                        }
                    },
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }, function (error, response, body) {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log(response.statusCode, body);
                    }
                });
            }

        } else {
            /*for(var i in result) {
             console.log(result[i]);
             console.log('================================')
             }*/
            console.log(result.length);
            request({
                url: 'http://91.196.196.24:8080/task',
                json: {
                    "id": id,
                    "result": {
                        "status": true,
                        "post": result
                    }
                },
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }
            }, function (error, response, body) {
                if (error) {
                    console.log(error);
                } else {
                    console.log(response.statusCode, body);
                }
            });
        }
    })//.pipe(destination);
};

