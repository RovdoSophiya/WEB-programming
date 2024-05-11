document
  .getElementById("open-modal-button")
  .addEventListener("click", function () {
    document.getElementById("modal-window").classList.add("open");
  });
document.getElementById("close").addEventListener("click", function () {
  document.getElementById("modal-window").classList.remove("open");
});
//закрытие при нажатии на Esc
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.getElementById("modal-window").classList.remove("open");
  }
});

//Закрыть модальное окно при клике вне его
document
  .querySelector("#modal-window .modal")
  .addEventListener("click", (event) => {
    event._isClichWithInModal = true;
  });
document.getElementById("modal-window").addEventListener("click", (event) => {
  if (event._isClichWithInModal) return;
  event.currentTarget.classList.remove("open");
});
