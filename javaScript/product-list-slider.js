document.addEventListener("DOMContentLoaded", function () {
  let container = document.querySelector(".list");
  let productContainers = document.querySelectorAll(".product-item");
  let productsCount = productContainers.length;
  let currentProductIndex = 0;

  function setup() {
    let containerWidth = container.clientWidth;
    productContainers.forEach(function (element, i) {
      let newLeftPos = containerWidth * i;
      element.style.left = newLeftPos + "px";
    });
  }

  function onLeftButton() {
    if (currentProductIndex > 0) {
      let containerWidth = container.clientWidth;
      currentProductIndex--;
      productContainers.forEach(function (element, i) {
        let newLeftPos = containerWidth * (i - currentProductIndex);
        element.style.left = newLeftPos + "px";
      });
    }
  }

  function onRightButton() {
    if (currentProductIndex < productsCount - 1) {
      let containerWidth = container.clientWidth;
      currentProductIndex++;
      productContainers.forEach(function (element, i) {
        let newLeftPos = -containerWidth * (currentProductIndex - i);
        element.style.left = newLeftPos + "px";
      });
    }
  }

  setup(); // Вызываем функцию setup при загрузке страницы

  // Привязываем функции к событиям клика на кнопки
  document.querySelector(".arrow-left").addEventListener("click", onLeftButton);
  document.querySelector(".arrow-right").addEventListener("click", onRightButton);
});
