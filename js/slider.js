const swiper = new Swiper('.swiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    loopedSlides: 2,
    speed: 700,
    coverflowEffect: {
        rotate: 0,
        scale: 0.7,
        modifier: 1,
        slideShadows: false,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        640: {
            slidesPerView: 3,
            spaceBetween: -40,
        },
        2000: {
            slidesPerView: 3,
            spaceBetween: -90,
        }
    },
});

let eventList = ["click", "mouseover"]; 

document.addEventListener("DOMContentLoaded", ()=>{

    eventList.forEach(function(event) {
        document.querySelector(".swiper-prev").addEventListener(event, function() {
            swiper.slidePrev()
        });
        document.querySelector(".swiper-next").addEventListener(event, function() {
            swiper.slideNext()
        });
    });
})
