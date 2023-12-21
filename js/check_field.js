const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const acceptCheckbox = document.getElementById("acceptCheckbox").checked;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  if (username.trim() === "") {
    alert("Please enter a username");
    return;
  }

  if (email.trim() === "") {
    alert("Please enter an email");
    return;
  }

  if (!emailRegex.test(email)) {
    alert("Please enter a valid email");
    return;
  }

  if (password.trim() === "") {
    alert("Please enter a password");
    return;
  }

  if (!passwordRegex.test(password)) {
    alert(
      "Please enter a password with at least 8 characters, including at least one lowercase letter, one uppercase letter, and one digit"
    );
    return;
  }

  if (!acceptCheckbox) {
    alert("Please accept the terms and conditions");
    return;
  }

  form.submit();
});
