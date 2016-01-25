korrespondent = {
    getArticles: {
        url: 'http://korrespondent.net/all/',
        baseUrl: '',
        article: {
            parent: '.article',
            href: '.article__title > h3 > a'
        },
        nextPage: '.pagination__link.pagination__forward',
        limit: 0
    },
    getComments: {
        parser: 'phantom',
        baseUrl: '',
        article: {
            title: '.post-item.clearfix > h1',
            date: '.post-item.clearfix > .post-item__info',
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
                social: '.comment-item__top > a',
                avatar: 'a > img'
            }

        }
    }
};
tsn = {
    getArticles: {
        url: 'http://tsn.ua/',
        baseUrl: '',
        article: {
            parent: '.news_list > .item',
            href: 'a.title'
        },
        nextPage: '',
        limit: 0
    },
    getComments: {
        parser: 'simple',
        url: 'http://tsn.ua/groshi/kurs-na-zrostannya-yak-dorozhchali-produkti-u-2015-roci-infografika-577817.html',
        baseUrl: 'http://tsn.ua',
        article: {
            title: '.title_block > .title',
            date: '.inf.top_info > .date',
            keywords: 'meta[name=keywords]',
            description: 'meta[name=description]',
            body: '.news_content'
        },
        comments: {
            parent: '.comments > .item, .item.child',
            text: '.i_body > .i_text',
            date: '.i_head > .c_date',
            author: {
                name: '.i_head > .u_name',
                social: '.no',
                avatar: '.i_head > .u_avatar'
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
            href: '.news_text.item_text_title'
        },
        nextPage: '.tape_pages > ul > li:last-child > a',
        limit: 0
    },
    getComments: {
        parser: 'phantom',
        baseUrl: 'http://www.segodnya.ua',
        article: {
            title: '.article > h1',
            date: '.article_box > table > tbody > tr > td:first-child',
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
                social: '.comment_head > strong > a',
                avatar: '.comment_head > strong > a > .comment_image > img'
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
            href: 'header > h3 > a'
        },
        nextPage: '.pag_next',
        limit: 10
    },
    getComments: {
        parser: 'simple',
        baseUrl: 'http://censor.net.ua/',
        article: {
            title: '.entry-title',
            date: '.published.dateline',
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
                social: '.author > a',
                avatar: '.no'
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
            href: 'a'
        },
        nextPage: '.next.page-numbers',
        limit: 0
    },
    getComments: {
        parser: 'phantom',
        baseUrl: '',
        article: {
            title: '.content-img__main > h1',
            date: '.meta > .meta__date',
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
                social: '.comment__info > a',
                avatar: 'a > img'
            }
        }
    }
};
/*uainfo = {//cant parse
    getArticles: {
        url: 'http://uainfo.org/blognews',
        baseUrl: 'http://uainfo.org',
        article: {
            parent: '.catpost',
            href: 'header > h3 > a'
        },
        nextPage: '.next.page-numbers',
        limit: 2
    },
    getComments: {
        parser: 'may be nightmare helps?'
        url: 'http://uainfo.org/blognews/1453283644-shcho-potribno-dlya-rosiysko-ukrayinskogo-primirennya.html',
        baseUrl: '',
        article: {
            title: '.entry-title',
            date: '.published.dateline',
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
                social: '.mc-comment-head > a:nth-child(1)',
                avatar: '.no'
            }
        }
    }
};*/
/*
 {
 "__v": 0,
 "_id": ObjectID("56a23f9a5475b77374e77a05"),
 "crawled": true,
 "lock": true,
 "parsed": false,
 "result": "{\"status\":true,\"post\":[{\"title\":\"Парасюк и Луценко пообедали за 40 гривен\\r\\n                                                        [фото]\",\"date\":\"\",\"href\":\"http://kp.ua/politics/527006-parasuik-y-lutsenko-poobedaly-za-40-hryven\"},{\"title\":\"Корбан заявил, что не держит дома \\\"черной бухгалтерии\\\"\",\"date\":\"\",\"href\":\"http://kp.ua/politics/527003-korban-zaiavyl-chto-ne-derzhyt-doma-chernoi-bukhhalteryy\"},{\"title\":\"В \\\"ДНР\\\" проведут выборы по своим \\\"законам\\\"\",\"date\":\"\",\"href\":\"http://kp.ua/politics/526998-v-dnr-provedut-vybory-po-svoym-zakonam\"},{\"title\":\"В Кремле опровергли новость, что Путин предлагал Асаду покинуть пост президента Сирии\",\"date\":\"\",\"href\":\"http://kp.ua/politics/526997-u-putyna-oproverhly-predlozhenye-asadu-pokynut-post-prezydenta-syryy\"},{\"title\":\"Давос-2016: роботы составят конкуренцию людям к 2025 году\",\"date\":\"\",\"href\":\"http://kp.ua/politics/526990-davos-2016-roboty-sostaviat-konkurentsyui-luidiam-k-2025-hodu\"},{\"title\":\"В Таджикистане президенту Рахмону могут дать безлимит на правление\",\"date\":\"\",\"href\":\"http://kp.ua/politics/526985-v-tadzhykystane-prezydentu-rakhmoru-mohut-dat-bezlymyt-na-pravlenye\"},{\"title\":\"ГПУ выяснит имена всех депутатов на аудиозаписях по делу Корана\",\"date\":\"\",\"href\":\"http://kp.ua/politics/526975-hpu-vyiasnyt-ymena-vsekh-deputatov-na-audyozapysiakh-po-delu-korana\"},{\"title\":\"Конституционный суд одобрил изменения в Конституцию в части правосудия\",\"date\":\"\",\"href\":\"http://kp.ua/politics/526973-konstytutsyonnyi-sud-odobryl-yzmenenyia-v-konstytutsyui-v-chasty-pravosudyia\"},{\"title\":\"Ложкину и Яресько пророчат премьерство\",\"date\":\"\",\"href\":\"http://kp.ua/politics/526968-lozhkynu-y-yaresko-prorochat-premerstvo\"},{\"title\":\"ГПУ изъяла у Корбана документы, подтверждающие факты взяточнества\\r\\n                                                        [видео]\",\"date\":\"\",\"href\":\"http://kp.ua/politics/526966-obysky-u-korbana-hpu-nashla-dokumenty-podtverzhdauischye-fakty-vziatochnestva\"},{\"title\":\"Арабский телеканал снял фильм о Беларуси - \\\"эквиваленте Северной Кореи\\\"\\r\\n                                                        [видео, фото]\",\"date\":\"\",\"href\":\"http://kp.ua/politics/526963-arabskyi-telekanal-snial-fylm-o-belarusy-ekvyvalente-severnoi-korey\"},{\"title\":\"Украина и Турция создадут группу для совместных оборонных проектов\\r\\n                                                        [фото]\",\"date\":\"\",\"href\":\"http://kp.ua/politics/526960-ukrayna-y-turtsyia-sozdadut-hruppu-dlia-sovmestnykh-oboronnykh-proektov\"},{\"title\":\"Прокурор рассказал об уголовных делах, открытых по делам Януковича\",\"date\":\"\",\"href\":\"http://kp.ua/politics/526948-henprokuror-rasskazal-ob-uholovnykh-delakh-otkrytykh-po-delam-yanukovycha\"},{\"title\":\"Япония отменила санкции против Ирана\",\"date\":\"\",\"href\":\"http://kp.ua/politics/526946-yaponyia-otmenyla-sanktsyy-protyv-yrana\"},{\"title\":\"Порошенко прокомментировал падение рубля\",\"date\":\"\",\"href\":\"http://kp.ua/politics/526941-poroshenko-prokommentyroval-padenye-rublia\"},{\"title\":\"Белый дом о деле Литвиненко: оно выглядит так, словно взято из шпионского романа\",\"date\":\"\",\"href\":\"http://kp.ua/politics/526939-belyi-dom-o-dele-lytvynenko-ono-vyhliadyt-tak-slovno-vziato-yz-shpyonskoho-romana\"},{\"title\":\"Порошенко: продвижения в реализации Минска-2 нет\",\"date\":\"\",\"href\":\"http://kp.ua/politics/526937-poroshenko-prodvyzhenyia-v-realyzatsyy-mynska-2-net\"},{\"title\":\"Президент Латвии успешно перенес операцию на сердце\",\"date\":\"\",\"href\":\"http://kp.ua/politics/526932-prezydent-latvyy-uspeshno-perenes-operatsyui-na-serdtse\"},{\"title\":\"Турчинов высказался за военное объединение с Турцией\",\"date\":\"\",\"href\":\"http://kp.ua/politics/526928-turchynov-vyskazalsia-za-voennoe-obedynenye-s-turtsyei\"},{\"title\":\"Родина-мать, как же герб с тебя снять?\",\"date\":\"\",\"href\":\"http://kp.ua/politics/526917-rodyna-mat-kak-zhe-herb-s-tebia-sniat\"},{\"title\":\"Давос-2016: ставка на экономику\",\"date\":\"\",\"href\":\"http://kp.ua/politics/526921-davos-2016-stavka-na-ekonomyku\"},{\"title\":\"Прокуратура хочет запретить \\\"Кока-Колу\\\" в Украине?\",\"date\":\"\",\"href\":\"http://kp.ua/politics/526918-prokuratura-khochet-zapretyt-koka-kolu-v-ukrayne\"},{\"title\":\"Молдавские власти отказались выполнять требования митингующих\",\"date\":\"\",\"href\":\"http://kp.ua/politics/526911-moldavskye-vlasty-otkazalys-vypolniat-trebovanyia-mytynhuuischykh\"},{\"title\":\"Встреча \\\"нормандской четверки\\\" может состояться в феврале\",\"date\":\"\",\"href\":\"http://kp.ua/politics/526901-vstrecha-normandskoi-chetverky-mozhet-sotoiatsia-v-fevrale\"},{\"title\":\"Путин заявил, что Ленин привел СССР к распаду\",\"date\":\"\",\"href\":\"http://kp.ua/politics/526893-putyn-zaiavyl-chto-lenyn-pryvel-sssr-k-raspadu\"},{\"title\":\"Песков назвал доклад об убийстве Литвиненко британским юмором\",\"date\":\"\",\"href\":\"http://kp.ua/politics/526889-peskov-nazval-doklad-ob-ubyistve-lytvynenko-brytanskym-yumorom\"},{\"title\":\"Молдаване о митингах в Кишиневе: \\\"То, что сейчас происходит – издевательство над народом\\\"\\r\\n                                                        [фото]\",\"date\":\"\",\"href\":\"http://kp.ua/politics/526876-moldavane-o-mytynhakh-v-kyshyneve-to-chto-seichas-proyskhodyt-yzdevatelstvo-nad-narodom\"},{\"title\":\"ОБСЕ: \\\"В зоне АТО стороны сближаются, ситуация накаляется\\\"\",\"date\":\"\",\"href\":\"http://kp.ua/politics/526860-obse-v-zone-ato-storony-sblyzhauitsia-sytuatsyia-nakaliaetsia\"},{\"title\":\"В Великобритании заморозят активы подозреваемых в отравлении Литвиненко\\r\\n                                                        [фото, видео, обновлено]\",\"date\":\"\",\"href\":\"http://kp.ua/politics/526858-v-velykobrytanyy-zamoroziat-aktyvy-podozrevaemykh-v-otravlenyy-lytvynenko\"},{\"title\":\"Отец нардепа Михаила Добкина скончался на борту чартерного самолета\",\"date\":\"\",\"href\":\"http://kp.ua/politics/526851-otets-nardepa-mykhayla-dobkyna-skonchalsia-na-bortu-charternoho-samoleta\"},{\"title\":\"Россия не будет выдавать обвиняемых в убийстве Литвиненко\",\"date\":\"\",\"href\":\"http://kp.ua/politics/526845-rossyia-ne-budet-vydavat-obvynennykh-v-ubyistve-lytvynenko\"},{\"title\":\"Дела Майдана могут закрыть из-за закона о Госбюро расследований\",\"date\":\"\",\"href\":\"http://kp.ua/politics/526840-dela-maidana-mohut-zakryt-yz-za-zakona-o-hosbuiro-rassledovanyi\"},{\"title\":\"В Лондоне назвали виновных в отравлении Литвиненко\\r\\n                                                        [обновлено]\",\"date\":\"\",\"href\":\"http://kp.ua/politics/526831-v-londone-nazvaly-vynovnykh-v-otravlenyy-lytvynenko\"},{\"title\":\"Передача доли Порошенко в \\\"Рошен\\\" в независимый траст: как это работает\",\"date\":\"\",\"href\":\"http://kp.ua/politics/526829-peredacha-doly-poroshenko-v-roshen-v-nezavysymyi-trast-kak-eto-rabotaet\"},{\"title\":\"Украинская армия подготовилась к возможному наступлению \\\"ДНР\\\" и \\\"ЛНР\\\"\",\"date\":\"\",\"href\":\"http://kp.ua/politics/526826-ukraynskaia-armyia-podhotovylas-k-nastuplenyui-dnr-y-lnr\"},{\"title\":\"В Молдове - второй день митингов после избрания нового правительства\\r\\n                                                        [видео, фото, обновляется]\",\"date\":\"\",\"href\":\"http://kp.ua/politics/526824-v-moldove-vtoroi-den-mytynhov-posle-yzbranyia-novoho-pravytelstva\"},{\"title\":\"В Украине завели дело против \\\"Pepsi\\\" и \\\"Coca-Cola\\\"\",\"date\":\"\",\"href\":\"http://kp.ua/politics/526822-v-ukrayne-zavely-delo-protyv-Pepsi-y-Coca-Cola\"},{\"title\":\"Участникам беспорядков у парламента Молдавы грозит до восьми лет\\r\\n                                                        [фото, видео]\",\"date\":\"\",\"href\":\"http://kp.ua/politics/526818-uchastnykam-besporiadkov-u-parlamenta-moldavy-hrozyt-do-vosmy-let\"},{\"title\":\"Кабмин может запретить ввоз в Украину напечатанных в России книг\",\"date\":\"\",\"href\":\"http://kp.ua/politics/526806-kabmyn-mozhet-zapretyt-vvoz-v-ukraynu-napechatannykh-v-rossyy-knyh\"},{\"title\":\"Новое правительство Молдовы тайком принесло присягу президенту\",\"date\":\"\",\"href\":\"http://kp.ua/politics/526802-novoe-pravytelstvo-moldovy-taikom-pryneslo-prysiahu-prezydentu\"},{\"title\":\"СМИ: Обама разрешил Пентагону бомбить \\\"Исламское государство\\\" в Афганистане\",\"date\":\"\",\"href\":\"http://kp.ua/politics/526801-smy-obama-razreshyl-pentahonu-bombyt-yslamskoe-hosudarstvo-v-afhanystane\"},{\"title\":\"Порошенко и Байден обсудили конституционные изменения и минский процесс\",\"date\":\"\",\"href\":\"http://kp.ua/politics/526800-poroshenko-y-baiden-obsudyly-konstytutsyonnye-yzmenenyia-y-mynskyi-protsess\"},{\"title\":\"Яресько: \\\"В этом году мы действительно начнем процесс по возврату Крыма\\\"\",\"date\":\"\",\"href\":\"http://kp.ua/politics/526799-yaresko-v-etom-hodu-my-deistvytelno-nachnem-protsess-po-vozvratu-kryma\"},{\"title\":\"Новая Конституция: велено не спешить\",\"date\":\"\",\"href\":\"http://kp.ua/politics/526797-novaia-konstytutsyia-veleno-ne-speshyt\"},{\"title\":\"Порошенко и премьер Турции решили, что санкции России безосновательны\",\"date\":\"\",\"href\":\"http://kp.ua/politics/526795-poroshenko-y-premer-turtsyy-reshyly-chto-sanktsyy-rossyy-bezosnovatelny\"},{\"title\":\"Протестующие покинули здание парламента Молдовы, есть пострадавшие\\r\\n                                                        [фото]\",\"date\":\"\",\"href\":\"http://kp.ua/politics/526794-protestuuischye-pokynuly-zdanye-parlamenta-moldovy-est-postradavshye\"},{\"title\":\"ОБСЕ: в Донбассе разминированы два из 12 приоритетных участков\",\"date\":\"\",\"href\":\"http://kp.ua/politics/526791-obse-v-donbasse-razmynyrovany-dva-yz-12-pryorytetnykh-uchastkov\"},{\"title\":\"Порошенко прилетел на экономический форум в Швейцарию\",\"date\":\"\",\"href\":\"http://kp.ua/politics/526788-poroshenko-pryletel-na-ekonomycheskyi-forum-v-shveitsaryui\"},{\"title\":\"На переговорах в Минске в самый последний момент сорвался обмен пленными\",\"date\":\"\",\"href\":\"http://kp.ua/politics/526786-na-perehovorakh-v-mynske-v-samyi-poslednyi-moment-sorvalsia-obmen-plennymy\"},{\"title\":\"От \\\"Правого сектора\\\" откололись четыре \\\"Запада\\\"\",\"date\":\"\",\"href\":\"http://kp.ua/politics/526771-ot-pravoho-sektora-otkololys-chetyre-zapada\"}]}",
 "type": "findPosts",
 "value": "{\"getArticles\":{\"url\":\"http://kp.ua/politics/\",\"baseUrl\":\"\",\"article\":{\"parent\":\".other__content > dd\",\"title\": \"a\",\"date\":\"header>time\",\"href\":\"a\"},\"nextPage\":\".next.page-numbers\",\"limit\": 2}}"
 }*/
