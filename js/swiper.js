

// init Swiper:
const swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        480: {
            slidesPerView: 1, // Mobile view
        },
        768: {
            slidesPerView: 2, // Tablet view
        },
        976: {
            slidesPerView: 3, // Laptop view
        },
        1280: {
            slidesPerView: 4, // Desktop view
        },
    }
  });