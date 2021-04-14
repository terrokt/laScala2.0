$(function () {
  $('.hero__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
  });

  // $('.birthday-slider').slick({});

  var mixer = mixitup('.tabs', {
    load: {
      filter: '.adult',
    },
  });
  lightbox.option({
    alwaysShowNavOnTouchDevices: true,
  });
});
