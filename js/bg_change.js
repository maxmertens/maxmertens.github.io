
$(document).ready(function() {

    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        var stickyOffset = $('.sticky-anchor').offset().top;


        if (scrollTop > stickyOffset - 35) {
            $(' body').addClass('landing');

        } else {
            $(' body').removeClass('landing');
        }
    });

    $(window).scroll();
});
