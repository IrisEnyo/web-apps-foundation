let toggleButton = document.querySelector("#toggleButton");
let password = document.querySelector("#password");

toggleButton.addEventListener("click", function (e) {
  if (password.type === "password") {
    password.type = "text";
    toggleButton.innerText = "Hide Password";
  } else {
    password.type = "password";
    toggleButton.innerText = "Show Password";
  }
});
