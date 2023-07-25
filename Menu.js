var arrow = document.querySelector('.arrow i')
var section = document.querySelector('section nav')
var navItems = document.querySelector('.nav-area')
arrow.addEventListener('click', ()=>{
    arrow.classList.toggle('active')
    section.classList.toggle('active')
    navItems.classList.toggle('active')
})

// light and dark modes

var darkbtn = document.querySelector('.dark')
var lightBtn = document.querySelector('.light')
var slider = document.querySelector('.mode-slider-bg')
var textChange = document.querySelector('.slider-text h1')
var iconChange = document.querySelector('.slider-text i')
var links = document.querySelector('aside li')

darkbtn.addEventListener('click', ()=>{
    slider.style.right = '50%'
    links.classList.add('active')
})
lightBtn.addEventListener('click', ()=>{
    slider.style.right = '0';
    links.classList.remove('active')
})


// order section

var closearea = document.querySelector('.close-x')
var orderArea = document.querySelector('.quick-order')

closearea.addEventListener('click',()=>{
    orderArea.classList.add('active')
})