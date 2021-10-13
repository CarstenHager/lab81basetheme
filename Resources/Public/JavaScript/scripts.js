/*!
 * lab81basetheme v1.0.0 (https://www.lab81.de)
 * Copyright 2017-2020 Carsten Hager
 * Licensed under the GPL-2.0-or-later license
 */
(function($) {

    // #####################
    /* Datenschutzlink im Kontaktformular einfügen */
    $( ".ce-form_formframework .form-group .input.checkbox .form-check .form-check-label span" ).replaceWith( "<span><a href=\"/datenschutz/\">Datenschutzerklärung</a><span class=\"required\">*</span></span>" );

    // #####################
    /*  Weiches Scrollen  */
    $('a.js-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top -100
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    // #####################
    //  Nav Extra Row ausblenden
    function navibarScrollDetective() {
        var docTop = $(window).scrollTop();
        var bannerHeight = $('#main-navbar').height() -24;
        var docWidth = $(window).width();

        if(docTop > bannerHeight && docWidth >= 768) {
            $('.nav-extra-row').hide(500);
            // $('#main-navbar').attr('style', 'padding: 0 0.5rem !important');
        }
        if(docTop < bannerHeight && docWidth >= 768 ) {
            $('.nav-extra-row').show(500);
            // $('#main-navbar').attr('style', 'padding: 1rem !important');
        }
    }

    navibarScrollDetective();

    $(window).scroll(function() {
        navibarScrollDetective();
    });

    $(window).resize(function() {
        navibarScrollDetective();
    });


})(jQuery);