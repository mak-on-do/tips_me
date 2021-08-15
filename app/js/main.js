$(function() {

    $('.formstyler').styler();

    $('.tel-mask').mask('+7(000) 000-00-00');

    $('.trust-us-slider-1').slick({
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: true
    });

    $('.trust-us-slider-2').slick({
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        rtl: true
    });

    $('.media-about-us__slider').slick({
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: true
    });

});