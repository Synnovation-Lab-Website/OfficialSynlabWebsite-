// Cache DOM elements
const popUp = document.querySelector(".popUp");
const cards = document.querySelectorAll(".card");
const main = document.getElementById("main");

// Update scroll position values
function updateScrollValues() {
  scrollPos = window.scrollY || document.documentElement.scrollTop;
  viewportHeight = window.innerHeight || document.documentElement.clientHeight;
}

document.addEventListener("DOMContentLoaded", () => {
  cards.forEach((card) => {
    card.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleCard(card);
    });
  });

  // Close cards when clicking outside
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".card")) {
      closeAllCards();
    }
  });
});

function toggleCard(card) {
  const isOpen = card.classList.contains("open");
  closeAllCards();
  if (!isOpen) {
    card.classList.add("open", "scale");
    card.parentElement.classList.add("zindex");
    card.children[0].classList.add("faqText");
    hideOtherCards(card);
  }
}



function closeAllCards() {
  cards.forEach((card) => {
    card.classList.remove("open", "scale");
    card.parentElement.classList.remove("zindex");
    card.children[0].classList.remove("faqText");
  });
  showOtherCards();
}

function hideOtherCards(activeCard) {
  cards.forEach((card) => {
    if (card !== activeCard) card.classList.add("hide");
  });
}

function showOtherCards() {
  cards.forEach((card) => card.classList.remove("hide"));
}
