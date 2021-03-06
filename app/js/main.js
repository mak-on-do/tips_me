$(function() {

    $('.formstyler').styler();

    $('.tel-mask').mask('+7(000) 000-00-00');

    $('.trust-us-slider-1').slick({
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: true,
        responsive: [{
            breakpoint: 1367,
            settings: {
                slidesToShow: 5
            }
        }, {
            breakpoint: 1153,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 961,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 721,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 526,
            settings: {
                slidesToShow: 1
            }
        }, ]
    });

    $('.trust-us-slider-2').slick({
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        rtl: true,
        responsive: [{
            breakpoint: 1281,
            settings: {
                slidesToShow: 5
            }
        }, {
            breakpoint: 1025,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 855,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 621,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 441,
            settings: {
                slidesToShow: 1,
                centerMode: true
            }
        }, ]
    });

    $('.media-about-us__slider').slick({
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: true,
        responsive: [{
            breakpoint: 1281,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 901,
            settings: {
                slidesToShow: 1
            }
        }, {
            breakpoint: 491,
            settings: {
                centerMode: false,
                slidesToShow: 1
            }
        }, ]
    });

    $('.menu__btn').on('click', function() {
        $('.menu').slideToggle();
    });

});