import { rem } from '../utils/utils';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

let servSwiper = null;

document.addEventListener('DOMContentLoaded', () => {
    // sliders
    setOurWorksSlider();
    setOtherServicesSlider();
    setPaymentMethodsSlider();

    if (window.innerWidth < 769) {
        if (!servSwiper) {
            setServDetSlider();
        }
    } else {
        if (servSwiper) {
            servSwiper.destroy();
            servSwiper = null;
        }
    }
    // map
    initMap();

    // svg map
    mapSvg();

    //add accardions
    addAcc();
});

window.addEventListener('resize', () => {
    try {
        if (window.innerWidth < 769) {
            if (!servSwiper) {
                setServDetSlider();
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
function setServDetSlider() {
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

function setOurWorksSlider() {
    const ourWorksSlider = new Swiper('.our-works__slider', {
        speed: 1000,
        loop: false,
        breakpoints: {
            769: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: rem(2.4)
            },
            320: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: rem(3.2)
            }
        },
        navigation: {
            nextEl: '.our-works__btn-next',
            prevEl: '.our-works__btn-prev'
        },
        pagination: {
            el: '.our-works__fractions',
            type: 'fraction'
        }
    });
}

function setOtherServicesSlider() {
    const otherServicesSlider = new Swiper('.other-services__slider', {
        speed: 1000,
        loop: false,
        breakpoints: {
            769: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: rem(2.4)
            },
            320: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: rem(3.2)
            }
        },
        navigation: {
            nextEl: '.other-services__btn-next',
            prevEl: '.other-services__btn-prev'
        },
        pagination: {
            el: '.other-services__fractions',
            type: 'fraction'
        }
    });
}

function setPaymentMethodsSlider() {
    const paymentMethodsSlider = new Swiper('.delivery-payment__slider', {
        speed: 1000,
        loop: false,
        breakpoints: {
            769: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: rem(2.4)
            },
            320: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: rem(3.2)
            }
        },
        navigation: {
            nextEl: '.delivery-payment__btn-next',
            prevEl: '.delivery-payment__btn-prev'
        },
        pagination: {
            el: '.delivery-payment__fractions',
            type: 'fraction'
        }
    });
}

// MAPS ----------------------------------------------------------------
async function initMap() {
    // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
    if (typeof ymaps3 !== 'undefined') {
        await ymaps3.ready;
        const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker } = ymaps3;

        // Initialize the map
        let map = new YMap(
            // Pass the link to the HTMLElement of the container
            document.getElementById('contacts-root'),
            // Pass the map initialization parameters
            {
                location: {
                    // Координаты центра карты
                    center: [37.628144, 55.733842],

                    // Уровень масштабирования
                    zoom: 12
                }
            },
            [
                // Add a map scheme layer
                new YMapDefaultSchemeLayer({}),
                // Add a layer of geo objects to display the markers
                new YMapDefaultFeaturesLayer({})
            ]
        );

        // Create markers with a custom icon and add them to the map

        const markerElement = document.createElement('img');
        markerElement.className = 'map__icon';
        markerElement.src = '../../assets/images/icons/address-point_dark.svg';
        map.addChild(new YMapMarker({ coordinates: [37.588144, 55.733842] }, markerElement));
    }
}

// MAP-svg -------------------------------------------------------------
function mapSvg() {
    const svgAreas = document.querySelectorAll('.delivery-area__map-svg-reg');

    if (svgAreas) {
        svgAreas.forEach((svg) => {
            const data = svg.getAttribute('data-path');
            const modal = document.querySelector(`[data-modal="${data}"]`);

            svg.addEventListener('mouseover', () => {
                modal.classList.add('active');
            });
            svg.addEventListener('mouseout', () => {
                modal.classList.remove('active');
            });
        });
    }
}

// Accardion ------------------------------------------------------------
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
