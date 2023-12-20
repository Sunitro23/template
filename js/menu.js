const menuNavbar = document.querySelector(".menu-navbar");
const menuBurger = document.querySelector(".menu-burger");

function checkScreenSize() {
  if (window.matchMedia("(max-width: 768px)").matches) {
    menuNavbar.style.display = "none";
    menuBurger.style.display = "block";
  } else {
    menuNavbar.style.display = "block";
    menuBurger.style.display = "none";
  }
}

function toggleMenu() {
  var menuItems = document.querySelector(".menu-items");
  if (menuItems.style.display === "none") {
    menuItems.style.display = "block";
    menuItems.style.transform = "translateX(-100%)";
    setTimeout(() => {
      menuItems.style.transform = "translateX(0)";
    }, 0);
    menuItems.style.transition = "transform 0.3s ease-in-out";
  } else {
    menuItems.style.transform = "translateX(-100%)";
    setTimeout(() => {
      menuItems.style.display = "none";
    }, 300);
  }
}

window.addEventListener("load", checkScreenSize);
window.addEventListener("resize", checkScreenSize);
