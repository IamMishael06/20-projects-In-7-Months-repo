var arrow = document.querySelector('.arrow i')
var section = document.querySelector('section nav')
var navItems = document.querySelector('.nav-area')
var dashboardBtn = document.querySelector('.dashboard-btn')
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
var orderCard = document.querySelectorAll('.card-body')
var closearea = document.querySelector('.close-x')
var orderArea = document.querySelector('.quick-order')

closearea.addEventListener('click',()=>{
    orderArea.classList.remove('active')
})
for (let i = 0; i < orderCard.length; i++) {
    const card = orderCard[i];
    card.addEventListener('click',()=>{
        orderArea.classList.add('active')
    })
    
}

// search bar(
document.querySelector('#search-input').addEventListener('input', filterList);

function filterList() {
    var orderCard = document.querySelectorAll('.card-body')
    const searchInput = document.querySelector('#search-input');
    const filter = searchInput.value.toLowerCase();
    var msg = document.querySelectorAll('#message')
    for (let i = 0; i < orderCard.length; i++) {
        const cardBody = orderCard[i];
        const listItems = cardBody.querySelectorAll('.name-text');
        let showCard = false;

        for (let j = 0; j < listItems.length; j++) {
            const item = listItems[j];
            let text = item.textContent.toLowerCase();
            if (text.includes(filter)) {
                showCard = true;
                break;
            }
        }

        if (showCard) {
            cardBody.style.display = '';
        } else {
            cardBody.style.display = 'none';
            // for (let s = 0; s <  msg.length; s++) {
            //     const msgText = msg[s];
            //     msgText.textContent = 'No Result Found!'
            // }
        }
    }
}
// opoening diffenernt pages
var historySec = document.querySelector('.history-sec')
var dashboardSec = document.querySelector('.dashboard-sec')
var historyBtn = document.querySelector('.history-btn')
var dashboardBtn = document.querySelector('.dashboard-btn')
var customerServiceBtn = document.querySelector('.customer-service')
var customerSec = document.querySelector('.customer-service-sec')
dashboardBtn.addEventListener('click',()=>{
    historySec.style.display ='none';
    dashboardSec.style.display ='block';
    customerSec.style.display ='none';
})
customerServiceBtn.addEventListener('click',()=>{
    dashboardSec.style.display ='none';
    historySec.style.display ='none';
    customerSec.style.display ='block';
})
historyBtn.addEventListener('click',()=>{
    dashboardSec.style.display ='none';
    historySec.style.display ='block';
    customerSec.style.display ='none';
})

// The order section logic
const addButtons = document.querySelectorAll(".add-number");
const removeButtons = document.querySelectorAll(".remove-num");
const burgerNumbers = document.querySelectorAll(".burger-number");

addButtons.forEach((addButton) => {
    addButton.addEventListener("click", function () {
        const itemID = this.getAttribute("data-item");
        const burgerNumber = document.querySelector(`#${itemID} .burger-number`);
        let currentCount = parseInt(burgerNumber.textContent);
        burgerNumber.textContent = currentCount + 1;
    });
});

removeButtons.forEach((removeButton) => {
    removeButton.addEventListener("click", function () {
        const itemID = this.getAttribute("data-item");
        const burgerNumber = document.querySelector(`#${itemID} .burger-number`);
        let currentCount = parseInt(burgerNumber.textContent);
        if (currentCount > 0) {
            burgerNumber.textContent = currentCount - 1;
        }
    });
});
// The order section logic
// why the movement isn't working is because the swiper is after the map
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.move-left',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });






