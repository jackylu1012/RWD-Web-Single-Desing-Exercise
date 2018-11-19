import css from '../scss/main.scss';

document.onreadystatechange=function(){ 
    if(document.readyState=="complete"){ 
        $(".loading").fadeOut(); 
    } 
}

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