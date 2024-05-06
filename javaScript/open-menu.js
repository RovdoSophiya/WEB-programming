let menuButton = document.querySelector(".small-menu");
let menu = document.querySelector(".hidden-menu-nav");

menuButton.addEventListener("click", function (event) {
  menu.classList.toggle("active");
});
