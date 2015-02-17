require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        colorbox: 'colorbox.min'
    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        colorbox: {
            deps: ['jquery']
        }
    }
});

require(['app', 'jquery', 'colorbox'], function (app) {
    var $ = jQuery;
    $('a.printSpread').click(function(e) {
        e.preventDefault();
        $('a.originalImages').colorbox({
            rel:'gal',
            top: '100',
            transition: "none"
        });
        $('a.originalImages:first').click();
    });

    $('[data-behavior=open-nav]').click(function() {
        $('body').addClass('nav-open');
    });
    $('[data-behavior=close-nav]').click(function() {
        $('body').removeClass('nav-open');
    });
});