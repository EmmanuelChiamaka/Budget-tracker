/// signup.js

// Get the signup form
const form = document.getElementById("signup-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Validation
  if (!name || !email || !password) {
    alert("Please fill in all fields.");
    return;
  }

  // Save user in localStorage
  const user = { name, email, password };
  localStorage.setItem("user", JSON.stringify(user));

  alert("Signup successful! Redirecting...");

  // Redirect to budget dashboard
  window.location.href = "budget.html";
});
