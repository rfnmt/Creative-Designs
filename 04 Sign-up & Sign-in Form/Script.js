window.onload = function () {
  document
    .getElementById("show-signup-form")
    .addEventListener("click", function () {
      document.getElementsByClassName("form")[0].classList.add("active");
    });

  document
    .getElementById("show-signin-form")
    .addEventListener("click", function () {
      document.getElementsByClassName("form")[0].classList.remove("active");
    });
};
