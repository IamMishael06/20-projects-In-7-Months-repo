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

const darkbtn = document.querySelector('.dark')
const lightBtn = document.querySelector('.light')
const slider = document.querySelector('.mode-slider-bg')
const textChange = document.querySelector('.slider-text h1')
const iconChange = document.querySelector('.slider-text i')
const links = document.querySelectorAll('aside li')
const sideNav = document.querySelector('.aside-nav')
const marsText = document.querySelector('.mars')
const burgerText = document.querySelector('.burger')
const quickOrder = document.querySelector('.quick-order')
const orderText = document.querySelector('.order-head')
const topMenu = document.querySelector('.top-menu')
const pizza = document.querySelector('.pizza')
const coffee = document.querySelector('.coffee')
const water = document.querySelector('.water')
const bodyBg = document.querySelector('body')
const headerText = document.querySelectorAll('.header h1')
const modalSlider = document.querySelector('.modal-slider')
const itemDetail = document.querySelectorAll('.item-detail h1')
const cardBody  = document.querySelectorAll('.card-body')
const quickOrderCard = document.querySelectorAll('.card-pick-order')
const history = document.querySelector('.history-text')
const historyText = document.querySelector('.history-text h1')
const historyCard = document.querySelectorAll('.history-cards')
const historyInfo = document.querySelectorAll('.history-info h1')
darkbtn.addEventListener('click', (e)=>{
    e.preventDefault()
    slider.style.right = '50%';
    for (let i = 0; i < links.length; i++) {
        const changeLink = links[i];
        changeLink.classList.add('active')
    }
    for (let m = 0; m < cardBody.length; m++) {
        const card = cardBody[m];
        card.classList.add('active')
    }
    for (let t = 0; t < itemDetail.length; t++) {
        const itemDetails = itemDetail[t];
        itemDetails.classList.add('active')
    }
    for (let n = 0; n < headerText.length; n++) {
        const headerTexts = headerText[n];
        headerTexts.classList.add('active')
    }
    for (let k = 0; k < quickOrderCard.length; k++) {
        const quickOrderCards = quickOrderCard[k];
        quickOrderCards.classList.add('active')
    }
    for (let w = 0; w < historyCard.length; w++) {
        const historyCards = historyCard[w];
        historyCards.classList.add('active');
        
    }
    for (let e = 0; e < historyInfo.length; e++) {
        const historyInfos = historyInfo[e];
        historyInfos.classList.add('active')
    }
    section.classList.add('change')
    sideNav.classList.add('active')
    marsText.classList.add('active')
    burgerText.classList.add('active')
    quickOrder.classList.add('change')
    orderText.classList.add('active')
    topMenu.classList.add('active')
    pizza.classList.add('active')
    coffee.classList.add('active')
    water.classList.add('active')
    bodyBg.classList.add('active')
    slider.classList.add('active')
    history.classList.add('change')
    historyText.classList.add('active')

})
lightBtn.addEventListener('click', (g)=>{
    g.preventDefault()
    slider.style.right = '0';
    for (let i = 0; i < links.length; i++) {
        const changeLink = links[i];
        changeLink.classList.remove('active')
    }
    for (let m = 0; m < cardBody.length; m++) {
        const card = cardBody[m];
        card.classList.remove('active')
        
    }
    for (let t = 0; t < itemDetail.length; t++) {
        const itemDetails = itemDetail[t];
        itemDetails.classList.remove('active')
        
    }
    for (let n = 0; n < headerText.length; n++) {
        const headerTexts = headerText[n];
        headerTexts.classList.remove('active')
        
    }
    for (let k = 0; k < quickOrderCard.length; k++) {
        const quickOrderCards = quickOrderCard[k];
        quickOrderCards.classList.remove('active')
    }
    for (let w = 0; w < historyCard.length; w++) {
        const historyCards = historyCard[w];
        historyCards.classList.remove('active');
        
    }
    for (let e = 0; e < historyInfo.length; e++) {
        const historyInfos = historyInfo[e];
        historyInfos.classList.remove('active')
    }
    historyText.classList.remove('active')
    history.classList.remove('change')
    section.classList.remove('change')
    sideNav.classList.remove('active')
    marsText.classList.remove('active')
    burgerText.classList.remove('active')
    quickOrder.classList.remove('change')
    orderText.classList.remove('active')
    topMenu.classList.remove('active')
    pizza.classList.remove('active')
    coffee.classList.remove('active')
    water.classList.remove('active')
    bodyBg.classList.remove('active')
    headerText.classList.remove('active')
    slider.classList.remove('active')


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






