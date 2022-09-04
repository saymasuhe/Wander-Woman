$('.bar-icon').click(function(){
    $('.responsive-nav').toggleClass('show-nav');
    $('.header').toggleClass('show')
});
$('.parent1').click(function(){
    $('.responsive-nav').toggleClass('show-dropdown');
});

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

$(function()
{
    $(".add").click(function()
    {
        var currentVal = parseInt($(this).next(".qty").val());
        if (currentVal != NaN)
        {
            $(this).next(".qty").val(++currentVal);
            $(".total").text(parseInt(4200) * currentVal);
        }
    });

    $(".minus").click(function()
    {
        var currentVal = parseInt($(this).prev(".qty").val());
        if (currentVal != NaN)
        {
            if(currentVal > 1){
                $(this).prev(".qty").val(--currentVal);
                $(".total").text(parseInt(4200) * currentVal);
            }

        }
    });
});

// Consultation form
$(document).ready(function(){

    var current_fs, next_fs, previous_fs;
    var opacity;
    var current = 1;
    var steps = $("fieldset").length;
    
    setProgressBar(current);
    
    $(".next").click(function(){
    
        current_fs = $(this).parent();
        next_fs = $(this).parent().next();
        
        $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
        
        next_fs.show();
        current_fs.animate({opacity: 0}, {
            step: function(now) {
                opacity = 1 - now;
                
                current_fs.css({
                'display': 'none',
                'position': 'relative'
                });
                next_fs.css({'opacity': opacity});
            },
            duration: 500
        });
        setProgressBar(++current);
    });
    
    $(".previous").click(function(){
    
        current_fs = $(this).parent();
        previous_fs = $(this).parent().prev();
        
        $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
        
        previous_fs.show();
        
        current_fs.animate({opacity: 0}, {
            step: function(now) {
                opacity = 1 - now;
                
                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                previous_fs.css({'opacity': opacity});
            },
            duration: 500
        });
        setProgressBar(--current);
    });
    
    function setProgressBar(curStep){
        var percent = parseFloat(100 / steps) * curStep;
        percent = percent.toFixed();
    }
    
    $(".submit").click(function(){
        return false;   
    })
    
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