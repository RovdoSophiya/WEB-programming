document
  .getElementById("loginButton")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default form submission

    var login = document.getElementById("sign-up-login").value;
    var password = document.getElementById("sign-up-password").value;

    // Проверка логина и пароля
    if (login === "dae@gmail.com" && password === "admin") {
      // Перенаправление на admin.html
      window.location.href = "admin.html";
    } else {
      // Вывод сообщения об ошибке
      alert("Invalid login or password. Please try again.");
    }
  });
