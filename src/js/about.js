import '../pages/about.css';
import swiper from './swiper.js';

var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    slidesPerView: 3.6,
    loop: true,
    spaceBetween: 16,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  })