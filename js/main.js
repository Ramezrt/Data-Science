// let navLinks = Array.from(document.querySelectorAll(".navbar .links li"));
// if (localStorage.getItem("active-link")) {
//   navLinks[localStorage.getItem("active-link")].classList.add("active");
// }
// navLinks.forEach((link, index) => {
//   link.addEventListener("click", function (e) {
//     navLinks.forEach((link) => {
//       link.classList.remove("active");
//     });
//     link.classList.add("active");
//     localStorage.setItem("active-link", index);
//   });
// });
// console.log(navLinks);

let button11 = document.querySelector("#up");
document.onscroll = function () {
  if (scrollY >= 3000) {
    button11.style.display = "block";
  } else {
    button11.style.display = "none";
  }
};

// window.onscroll = function () {
//   if (scrollY > 500) {
//     console.log("jkh");
//     // button11.style.display = " block";
//   } else {
//     console.log("kkjkjk");
//     // button11.style.display = " none";
//   }
// };
button11.addEventListener("click", function (e) {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
});
let courses = document.querySelector(".courses"),
  students = document.querySelector(".students"),
  awards = document.querySelector(".awards");
let hasStarted = false;

window.onscroll = function () {
  if (!hasStarted && window.scrollY >= 400) {
    hasStarted = true;

    let count = setInterval(function () {
      let num = parseInt(courses.innerHTML);
      courses.innerHTML = num + 1;
      if (num + 1 === 50) {
        clearInterval(count);
      }
    }, 60);

    let count1 = setInterval(function () {
      let num = parseInt(students.innerHTML);
      students.innerHTML = num + 1;
      if (num + 1 === 850) {
        clearInterval(count1);
      }
    }, 1);

    let count2 = setInterval(function () {
      let num = parseInt(awards.innerHTML);
      awards.innerHTML = num + 1;
      if (num + 1 === 10) {
        clearInterval(count2);
      }
    }, 100);
  }
};
//
//
document.addEventListener("DOMContentLoaded", function () {
  let question = document.querySelector(".question");
  let btns = question.querySelectorAll("button");

  btns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      let currentContent = getComputedStyle(this)
        .getPropertyValue("--button-before-content")
        .trim();
      if (currentContent === '"\\2b"') {
        this.style.setProperty("--button-before-content", '"-"'); // تغيير المحتوى إلى "-"
      } else {
        this.style.setProperty("--button-before-content", '"\\2b"'); // إعادة المحتوى الأصلي إلى "+"
      }
    });
    btn.addEventListener("click", function (e) {
      this.style.boxShadow = "5px 3px 59px 5px #2f85f58c";
    });
    btn.addEventListener("mouseleave", function (e) {
      this.style.boxShadow = "none";
    });
  });
});
