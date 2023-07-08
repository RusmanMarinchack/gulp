"use strict"

const swiper = new Swiper('.swiper');

// Перевірка на сенсорні екрани, і додаємо класс для body.
const isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBorry: function() {
        return navigator.userAgent.match(/BlackBorry/i);
    },
    IOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (
            isMobile.Android() ||
            isMobile.BlackBorry() ||
            isMobile.IOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
        );
    }
};

if (isMobile.any()){
    document.body.classList.add('_touch');
} else {
    document.body.classList.add('_pc');
}

let events = document.body.classList.contains('_touch') ? 'click' : 'mousemove';

// Робимо бургер меню.
function burger() {
    let burger = document.querySelector('.header__burger')

    if(burger) {
        burger.addEventListener('click', function() {
            if(this.classList.contains('active')) {
                this.classList.remove('active')
            } else {
                this.classList.add('active')
            }
        })
    }
}
burger()

// Робимо акардеони по сайту.
function accardeonsSite() {
    let accardeons = document.querySelectorAll('.accardeons')

    if(accardeons.length > 0) {
        accardeons.forEach(accardeon => {
            let accardeonHeader = accardeon.querySelectorAll('.accardeons__header')
            
            if(accardeonHeader.length > 0) {
                accardeonHeader.forEach(header => {
                    header.addEventListener('click', function() {
                        let body = this.nextElementSibling
                        let bodyHeight = body.scrollHeight

                        if(this.classList.contains('active')) {
                            removeClassActive()
                            this.classList.remove('active')
                            body.classList.remove('active')
                            body.style.height = `0px`
                        } else {
                            removeClassActive()
                            this.classList.add('active')
                            body.classList.add('active')
                            body.style.height = `${bodyHeight}px`
                        }
                    })
                })

                // Видаляємо клас active в accardeonHeader.
                function removeClassActive() {
                    accardeonHeader.forEach(header => {
                        header.classList.remove('active')

                        let body = header.nextElementSibling

                        body.classList.remove('active')
                        body.style.height = `0px`
                    })
                }
            }
        })
    }
}
accardeonsSite()