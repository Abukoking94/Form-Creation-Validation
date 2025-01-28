document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    let isValid = true;
    let messages = [];

    if (username.length < 3) {
      isValid = false;
      messages.push("User name should be greater than 3 characters.");
    }
    if (!email.includes("@") || !email.includes(".")) {
      isValid = false;
      messages.push("Email should be correct.");
    }
    if (password.length < 8) {
      isValid = false;
      messages.push("Password length should be at least 8 characters.");
    }

    feedbackDiv.style.display = "block";

    if (isValid) {
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745";
    } else {
      feedbackDiv.innerHTML = messages.join("<br>");
      feedbackDiv.style.color = "#dc3545";
    }
  });
});
