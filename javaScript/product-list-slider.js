// Данные товаров (предположим, что они загружаются из json-файлов)
const products = [
  { id: 1, name: "Шампунь", price: 24, imageUrl: "../img/Shampoo.png" },
  { id: 2, name: "Кондиционер", price: 24, imageUrl: "../img/Conditioner.png" },
  {
    id: 3,
    name: "Набор Dream Set",
    price: 49,
    imageUrl: "../img/Dream-set.png",
  },
  { id: 4, name: "Шампунь", price: 24, imageUrl: "../img/Shampoo.png" },
  { id: 5, name: "Кондиционер", price: 24, imageUrl: "../img/Conditioner.png" },
  {
    id: 6,
    name: "Набор Dream Set",
    price: 49,
    imageUrl: "../img/Dream-set.png",
  },
  { id: 7, name: "Шампунь", price: 24, imageUrl: "../img/Shampoo.png" },
  { id: 8, name: "Кондиционер", price: 24, imageUrl: "../img/Conditioner.png" },
  {
    id: 9,
    name: "Набор Dream Set",
    price: 49,
    imageUrl: "../img/Dream-set.png",
  },
];

// Функция для создания HTML-разметки для карточек товаров
function getProductsHTML(products) {
  let html = "";
  for (const product of products) {
    html += `
          <div class="product-item">
              <div class="product-photo">
                  <img src="${product.imageUrl}" alt="${product.name}">
              </div>
              <div class="product-description">
                  <p class="text-upp">${product.name}</p>
                  <p class="text">$${product.price}</p>
              </div>
          </div>
      `;
  }
  return html;
}

// Функция для перемешивания массива
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
