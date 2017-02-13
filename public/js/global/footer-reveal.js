// Footer Reveal
var FooterReveal = function() {
  'use strict';

  // Handle Footer Reveal
  var handleFooterReveal = function() {
    (function($) {
      $.fn.footerReveal = function(options) {
        var $this = $(this),
          $prev = $this.prev(),
          $win = $(window),

          defaults = $.extend({
            zIndex: -100
          }, options),

          settings = $.extend(true, {}, defaults, options);

        if ($this.outerHeight() <= $win.outerHeight()) {
          $this.css({
            'z-index': defaults.zIndex,
            position: 'fixed',
            bottom: 0
          });

          $win.on('load resize', function() {
            $this.css({
              'width': $prev.outerWidth()
            });
            $prev.css({
              'margin-bottom': $this.outerHeight()
            });
          });
        }
        return this;
      };
    })(jQuery);
    
    $('#js__footer-reveal').footerReveal();
  }

  return {
    init: function() {
      handleFooterReveal(); // initial setup for Footer Reveal
    }
  }
}();

$(document).ready(function() {
  FooterReveal.init();
});