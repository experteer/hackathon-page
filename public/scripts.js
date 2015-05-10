jQuery(function($) { 
  $('.tell-me-more').click(function() {
    $('html, body').animate({scrollTop: $('section').first().offset().top}, 1000);
  })
  new WOW().init();
});