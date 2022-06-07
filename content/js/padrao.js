$(document).on('ready', function() {
    var o = $(".princial-banner");
    $(document).ready(function() {
        o.slick({
            arrows: true,
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            fade: true,
            cssEase: 'linear'
        }), o.slickAnimation()
    });

    $(".produtos").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
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

    $(".produtos-02").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
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

    $(".slide-fotos").slick({
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 540,
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

    $('.box-produto span, .box-produto-02 span').on('click', function(e) {
        var id = $(this).attr('class');
        var url_atual = window.location.href;
        url = url_atual.split("/");
        url = url[3];
        scrolbar(id);
    });

    function scrolbar(id) {
        targetOffset = $("#" + id).offset().top;
        $('html, body').animate({
            scrollTop: targetOffset - 100
        }, 500);
    }

    $(".box-produto-click").click(function() {
        var item = $(this).attr("id");
        $(".produto-box").removeClass("ativo");
        $("." + item).addClass("ativo");
        AOS.init({
            easing: 'ease-in-out-sine'
        });
    });

    $(".box-produto-click-02").click(function() {
        var item = $(this).attr("id");
        $(".produto-box-02").removeClass("ativo");
        $("." + item).addClass("ativo");
        AOS.init({
            easing: 'ease-in-out-sine'
        });
    });

    $(".box-produto").hover(function() {
        $('.box-produto').removeClass("ativo");
        $(this).addClass("ativo");
    });

    $(".box-produto-02").hover(function() {
        $('.box-produto-02').removeClass("ativo");
        $(this).addClass("ativo");
    });


});