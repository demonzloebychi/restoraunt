const burger = document.querySelector('.header_burger');
if (burger){
    const menu = document.querySelector('.header_navbar_main');
    burger.addEventListener("click", function(e){
        document.body.classList.toggle('lock');
        burger.classList.toggle('active');
        menu.classList.toggle('active');
    });
}



const swiper = new Swiper('.swiper', {
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    
  });



const swiperFood = new Swiper('.our-menu__main', {


    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 30,

    breakpoints: {
      320: { slidesPerView: 1, },
  
      620: {slidesPerView: 2, },

      1012: { slidesPerView: 3,}
  }
  });