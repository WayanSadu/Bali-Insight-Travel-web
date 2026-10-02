var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    hide: false,
  },
  breakpoints:{
    1:{
      slidesPerView: 1.2,
      spaceBetween: 12,
      centeredSlides:false,
    },

    640:{
      slidesPerView: 3,
      spaceBetween: 16,
      centeredSlides:false,
    },
    
    1024:{
      slidesPerView: 4,
      spaceBetween: 16,
      centeredSlides:false,
    },
    
    1280:{
      slidesPerView: 4,
      spaceBetween: 20,
      centeredSlides:false,
    },

    1900:{
      slidesPerView: 4,
      spaceBetween: 20,
      centeredSlides:false,
    },
  }
});

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
  navMenu.classList.toggle('hidden');
});


// Klik di luar hamburger
window.addEventListener('click', function (e) {
  if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
    navMenu.classList.add('hidden');
}

});


const popUpBtn = document.querySelector('.pop-up-btn');
const popUp = document.querySelector('.pop-up');
const popUpBg = document.querySelector('.pop-up-bg');

popUpBtn.addEventListener('click', function () {
  popUp.classList.toggle('hidden');
  popUpBg.classList.toggle('hidden');
});

const popUpBtnClose = document.querySelector('.pop-up-btn-close');

popUpBtnClose.addEventListener('click', function () {
  popUp.classList.toggle('hidden');
  popUpBg.classList.toggle('hidden');
});

