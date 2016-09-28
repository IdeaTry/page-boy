$(function() {
    $('.pb-home').mouseover(function() {
        $(this).addClass('active');
    });
    $('.pb-menu').mouseleave(function() {
        $('.pb-home').removeClass('active');
    });
});