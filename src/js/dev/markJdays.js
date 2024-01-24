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

    //add accardions
    addAcc()
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

// MAPS ------------------------------------------------------------

function contactsMap() {
    console.log('map is connected. Almost :D');
}

// MAPS ------------------------------------------------------------
function addAcc() {
    const accWrap = document.querySelectorAll('.acc');
    const active = 'active';
    if (accWrap) {
        accWrap.forEach((box) => {
            const items = box.querySelectorAll('.acc__item');

            items.forEach((item) => {
                const itemHead = item.querySelector('.acc__item-head');

                itemHead.addEventListener('click', () => {
                    items.forEach((itm) => {
                        if (itm !== item) {
                            itm.classList.remove(active);
                        }
                    });
                    item.classList.toggle(active);
                });
            });
        });
    }
}
