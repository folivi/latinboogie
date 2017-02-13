// Slick
var Slick = function() {
  'use strict';

  // Handle Slick
  var handleSlick = function() {
    // Slider v1
    $('#js__slick-one-slider-v1').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<span data-role="none" class="s-slick__arrows-v1-prev" aria-label="Previous"></span>',
      nextArrow: '<span data-role="none" class="s-slick__arrows-v1-next" aria-label="Next"></span>'
    });

    // Slider v2
    $('#js__slick-one-slider-v2').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      dotsClass: 's-slick__dots-v1',
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      prevArrow: '<span data-role="none" class="s-slick__arrows-v2-prev" aria-label="Previous"></span>',
      nextArrow: '<span data-role="none" class="s-slick__arrows-v2-next" aria-label="Next"></span>'
    });

    // Slider v3
    $('#js__slick-one-slider-v3').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      dotsClass: 's-slick__dots-v2',
      prevArrow: '<span data-role="none" class="s-slick__arrows-v3-prev" aria-label="Previous"></span>',
      nextArrow: '<span data-role="none" class="s-slick__arrows-v3-next" aria-label="Next"></span>'
    });
  }

  return {
    init: function() {
      handleSlick(); // initial setup for Slick
    }
  }
}();

$(document).ready(function() {
  Slick.init();
});
