/*global $*/
$(document).ready(function(){
    $('#slider2').slick({
        autoplay: true,
        dots: true
    });
    
    $('#slider3').slick({
        autoplay: true,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 2
    })
    
    $('#slider4').slick({
        autoplay: true,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
        {
          breakpoint: 850,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        ]
    })
})