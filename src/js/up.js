$(document).ready(function () {
    $('.flotante').click(function () {
        $('body, html').animate({
            scrollTop: '0px'
        }, 800);
        return false;
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 250) {
            $('.flotante').slideDown(250);
        } else {
            $('.flotante').slideUp(250);
        }
    });
});

