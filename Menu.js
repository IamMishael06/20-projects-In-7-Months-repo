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


// // order section
// var orderCard = document.querySelectorAll('.card-body');
// var closearea = document.querySelector('.close-x');
// var orderArea = document.querySelector('.quick-order');
// var orderItem = document.querySelector('.items-order');
// var tax = document.querySelector('.tax');
// var bill = document.querySelector('.total-bill');
// var taxAmount = 1.23;
// tax.textContent += `$${taxAmount}`;

// closearea.addEventListener('click', () => {
//     orderArea.classList.remove('active');
// });

// var subtotal = 0;

// orderCard.forEach((card, index) => {
//     card.addEventListener('click', (e) => {
//         orderArea.classList.add('active');
//         var itemImage;
//         var itemName = card.querySelector('.name-text').textContent;
//         var itemPrice = parseFloat(card.querySelector('p').textContent.replace('$', ''));
//         var foodAmount = 1;

//         if (e.target.classList.contains('burger')) {
//             itemImage = '/E-FOOD/image/Hamburger_PNG_Clip_Art-1491 (1).png';
//         } else if (e.target.classList.contains('pizza')) {
//             itemImage = '/E-FOOD/image/pizza-removebg-preview.png';
//         } else if (e.target.classList.contains('coffee')) {
//             itemImage = '/E-FOOD/image/big-mug-of-cold-beer-with-foam-and-bubbles-vector-11236182-removebg-preview.png';
//         } else if (e.target.classList.contains('liquid')) {
//             itemImage = '/E-FOOD/image/drinks.png';
//         }

//         var itemOrder = document.createElement('div');
//         itemOrder.className = 'card-pick-order';
//         itemOrder.id = `item${index + 1}`;

//         // Calculate total price for one item
//         var totalForOne = itemPrice * foodAmount;

//         // Add specific content to the dynamically created div
//         itemOrder.innerHTML = `
//             <div class="w-[90%] mx-auto flex justify-between items-center h-[100%]">
//                 <div class="quick-image">
//                     <img class="w-[50px] h-[45px]" src="${itemImage}" alt="Item Image">
//                 </div>
//                 <div class="item-detail ">
//                     <h1 class="text-left">${itemName}</h1>
//                     <p class="text-left item-price">$${itemPrice.toFixed(2)}</p>
//                 </div>
//                 <div class="flex items-center flex-col justify-between">
//                     <p class="cursor-pointer go-back text-[#b2b3b7]">x</p>
//                     <div class="add-item flex items-center justify-between">
//                         <p class="remove-num" data-item="item${index + 1}">-</p>
//                         <h5 class="burger-number">${foodAmount}</h5>
//                         <p class="add-number" data-item="item${index + 1}">+</p>
//                     </div>
//                 </div>
//             </div>
//         `;

//         orderItem.appendChild(itemOrder);

//         itemOrder.querySelector('.remove-num').addEventListener('click', function() {
//             if (foodAmount > 1) {
//                 foodAmount--;
//                 totalForOne = itemPrice * foodAmount;
//                 updateTotal();
//             }
//         });

//         itemOrder.querySelector('.add-number').addEventListener('click', function() {
//             foodAmount++;
//             totalForOne = itemPrice * foodAmount;
//             updateTotal();
//         });

        // itemOrder.querySelector('.go-back').addEventListener('click', function() {
        //     itemOrder.remove();
        //     totalForOne = 0;
        //     updateTotal();
        // });

//         function updateTotal() {
//             var subtotal = 0;
//             // document.querySelector('.subtotal').textContent = subtotal;

//             document.querySelectorAll('.card-pick-order').forEach((element) => {
//                 var quantity = parseFloat(element.querySelector('.burger-number').textContent);
//                 var price = parseFloat(element.querySelector('.item-price').textContent.replace('$', ''));
//                 subtotal += quantity * price;
//             });
        
//             var total = subtotal * (1 + taxAmount);
//             document.querySelector('.subtotal').textContent = `$${subtotal.toFixed(2)}`;
//             document.querySelector('.total-bill').textContent = `$${total.toFixed(2)}`;
//         }
//     });
// });


// logic
var orderCard = document.querySelectorAll('.card-body');
var closearea = document.querySelector('.close-x');
var orderArea = document.querySelector('.quick-order');
var orderItem = document.querySelector('.items-order');
var tax = document.querySelector('.tax');
var bill = document.querySelector('.total-bill');
var taxAmount = 1.23;
tax.textContent += `$${taxAmount}`;

