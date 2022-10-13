const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    slidesPerView: 3,
    spaceBetween: 120,
    direction: 'horizontal',
    loop: true,

    breakpoints: {
      320: {
        spaceBetween: 24,
      },
      768: {
        spaceBetween: 60,
      },
      1024: {
        spaceBetween: 80,
      },
      1440: {
        spaceBetween: 120,
      },
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });