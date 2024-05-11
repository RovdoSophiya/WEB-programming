document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal-window");
  const signupForm = document.getElementById("signup-form");

  signupForm.addEventListener("submit", function (event) {
    event.preventDefault();
    if (validateSignupForm()) {
      // Отправка данных формы на сервер или другая логика
    }
  });

  function validateSignupForm() {
    // Валидация данных формы
    let tel = signupForm.elements["tel"].value;
    let email = signupForm.elements["email"].value;
    let dob = signupForm.elements["dob"].value;
    let password = signupForm.elements["password"].value;
    let repeatPassword = signupForm.elements["repeatPassword"].value;
    let firstName = signupForm.elements["firstName"].value;
    let lastName = signupForm.elements["lastName"].value;
    let fatherName = signupForm.elements["fatherName"].value;

    // Реализация валидации данных

    // Возврат true, если все данные прошли валидацию, и false в противном случае
  }

  // Дополнительные функции для всплывающего окна и других элементов
});

/*проверка корректности телефона*/
function validateSignupForm() {
  let tel = signupForm.elements["tel"].value.trim();
// Проверка наличия номера телефона
if (tel === "") {
  alert("Please enter your phone number.");
  return false;
}
// Проверка длины номера телефона
if (tel.length !== 13) {
  alert("Phone number must contain 13 digits including the country code (+375).");
  return false;
}
// Проверка наличия и корректности кода страны
if (tel.substring(0, 4) !== "+375") {
  alert("Phone number must start with +375.");
  return false;
}
// Все проверки пройдены успешно
return true;
}