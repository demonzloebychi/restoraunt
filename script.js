const burger = document.querySelector('.header_burger');
const menu = document.querySelector('.header_navbar_main');
const link = document.querySelector('.header_navbar_link_li')


if (burger){
    burger.addEventListener("click", function(e){
        document.body.classList.toggle('lock');
        burger.classList.toggle('active');
        menu.classList.toggle('active');
    });

    menu.querySelectorAll('.header_navbar_link_li').forEach(link => {
        link.addEventListener('click', function(e) {
            document.body.classList.remove('lock');
            menu.classList.remove('active');
            burger.classList.remove('active');
        })
    })
}





//ПЛАВНОЕ ПЕРЕМЕЩЕНИЕ ПО ЯКОРЯМ ЧЕРЕЗ SCROLLINTOVIEW

const anchors = document.querySelectorAll("a[href*='#']")

for (let anchor of anchors){
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector(' ' + blockID).scrollIntoView({
            behavior: "smooth",
            block: 'start'
        })
       
    })
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