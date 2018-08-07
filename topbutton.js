$(function () {

    $('#TopButton')
    .hover(function () {
        $(this).find('.fas').css("transform", "rotate(360deg)"),
        $(this).find('.fas').css("transition-duration", "1s"),
        $(this).find('.fas').css("transition-timing-function", "ease"),
        $(this).find('i').toggleClass('fa-fire fa-arrow-up')   
    },
    function () {
        $(this).find('.fas').css("transform", "rotate(-360deg)"),
        $(this).find('.fas').css("transition-duration", "1s"),
        $(this).find('.fas').css("transition-timing-function", "ease"),
        $(this).find('i').toggleClass('fa-arrow-up fa-fire')
    });

});

