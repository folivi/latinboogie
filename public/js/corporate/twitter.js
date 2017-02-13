// Twitter
var Twitter = function() {
  'use strict';

  // Handle Twitter
  var handleTwitter = function() {
    var config = {
      'id': '755759909321510912', // invision
      'domId': 'js__tweets-feed',
      'maxTweets': 2,
      'enableLinks': true,
      'showUser': false,
      'showTime': false,
      'showImages': false,
      'showRetweet': false,
      'customCallback': handleTweets,
      'showInteraction': false
    };
    function handleTweets(tweets){
      var x = tweets.length;
      var n = 0;
      var element = document.getElementById('js__tweets-feed');
      var html = '<ul class="list-unstyled s-twitter-list-v1">';
      while(n < x) {
        html += '<li class="s-twitter-list-v1__item">' + tweets[n] + '</li>';
        n++;
      }
      html += '</ul>';
      element.innerHTML = html;
    }
    twitterFetcher.fetch(config);
  }

  return {
    init: function() {
      handleTwitter(); // initial setup for Twitter
    }
  }
}();

$(document).ready(function() {
  Twitter.init();
});