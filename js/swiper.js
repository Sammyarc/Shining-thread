

// init Swiper:
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
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
            slidesPerView: 3.5, // Desktop view
        },
    }
  });