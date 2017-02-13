// Revolution Slider
var RevSlider = function() {
  'use strict';

    // Handle Revolution Slider Layout 1
    var handleRevSliderLayout1 = function() {
      var tpj=jQuery;             
      var revapi1;
      tpj(document).ready(function() {
        if(tpj('#js__rev-slider-v1').revolution == undefined){
          revslider_showDoubleJqueryError('#js__rev-slider-v1');
        }else{
          revapi1 = tpj('#js__rev-slider-v1').show().revolution({
            sliderType: 'standard',
            jsFileLocation: '../vendor/rev-slider/js/',
            sliderLayout: 'fullscreen',
            dottedOverlay: 'none',
            delay: 6000,
            navigation: {
              keyboardNavigation: 'on',
              keyboard_direction: 'horizontal',
              mouseScrollNavigation: 'off',
              onHoverStop: 'off',
              touch: {
                touchenabled: 'on',
                swipe_threshold: 75,
                swipe_min_touches: 1,
                swipe_direction: 'horizontal',
                drag_block_vertical: false
              },
              arrows: {
                style: "metis",
                enable: true,
                hide_onmobile: true,
                hide_under: 768,
                hide_onleave: false,
                tmp: '',
                left: {
                    h_align: "left",
                    v_align: "center",
                    h_offset: 53,
                    v_offset: 15
                },
                right: {
                    h_align: "right",
                    v_align: "center",
                    h_offset: 53,
                    v_offset: 15
                }
              },
              bullets: {
                enable: true,
                hide_onleave: false,
                style: "hermes",
                direction: "horizontal",
                h_align: "center",
                v_align: "bottom",
                h_offset: 0,
                v_offset: 34,
                space: 50,
                tmp: ''
              }
            },
            responsiveLevels:[1240,1024,778,778],
            gridwidth:[1240,1024,778,480],
            gridheight:[600,500,400,300],
            lazyType: 'smart',
            parallax: {
              type:"mouse",
              origo:"slidercenter",
              speed:2000,
              levels:[2,3,4,5,6,7,12,16,10,25,47,48,49,50,51,55],
              type:"mouse",
            },
            shadow: 0,
            spinner: 'off',
            stopLoop: 'off',
            shuffle: 'off',
            autoHeight: 'off',
            hideThumbsOnMobile: 'off',
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
              simplifyAll: 'off',
              nextSlideOnWindowFocus: 'off',
              disableFocusListener: false,
            }
          });
        }
      });
    }

    return {
      init: function() {
        handleRevSliderLayout1(); // initial setup for Revolution Slider Layout 1
      }
    }
}();

$(document).ready(function() {
    RevSlider.init();
});
