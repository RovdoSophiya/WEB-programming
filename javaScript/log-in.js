const loginButton = document.getElementById("Log-in");
loginButton.addEventListener("click", function () {
  const emailInput = document.getElementById("log-in-email");
  const passwordInput = document.getElementById("passwordField");

  const storedUserData = JSON.parse(localStorage.getItem("userData"));
  if (
    storedUserData &&
    storedUserData.email === emailInput.value &&
    storedUserData.pswd === passwordInput.value
  ) {
    window.location.href = "user.html";
  } else {
    alert("Invalid email or password.");
  }
});
