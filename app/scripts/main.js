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

require(['app', 'fastclick', 'jquery', 'magnific'], function(app) {
  FastClick.attach(document.body);

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

  $('.toggler-container').on('click', function() {
    $('body').addClass('nav-open');
    e.stopImmediatePropagation();
  });
  $('[data-behavior=close-nav]').on('click', function(e) {
    $('body').removeClass('nav-open');
    e.stopImmediatePropagation();
  });
});