import '../pages/about.css';


import swiper from './swiper.js';

var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    slidesPerView: 3.6,
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  })