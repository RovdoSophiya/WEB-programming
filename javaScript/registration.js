document.addEventListener("DOMContentLoaded", function () {
  const birthdayInput = document.querySelector(".inp.date-inp");
  const emailInput = document.querySelector(".inp.email-inp");
  const phoneInput = document.querySelector(".inp.phone-inp");
  const lastNameInput = document.querySelector(".inp.lastName-inp");
  const nameInput = document.querySelector(".name-inp");
  const fatherNameInput = document.querySelector(".inp.fatherName-inp");
  const nickNameInput = document.querySelector(".nick");
  const passwordInput = document.querySelector(".inp.pswd-inp");
  const repeatPasswordInput = document.querySelector(".inp.rpswd");
  const licence = document.querySelector(".lic");

  const birthdayInvalid = document.querySelector(".input-error.di");
  const emailInvalid = document.querySelector(".input-error.ei");
  const emailUnique = document.querySelector(".input-error.ee");
  const phoneInvalid = document.querySelector(".input-error.ti");
  const phoneUnique = document.querySelector(".input-error.te");
  const passwordInvalid = document.querySelector(".pswd-error.pe");
  const passwordMatch = document.querySelector(".pm");

  const regButton = document.querySelector(".reg");

  let emailTouched = false;
  let phoneTouched = false;
  let passwordTouched = false;
  let repeatPasswordTouched = false;
  let birthdayTouched = false;

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

  function isEmailValid(email) {
    if (!emailTouched || email === "") {
      emailInvalid.classList.remove("email-invalid");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
    if (!emailRegex.test(email)) {
      emailInvalid.classList.add("email-invalid");
      return false;
    } else {
      emailInvalid.classList.remove("email-invalid");
      return true;
    }
  }

  function isEmailUnique(email) {
    if (!emailTouched || email === "") {
      emailUnique.classList.remove("email-error");
      return false;
    }

    const storedUserData = JSON.parse(localStorage.getItem("userData")) || [];
    const isUnique = !storedUserData.some((user) => user.email === email);
    if (!isUnique) {
      emailUnique.classList.add("email-error");
      return false;
    } else {
      emailUnique.classList.remove("email-error");
      return true;
    }
  }

  function isPhoneValid(phone) {
    if (!phoneTouched || phone === "") {
      phoneInvalid.classList.remove("phone-invalid");
      return false;
    }

    const phoneRegex = /^\+375\d{9}$/;
    if (!phoneRegex.test(phone)) {
      phoneInvalid.classList.add("phone-invalid");
      return false;
    } else {
      phoneInvalid.classList.remove("phone-invalid");
      return true;
    }
  }

  function isPhoneUnique(phone) {
    if (!phoneTouched || phone === "") {
      phoneUnique.classList.remove("phone-error");
      return false;
    }

    const storedUserData = JSON.parse(localStorage.getItem("userData")) || [];
    const isUnique = !storedUserData.some((user) => user.phone === phone);
    if (!isUnique) {
      phoneUnique.classList.add("phone-error");
      return false;
    } else {
      phoneUnique.classList.remove("phone-error");
      return true;
    }
  }

  function isPasswordValid(password) {
    if (!passwordTouched || password === "") {
      passwordInvalid.classList.remove("error");
      return false;
    }

    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const digitRegex = /[0-9]/;
    const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (
      password.length < 8 ||
      !uppercaseRegex.test(password) ||
      !lowercaseRegex.test(password) ||
      !digitRegex.test(password) ||
      !specialCharRegex.test(password) ||
      commonPasswords.includes(password)
    ) {
      passwordInvalid.classList.add("error");
      return false;
    } else {
      passwordInvalid.classList.remove("error");
      return true;
    }
  }

  function isPasswordsMatch(password, repeatPassword) {
    if (!repeatPasswordTouched || repeatPassword === "") {
      passwordMatch.classList.remove("repeat-error");
      return false;
    }

    if (password === repeatPassword) {
      passwordMatch.classList.remove("repeat-error");
      return true;
    } else {
      passwordMatch.classList.add("repeat-error");
      return false;
    }
  }

  function isBirthdayValid(birthday) {
    if (!birthdayTouched || birthday === "") {
      birthdayInvalid.classList.remove("birthday-error");
      return false;
    }

    const birthdayDate = new Date(birthday);
    const today = new Date();
    let age = today.getFullYear() - birthdayDate.getFullYear();
    const monthDifference = today.getMonth() - birthdayDate.getMonth();
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthdayDate.getDate())
    ) {
      age--;
    }

    if (age < 16) {
      birthdayInvalid.classList.add("birthday-error");
      return false;
    } else {
      birthdayInvalid.classList.remove("birthday-error");
      return true;
    }
  }

  function isLicenceChecked(licence) {
    return licence.checked;
  }

  function isValidRegistration() {
    const isEmailValidFlag = isEmailValid(emailInput.value);
    const isEmailUniqueFlag = isEmailUnique(emailInput.value);
    const isPhoneValidFlag = isPhoneValid(phoneInput.value);
    const isPhoneUniqueFlag = isPhoneUnique(phoneInput.value);
    const isPasswordValidFlag = isPasswordValid(passwordInput.value);
    const isPasswordsMatchFlag = isPasswordsMatch(
      passwordInput.value,
      repeatPasswordInput.value
    );
    const isBirthdayValidFlag = isBirthdayValid(birthdayInput.value);
    const isLicenceCheckedFlag = isLicenceChecked(licence);

    return (
      isEmailValidFlag &&
      isEmailUniqueFlag &&
      isPhoneValidFlag &&
      isPhoneUniqueFlag &&
      isPasswordValidFlag &&
      isPasswordsMatchFlag &&
      isBirthdayValidFlag &&
      isLicenceCheckedFlag
    );
  }

  function saveUserData() {
    const userData = {
      email: emailInput.value,
      phone: phoneInput.value,
      lastName: lastNameInput.value,
      name: nameInput.value,
      fatherName: fatherNameInput.value,
      nick: nickNameInput.value,
      password: passwordInput.value,
      birthday: birthdayInput.value,
    };

    const users = JSON.parse(localStorage.getItem("userData")) || [];
    localStorage.setItem("userData", JSON.stringify([...users, userData]));
  }

  function goToUser() {
    if (isValidRegistration()) {
      regButton.classList.add("open");
    } else {
      regButton.classList.remove("open");
    }
  }

  emailInput.addEventListener("input", function () {
    emailTouched = true;
    isEmailValid(emailInput.value);
    isEmailUnique(emailInput.value);
    goToUser();
  });

  phoneInput.addEventListener("input", function () {
    phoneTouched = true;
    isPhoneValid(phoneInput.value);
    isPhoneUnique(phoneInput.value);
    goToUser();
  });

  passwordInput.addEventListener("input", function () {
    passwordTouched = true;
    isPasswordValid(passwordInput.value);
    goToUser();
  });

  repeatPasswordInput.addEventListener("input", function () {
    repeatPasswordTouched = true;
    isPasswordsMatch(passwordInput.value, repeatPasswordInput.value);
    goToUser();
  });

  birthdayInput.addEventListener("input", function () {
    birthdayTouched = true;
    isBirthdayValid(birthdayInput.value);
    goToUser();
  });

  licence.addEventListener("change", function () {
    goToUser();
  });

  regButton.addEventListener("click", function (event) {
    event.preventDefault();
    if (regButton.classList.contains("open")) {
      saveUserData();
      window.location.href = "user.html";
    }
  });

  // Генерация пароля
  document
    .querySelector(".gen.pswd")
    .addEventListener("click", function (event) {
      event.preventDefault();
      const password = generatePassword();
      passwordInput.value = password;
      isPasswordValid(password);
    });

  function generatePassword() {
    const length = 12;
    const charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?/";
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    return password;
  }

  // Генерация ника
  document
    .querySelector(".gen.nick")
    .addEventListener("click", function (event) {
      event.preventDefault();
      const nickname = generateNickname();
      nickNameInput.value = nickname;
    });

  function generateNickname() {
    const adjectives = ["Cool", "Super", "Fast", "Brave", "Smart"];
    const nouns = ["Lion", "Tiger", "Bear", "Eagle", "Shark"];
    const randomAdjective =
      adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    return randomAdjective + randomNoun + Math.floor(Math.random() * 100);
  }
});
