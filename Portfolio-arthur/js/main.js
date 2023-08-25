let menu =document.querySelector(".menu-icon");
let navbar =document.querySelector(".navbar");

menu.onclick =()=>{
    navbar.classList.toggle("open-menu")
    menu.classList.toggle("move");
}
menu.onscroll =()=>{
  navbar.classList.remove("open-menu")
  menu.classList.remove("move");
}
// reviews swiper
var swiper = new Swiper(".reviews-content", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // header scroll

  let header = document.querySelector('header')

  window.addEventListener('scroll',()=>{
    header.classList.toggle('header-active',window.scrollY > 0)
  });
  //scroll top

  let  scrollTop= document.querySelector('.scroll-top')

  window.addEventListener('scroll',()=>{
    scrollTop.classList.toggle('scroll-active',window.scrollY >= 400)
  });