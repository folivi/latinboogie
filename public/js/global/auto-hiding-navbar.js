// Auto Hiding Navbar on Scroll
var AutoHidingNavbar = function() {
  
  // Handle Auto Hiding Navbar on Scroll
  var handleAutoHidingNavbar = function() {
    $(function() {
      // Hide Header on on scroll down
      var didScroll;
      var lastScrollTop = 0;
      var startScrollTop = 151;
      var delta = 5;
      var navbarHeight;

      $(window).on('scroll', function(event) {
        didScroll = true;
        navbarHeight = $('.js__header-auto-hiding').outerHeight();
      });

      setInterval(function() {
        if (didScroll) {
          hasScrolled();
          didScroll = false;
        }
    }, 250);

      function hasScrolled() {
        var st = $(this).scrollTop();

        // Make sure they scroll more than delta
        if (Math.abs(lastScrollTop - st) <= delta)
          return;

        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight) {
          // Scroll Down
          $('.js__header-auto-hiding').removeClass('s-header__nav-down').addClass('s-header__nav-up');
        } else {
          // Scroll Up
          if (st + $(window).height() < $(document).height()) {
            $('.js__header-auto-hiding').removeClass('s-header__nav-up').addClass('s-header__nav-down');
          }
        }

        lastScrollTop = st;
      }
    });
  }

  return {
    init: function() {
      handleAutoHidingNavbar(); // initial setup for auto hiding navbar on scroll
    }
  }
}();

$(document).ready(function() {
  AutoHidingNavbar.init();
});