var itemsInOrder = [];

closearea.addEventListener('click', () => {
    orderArea.classList.remove('active');
});

orderItem.addEventListener('click', function(event) {
    const target = event.target;
    const itemID = target.getAttribute('data-item');

    // Handle increment button clicks
    if (target.classList.contains('add-number')) {
        const burgerNumber = document.querySelector(`#${itemID} .burger-number`);
        let currentCount = parseInt(burgerNumber.textContent);
        burgerNumber.textContent = currentCount + 1;

        // Update individual item's total
        const itemIndex = itemsInOrder.findIndex(item => item.id === itemID);
        itemsInOrder[itemIndex].total += itemsInOrder[itemIndex].price;
    }

    // Handle decrement button clicks
    if (target.classList.contains('remove-num')) {
        const burgerNumber = document.querySelector(`#${itemID} .burger-number`);
        let currentCount = parseInt(burgerNumber.textContent);
        if (currentCount > 1) {
            burgerNumber.textContent = currentCount - 1;

            // Update individual item's total
            const itemIndex = itemsInOrder.findIndex(item => item.id === itemID);
            itemsInOrder[itemIndex].total -= itemsInOrder[itemIndex].price;
        }
    }

    updateTotal();

     // Handle go-back button clicks
     if (target.classList.contains('go-back')) {
        const item = target.closest('.card-pick-order');

        // Find the index of the item to remove in itemsInOrder array
        const itemIndex = itemsInOrder.findIndex(item => item.id === item.id);

        // Remove the item from the array
        itemsInOrder.splice(itemIndex, 1);

        // Remove the item's div from the DOM
        item.remove();

        // Recalculate the total
        updateTotal();
    }
});


orderCard.forEach((card, index) => {
    card.addEventListener('click', (e) => {
        orderArea.classList.add('active');
        var itemImage;
        var itemName = card.querySelector('.name-text').textContent;
        var itemPrice = parseFloat(card.querySelector('p').textContent.replace('$', ''));
        var foodAmount = 1;


      
        if (e.target.classList.contains('burger')) {
            itemImage = '/E-FOOD/image/Hamburger_PNG_Clip_Art-1491 (1).png';
        } else if (e.target.classList.contains('pizza')) {
            itemImage = '/E-FOOD/image/pizza-removebg-preview.png';
        } else if (e.target.classList.contains('coffee')) {
            itemImage = '/E-FOOD/image/big-mug-of-cold-beer-with-foam-and-bubbles-vector-11236182-removebg-preview.png';
        } else if (e.target.classList.contains('liquid')) {
            itemImage = '/E-FOOD/image/drinks.png';
        }

        var itemOrder = document.createElement('div');
        itemOrder.className = 'card-pick-order';
        itemOrder.id = `item${index + 1}`;

        // Add specific content to the dynamically created div
        itemOrder.innerHTML = `
            <div class="w-[90%] mx-auto flex justify-between items-center h-[100%]">
                <div class="quick-image">
                    <img class="w-[50px] h-[45px]" src="${itemImage}" alt="Item Image">
                </div>
                <div class="item-detail ">
                    <h1 class="text-left">${itemName}</h1>
                    <p class="text-left">$${itemPrice.toFixed(2)}</p>
                </div>
                <div class="flex items-center flex-col justify-between">
                    <p class="cursor-pointer go-back text-[#b2b3b7]">x</p>
                    <div class="add-item flex items-center justify-between">
                        <p class="remove-num" data-item="item${index + 1}">-</p>
                        <h5 class="burger-number">${foodAmount}</h5>
                        <p class="add-number" data-item="item${index + 1}">+</p>
                    </div>
                </div>
            </div>
        `;
        // itemOrder.querySelector('.go-back').addEventListener('click', function() {
        //     itemOrder.remove();
        //     totalForOne = 0;
        //     document.querySelector('.subtotal').textContent = 0;
        //     document.querySelector('.total-bill').textContent = taxAmount + 0;
        // });
        orderItem.appendChild(itemOrder);

        var item = {
            id: `item${index + 1}`,
            quantity: foodAmount,
            price: itemPrice,
            total: itemPrice,
        };

        itemsInOrder.push(item);
        updateTotal();
    });
});

function updateTotal() {
    var subtotal = itemsInOrder.reduce((sum, item) => sum + item.total, 0);
    var total = subtotal +  taxAmount;
    document.querySelector('.subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.querySelector('.total-bill').textContent = `$${total.toFixed(2)}`;
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






