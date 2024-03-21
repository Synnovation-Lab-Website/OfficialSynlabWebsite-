//? Logo animation
window.addEventListener("scroll", function () {
  var scrollPos = window.scrollY || document.documentElement.scrollTop;
  var viewportHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const logoSmall = document.querySelector(".logoSmall");
  const logoLarge = document.querySelector(".logoLarge");

  if (scrollPos >= viewportHeight * 0.1) {
    logoSmall.classList.add("logoSmallAnimate");
    logoLarge.classList.add("logoLargeAnimate");
  } else {
    logoSmall.classList.remove("logoSmallAnimate");
    logoLarge.classList.remove("logoLargeAnimate");
  }
});

//? Teacher info pop-up
function teacherInfo(teacher) {
  let scrollPos = window.scrollY || document.documentElement.scrollTop;
  const popUp = document.querySelector(".popUp");
  const x = document.querySelector(".x");
  const text = document.getElementById("text");
  const img = document.getElementById("img");
  const name = document.getElementById("name");
  popUp.style.zIndex = "10";
  x.style.zIndex = "11";
  addCSSClass(popUp, 1);
  x.style.cursor = "pointer";
  popUp.style.top = scrollPos + "px";
  text.innerHTML = teacherBio[teacher].bio;
  name.innerHTML = teacherBio[teacher].name;
  document.getElementById("body").style.overflow = "hidden";
}

//? Close the pop-up
function infoClear() {
  const popUp = document.querySelector(".popUp");
  const x = document.querySelector(".x");
  popUp.classList.remove("custom-class-popUp");
  document.getElementById("body").style.overflow = "auto";
  x.style.cursor = "default";
  setTimeout(function () {
    popUp.style.zIndex = "-1";
    x.style.zIndex = "-1";
  }, 600);
}

//? Add a CSS class to an element
function addCSSClass(element, opacity) {
  const style = document.createElement("style");
  const className = `custom-class-popUp`;
  const css = `.${className} { opacity: ${opacity}; transition: opacity 0.7s; }`;
  style.innerHTML = css;
  document.head.appendChild(style);
  element.classList.add(className);
}

