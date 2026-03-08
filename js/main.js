'use strict';

const header = document.getElementById('header');
const intro = document.querySelector('.intro');

if (header && intro) {
    function toggleFixedHeader() {
        const introH = intro.offsetHeight;
        const scrollPos = window.scrollY;


        header.classList.toggle('fixed', scrollPos > introH);
    }

    toggleFixedHeader();
    window.addEventListener('scroll', toggleFixedHeader);
    window.addEventListener('resize', toggleFixedHeader);
}


const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');

    if (menu.classList.contains('active')) {
        document.documentElement.style.overflow = 'hidden';
        document.body.style.overflow = 'hidden';
    } else {
         document.documentElement.style.overflow = '';
         document.body.style.overflow = '';
    }

    const menuLinks = document.querySelectorAll('.menu-link');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            burger.classList.remove('active');
            menu.classList.remove('active');
            
            document.documentElement.style.overflow = '';
            document.body.style.overflow = '';
        });
    });
});

$(document).ready(function() {
    $('.reviews-inner').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 2000,
        accessibility: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    });
});
