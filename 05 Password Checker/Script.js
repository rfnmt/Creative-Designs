window.onload = function () {
  function idCheker(name) {
    return document.getElementById(name);
  }

  function classChecker(name) {
    return document.getElementsByClassName(name);
  }

  classChecker("toggle")[0].addEventListener("click", function () {
    classChecker("toggle")[0].classList.toggle("active");
    if (idCheker("password-field").getAttribute("type") == "password") {
      idCheker("password-field").setAttribute("type", "text");
    } else {
      idCheker("password-field").setAttribute("type", "password");
    }
  });

  idCheker("password-field").addEventListener("focus", function () {
    classChecker("pass-policies")[0].classList.add("active");
  });
  idCheker("password-field").addEventListener("blur", function () {
    classChecker("pass-policies")[0].classList.remove("active");
  });

  idCheker("password-field").addEventListener("keyup", function () {
    let password = idCheker("password-field").value;
    if (/[A-Z]/.test(password)) {
      classChecker("p-uppercase")[0].classList.add("active");
    } else {
      classChecker("p-uppercase")[0].classList.remove("active");
    }
    if (/[0-9]/.test(password)) {
      classChecker("p-number")[0].classList.add("active");
    } else {
      classChecker("p-number")[0].classList.remove("active");
    }
    if (/[^A-Za-z0-9]/.test(password)) {
      classChecker("p-special")[0].classList.add("active");
    } else {
      classChecker("p-special")[0].classList.remove("active");
    }
    if (password.length > 7) {
      classChecker("p-length")[0].classList.add("active");
    } else {
      classChecker("p-length")[0].classList.remove("active");
    }
  });
};
