const menuNavbar = document.querySelector('.menu-navbar');
const menuBurger = document.querySelector('.menu-burger');

function checkScreenSize() {
    if (window.matchMedia('(max-width: 768px)').matches) {
        menuNavbar.style.display = 'none';
        menuBurger.style.display = 'block';
    } else {
        menuNavbar.style.display = 'block';
        menuBurger.style.display = 'none';
    }
}

window.addEventListener('load', checkScreenSize);
window.addEventListener('resize', checkScreenSize);
