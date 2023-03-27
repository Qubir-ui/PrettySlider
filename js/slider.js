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

document.addEventListener("DOMContentLoaded", ()=>{
    document.querySelector(".swiper-prev").addEventListener("click", ()=>{
        swiper.slidePrev()
    })
    document.querySelector(".swiper-next").addEventListener("click", ()=>{
        swiper.slideNext()
    })
})