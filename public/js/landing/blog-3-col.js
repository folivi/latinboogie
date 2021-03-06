// Blog
var Blog = function() {
  'use strict';

  // Handle Blog
  var handleBlog = function() {
    $('#js__grid-blog').cubeportfolio({
      loadMore: '#js__loadmore-blog',
      loadMoreAction: 'click',
      layoutMode: 'grid',
      mediaQueries: [{
        width: 1500,
        cols: 3
      }, {
        width: 1100,
        cols: 3
      }, {
        width: 800,
        cols: 3
      }, {
        width: 480,
        cols: 2
      }, {
        width: 320,
        cols: 1
      }],
      gapHorizontal: 30,
      gapVertical: 30,
      gridAdjustment: 'responsive',
    });
  }

  return {
    init: function() {
      handleBlog(); // initial setup for Blog
    }
  }
}();

$(document).ready(function() {
  Blog.init();
});