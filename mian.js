const close = document.querySelector(".close");
const open = document.querySelector(".ham");
const nav = document.querySelector(".nav-right");
const bg = document.querySelectorAll(".bg-cover");
const mediaQuery = window.matchMedia('(max-width: 598px)');
console.log(mediaQuery);

open.addEventListener("click", () => {
  console.log("aa");
  nav.style.display = "block";
  bg.forEach(function (bg) {
    bg.style.display = "block";
  });
});
close.addEventListener("click", () => {
  if (mediaQuery.matches) {
    nav.style.display = "none";
    bg.forEach(function (bg) {
      bg.style.display = "none";
    });
  } else{
      nav.style.display = 'block'
  }
});
