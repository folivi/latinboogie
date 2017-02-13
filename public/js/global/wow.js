// Wow
var Wow = function() {
  'use strict';

  // Handle Wow
  var handleWow = function() {
    var wow = new WOW({
      boxClass: 'js__reveal-animation',
      animateClass: '-is-animated',
      mobile: false
    });
    wow.init();
  }

  return {
    init: function() {
      handleWow(); // initial setup for Wow
    }
  }
}();

$(document).ready(function() {
  Wow.init();
});