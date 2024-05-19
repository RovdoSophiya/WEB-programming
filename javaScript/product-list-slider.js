let products;

fetch("../json/product-list.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Ой, ошибка в fetch: " + response.statusText);
    }
    return response.json();
  })
  .then((jsonData) => {
    products = jsonData;
  })
  .catch((error) => console.error("Ошибка при исполнении запроса: ", error));

// const section = document.querySelector('.product-item');
// const img = section.querySelectorAll('img');
// const text = section.querySelector('.text-upp');
// const price = alltext.querySelectorAll('.text');

let activeIndex = 0;

const btnLeft = document.getElementById("left-arrow");
const btnRight = document.getElementById("right-arrow");

btnLeft.addEventListener("click", slideleft);
btnRight.addEventListener("click", slideright);

function slideleft() {
  activeIndex = activeIndex === 0 ? products.length - 1 : activeIndex - 1;
  setdata();
}

function slideright() {
  activeIndex = activeIndex === products.length - 1 ? 0 : activeIndex + 1;
  setdata();
}
function setdata() {
  for (let i = 0; i < 3; i++) {
    const productIndex = (activeIndex + i) % products.length;
    document.getElementById("img" + i).src = products[productIndex].image;
    document.getElementById("name" + i).textContent =
      i18Obj[currentLanguage]["name" + productIndex];
    document.getElementById("price" + i).textContent =
      products[productIndex].price;
  }
}
