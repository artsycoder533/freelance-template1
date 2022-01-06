const hamburgerBtn = document.getElementById("hamburger");
const line = document.getElementById("line");
const navLinks = document.getElementById("nav-links");
const scrollBtn = document.getElementById("scroll");
const header = document.querySelector(".header");

const toggleMenu = () => {
    line.classList.toggle("open-hamburger");
    navLinks.classList.toggle("show-links");
}

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 0);
});

window.onscroll = function () {
  if (document.documentElement.scrollTop > 70) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

scrollBtn.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
});

hamburgerBtn.addEventListener("click", toggleMenu);