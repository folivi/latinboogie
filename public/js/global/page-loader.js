// Page Loader
var PageLoader = function() {
  'use strict';

  // Handle Page Loader
  var handlePageLoader = function() {
    $(window).on('load', function() {
      $('body').imagesLoaded(function() {
        $('#js__page-loader js__page-loader__content');
        $('#js__page-loader').addClass('-is-animated');
      });
    });
  }

  return {
    init: function() {
      handlePageLoader(); // initial setup for Page Loader
    }
  }
}();

$(document).ready(function() {
  PageLoader.init();
});
