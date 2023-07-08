// var burgerBtn = document.querySelector('.Burger')
// var pizzaBtn = document.querySelector('.Pizza')
// var burgerCard = document.querySelector('.burger-sec')
// var pizzaCard = document.querySelector('.pizza-sec')

// for (let i = 0; i < burgerCard.length; i++) {
//     burgerBtn.addEventListener('click', function () {
//         burgerCard[i].style.display ="block"
//         pizzaCard.style.display ="none"
    
//     })
    
// }
// burgerBtn.addEventListener('click', function () {
   
// })

// pizzaBtn.addEventListener('click', function () {
//     burgerCard.style.display ="none"
//     pizzaCard.style.display ="block"

// })
var menuBtn = document.querySelector('.bar')
var dashboard = document.querySelector('.hamburger-nav')
var bar = document.querySelector('.bar div:nth-child(2)')
var menu = document.querySelector('.hamburger-nav .menu-items')
console.log(menuBtn)
menuBtn.addEventListener('click', ()=>{
  dashboard.classList.toggle('active')
  bar.classList.toggle('active')
  menu.classList.toggle('active')
})

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation:{
      nextEl: '.move-on',
      prevEl: '.move-out',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

