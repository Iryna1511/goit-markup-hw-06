const mobileMenuWindow = document.querySelector('.mobile-menu-wrapper');
const btnOpenMobMenu = document.querySelector('.burger-btn');
const btnCloseMobMenu = document.querySelector('.mobile-close-btn');

function showMenu(event) {
  mobileMenuWindow.classList.toggle('is-open');
}

btnOpenMobMenu.addEventListener('click', showMenu);

btnCloseMobMenu.addEventListener('click', showMenu);
