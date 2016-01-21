'use strict';

var sys = require('system');
var args = sys.args;
var page = require('webpage').create();


var config = {
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
};
var siteUrl = config.url;

function exit(code) {
    setTimeout(function () {
        phantom.exit(code);
    }, 0);
    phantom.onError = function () {
    };
}

page.onConsoleMessage = function(msg) {
    console.log(msg);
};

page.open(siteUrl, function (status) {

    // Данный статус указывает, что ссылка открылась
    // успешно и вернулся ответ сервера с кодом 200
    if (status === 'success') {
        // Выполняем весь CSS, JS код на странице
        var Links = page.evaluate(function (config) {
            var comments = [];
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
                comments: comments,
                commentsCount: $(config.comments.parent).length
            };
            return result;
        }, config);

        // Вывод результата через обычный console.log
        console.log(JSON.stringify(Links));
        //      console.log(process.argv[2])
    }

    // Закрываем PhantomJS
    exit();
});