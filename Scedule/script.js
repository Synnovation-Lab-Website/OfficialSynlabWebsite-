// Cache elements on page load
const wrapper = document.querySelector(".wrapper");
const weekDay = document.querySelectorAll(".weekDay");
const gradeSelector = document.querySelector(".scheduleGrade");
const classKeep = "colorBar";
let grade = parseInt(gradeSelector.getAttribute("data-grade"));

function getScedule(factor) {
  grade += factor;
  grade = setGrade(grade);
  let dayCount = 0;
  weekDay.forEach((day) => {
    let box = day.querySelectorAll(".box");
    let bellCount = 0;
    box.forEach((bell) => {
      let classHolder = bell.querySelectorAll(".class");
      classHolder.forEach((colorBar) => {
        let color = colorBar.querySelector(".colorBar");
        let className = colorBar.querySelector(".colorBar").getElementsByTagName("p")[0];
        //! sets the name of the class based on the schedule
        let classNameText = schedule[grade][dayCount][bellCount][0];
        if (classNameText != null) {
          className.innerHTML = classNameText;
        } else {
          className.innerHTML = "";
        }
        //! sets the color based on the clas name
        let colorClass = schedule[grade][dayCount][bellCount][1];
        if (colorClass != null) {
          color.className = classKeep + " " + colorClass;
        } else {
          color.className = classKeep;
        }
      });
      bellCount++;
    });
    dayCount++;
  });
}

function setGrade(grade) {
  if (grade < 9) {
    gradeSelector.setAttribute("data-grade", 12);
    gradeSelector.innerHTML = "12th Grade Schedule";
    return 12;
  } else if (grade > 12) {
    gradeSelector.setAttribute("data-grade", 9);
    gradeSelector.innerHTML = "9th Grade Schedule";
    return 9;
  } else {
    gradeSelector.setAttribute("data-grade", grade);
    gradeSelector.innerHTML = grade + "th Grade Schedule";
    return grade;
  }
}
