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
var trackingOrderBtn = document.querySelector('.track-order')
var trackingOrderSec = document.querySelector('.track-order-sec')
dashboardBtn.addEventListener('click',()=>{
    historySec.style.display ='none';
    dashboardSec.style.display ='block';
    trackingOrderSec.style.display ='none';
})
historyBtn.addEventListener('click',()=>{
    dashboardSec.style.display ='none';
    historySec.style.display ='block';
    trackingOrderSec.style.display ='none';
})
trackingOrderBtn.addEventListener('click', ()=>{
    trackingOrderSec.style.display ='block';
    dashboardSec.style.display ='none';
    historySec.style.display ='none';

    
})

// MAP API FOR TRACKING ORDER
(function (window, google) {
    // map options
    var options = {
        center :{
            lat:6.441290,
            lng: 3.849760
        },
        zoom : 11,
        disableDefaultUI : false,
        maxZoom : 15,
        minZoom : 9,
        zoomControlOptions:{
            position : google.maps.ControlPosition.LEFT_BOTTOM,
            style: google.maps.ZoomControlStyle.SMALL

        },
        panControlOptions :{
            position : google.mapS.ControlPosition.RIGHT_BOTTOM
        }
    }
    var mapArea = document.getElementById('map-canvas'),
    // map
    map = new google.maps.Map(mapArea, options)
}(window, google))
// MAP API FOR TRACKING ORDER



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


