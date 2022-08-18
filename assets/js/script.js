// Menu bar
$('.bar-icon').click(function(){
    $('.responsive-nav').toggleClass('show-nav');
});


$('.carousel').carousel({
    interval: 4000
});

window.addEventListener('scroll', function(){
    const hr = document.querySelector('.top-navbar');
    hr.classList.toggle("sticky", window.scrollY > 0);
});

$(function(){
    $('.mhn-slide').owlCarousel({
        loop:true,
        nav:true,
        slideBy:1,
        rewind:false,
        responsive:{
            0:{items:1},
            480:{items:2},
            600:{items:3},
        },
        smartSpeed:200,
        navText:['<img src="assets/images/prev.png" alt="" srcset="">','<img src="assets/images/next.png" alt="" srcset="">']
    });
});

$(document).ready(function(){
    $('.counter').counterUp({
      delay: 10,
      time: 1200
    });
  });