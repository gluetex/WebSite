$(document).ready(function () {
  $("form").submit(function (event) {
    // prevent the form from submitting with the default action
    event.preventDefault();

    // get the form data
    var formData = {
      name: $("input[name=name]").val(),
      email: $("input[name=email]").val(),
      message: $("textarea[name=message]").val(),
    };

    // send the form data to the server-side script
    $.ajax({
      type: "POST",
      url: "send-mail.php",
      data: formData,
      dataType: "json",
      encode: true,
    })
      .done(function (data) {
        // handle the response from the server-side script
        if (data.success) {
          alert("Your message has been sent. Thank you!");
          $("form")[0].reset();
        } else {
          alert(
            "An error occurred while sending your message. Please try again later."
          );
        }
      })
      .fail(function () {
        alert(
          "An error occurred while sending your message. Please try again later."
        );
      });
  });
});
