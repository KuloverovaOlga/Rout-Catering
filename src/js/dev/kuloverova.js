// import { rem } from '../utils/utils';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

document.addEventListener('DOMContentLoaded', () => {
  // sliders
  try {
    articleMinSlider()
  } catch {}
  try {
    detailedPortfolioMinSlider()
  } catch {}

});

function articleMinSlider() {
    const swiper = new Swiper('.article__content-swiper', {
      slidesPerView: 1,
      loop: 'true',
      spaceBetween: 20,
      grabCursor: true,
      speed: 1000,
      navigation: {
        nextEl: '.article__btn-next',
        prevEl: '.article__btn-prev',
      },
      pagination: {
        el: '.article__fractions',
        type: "fraction",
      },
      breakpoints: {
        769: {
            slidesPerView: 2,
        },
    },
    });
  }
function detailedPortfolioMinSlider() {
    const swiper = new Swiper('.detailed-portfolio__content-swiper', {
      slidesPerView: 1,
      loop: 'true',
      spaceBetween: 20,
      grabCursor: true,
      speed: 1000,
      navigation: {
        nextEl: '.detailed-portfolio__btn-next',
        prevEl: '.detailed-portfolio__btn-prev',
      },
      pagination: {
        el: '.detailed-portfolio__fractions',
        type: "fraction",
      },
      breakpoints: {
        769: {
            slidesPerView: 2,
        },
    },
    });
  }