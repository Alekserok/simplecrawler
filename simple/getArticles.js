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
var config = {
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
var result = [];
var pageToVisit = config.url;
var visitedCount = 0;
console.log("Visiting page " + pageToVisit);
function s(pageToVisit) {
    request(pageToVisit, function(error, response, body) {
        if(error) {
            console.log("Error: " + error);
        }
        // Check status code (200 is HTTP OK)
        console.log("Status code: " + response.statusCode);
        if(response.statusCode === 200) {
            // Parse the document body
            var $ = cheerio.load(body);
            //console.log($(config.article.parent).length);
            $(config.article.parent).each(function(index) {
                result.push({
                    title: $(this).find(config.article.title).text().trim(),
                    date: $(this).find(config.article.date).text().trim(),
                    href:  config.baseUrl + $(this).find(config.article.href).attr('href')
                });
            });
            var nextPage = $(config.nextPage).attr('href');
            if(nextPage != undefined && (config.limit == 0 || config.limit > ++visitedCount)) {
                s(config.baseUrl + nextPage, result)
            } else {
                for(var i in result) {
                    console.log(result[i]);
                    console.log('================================')
                }
                console.log(result.length);
            }

        } else {
            for(var i in result) {
                console.log(result[i]);
                console.log('================================')
            }
            console.log(result.length);
        }
    })//.pipe(destination);
};

s(pageToVisit);
