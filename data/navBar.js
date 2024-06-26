// Cache elements on page load
const logoSmall = document.querySelector(".logoSmall");
const logoLarge = document.querySelector(".logoLarge");
const navBar = document.querySelector(".navbar");

// Throttle the scroll event listener
function throttle(callback, delay) {
  let timeout = null;
  let lastScrollPos = null;
  return function (...args) {
    const currentScrollPos = window.scrollY || document.documentElement.scrollTop;
    if (currentScrollPos !== lastScrollPos) {
      callback.apply(this, args);
      lastScrollPos = currentScrollPos;
    }
    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null;
        lastScrollPos = null;
      }, delay);
    }
  };
}

// Cache expensive operations
let scrollPos, viewportHeight;
updateScrollValues();

function updateScrollValues() {
  scrollPos = window.scrollY || document.documentElement.scrollTop;
  viewportHeight = window.innerHeight || document.documentElement.clientHeight;
}

function animateLogos() {
  if (scrollPos >= viewportHeight * 0.1) {
    logoSmall.classList.add("logoSmallAnimate");
    logoLarge.classList.add("logoLargeAnimate");
    navBar.style.boxShadow = "0px 2px 4px rgba(0, 0, 0, 0.1)";
  } else {
    logoSmall.classList.remove("logoSmallAnimate");
    logoLarge.classList.remove("logoLargeAnimate");
    navBar.style.boxShadow = "0px 0px 0px rgba(0, 0, 0, 0.0)";
  }
  requestAnimationFrame(animateLogos);
}

// Start animation loop
requestAnimationFrame(animateLogos);

// Throttled scroll event listener
window.addEventListener(
  "scroll",
  throttle(() => {
    updateScrollValues();
    animateLogos();
  }, 100)
);
