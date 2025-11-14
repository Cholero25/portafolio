import './style.css'

// --- TU JAVASCRIPT REAL ---
const menu = document.getElementById("mobileMenu");
const openBtn = document.getElementById("openMenu");
const closeBtn = document.getElementById("closeMenu");

openBtn.addEventListener("click", () => {
  menu.classList.remove("translate-x-full");
});

closeBtn.addEventListener("click", () => {
  menu.classList.add("translate-x-full");
});
