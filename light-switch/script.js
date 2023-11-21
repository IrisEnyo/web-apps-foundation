let button = document.querySelector("button");
let night = false;

button.addEventListener("click", function (e) {
  night = !night;
  if (night) {
    document.title = "Good Night";
    button.classList.toggle("button--night");
    document.body.classList.toggle("body--night");
  } else {
    document.title = "Good Morning";
    button.classList.toggle("button--night");
    document.body.classList.toggle("body--night");
  }
});
