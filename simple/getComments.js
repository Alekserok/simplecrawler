var request = require('request');
var cheerio = require('cheerio');
var URL = require('url-parse');
var fs = require('fs');
var destination = fs.createWriteStream('./pageContent.txt');

/*var config = {
    url: 'http://tsn.ua/politika/pid-chas-marshu-pam-yati-nyemcova-zaklikatimut-zvilniti-savchenko-573721.html',
    baseUrl: '',
    article: {
        keywords: 'meta[name=keywords]',
        description: 'meta[name=description]',
        body: '.news_content'
    },
    comments: {
        parent: '.comment, .child_comment',
        text: '.comment_text',
        date: '.date',
        author: {
            name: '.title.title-type-1',
            social: '.title.title-type-1'
        }

    }
};*/
/*var config = {//ok phantom
    url: 'http://korrespondent.net/city/odessa/3616983-v-syzo-odesskoi-oblasty-povesylsia-zaderzhannyi-smy',
    baseUrl: '',
    article: {
        keywords: 'meta[name=keywords]',
        description: 'meta[name=description]',
        body: '.post-item__text'
    },
    comments: {
        parent: '.comment-item.comment-item_b',
        text: '.comment-item__text',
        date: '.comment-item__top',
        author: {
            name: '.comment-item__top > a',
            social: '.comment-item__top > a'
        }

    }
};*/
/*var config = ;*/

var  comments = [];
var pageToVisit = config.url;
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
            //console.log($('meta[name=description]').attr('content'));
            //setTimeout(function(){
                var $ = cheerio.load(body);
                $(config.comments.parent).each(function(index) {
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
                    comments: comments
                };

                console.log(result.body);
                console.log(result.keywords);
                console.log(result.description);
                console.log($(config.comments.parent).length);
                for(var key in result.comments) {
                    console.log(result.comments[key])
                }
            //}, 10000);
        }
    }).pipe(destination);
};

s(pageToVisit);
