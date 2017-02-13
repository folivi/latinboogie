// Global Javascript Initialization
var Global = function() {
  'use strict';

  // Bootstra Components
  var handleBootstrapComponents = function() {
    // Bootstrap Carousel
    $('.carousel').carousel({
      interval: 5000,
      pause: 'hover'
    });

    // Tooltips
    $('.tooltips').tooltip();
    $('.tooltips-show').tooltip('show');
    $('.tooltips-hide').tooltip('hide');
    $('.tooltips-toggle').tooltip('toggle');
    $('.tooltips-destroy').tooltip('destroy');

    // Popovers
    $('.popovers').popover();
    $('.popovers-show').popover('show');
    $('.popovers-hide').popover('hide');
    $('.popovers-toggle').popover('toggle');
    $('.popovers-destroy').popover('destroy');
  }

  // Scroll To Section
  var handleScrollToSection = function() {
    $(function() {
      $('a[href*=#js__scroll-to-]:not([href=#js__scroll-to-])').on('click', function() {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 0
            }, 1000);
            return false;
          }
        }
      });
    });
  }

  // Handle Promo Section
  var handlePromoSection = function() {
    $('.js__fullwidth-img').each(function() {
      $(this).css('background-image', 'url(' + $(this).children('img').attr('src') + ')');
      $(this).children('img').hide();
    });
  }

  // Handle Overlay
  var handleOverlay = function() {
    var overlay = $('.js__bg-overlay'),
      trigger = $('.js__trigger');

    trigger.on('click', function() {
      overlay.toggleClass('-is-open');
      trigger.toggleClass('-is-active');
    });
  }

  // Form Input
  var handleFormInput = function() {
    $(window).on('load', function() {
      $('.js__form-input').val('');
      $('.js__form-input__field').on('focusout', function() {
        if($(this).val() !== '') {
          $(this).addClass('-is-active');
        } else{
          $(this).removeClass('-is-active');
        }
      });
    });
  }

  return {
    init: function() {
      handleBootstrapComponents(); // initial setup for Bootstrap Components
      handleScrollToSection(); // initial setup for Scroll To Section
      handlePromoSection(); // initial setup for Promo Section
      handleOverlay(); // initial setup for Overlay
      handleFormInput(); // initial setup for Form Input
    }
  }
}();

$(document).ready(function() {
  Global.init();
});
