require.config({
  paths: {
    jquery: '../bower_components/jquery/dist/jquery',
    magnific: '../bower_components/magnific-popup/dist/jquery.magnific-popup'
  },
  shim: {
    bootstrap: {
      deps: ['jquery'],
      exports: 'jquery'
    },
    magnific: {
      deps: ['jquery']
    }
  }
});

require(['app', 'jquery', 'magnific'], function(app) {
  var $ = jQuery;

  $('a.printSpread').click(function(e) {
    e.preventDefault();

    var galleryContainer = $('.galleryContainer'),
      images = galleryContainer.find('.originalImages').map(function(index, element) {
        return {src: $(element).attr('href')}
      });


    $.magnificPopup.open({
      items: images.toArray(),
      gallery: {
        enabled: true
      },
      type: 'image'
    }, 0);

  });

  $('[data-behavior=open-nav]').click(function() {
    $('body').addClass('nav-open');
  });
  $('[data-behavior=close-nav]').click(function() {
    $('body').removeClass('nav-open');
  });
});