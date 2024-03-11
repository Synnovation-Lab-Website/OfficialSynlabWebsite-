window.addEventListener("scroll", function () {
  var scrollPos = window.scrollY || document.documentElement.scrollTop;
  var viewportHeight =
    window.innerHeight || document.documentElement.clientHeight;
  var logoSmall = document.querySelector(".logoSmall");
  var logoLarge = document.querySelector(".logoLarge");

  if (scrollPos >= viewportHeight * 0.2) {
    // Start the animation
    logoSmall.classList.add("logoSmallAnimate");
    logoLarge.classList.add("logoLargeAnimate");
  } else {
    // Reset the animation
    logoSmall.classList.remove("logoSmallAnimate");
    logoLarge.classList.remove("logoLargeAnimate");
  }
});
