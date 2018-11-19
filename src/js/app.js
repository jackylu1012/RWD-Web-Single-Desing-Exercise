import css from '../scss/main.scss';

$(function() {
    // open menu
    $('.hamburger-menu').click(function() {
        $('.menu-content').addClass('fixed');
    });

    // close menu
    $('.menu-content .hamburger-menu').click(function() {
        $('.menu-content').removeClass('fixed');
    });

    // fancybox - gallery images
    $('[data-fancybox]').fancybox({
        buttons : [
            'close'
        ],
        transitionEffect : "slide"
    });
});