// "use strict"

document.addEventListener('DOMContentLoaded', function () {
  
  // ====
  // const sliderContainer = document.querySelector('.slider-container');
  // const slider = document.querySelector('.slider');
  // const slides = document.querySelectorAll('.slide');
  // const prevButton = document.querySelector('.prev-button');
  // const nextButton = document.querySelector('.next-button');
  // const slideHeight = slides[0].offsetHeight;
  // let currentIndex = 0;
  // let scrolling = false;

  // prevButton.addEventListener('click', () => {
  //   currentIndex = Math.max(currentIndex - 1, 0);
  //   updateSliderPosition();
  // });

  // nextButton.addEventListener('click', () => {
  //   currentIndex = Math.min(currentIndex + 1, slides.length - 1);
  //   updateSliderPosition();
  // });

  // function updateSliderPosition() {
  //   slider.style.transform = `translateY(-${currentIndex * slideHeight}px)`;
  // }

  // window.addEventListener('scroll', () => {
  //   if (!scrolling) {
  //     const scrollDirection = window.pageYOffset > currentIndex * slideHeight ? 1 : -1;
  //     currentIndex = Math.min(Math.max(currentIndex + scrollDirection, 0), slides.length - 1);
  //     updateSliderPosition();
  //     scrolling = true;
  //     setTimeout(() => {
  //       scrolling = false;
  //     }, 1000); // Затримка, щоб уникнути швидкого перемикання слайдів
  //   }
  // });

  // updateSliderPosition();

  // // Ініціалізація Swiper та ScrollMagic
  // const controller = new ScrollMagic.Controller();

  // new ScrollMagic.Scene({
  //   triggerElement: '.slider-container',
  //   triggerHook: 0,
  //   duration: () => slider.offsetHeight ,
  // })
  // .setPin('.slider-container')
  // .addTo(controller);
  // ====



  // const controller = new ScrollMagic.Controller();

  // const slider = document.querySelector('.slider');
  // const slideWidth = slider.offsetWidth;
  // let currentIndex = 0;
  // let allowScrollDown = false;

  // // Ініціалізація Swiper та ScrollMagic

  // new ScrollMagic.Scene({
  //   triggerElement: '.slider-container',
  //   triggerHook: 0,
  //   duration: () => slider.offsetHeight * 5 ,
  // })
  // .setPin('.slider-container')
  // .addTo(controller);

  // const slideCount = slider.children.length;

  // // Сцена, яка відслідковує досягнення останнього слайда
  // new ScrollMagic.Scene({
  //   triggerElement: '.slider .slide:last-child',
  //   triggerHook: 1,
  // })
  // .on('enter', () => {
  //   allowScrollDown = true;
  // })
  // .on('leave', () => {
  //   allowScrollDown = false;
  // })
  // .addTo(controller);

  // document.querySelector('.prev-button').addEventListener('click', () => {
  //   changeSlide(currentIndex - 1);
  // });

  // document.querySelector('.next-button').addEventListener('click', () => {
  //   changeSlide(currentIndex + 1);
  // });

  // function changeSlide(index) {
  //   currentIndex = Math.min(Math.max(index, 0), slideCount - 1);
  //   gsap.to(slider, {
  //     x: -currentIndex * slideWidth,
  //     duration: 0.5,
  //   });
  // }

  // window.addEventListener('scroll', (event) => {
  //   const scrollPosition = window.scrollY;
  //   const newSlideIndex = Math.floor(scrollPosition / slideWidth);

  //   if (newSlideIndex !== currentIndex) {
  //     changeSlide(newSlideIndex);
  //   }

  //   if (!allowScrollDown && event.deltaY > 0) {
  //     event.preventDefault();
  //   }
  // });








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
  //   let subListArrow = document.querySelectorAll('.sublist-item__arrow');
  //   let subLists = document.querySelectorAll('.sublist');

  //   if (subListArrow.length > 0) {
  //     subListArrow.forEach(arrow => {
  //       arrow.addEventListener('click', function () {

  //         let subList = this.nextElementSibling;

  //         if (subList.classList.contains('active')) {
  //           subList.classList.remove('active');
  //           this.classList.remove('active');
  //         } else {
  //           removeActiveSubMenusOnSameLevel(this);
  //           subList.classList.add('active');
  //           this.classList.add('active');
  //         }
  //       });

  //       function removeActiveSubMenusOnSameLevel(clickedArrow) {
  //         let siblings = Array.from(clickedArrow.parentElement.parentElement.children);

  //         siblings.forEach(sibling => {
  //           let subMenu = sibling.querySelector('.sublist');

  //           if (subMenu && subMenu !== clickedArrow.nextElementSibling) {
  //             subMenu.classList.remove('active');

  //           }
  //         });
  //       }
  //     });

  //     document.addEventListener('click', (e) => {
  //       if (!isDescendant(e.target, subLists) && !isDescendant(e.target, subListArrow)) {
  //         subLists.forEach(item => {
  //           if (item.classList.contains('active')) {
  //             item.classList.remove('active');
  //           }
  //         });
  //       }
  //     });
  //   }
  // }

  // function isDescendant(child, parentArray) {
  //   for (let parent of parentArray) {
  //     if (parent.contains(child)) {
  //       return true;
  //     }
  //   }
  //   return false;
  // }

  // touchSubList();

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

  // // При скролі для відповідних елементів додаємо класс.
  // function heandlerScroll() {
  //   let elementsScroll = document.querySelectorAll('.scroll-element')
  //   let elementsAnimation = document.querySelectorAll('.animation')
  //   let sections = document.querySelectorAll('section')

  //   // if (elementsScroll.length > 0) {
  //   //   window.addEventListener('scroll', activeScrollItem)

  //   //   function activeScrollItem() {
  //   //     let scrollPocition = window.scrollY + (window.innerHeight / 2)

  //   //     sections.forEach(section => {
  //   //       let sectionTop = section.offsetTop
  //   //       console.log(scrollPocition)
  //   //       if (scrollPocition >= sectionTop) {
  //   //         let sectionId = section.getAttribute('id')

  //   //         elementsScroll.forEach(item => {
  //   //           if (sectionId === item.dataset.scrollId) {
  //   //             item.classList.add('active')
  //   //           } else {
  //   //             item.classList.remove('active')
  //   //           }
  //   //         })
  //   //       }
  //   //     })
  //   //   }

  //   //   activeScrollItem()
  //   // }

  //   // if (elementsAnimation.length > 0) {

  //   //   elementsAnimation.forEach(item => {

  //   //     const options = {
  //   //       rootMargin: '-200px',
  //   //       threshold: [0, 0.5]
  //   //     }
  //   //     const obsorver = new IntersectionObserver(function (entries, obsorver) {
  //   //       entries.forEach(entry => {
  //   //         if (entry.isIntersecting) {
  //   //           item.classList.add('active')
  //   //         }
  //   //       })
  //   //     }, options)

  //   //     obsorver.observe(item)
  //   //   })
  //   // }
  // }
  // heandlerScroll()
})