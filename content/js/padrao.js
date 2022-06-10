$(document).on('ready', function() {

    $(".slick-depoimentos").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        arrows: true,
        adaptiveHeight: true
    });

});

$(document).ready(function() {

    $(".navbar-nav li a").click(function() {
        $(".navbar-collapse.collapse").removeClass("in");
    });

    $('.nav li a[href^="#"],.seta-top[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var id = $(this).attr('href'),
            targetOffset = $(id).offset().top;

        $('html, body').animate({
            scrollTop: targetOffset - 105
        }, 500);
    });


});

$(document).on("scroll", function() {
    if ($(document).scrollTop() > 105) { //QUANDO O SCROLL PASSAR DOS 100px DO TOPO
        $(".navbar").removeClass("large").addClass("small"); //TROCA P CLASSE MENOR
    } else {
        $(".navbar").removeClass("small").addClass("large"); //VOLTA P MENU GRANDE ORIGINAL
    }
});