//? Teacher info
const teacherBio = [
  (Arnold = {
    name: "Timothy Arnold",
    img: "img/teacherLangdon.jpg",
    bio: "Mr. Timothy Arnold is a long standing member of the synn lab. He plays the key role of the department chairperson, and has shaped the lab into what it is today. He coaches boys and girls wrestling, and loves cheez its. He is a Chemistry teacher, and in and out of the classroom, he strives to make meaningful connections with all students. He constantly is advocating to improve and expand the synn lab, we wouldn't be where we are today without him.",
  }),
  (Pletz = {
    name: "Jeremy Pletz",
    img: "img/teacherLangdon.jpg",
    bio: "This is Mr. Pletz's 5th year in the lab. Other than Sycamore, he has taught one year at Reading. Before teaching he was a fulltime coach. He continues to coach at the high school, coaching girls soccer, wrestling, and hurdles in track.  He likes doing hands on things around the house like home improvement projects. He teaches AP stats, intro to stats, geometry, and algebra. Mr. Pletz also plays a mean Simon Says game.",
  }),
  (Langdon = {
    name: "Stephen Langdon",
    img: "img/teacherLangdon.jpg",
    bio: "Mr. Langdon has been teaching Biology and Physics for 4 years now in the lab. He manages the makerspace and is a large part of running the future focus workshops. He grew up in Knoxville Tennessee, and went to the University of Tennessee there. You'll catch him making dad jokes as he watches University of Tennessee's football games. Before teaching, he was a professional swim coach, and he continues to coach the boys team here at Sycamore.",
  }),
  (Feist = {
    name: "Sofia Feist",
    img: "img/teacherLangdon.jpg",
    bio: "Mrs. Feist teaches 9th and 11th grade english for the synn lab, and has been with us for 5 years. She loves to read, and she recommends (or at least loves) the book Cloud Cuckoo Land. She loves listening to music and creating custom playlists. At her wedding, she and her husband even gave out 200 cd's with a custom playlist to guests. Mrs. Feist also runs Tuesday Talks, and does a phenomenal job at it. She plays a vital role in the Synn lab and we are all grateful for her love and dedication to her craft.",
  }),
  (Tuertscher = {
    name: "Megan Tuertscher",
    img: "img/teacherLangdon.jpg",
    bio: "Mrs. Tuertscher has been teaching in the synn lab for 3 years now. She teaches 10th and 12th grade la, along with seminar courses/english electives. She used to be a competitive weightlifter, and before being a teacher, was a crossfit coach. Her kids are the center of her life, and she loves them so much. One of her favorite activities is hiking in the woods with her kids. Mrs. Tuertscher also runs SLC's, playing a very important role in the synn lab.",
  }),
  (Fogelson = {
    name: "Mark Fogelson",
    img: "img/teacherLangdon.jpg",
    bio: "Mrs. Tuertscher has been teaching in the synn lab for 3 years now. She teaches 10th and 12th grade la, along with seminar courses/english electives. She used to be a competitive weightlifter, and before being a teacher, was a crossfit coach. Her kids are the center of her life, and she loves them so much. One of her favorite activities is hiking in the woods with her kids. Mrs. Tuertscher also runs SLC's, playing a very important role in the synn lab.",
  }),
  (Burpee = {
    name: "Nadine Burpee",
    img: "img/teacherLangdon.jpg",
    bio: "Ms. Burpee is an original member of the synn lab, and has been a core part of it. She is one of our 2 academic advisors in the lab, helping students strive to achieve success in their learning. She loves to go to Mackinac island in Michigan, spending her summer time there. She also loves to read books, and you will often find her reading at her desk. She also has a dog that she likes to walk with.",
  }),
  (Ray = {
    name: "Hank Ray",
    img: "img/teacherLangdon.jpg",
    bio: "Coach Ray is another original member of the synn lab. He is the dean of students, managing attendance, accountability, and connecting students to teachers. Coach Ray strives to create meaningful relationships with students, and is always there whether the matter is personal or professional. Coach Ray loves sports motorcycles, american muscle cars, chess, billiards, golfing and coaching. He is the head coach for Sycamore's football team, winter track team, and our spring track team.",
  }),
  (Conatser = {
    name: "Emily Conatser",
    img: "img/teacherLangdon.jpg",
    bio: "Mrs. Conatser is an academic advisor for the lab and has been at Sycamore for her whole career, including student teaching. She is an original member of the synn lab and before the worked in the lab, she was a special education teacher here. She loves spending time with her family and doing things like watching football, walking their dog, and being outside. She enjoys to scrapbook and watch hallmark movies.",
  }),
  (Ulland = {
    name: "Greg Ulland",
    img: "img/teacherLangdon.jpg",
    bio: "Mr.Ulland is a seasoned professional known for his passion for teamwork, coaching, and teaching. He brings a wealth of experience and success to his pursuits, with a particular emphasis on education. Greg is a founding member of the Synnovation Lab. This reflects his belief in empowering students to take control of their education. He coaches volleyball, and has won 9 state championships. With his extensive experience and unwavering commitment to helping others reach their full potential, Mr. Ulland is a true asset to all organizations he is a part of.",
  }),
  (Warren = {
    name: "Ashley Warren",
    img: "img/teacherLangdon.jpg",
    bio: "Prior to being an administrator at Sycamore High School, I taught AP Physics, AP Chemistry, College Prep Chemistry at two other Cincinnati schools. I had the privilege as well prior to teaching at the high school level to work on my graduate work at Miami University teaching chemistry recitation at the collegiate level while doing chemistry and chemistry education research.",
  }),
  (Underwood = {
    name: "Trisha Underwood",
    img: "img/teacherLangdon.jpg",
    bio: "Mr.Ulland is a seasoned professional known for his passion for teamwork, coaching, and teaching. He brings a wealth of experience and success to his pursuits, with a particular emphasis on education. Greg is a founding member of the Synnovation Lab. This reflects his belief in empowering students to take control of their education. He coaches volleyball, and has won 9 state championships. With his extensive experience and unwavering commitment to helping others reach their full potential, Mr. Ulland is a true asset to all organizations he is a part of.",
  }),
  (Randall = {
    name: "Kelsey Randall",
    img: "img/teacherLangdon.jpg",
    bio: "Mrs. Randall has been teaching in the Synn lab for 5 years, and before teaching at sycamore, taught at ursuline. In her free time, she loves to hike. She also recently got her master gardeners certification and loves to garden. Before being a teacher, she was a social worker/care manager. She teaches Ap European history, American history, and co teaches world history with mr. Fogelson.",
  }),
];
