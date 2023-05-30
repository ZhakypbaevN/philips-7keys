
$(document).ready(function() {
  var scrollTop = $(window).scrollTop();
  if (scrollTop === 0) {
    $('header').removeClass('fixed');
    $('header').addClass('big');
  } else {
    $('header').addClass('fixed');
    $('header').removeClass('big').css({
        'top': $('header').outerHeight() - 200
    });
  }
});

$(window).on('scroll', function() {
  var scrollTop = $(window).scrollTop();
  if (scrollTop === 0) {
    $('header').removeClass('fixed');
    $('header').addClass('big');
  } else {
    $('header').addClass('fixed');
    $('header').removeClass('big').css({
        'top': $('header').outerHeight() - 200
    });
  }
});

$(window).on('resize', function() {
  $('header').removeClass('fixed');
});

var prevScrollTop = $(window).scrollTop();
$(window).on('scroll', function() {
  var scrollTop = $(window).scrollTop();
  if (scrollTop > prevScrollTop) {
    $('header').css({
      'top': $('header').outerHeight() - 200
    });
  } else {
    $('header').css({
        'top': '0px'
    });
  }
  prevScrollTop = scrollTop;
});