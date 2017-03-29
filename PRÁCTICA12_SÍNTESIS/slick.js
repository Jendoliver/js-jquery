/*global $*/
$(document).ready(function(){
    $('#slider-imgs').slick({
        autoplay: false,
        dots: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive: [
        {
          breakpoint: 700,
          settings: {
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }]
    });
})