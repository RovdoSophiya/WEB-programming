let currentLanguageB = localStorage.getItem("language") || "en";

function getTranslate(lang) {
  const elements = document.querySelectorAll("[data-i18]");
  elements.forEach((elem) => {
    const key = elem.dataset.i18;
    if (i18Obj[lang][key]) {
      if (elem.placeholder) {
        elem.placeholder = i18Obj[lang][key];
      } else {
        elem.textContent = i18Obj[lang][key];
      }
    }
  });
}

const enButtonB = document.querySelector('button[data-i18="enB"]');
const ruButtonB = document.querySelector('button[data-i18="rusB"]');

enButtonB.addEventListener("click", () => {
  getTranslate("en");
  currentLanguageB = "en";
  localStorage.setItem("language", "en");
});
ruButtonB.addEventListener("click", () => {
  getTranslate("ru");
  currentLanguageB = "ru";
  localStorage.setItem("language", "ru");
});
