import '../pages/index.css';
import {about} from './about.js';
import {paper} from './paper.js';

console.log("index");
about();
paper();




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