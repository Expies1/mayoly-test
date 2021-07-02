// слайдер
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.slide-next',
    prevEl: '.slide-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
})


// открытие мобильного меню
let burger = document.querySelector('.header__burger');
let mobileMenu = document.querySelector('.mobile-menu');
let closeMobileMenu = document.querySelector('.mobile-menu__close');

burger.addEventListener('click', () => {
  mobileMenu.classList.add('mobile-menu--open')
});
closeMobileMenu.addEventListener('click', () => {
  mobileMenu.classList.remove('mobile-menu--open')
});