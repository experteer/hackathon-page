$( window ).load(function() {
  $('.tell-me-more').click(function() {
    $('html, body').animate({scrollTop: $('section').first().offset().top}, 1000);
  })
  new WOW().init();
  $('#loading_overlay').fadeOut().delay(1000).hide();
});