$('#intro-slider').slick({
  dots: true,
  infinite: true,
  speed: 500,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 10000,
  cssEase: 'linear'
});


$('#partners').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 10000,
});

$('#categories-list').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true
});

