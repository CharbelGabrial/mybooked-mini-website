let nameInput = document.querySelector("#name");
let emailInput = document.querySelector("#email");
let messageInput = document.querySelector("#message");
let Sendbutton = document.querySelector(".send");

let error_long = document.querySelector(".error_long");

function validate(email) {
  let regex = /^([a-z\d\.-]+)@([a-z\d-]+)\.com?$/;
  if (regex.test(email)) {
    return true;
  } else {
    return false;
  }
}

nameInput.addEventListener("keyup", (e) => {
  nameInput.closest(".input_wrapper").classList.remove("error");
  error_long.classList.remove("error");
});

emailInput.addEventListener("keyup", (e) => {
  emailInput.closest(".input_wrapper").classList.remove("error");
  error_long.classList.remove("error");
});

messageInput.addEventListener("keyup", (e) => {
  messageInput.closest(".input_wrapper").classList.remove("error");
  error_long.classList.remove("error");
});

Sendbutton.addEventListener("click", (e) => {
  e.preventDefault();

  if (nameInput.value.length < 4) {
    nameInput.closest(".input_wrapper").classList.add("error");
    error_long.classList.add("error");
    error_long.querySelector("p").textContent = "Invalid name";

    return;
  }

  if (validate(emailInput.value) == false) {
    emailInput.closest(".input_wrapper").classList.add("error");
    error_long.classList.add("error");
    error_long.querySelector("p").textContent = "Invalid email address";

    return;
  }
  if (messageInput.value.length < 5) {
    messageInput.closest(".input_wrapper").classList.add("error");
    error_long.classList.add("error");
    error_long.querySelector("p").textContent = "Invalid message";

    return;
  }

  error_long.classList.add("success");
  error_long.textContent = "✓  Your message has been successfully sent.";

  setTimeout(() => {
    window.location.reload();
  }, 4000);
});
