// MailChimp
var MailChimp = function() {
  'use strict';

  // Handle MailChimp
  var handleMailChimp = function() {
      $('.js__subscribe-form').on('submit', function(event) {
        var formData = $(this).serialize();
        $.ajax({
          url: "../include/mailchimp/mailchimp-api.php",
          type: "POST",
          data: formData,
          success: function(response) {
            if (JSON.parse(response).status === 'success') {
              function generate(type, theme) {
                var n = noty({
                  text: theme + ' > ' + type,
                  type: type,
                  dismissQueue: true,
                  layout: 'center',
                  theme: theme,
                  template: '<div class="g-bg-color--gold g-text-center g-padding-x-20 g-padding-y-30"><span class="g-display-block g-font-size-32 g-color--white g-margin-b-10 icon-Mail-Add +"></span> <span class="g-display-block g-font-size-20 g-color--white g-margin-b-5">Congratulations!</span> <p class="g-font-size-14 g-color--white-opacity g-margin-b-0">You have successfully subscribed.</p> </span> </div>',
                  closeWith: ['button', 'click'],
                  maxVisible : 3,
                  timeout: 500
                });
                console.log('html: ' + n.options.id);
              }
              function generateAll() {
                generate('alert', 'js__noty');
              }
              $(document).ready(function () {
                generateAll();
              });
            } else if (JSON.parse(response).status === 'exists') {
              function generate(type, theme) {
                var n = noty({
                  text : theme + ' > ' + type,
                  type : type,
                  dismissQueue: true,
                  layout : 'center',
                  theme : theme,
                  template: '<div class="g-bg-color--red g-text-center g-padding-x-20 g-padding-y-30"><span class="g-display-block g-font-size-32 g-color--white g-margin-b-10 icon-Mail-Block"></span> <span class="g-display-block g-font-size-20 g-color--white g-margin-b-5">Attention!</span> <p class="g-font-size-14 g-color--white-opacity g-margin-b-0">You have already subscribed.</p> </span> </div>',
                  closeWith : ['button', 'click'],
                  maxVisible : 3,
                  timeout: 500
                });
                console.log('html: ' + n.options.id);
              }
              function generateAll() {
                generate('alert', 'js__noty');
              }
              $(document).ready(function () {
                generateAll();
              });
            }
          }
        });
        return false;
      });
    }

    return {
      init: function() {
        handleMailChimp(); // initial setup for mailchimp
      }
    }
}();

$(document).ready(function() {
    MailChimp.init();
});
