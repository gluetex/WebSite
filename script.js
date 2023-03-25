$(document).ready(function () {
  $("form").submit(function (event) {
    event.preventDefault();

    var formData = {
      name: $("input[name=name]").val(),
      email: $("input[name=email]").val(),
      message: $("textarea[name=message]").val(),
    };

    $.ajax({
      type: "POST",
      url: "mail.php",
      data: formData,
      dataType: "json",
      encode: true,
    })
      .done(function (data) {
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

const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const page = href.substr(1);
    history.pushState({ page }, null, `/${page}`);
  });
});
