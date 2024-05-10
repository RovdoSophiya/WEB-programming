let currentPage = 1;
const totalPages = document.querySelectorAll(".reviews-card").length;

function changePage(pageNumber) {
  if (pageNumber >= 1 && pageNumber <= totalPages) {
    currentPage = pageNumber;
    const container = document.querySelector(".reviews-cards");
    container.style.transform = `translateX(-${537 * (pageNumber - 1)}px)`;
  }
}

function nextPage() {
  if (currentPage < totalPages) {
    changePage(currentPage + 1);
  }
}

function prevPage() {
  if (currentPage > 1) {
    changePage(currentPage - 1);
  }
}
