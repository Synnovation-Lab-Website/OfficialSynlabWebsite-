// Cache elements on page load
const popUp = document.querySelector(".popUp");
const x = document.querySelector(".x");
const text = document.getElementById("text");
const img = document.getElementById("img");
const nameTeacher = document.getElementById("name");
const body = document.getElementById("body");
const html = document.getElementById("html");

// Teacher info pop-up
function teacherInfo(teacher) {
  updateScrollValues();
  popUp.style.zIndex = "10";
  x.style.zIndex = "11";
  popUp.classList.add("custom-class-popUp");
  x.style.cursor = "pointer";
  popUp.style.top = scrollPos + "px";
  text.innerHTML = teacherBio[teacher].bio;
  nameTeacher.innerHTML = teacherBio[teacher].name;
  // img.src = teacherBio[teacher].img;
  body.style.overflow = "hidden";
  html.style.overflow = "hidden";
}

// Close the pop-up
function infoClear() {
  popUp.classList.remove("custom-class-popUp");
  // body.style.overflow = "scroll";
  html.style.overflowY = "scroll";
  x.style.cursor = "default";
  setTimeout(function () {
    popUp.style.zIndex = "-1";
    x.style.zIndex = "-1";
  }, 600);
}

// Teacher info
