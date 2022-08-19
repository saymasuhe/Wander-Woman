$('.carousel').carousel({
    interval: 4000
});

window.addEventListener('scroll', function(){
    const hr = document.querySelector('.top-navbar');
    const headerResponsive = document.querySelector('.header-responsive');
    hr.classList.toggle("sticky", window.scrollY > 0);
    headerResponsive.classList.toggle("sticky", window.scrollY > 0);
});

$(function(){
    $('.mhn-slide').owlCarousel({
        loop:true,
        nav:true,
        slideBy:1,
        rewind:false,
        responsive:{
            0:{items:1},
            768:{items:2},
            992:{items:2},
            1200:{item:3}
        },
        smartSpeed:200,
        navText:['<img src="assets/images/prev.png" alt="" srcset="">','<img src="assets/images/next.png" alt="" srcset="">']
    });
});

$(document).ready(function(){
    $('.counter').counterUp({
        from: 0,
        to: 999999999999999,
        speed: 800,
        refreshInterval: 50,
    });
  });