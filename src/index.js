(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    closeMenuBtnBuy: document.querySelector('[data-menu-close-btn]'),
    menu: document.querySelector('[data-menu]'),
    body: document.querySelector('body'),
    menuList: document.querySelector('.header__mobile-list'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtnBuy.addEventListener('click', toggleMenu);
  refs.menuList.addEventListener('click', removeMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('visually-hidden');
    refs.body.classList.toggle('no-scroll');
  }
  function removeMenu() {
    refs.menu.classList.add('visually-hidden');
    refs.body.classList.remove('no-scroll');
  }
})();
import './js/about.js';
import './js/products.js';
import './js/buy-now.js';

new Swiper('.image-slider', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
