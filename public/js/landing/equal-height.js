// Equal Height
var EqualHeight = function() {
  "use strict";

  // Handle Equal Height
  var handleEqualHeight = function() {
    $(function($) {
      $('.js__testimonials-eqaul-height-v1').responsiveEqualHeightGrid();
    });
  }

  return {
    init: function() {
      handleEqualHeight(); // initial setup for equal height
    }
  }
}();

$(document).ready(function() {
    EqualHeight.init();
});