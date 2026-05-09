import "../sass/style.scss";

const burger = document.querySelector(".burger"),
  menu = document.querySelector(".menu"),
  close = document.querySelector(".menu__close");

burger.addEventListener("click", () => {
  menu.classList.add("active");
});

close.addEventListener("click", () => {
  menu.classList.remove("active");
});

const count = document.querySelectorAll(".skills__ratings-counter"),
  lines = document.querySelectorAll(".skills__ratings-line span");

count.forEach((item, i) => {
  lines[i].style.width = item.innerHTML;
});
