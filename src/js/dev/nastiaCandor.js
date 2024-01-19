import { rem } from '../utils/utils';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

document.addEventListener('DOMContentLoaded', () => {
  try {
    burgerMenu();
  } catch {}

  // sliders
  try {
    mainBannerSlider();
  } catch {}

});


// BURGER MENU ------------------------------------------------------------
function burgerMenu() {
  const hamburger = document.querySelector('.hamburger');
  const burgerMenu = document.querySelector('.header__burger-menu');
  const hamburgerClose = document.querySelector('.header__burger-close');
  
  function closeBurgerMenu() {
    burgerMenu.classList.remove('active');
  };
  
  function openBurgerMenu() {
    burgerMenu.classList.add('active');
  };
  
  hamburger.addEventListener('click', openBurgerMenu);
  
  hamburgerClose.addEventListener('click', closeBurgerMenu);
}

// SLIDERS ------------------------------------------------------------
function mainBannerSlider() {
  const swiper = new Swiper('.main-banner__slider', {
    slidesPerView: 1,
    loop: 'true',
    spaceBetween: rem(2),
    speed: 1000,
    effect: "fade",
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.main-banner__btn-next',
      prevEl: '.main-banner__btn-prev',
    },
    pagination: {
      el: '.main-banner__fractions',
      type: "fraction",
    },
  });
}