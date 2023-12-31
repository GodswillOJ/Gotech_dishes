let swiperSingleCat = new Swiper('.single_swip', {
  slidesPerView: 1,  // Number of slides per view
  spaceBetween: 10, 

  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },

  autoplay: {
    delay: 3000, // Delay between slides in milliseconds (adjust as needed)
    disableOnInteraction: false, // Set to false so that autoplay continues even when user interacts with the swiper
 },

  pagination: {
      el: '.swiper-pagination',
  },

});