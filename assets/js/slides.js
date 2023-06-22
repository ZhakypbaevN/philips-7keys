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
  dots: false,
  arrows: false,
  centerPadding: '70px',
  autoplaySpeed: 10000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      dots: true,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 380,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('#categories-list').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true
});

