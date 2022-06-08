$(document).on('ready', function() {


    $(".slick-depoimentos").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        arrows: true,
        adaptiveHeight: true,
        responsive: [{
            breakpoint: 1030,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 530,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });


});

$(document).ready(function() {

    $(".navbar-toggle").click(function() {
        $('body').toggleClass('remove-overflow');
    });

    $(".navbar-nav li a").click(function() {
        $(".navbar-collapse.collapse").removeClass("in");
    });

    $('.box-slide button[href^="#"], .bg-header-left a[href^="#"], .nav li a[href^="#"], footer ul li a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var id = $(this).attr('href'),
            targetOffset = $(id).offset().top;

        $('html, body').animate({
            scrollTop: targetOffset - 0
        }, 500);
    });






});