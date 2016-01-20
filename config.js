korrespondent = {
    getArticles: {
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

    },
    getComments: {
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
    }
};
tsn = {
    getArticles: {
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
    },
    getComments: {
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
    }
};
segodnya = {
    getArticles: {
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
    },
    getComments: {
        url: 'http://www.segodnya.ua/regions/krym/v-medzhlise-zagovorili-o-morskoy-blokade-kryma-683705.html',
        baseUrl: '',
        article: {
            keywords: 'meta[name=keywords]',
            description: 'meta[name=description]',
            body: '.article'
        },
        comments: {
            parent: '.comment',
            text: 'p',
            date: '.adateformat',
            author: {
                name: '.comment_head > strong > a',
                social: '.comment_head > strong > a'
            }

        }
    }
};
censor = {
    getArticles: {
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
    },
    getComments: {
        url: 'http://censor.net.ua/news/369798/poroshenko_uvolil_chetyreh_sudeyi_sredi_nih_kireev',
        baseUrl: 'http://censor.net.ua/',
        article: {
            keywords: 'meta[name=keywords]',
            description: 'meta[name=description]',
            body: '.entry-content._ga1_on_'
        },
        comments: {
            parent: '.lightbox > .item',
            text: '.commtext',
            date: '.time',
            author: {
                name: '.author > a',
                social: '.author > a'
            }

        }
    }
};
uainfo = {
    getArticles: {
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
    },
    getComments: {
        url: 'http://uainfo.org/blognews/1453283644-shcho-potribno-dlya-rosiysko-ukrayinskogo-primirennya.html',
        baseUrl: '',
        article: {
            keywords: 'meta[name=keywords]',
            description: 'meta[name=description]',
            body: '.text.publication-text'
        },
        comments: {
            parent: '.mc-comment',
            text: '.mc-comment-msg',
            date: '.mc-comment-time',
            author: {
                name: '.mc-comment-head > a:nth-child(1)',
                social: '.mc-comment-head > a:nth-child(1)'
            }
        }
    }
};
kp = {
    getArticles: {
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
    },
    getComments: {
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
    }
};