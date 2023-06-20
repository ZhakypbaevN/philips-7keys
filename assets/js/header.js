
$(document).ready(function() {
  var scrollTop = $(window).scrollTop();
  if (scrollTop === 0) {
    $('header').removeClass('fixed');
    $('header').addClass('big');
  } else {
    $('header').addClass('fixed');
    $('header').removeClass('big')
  }
});

$(window).on('scroll', function() {
  var scrollTop = $(window).scrollTop();
  if (scrollTop === 0) {
    $('header').removeClass('fixed');
    $('header').addClass('big');
  } else {
    $('header').addClass('fixed');
    $('header').removeClass('big')
  }
});

$(window).on('resize', function() {
  $('header').removeClass('fixed');
});