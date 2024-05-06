const i18Obj = {
  en: {
    shoppingAnnotation: "Free Shopping on US Orders Over $60",
    shop: "Shop",
    main: "Main",
    story: "Our Story",
    reviews: "Reviews",
    rus: "Rus",
    en: "En",
    shopText: "SHOP NOW",
    greenMenuText1: "READY TO GET DRENCHED?",
    greenMenuText2: "Meet Monsoon Moisture Mask",
    greenMenuText3: "Shop Now",
    pickBottles: "Pick a Pretty Bottle",
    warmthDesert: "Feel the warmth of the desert wherever you are.",
    shopSets: "Shop sets",
    meetDae: "Meet Dae",
    textDae:
      "We are a haircare line based in sunny Arizona. Our products are made up\nof the many things that make our home special, including the scent of\norange blossoms in the air, colors of majestic sunsets and nourishing\ningredients derived from desert botanicals. We believe haircare\ndoesn't have to be complicated and aimed to make a line that is simple\nand effective. We hope that dae plays a special role in your everyday\nhair routine from sunrise to sunset and allows you to feel the warmth\nof the desert wherever you are.",
    learnMore: "Learn more",
    followingLink: "Follow Us @daehair",
    sustainability: "Sustainability",
    contactUs: "Contact Us",
    FAQ: "FAQ",
    careers: "Careers",
    privacyPolicy: "Privacy Policy",
    CAPrivacyRights: "CA Privacy Rights",
    termsOfUse: "Terms of Use",
    newsletter: "Newsletter",
    firstEmailText: "ONLY GOOD HAIR DAES AHEAD—AND 10% OFF YOUR FIRST ORDER",
    subscribe: "Subscribe",
    underEmailText: " Want to shop in person? Swing by our showroom.",
    address: " M-F, 10am-2pm 5051 E Indigo St, Suite 105, Mesa, AZ 85205",
    rights: "© 2021 dae. All rights reserved.",
    userMeetDae: "MEET DAE",
    busket: "Busket",
    signUp: "Sign up",
    login: "Login",
    forgetPassword: "forget your password?",
    enterName: "Enter name",
    enterEmail: "Enter email",
    enterPassword: "Enter password",
    repeatPassword: "Repeat password",
    exit: "Exit",
  },
  ru: {
    shoppingAnnotation: "Скидки от 60$",
    shop: "Магазин",
    main: "Главная",
    story: "История",
    reviews: "Отзывы",
    rus: "Рус",
    en: "Англ",
    shopText: "ПРОСМОТР",
    greenMenuText1: "ГОТОВЫ НАМОКНУТЬ?",
    greenMenuText2: "Встречайте новую маску",
    greenMenuText3: "Купить сейчас",
    pickBottles: "Выберите продукцию",
    warmthDesert: "Почувствуйте тепло пустыни, где бы вы ни находились",
    shopSets: "Магазин",
    meetDae: "Мы - Dae",
    textDae:
      "Мы — линия по уходу за волосами, базирующаяся в солнечной Аризоне. Наша продукция состоит из многих вещей, которые делают наш дом особенным, включая запах цветов апельсина в воздухе, цвета величественных закатов и питательные ингредиенты, полученные из растений пустыни. Мы верим, что уход за волосами не должен быть сложным и направлен на создание простой и эффективной линии. Мы надеемся, что Dae сыграет особую роль в вашей повседневной жизни, обеспечивая уход за волосами от восхода до заката и позволяя почувствовать тепло пустыни, где бы вы ни находились.",
    learnMore: "Подробнее",
    followingLink: "Подписывайтесь @daehair",
    sustainability: "Экологичность",
    contactUs: "Контакты",
    FAQ: "FAQ",
    careers: "Карьера",
    privacyPolicy: "Конфиденциальность",
    CAPrivacyRights: "Конф. права",
    termsOfUse: "Правила пользования",
    newsletter: "Новости",
    firstEmailText: "ВПЕРЕД ТОЛЬКО ХОРОШИЕ ВОЛОСЫ И СКИДКА 10% НА ПЕРВЫЙ ЗАКАЗ",
    subscribe: "Подписаться",
    underEmailText: "Хотите делать покупки лично? Загляните в наш шоу-рум.",
    address: " М-Ж, 10.00-14.00 5051 Шт. Индиго, ул. 105, Меза, AZ 85205",
    rights: "© 2021 dae. Все права защищены.",
    userMeetDae: "Встречайте DAE",
    busket: "Корзина",
    signUp: "Зарегестрироваться",
    login: "Войти",
    forgetPassword: "забыли пароль?",
    enterName: "Введите имя",
    enterEmail: "Введите почту",
    enterPassword: "Введите пароль",
    repeatPassword: "Повторите пароль",
    exit: "Выход",
  },
};

let translations;
let currentLanguage = localStorage.getItem("language") || "en";

// function getTranslate(lang) {
//   const elements = document.querySelectorAll("[data-i18]");
//   elements.forEach((elem) => {
//     const key = elem.dataset.i18;
//     if (i18Obj[lang][key]) {
//       elem.textContent = i18Obj[lang][key];
//     }
//   });
// }
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
const enButton = document.querySelector('button[data-i18="en"]');
const ruButton = document.querySelector('button[data-i18="rus"]');

enButton.addEventListener("click", () => getTranslate("en"));
ruButton.addEventListener("click", () => getTranslate("rus"));

enButton.addEventListener("click", () => {
  getTranslate("en");
  localStorage.setItem("language", "en"); // Сохраняем выбранный язык в localStorage
});
ruButton.addEventListener("click", () => {
  getTranslate("ru");
  localStorage.setItem("language", "ru"); // Сохраняем выбранный язык в localStorage
});

loadTranslations(currentLanguage);
