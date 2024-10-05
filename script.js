$(document).ready(function() {
    // Animation on scroll
    function animateOnScroll() {
        $('.animate').each(function() {
            if ($(this).offset().top < $(window).scrollTop() + $(window).height() - 100) {
                $(this).addClass('visible');
            }
        });
    }
    animateOnScroll();
    $(window).scroll(function() {
        animateOnScroll();
    });

    // Smooth scrolling for internal links
    $('.nav-link').on('click', function(event) {
        event.preventDefault();
        var target = $(this.hash);
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - $('.navbar').outerHeight()
            }, 600);
        }
    });
});