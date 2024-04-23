let translations;

function loadTranslations(language) {
  fetch("../json/" + language + ".json")
    .then((response) => response.json())
    .then((data) => {
      translations = data;
      updateContent();
    })
    .catch((error) => console.error("Ошибка:", error));
}
function updateContent() {
  document.getElementById("shoppingAnnotation").textContent = translations.shoppingAnnotation;

  document.getElementById("shop").textContent = translations.shop;
  document.getElementById("edit").textContent = translations.edit;
  document.getElementById("story").textContent = translations.story;
  document.getElementById("reviews").textContent = translations.reviews;

  document.getElementById("rus").textContent = translations.rus;
  document.getElementById("en").textContent = translations.en;

  document.getElementById("signIn").textContent = translations.signIn;
  document.getElementById("signUp").textContent = translations.signUp;

  document.getElementById("shopText").textContent = translations.shopText;

  document.getElementById("greenMenuText1").textContent = translations.greenMenuText1;
  document.getElementById("greenMenuText2").textContent = translations.greenMenuText2;
  document.getElementById("greenMenuText3").textContent = translations.greenMenuText3;

  document.getElementById("pickBottles").textContent = translations.pickBottles;
}

const rusButton = document.getElementById("rus"); // Выбираем кнопку смены языка по идентификатору
const enButton = document.getElementById("en"); // Выбираем кнопку смены языка по идентификатору

rusButton.addEventListener("click", () => {
  loadTranslations("rus");
});

enButton.addEventListener("click", () => {
  loadTranslations("en");
});


loadTranslations("en"); // Загрузка английских переводов по умолчанию