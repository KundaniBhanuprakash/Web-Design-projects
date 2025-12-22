function register() {
  let user = regUser.value;
  let pass = regPass.value;

  localStorage.setItem(user, pass);
  alert("Registration successful!");
  window.location = "login.html";
}

function login() {
  let user = username.value;
  let pass = password.value;

  let storedPass = localStorage.getItem(user);

  if (storedPass === pass) {
    if (user === "admin") {
      window.location = "admin.html";
    } else {
      window.location = "jobs.html";
    }
  } else {
    alert("Invalid login!");
  }
}
