import { rem } from '../utils/utils';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

let servSwiper = null;

document.addEventListener('DOMContentLoaded', () => {
    // sliders

    if (window.innerWidth < 769) {
        if (!servSwiper) {
            servDetSlider();
        }
    } else {
        if (servSwiper) {
            servSwiper.destroy();
            servSwiper = null;
        }
    }
 // map
    contactsMap();
});

window.addEventListener('resize', () => {
    try {
        if (window.innerWidth < 769) {
            if (!servSwiper) {
                servDetSlider();
            }
        } else {
            if (servSwiper) {
                servSwiper.destroy();
                servSwiper = null;
            }
        }
    } catch (error) {
        console.error('Error during slider initialization:', error);
    }
});

// SLIDERS ------------------------------------------------------------
function servDetSlider() {
    // Уничтожаем предыдущий слайдер, если он был создан
    if (servSwiper) {
        servSwiper.destroy();
        servSwiper = null; // Сбрасываем переменную
    }

    // Создаем новый экземпляр Swiper
    servSwiper = new Swiper('.serv-det-banner__slider', {
        speed: 1000,
        loop: false,
        effect: 'fade',
        spaceBetween: rem(4),
        navigation: {
            nextEl: '.main-banner__btn-next',
            prevEl: '.main-banner__btn-prev'
        },
        pagination: {
            el: '.main-banner__fractions',
            type: 'fraction'
        }
    });
}

// SLIDERS ------------------------------------------------------------

function contactsMap() {
    console.log('map is connected. Almost :D')
}
