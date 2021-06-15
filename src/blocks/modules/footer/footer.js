import $ from 'jquery';
// import Hammer from "../../../js/import/hammer/hammer";
// import {disableBodyScroll, enableBodyScroll} from 'body-scroll-lock';

$('.js-f-links').click(function() {
    $(this).parent().find('ul').toggle();
    $(this).find('.icon_arrow').toggleClass('rotate');
});

// catalog
$('.js-open-catalog-mobile').click(function () {
    $('.menu_catalogs_wrapper').toggleClass('__opened');

    if ($('.menu_catalogs_wrapper').hasClass('__opened')) {
        $('.links_wrapper').find('.mc_list_wrapper').hide();
        $('.links_wrapper').find('.icon_arrow.rotate').removeClass('rotate');
        // disableBodyScroll(document.body);
        // enableBodyScroll(document.getElementById('menu-catalogs'));
    }
});

$('.icon_close').click(function () {
    $('.menu_catalogs_wrapper').removeClass('__opened');
    $('.links_wrapper').find('.mc_list_wrapper').hide();
    $('.links_wrapper').find('.icon_arrow.rotate').removeClass('rotate');
});

$('.js-mc-links').click(function () {
    $(this).parent().find('.mc_list_wrapper').toggle();
    $(this).find('.icon_arrow').toggleClass('rotate');
});

// $(document).ready(function(){
//     let swipeCatalog = new Hammer($('.menu_catalogs_wrapper').get(0));
//     swipeCatalog.on('swipedown pandown', function (e) {
//         $('.menu_catalogs_wrapper').removeClass('__opened');
//     });
// });