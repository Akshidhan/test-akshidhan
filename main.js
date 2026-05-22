import "./styles.scss";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

const translations = {
  en: {
    heroTitle: "Welcome to<br />our company...",
    latestNews: "Latest News",
    aboutUs: "About Us",
    read: "Read",
    about: "About Us",
    contact: "Contact Us",
    feature: "Feature",
    testimonials: "Testimonials",
    footerSocial: "Stay connected with",
    published: "Published: March 05, 2024",
    allright: "All rights reserved",
  },
  si: {
    heroTitle: "අපගේ සමාගමට<br />සාදරයෙන් පිළිගනිමු...",
    latestNews: "නවතම ප්රවෘත්ති",
    aboutUs: "අපි ගැන",
    read: "කියවන්න",
    about: "අපි ගැන",
    contact: "අමතන්න",
    feature: "විශේෂාංගය",
    testimonials: "විචාර",
    footerSocial: "සමඟ සම්බන්ධව සිටින්න",
    published: "රකාශනය: 2024 මාර්තු 05",
    allright: "සියලු හිමිකම් ඇවිරිණි",
  },
  ta: {
    heroTitle: "எங்கள் நிறுவனத்திற்கு<br />நல்வரவு...",
    latestNews: "சமீபத்திய செய்திகள்",
    aboutUs: "எங்களை பற்றி",
    read: "படிக்க",
    about: "எங்களை பற்றி",
    contact: "தொடர்பு கொள்ளவும்",
    feature: "அம்சங்கள்",
    testimonials: "சான்றுகள்",
    footerSocial: "உடன் இணைந்திருங்கள்",
    published: "வெளியிடப்பட்டது: மார்ச் 05, 2024",
    allright: "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை",
  },
};

const newsSwiper = new Swiper(".news-swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 24,
  pagination: {
    el: ".news-swiper .swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<span class="' +
        className +
        ' swiper-pagination-bullet-custom"></span>'
      );
    },
  },
});

const testimonialSwiper = new Swiper(".testimonial-swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  navigation: {
    nextEl: ".testimonial-swiper .swiper-button-next",
    prevEl: ".testimonial-swiper .swiper-button-prev",
  },
});

const hamburgerMenu = document.getElementById("hamburger-menu");

hamburgerMenu.addEventListener("click", () => {
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenu.classList.toggle("hidden");
});

const languageSelector = document.getElementById("language");

function setLanguage(language) {
  const lang = translations[language] ? language : 'en';
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.getAttribute('data-i18n');
    const value = (translations[lang] && translations[lang][key]) ||
      (translations['en'] && translations['en'][key]) ||
      element.innerHTML;
    element.innerHTML = value;
  });
}

if (languageSelector) {
  languageSelector.addEventListener('change', (event) => {
    setLanguage(event.target.value);
  });
  setLanguage(languageSelector.value || 'en');
} else {
  setLanguage('en');
}