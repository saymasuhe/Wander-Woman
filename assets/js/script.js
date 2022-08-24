$('.carousel').carousel({
    delay: 1000,
    interval: 3000
});

$('#gallery_carousel').carousel({
    interval: 1000
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
            0:{
                items:1,
            },
            576:{
                items:2,
            },
            1200:{
                items:3,
            }
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

$(function() {
    $('input[name="daterange"]').daterangepicker({
        opens: 'left'
    }, function(start, end, label) {
        console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
});

// PAGINATION
$('#pagination-here').bootpag({
    total: 10,          
    page: 1,            
    maxVisible: 5,     
    leaps: true,
    href: "#result-page-{{number}}",
})

$('#pagination-here').on("page", function(event, num){
    // $("#content").html("Page " + num); 
});