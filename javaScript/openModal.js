document.addEventListener("DOMContentLoaded", function () {
  var modalBtn = document.getElementById("openModalButton");
  var modal = document.getElementById("Modal");
  var closeBtn = document.getElementById("close");

  modalBtn.onclick = function () {
    modal.style.display = "block";
  };

  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  // Закрытие модального окна при щелчке вне его области
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});
