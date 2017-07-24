
$(document).ready(function() {

    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        var stickyOffset = $('.sticky-anchor').offset().top;


        if (scrollTop > stickyOffset - 60) {
            $(' body').removeClass('landing');
            $('.bouncing').css('opacity', '0');
        } else {
            $(' body').addClass('landing');
            $('.bouncing').css('opacity', '1');
        }
    });

    $(window).scroll();
});
