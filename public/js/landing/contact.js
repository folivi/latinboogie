// Contact
var Contact = function() {
  "use strict";

  var handleValidation = function() {
    jQuery.validator.addMethod('answercheck', function (value, element) {
      return this.optional(element) || /^\bcat\b$/.test(value);
    }, "type the correct answer -_-");

    // validate contact form
    $(function() {
      $('#js__contact').validate({
        rules: {
          name: {
            required: true,
            minlength: 2
          },
          email: {
            required: true,
            email: true
          },
          subject: {
            required: true
          },
          phone: {
            required: true,
            minlength: 7,
            maxlength: 13
          },
          message: {
            required: true,
            minlength: 10
          },
          answer: {
            required: true,
            answercheck: true
          }
        },
        messages: {
          name: {
            required: "Enter your name",
            minlength: "Your name must consist of at least 2 characters"
          },
          email: {
            required: "Enter your email"
          },
          subject: {
            required: "Enter a subject name"
          },
          phone: {
            required: "Enter a valid phone number",
            minlength: "Please enter at least 7 characters",
            maxlength: "Please enter maximum 13 characters"
          },
          message: {
            required: "Entre your message",
            minlength: "Your message must consist of at least 10 characters"
          },
          answer: {
            required: "Sorry. Wrong answer!"
          }
        },
        submitHandler: function(form) {
          $(form).ajaxSubmit({
            type: "POST",
            data: $(form).serialize(),
            url: "include/php/contact.php",
            success: function() {
              $('#js__contact').fadeTo(300, 0, function() {
                $(this).css('visibility', 'hidden');
                $('#js__success').fadeIn();
              });
            },
            error: function() {
              $('#js__contact').fadeTo(300, 0, function() {
                $('#js__error').fadeIn();
              });
            }
          });
        }
      });
    });
  }

  return {
    init: function() {
      handleValidation(); // initial setup for Validation
    }
  }
}();

$(document).ready(function() {
  Contact.init();
});
