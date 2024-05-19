let reviews;

fetch("../json/reviews.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Ой, ошибка в fetch: " + response.statusText);
    }
    return response.json();
  })
  .then((jsonData) => {
    reviews = jsonData;
  })
  .catch((error) => console.error("Ошибка при исполнении запроса: ", error));

// const section = document.querySelector('.product-item');
// const img = section.querySelectorAll('img');
// const text = section.querySelector('.text-upp');
// const price = alltext.querySelectorAll('.text');

let activep = 0;

const paggination = document.querySelector(".slider-paggination");
const selector = paggination.querySelectorAll("li");

const btn = paggination.querySelectorAll("p:not(.left-side,.right-side)");
const btnLeft = btn[0];
const btnRight = btn[1];

btnLeft.addEventListener("click", slideleft);
btnRight.addEventListener("click", slideright);

selector.forEach((item, index) => {
  item.addEventListener("click", () => active(index, false));
});

function active(index, slide) {
  if (slide === true) {
    selector.forEach((item) => item.classList.remove("active"));
    selector[index].classList.add("active");
  } else {
    if (activep < index) {
      let how = index - activep;
      for (let i = 0; i < how; i++) {
        slideright();
      }
    } else {
      if (activep > index) {
        let how = activep - index;
        for (let i = 0; i < how; i++) {
          slideleft();
        }
      }
    }
  }
}

function slideleft() {
  if (activep === 0) {
    activep = 0;
  } else {
    activep--;
  }

  active(activep, true);

  setdataleft();
}

function slideright() {
  if (activep === 3) {
    activep = 3;
  } else {
    activep++;
  }

  active(activep, true);

  setdataright();
}

function slideleft() {
  activep = activep === 0 ? reviews.length - 1 : activep - 1;
  setdata();
}

function slideright() {
  activep = activep === reviews.length - 1 ? 0 : activep + 1;
  setdata();
}
function setdata() {
  for (let i = 1; i < 6; i++) {
    const reviewIndex = (activep + i) % reviews.length;
    document.getElementById("info" + i).textContent = reviews[reviewIndex].name;
    document.getElementById("photo" + i).src = reviews[reviewIndex].image;
    document.getElementById("description" + i).reviewIndex =
      reviews[reviewIndex].review;
  }
}
