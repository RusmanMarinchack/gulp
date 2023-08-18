"use strict"

// const swiper = new Swiper('.swiper', {
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },
// });

// // Перевірка наявності слайдів для приховування навігації
// function toggleNavigation() {
//     var isNavigationHidden = mySwiper.slides.length <= 1;
//     var navigationElements = document.querySelectorAll('.swiper-button-next, .swiper-button-prev');
    
//     navigationElements.forEach(function(element) {
//       element.style.display = isNavigationHidden ? 'none' : 'block';
//     });
//   }

//   // Виклик функції при завантаженні та зміні слайдів
//   swiper.on('init', toggleNavigation);
//   swiper.on('slideChange', toggleNavigation);

// // Перевірка на сенсорні екрани, і додаємо класс для body.
// const isMobile = {
//     Android: function() {
//         return navigator.userAgent.match(/Android/i);
//     },
//     BlackBorry: function() {
//         return navigator.userAgent.match(/BlackBorry/i);
//     },
//     IOS: function() {
//         return navigator.userAgent.match(/iPhone|iPad|iPod/i);
//     },
//     Opera: function() {
//         return navigator.userAgent.match(/Opera Mini/i);
//     },
//     Windows: function() {
//         return navigator.userAgent.match(/IEMobile/i);
//     },
//     any: function() {
//         return (
//             isMobile.Android() ||
//             isMobile.BlackBorry() ||
//             isMobile.IOS() ||
//             isMobile.Opera() ||
//             isMobile.Windows()
//         );
//     }
// };

// if (isMobile.any()){
//     document.body.classList.add('_touch');
// } else {
//     document.body.classList.add('_pc');
// }

// let events = document.body.classList.contains('_touch') ? 'click' : 'mousemove';

// // Робимо бургер меню.
// function burger() {
//     let burger = document.querySelector('.header__burger')

//     if(burger) {
//         burger.addEventListener('click', function() {
//             this.classList.toggle('active')
//         })
//     }
// }
// burger()

// // Робимо акардеони по сайту.
// function accardeonsSite() {
//     let accardeons = document.querySelectorAll('.accardeons')

//     if (accardeons.length > 0) {
//         accardeons.forEach(accardeon => {
//             let accardeonHeader = accardeon.querySelectorAll('.accardeons__header')

//             if (accardeonHeader.length > 0) {
//                 accardeonHeader.forEach(header => {
//                     header.addEventListener('click', function () {
//                         let body = this.nextElementSibling
//                         let bodyHeight = body.scrollHeight

//                         if (this.classList.contains('active')) {
//                             this.classList.remove('active');
//                             body.classList.remove('active');
//                             body.style.height = `0px`;
//                         } else {
//                             removeClassActive();
//                             this.classList.add('active');
//                             body.classList.add('active');
//                             body.style.height = `${bodyHeight}px`;
//                         }
//                     });
//                 });

//                 // Видаляємо клас active в accardeonHeader.
//                 function removeClassActive() {
//                     accardeonHeader.forEach(header => {
//                         header.classList.remove('active');
//                         let body = header.nextElementSibling;
//                         if (body) {
//                             body.classList.remove('active');
//                             body.style.height = `0px`;
//                         }
//                     });
//                 }
//             }
//         });
//     }
// }

// accardeonsSite()


// // Робимо щоб під списки можна було відкривати по табу, якщо сенсорний екран.
// function touchSubList() {
//     let navItem = document.querySelectorAll('.sublist-item')

//     if(navItem.length > 0) {
//         if(document.body.classList.contains('_touch')) {
//             navItem.forEach(item => {
//                 item.addEventListener('click', function() {
//                     this.classList.toggle('active')
//                 })
//             })
//         }
//     }
// }
// touchSubList()


// // Робимо активні попапи посайту.
// function activePopap() {
//     let popapBtn = document.querySelectorAll('.popap-btn')

//     if(popapBtn.length > 0) {
//         popapBtn.forEach(btn => {
//             btn.addEventListener('click', function() {
//                 let idPopap = this.dataset.id

//                 if(idPopap) {
//                     let popap = document.querySelector(`#${idPopap}`)

//                     if(popap) {
//                         popap.classList.add('active')
                        
//                         let btnClose = popap.querySelector('.popap__close')

//                         popap.addEventListener('click', function(e) {
//                             e.stopPropagation()
//                         })

//                         let popapShadow = popap.parentNode

//                         if(popapShadow) {
//                             popapShadow.classList.add('active')

//                             popapShadow.addEventListener('click', popapHidden)
//                             btnClose.addEventListener('click', popapHidden)

//                             function popapHidden() {
//                                 popapShadow.classList.remove('active')
//                                 popap.classList.remove('active')
//                             }
//                         }
//                     }
//                 }
//             })
//         })
//     }
// } 
// activePopap()


// // Робимо таби по сайту.
// function heandlerTabs() {
//     let tabs = document.querySelectorAll(".tabs")

//     if(tabs.length > 0) {
//         tabs.forEach(tab => {
//             let tabBtns = tab.querySelectorAll('.tabs__item')

//             if(tabBtns.length > 0) {
//                 tabBtns.forEach(btn => {
//                     btn.addEventListener('click', function() {
//                         removeActive()
//                         this.classList.add('active')

//                         let index = this.dataset.tabIndex
//                         let body = tab.querySelector(`.tabs__body-${index}`)

//                         if(body) {
//                             body.classList.add('active')
//                         }
//                     })
//                 })
//             }

//             function removeActive() {
//                 let tabHeader = tab.querySelectorAll('.tabs__item')
//                 let tabBody = tab.querySelectorAll('.tabs__body')

//                 tabHeader.forEach(item => {
//                     item.classList.remove('active')
//                 })

//                 tabBody.forEach(item => {
//                     item.classList.remove('active')
//                 })
//             }
//         })
//     }
// }
// heandlerTabs()

// // При скролі додаємо класс для header щоб зафіксувати.
// function fixedHeader() {
//     let header = document.querySelector('.header')
//     let headerHeight = header.clientHeight

//     if(header) {
//         let nextElement = header.nextElementSibling

//         if(window.matchMedia("(min-width: 1023.98px)").matches) {
//             document.addEventListener('scroll', function() {
//                 if(window.scrollY > headerHeight) {
//                     header.classList.add('fixed')
//                     nextElement.style.marginTop = `${headerHeight}px`
//                 } else {
//                     header.classList.remove('fixed')
//                     nextElement.style.marginTop = `0px`
//                 }
//             })
//         }
//     }
// }
// document.addEventListener('resize', fixedHeader())


// // Робимо плавну прокрутку до якорів.
// function goAnchor() {
//     let btnAnchors = document.querySelectorAll('.btn-anchor')
//     let burger = document.querySelector('.header__burger')
//     let innerHeader = document.querySelector('.header__inner')

//     if(btnAnchors.length > 0) {
//         btnAnchors.forEach(btn => {
//             btn.addEventListener('click', function(e) {
//                 e.preventDefault()

//                 let header = document.querySelector('.header')

//                 header.classList.remove("burger-active")
//                 burger.classList.remove("active")
//                 innerHeader.classList.remove("active")
    
//                 let id = btn.dataset.id
//                 let section = document.querySelector(`#${id}`)
                
//                 if(section) {
//                     window.scrollBy({
//                         top: (section.getBoundingClientRect().top - header.clientHeight),
//                         behavior: 'smooth'
//                     })
//                 }
//             })
//         })
//     }
// }
// goAnchor()