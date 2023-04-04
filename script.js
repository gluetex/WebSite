const contactForm = document.querySelector(".contact-form");
const submitBtn = document.querySelector(".submit");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const publicKey = "QeWg7aFa_OcgXMiKU";
const serviceID = "service_sb0s0uo";
const templateID = "template_3vmzblq";

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  submitBtn.innerText = "Just a moment...";
  const inputFields = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value,
  };
  emailjs.send(serviceID, templateID, inputFields).then(
    () => {
      submitBtn.innerText = "Message Sent Successfully";
      nameInput.value = "";
      emailInput.value = "";
      messageInput.value = "";
      setTimeout(() => {
        submitBtn.innerText = "Send";
      }, [3000]);
    },
    (error) => {
      console.log(error);
      submitBtn.innerText = "Something went wrong";
    }
  );
});

const navbarToggle = document.querySelector(".navbar-toggle");
const navbarMenu = document.querySelector(".navbar-menu");

navbarToggle.addEventListener("click", () => {
  navbarToggle.classList.toggle("active");
  navbarMenu.classList.toggle("active");
});
