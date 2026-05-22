import './styles.scss';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const newsSwiper = new Swiper('.news-swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 24,
  pagination: {
    el: '.news-swiper .swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + ' swiper-pagination-bullet-custom"></span>';
    }
  },
});

const testimonialSwiper = new Swiper('.testimonial-swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  navigation: {
    nextEl: '.testimonial-swiper .swiper-button-next',
    prevEl: '.testimonial-swiper .swiper-button-prev',
  },
});

const hamburgerMenu = document.getElementById('hamburger-menu');

hamburgerMenu.addEventListener('click', () => {
  const mobileMenu = document.getElementById('mobile-menu');
  mobileMenu.classList.toggle('hidden');
});