var request = require('request');
var cheerio = require('cheerio');
var URL = require('url-parse');
var fs = require('fs');
//var destination = fs.createWriteStream('./pageContent.txt');
var params = JSON.parse(process.argv[2]);

parse(params.url, params.config, params.id);

function parse(pageToVisit, config, id) {
    console.log('Visiting ' + pageToVisit);
    request(pageToVisit, function (error, response, body) {
        if (error) {
            console.log("Error: " + error);
        }
        // Check status code (200 is HTTP OK)
        console.log("Status code: " + response.statusCode);
        if (response.statusCode === 200) {
            // Parse the document body
            var $ = cheerio.load(body);
            var comments = [];

            var $ = cheerio.load(body);
            $(config.comments.parent).each(function (index) {
                var social = $(this).find(config.comments.author.social).attr('href');
                var avatar = $(this).find(config.comments.author.avatar).attr('src');
                if (social != undefined && social[0] == '/') {
                    social = config.baseUrl + social;
                }
                if (avatar != undefined && avatar[0] == '/') {
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
                body: $(config.article.body).html(),
                comments: comments,
                keywords: $(config.article.keywords).attr('content'),
                description: $(config.article.description).attr('content')
            };

            save(id, result)
        }
    })//.pipe(destination);
};

function save(id, result) {
    console.log('saving ' + result.comments.length + ' comments id: ' + id);
    request({
        url: 'http://91.196.196.24:8080/task',
        json: {
            "id": id,
            "result": {
                "status": true,
                "comment": result
            }
        },
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    }, function (error, response, body) {
        if (error) {
            console.log(error);
        } else {
            console.log(response.statusCode, body);
        }
    });
}