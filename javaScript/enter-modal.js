document.addEventListener("DOMContentLoaded", function () {
  const signupForm = document.getElementById("signupForm");

  signupForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(signupForm);
    const userData = {};
    for (const [key, value] of formData.entries()) {
      userData[key] = value;
    }

    // Проверка на формат телефона
    const phoneRegex = /^\+375\d{9}$/;
    if (!phoneRegex.test(userData.tel)) {
      alert("Phone number must start with +375 and have 13 digits in total.");
      return;
    }

    // Проверка на формат email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userData.email)) {
      alert("Invalid email format.");
      return;
    }

    // Проверка на уникальность email
    const storedUserData = JSON.parse(localStorage.getItem("userData"));
    if (storedUserData && storedUserData.email === userData.email) {
      alert("Email is already registered.");
      return;
    }

    // Проверка пароля по требованиям
    if (!validatePassword(userData.pswd)) {
      alert(
        "Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one digit, one special character, and not be in the top 100 most common passwords of 2023."
      );
      return;
    }
    function validatePassword(password) {
      // Проверка на длину пароля
      if (password.length < 8 || password.length > 20) {
        return false;
      }

      // Проверка на наличие хотя бы одной заглавной буквы, одной строчной буквы, одной цифры и одного специального символа
      const uppercaseRegex = /[A-Z]/;
      const lowercaseRegex = /[a-z]/;
      const digitRegex = /[0-9]/;
      const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
      if (
        !uppercaseRegex.test(password) ||
        !lowercaseRegex.test(password) ||
        !digitRegex.test(password) ||
        !specialCharRegex.test(password)
      ) {
        return false;
      }

      // Проверка на присутствие в топ-100 самых распространенных паролей 2023 года (в данном примере используется простой список)
      const commonPasswords = [
        "password",
        "123456",
        "123456789",
        "guest",
        "QWERTY",
        "12345678",
        "111111",
        "12345",
        "col123456",
        "123123",
        "1234567",
        "1234",
        "1234567890",
        "000000",
        "555555",
        "666666",
        "123321",
        "654321",
        "7777777",
        "123",
        "d1lakiss",
        "777777",
        "110110jp",
        "1111",
        "987654321",
        "121212",
        "gizli",
        "abc123",
        "112233",
        "azerty",
        "159753",
        "1q2w3e4r",
        "54321",
        "[email protected]",
        "222222",
        "qwertyuiop",
        "qwerty123",
        "qazwsx",
        "vip",
        "asdiloveyou",
        "123456",
        "a1b2c3",
        "999999",
        "Groupd2013",
        "1q2w3e",
        "usr",
        "Liman1000",
        "1111111",
        "333333",
        "123123123",
        "9136668099",
        "11111111",
        "1qaz2wsx",
        "password1",
        "mar20lt",
        "987654321",
        "gfhjkm",
        "159357",
        "abcd1234",
        "131313",
        "789456",
        "luzit2000",
        "aaaaaa",
        "zxcvbnm",
        "asdfghjkl",
        "1234qwer",
        "88888888",
        "dragon",
        "987654",
        "888888",
        "qwe123",
        "soccer",
        "3601",
        "asdfgh",
        "master",
        "samsung",
        "12345678910",
        "killer",
        "1237895",
        "1234561",
        "12344321",
        "daniel",
        "00000",
        "444444",
        "101010",
        "f–you",
        "qazwsxedc",
        "789456123",
        "super123",
        "qwer1234",
        "123456789a",
        "823477aA",
        "147258369",
        "unknown",
        "98765",
        "q1w2e3r4",
        "232323",
      ];
      if (commonPasswords.includes(password)) {
        return false;
      }

      return true;
    }
    // Проверка на совпадение паролей
    if (userData.pswd !== userData.repeatpswd) {
      alert("Passwords do not match.");
      return;
    }

    // Генерация никнейма
    let nickname = userData.nick.trim().toLowerCase().replace(/\s+/g, "_");
    if (!nickname) {
      nickname = generateNickname();
    }

    // Сохранение данных в local storage
    localStorage.setItem("userData", JSON.stringify(userData));
    localStorage.setItem("nickname", nickname);

    // Перенаправление пользователя на другую страницу
    window.location.href = "user.html";
  });
  const genNicknameButton = document.querySelector(".gen-nick");
  genNicknameButton.addEventListener("click", function () {
    const nicknameInput = document.getElementById("nicknameInput");
    const generatedNickname = generateNickname();
    nicknameInput.value = generatedNickname;
  });

  const genPasswordButton = document.querySelector(".gen-pswrd");
  const repeatPasswordInput = document.querySelector(
    'input[name="repeatpswd"]'
  );
  genPasswordButton.addEventListener("click", function () {
    const passwordInput = document.querySelector('input[name="pswd"]');
    const generatedPassword = generatePassword();
    passwordInput.value = generatedPassword;
    repeatPasswordInput.value = generatedPassword;
  });
});

const loginButton = document.getElementById("loginButton");
loginButton.addEventListener("click", function () {
  const emailInput = document.getElementById("sign-up-login");
  const passwordInput = document.getElementById("sign-up-password");

  const storedUserData = JSON.parse(localStorage.getItem("userData"));
  if (
    storedUserData &&
    storedUserData.email === emailInput.value &&
    storedUserData.pswd === passwordInput.value
  ) {
    // Пользователь найден, перенаправляем на страницу "user.html"
    window.location.href = "user.html";
  } else {
    alert("Invalid email or password.");
  }
});
function generateNickname() {
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789_!№#";
  let nickname = "";
  for (let i = 0; i < 10; i++) {
    nickname += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return nickname;
}
function generatePassword() {
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseLetters = lowercaseLetters.toUpperCase();
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+-=[]{};':\"\\|,.<>/?";
  let password = "";

  // Ensure at least one character from each category
  password += lowercaseLetters.charAt(
    Math.floor(Math.random() * lowercaseLetters.length)
  );
  password += uppercaseLetters.charAt(
    Math.floor(Math.random() * uppercaseLetters.length)
  );
  password += numbers.charAt(Math.floor(Math.random() * numbers.length));
  password += symbols.charAt(Math.floor(Math.random() * symbols.length));

  // Fill the remaining characters randomly
  for (let i = password.length; i < 8; i++) {
    const charSet = [lowercaseLetters, uppercaseLetters, numbers, symbols];
    const randomSet = charSet[Math.floor(Math.random() * charSet.length)];
    password += randomSet.charAt(Math.floor(Math.random() * randomSet.length));
  }

  return password;
}
