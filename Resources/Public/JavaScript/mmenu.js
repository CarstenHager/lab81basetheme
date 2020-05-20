/*!
 * lab81basetheme v1.0.0 (https://www.lab81.de)
 * Copyright 2017-2020 Carsten Hager
 * Licensed under the GPL-2.0-or-later license
 */
(function($) {

    $(".navbar-collapse").mmenu({

        // Bootstrap Theme aktivieren
        wrappers: ["bootstrap4"],

        // Einstellungen
        "extensions": [
            "theme-dark",
            "pagedim-black",
            "fx-menu-slide",
            "position-right"
        ],

        "setSelected": {
            "parent": true
        },

        // Counter für Unterseiten aktivieren
        "counters": true,

        // Verschiedene Navbars aktivieren
        "navbars": [
            {
                "position": "top",
                "content": [
                    "close"
                ]
            },
            {
                "position": "bottom",
                "content": [
                    "<a class='fas fa-envelope' href='#/'></a>",
                    "<a class='fab fa-twitter' href='#/'></a>",
                    "<a class='fab fa-facebook' href='#/'></a>"
                ]
            }
        ],


        "iconbar": {
            "add": true,
            "top": [
                "<a href='#/'><i class='fas fa-home'></i></a>",
                "<a href='#/'><i class='fas fa-user'></i></a>"
            ],
            "bottom": [
                "<a href='#/'><i class='fab fa-twitter'></i></a>",
                "<a href='#/'><i class='fab fa-facebook'></i></a>",
                "<a href='#/'><i class='fab fa-linkedin'></i></a>"
            ]
        },


    }, {
        // configuration
        classNames: {

        }
    });

})(jQuery);