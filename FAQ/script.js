// Cache elements on page load
const popUp = document.querySelector(".popUp");
const x = document.querySelector(".x");
const text = document.getElementById("text");
const nameTeacher = document.getElementById("name");
const body = document.getElementById("body");
const cards = document.querySelectorAll(".card");
const main = document.getElementById("main");

//set scroll values
let scrollPos, viewportHeight;
updateScrollValues();

//update scroll values
function updateScrollValues() {
  scrollPos = window.scrollY || document.documentElement.scrollTop;
  viewportHeight = window.innerHeight || document.documentElement.clientHeight;
}

document.addEventListener("DOMContentLoaded", function () {
  cards.forEach(function (card) {
    card.addEventListener("click", function (event) {
      event.stopPropagation(); // Prevent the click event from bubbling up

      if (this.classList.contains("open")) {
        this.classList.remove("open");
      } else {
        cards.forEach(function (c) {
          c.classList.remove("open");
        });
        this.classList.add("open");
      }
    });
  });

  // Add a click event listener to the document to close the card when clicking outside
  document.addEventListener("click", function (event) {
    if (!event.target.closest(".element-card")) {
      cards.forEach(function (card) {
        card.classList.remove("open");
      });
    }
  });
});
