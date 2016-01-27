var request = require('request');
var cheerio = require('cheerio');
var URL = require('url-parse');
var fs = require('fs');
var result = [];
var visitedCount = 0;
//var destination = fs.createWriteStream('./pageContent.txt');

//get params from system args
var params = JSON.parse(process.argv[2]);
//start parsing
parse(params.config.url, params.config, params.id, visitedCount, result);

function parse(url, config, id, visitedCount, result) {
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
                var href = $(this).find(config.article.href).attr('href');
                if (href != undefined && href[0] == '/') {
                    href = config.baseUrl + href;
                }
                result.push({
                    href: href
                });
            });
            var nextPage = $(config.nextPage).attr('href');
            if (nextPage != undefined && nextPage[0] == '/') {
                nextPage = config.baseUrl + nextPage;
            }
            if (nextPage != undefined && (config.limit == 0 || config.limit > ++visitedCount)) {
                parse(nextPage, config, id, visitedCount, result)
            } else {
                console.log(result.length);
                save(id, result);

            }

        } else if (result.length > 0) {
            console.log(result.length);
            save(id, result);
        }
    })//.pipe(destination);
};

function save(id, result) {
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