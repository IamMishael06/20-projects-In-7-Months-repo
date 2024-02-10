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

var navItem = document.querySelector('.fold')
var closeBtn = document.querySelector('.close-div')
var openBtn = document.querySelector('.bars')
var firstBar = document.querySelector('.bars > div:nth-child(1)')
var secondBar = document.querySelector('.bars > div:nth-child(3)')
closeBtn.addEventListener('click', (e)=>{
    navItem.classList.toggle('mobile')
    firstBar.classList.remove('active')
    secondBar.classList.remove('active')
})
openBtn.addEventListener('click', (e)=>{
    navItem.classList.toggle('mobile')
    firstBar.classList.add('active')
    secondBar.classList.add('active')
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

