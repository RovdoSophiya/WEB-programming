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
  document.getElementById("shoppingAnnotation").textContent =
    translations.shoppingAnnotation;

  document.getElementById("shop").textContent = translations.shop;
  document.getElementById("edit").textContent = translations.edit;
  document.getElementById("story").textContent = translations.story;
  document.getElementById("reviews").textContent = translations.reviews;

  document.getElementById("rus").textContent = translations.rus;
  document.getElementById("en").textContent = translations.en;

  document.getElementById("shopText").textContent = translations.shopText;

  document.getElementById("greenMenuText1").textContent =
    translations.greenMenuText1;
  document.getElementById("greenMenuText2").textContent =
    translations.greenMenuText2;
  document.getElementById("greenMenuText3").textContent =
    translations.greenMenuText3;

  document.getElementById("pickBottles").textContent = translations.pickBottles;

  document.getElementById("warmthDesert").textContent =
    translations.warmthDesert;
  document.getElementById("shopSets").textContent = translations.shopSets;

  document.getElementById("meetDae").textContent = translations.meetDae;
  document.getElementById("textDae").textContent = translations.textDae;
  document.getElementById("learnMore").textContent = translations.learnMore;

  document.getElementById("followingLink").textContent =
    translations.followingLink;

  document.getElementById("sustainability").textContent =
    translations.sustainability;
  document.getElementById("contactUs").textContent = translations.contactUs;
  document.getElementById("FAQ").textContent = translations.FAQ;
  document.getElementById("careers").textContent = translations.careers;
  document.getElementById("privacyPolicy").textContent =
    translations.privacyPolicy;
  document.getElementById("CAPrivacyRights").textContent =
    translations.CAPrivacyRights;
  document.getElementById("termsOfUse").textContent = translations.termsOfUse;
  document.getElementById("newsletter").textContent = translations.newsletter;

  document.getElementById("firstEmailText").textContent =
    translations.firstEmailText;
  document.getElementById("subscribe").textContent = translations.subscribe;
  document.getElementById("underEmailText").textContent =
    translations.underEmailText;
  document.getElementById("address").textContent = translations.address;
  document.getElementById("rights").textContent = translations.rights;
}

const rusButton = document.getElementById("rus"); // Выбираем кнопку смены языка по идентификатору
const enButton = document.getElementById("en"); // Выбираем кнопку смены языка по идентификатору

rusButton.addEventListener("click", () => {
  loadTranslations("rus");
  localStorage.setItem("language", "rus");
});

enButton.addEventListener("click", () => {
  loadTranslations("en");
  localStorage.setItem("language", "en");
});

const savedLanguage = localStorage.getItem("language");
if (savedLanguage) {
  loadTranslations(savedLanguage);
} else {
  loadTranslations("en"); // Если язык не сохранен в localStorage, загрузим английский
}
