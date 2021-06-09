import $ from 'jquery';

$('.js-f-links').click(function() {
    $(this).parent().find('ul').toggle();
    $(this).find('.icon_arrow').toggleClass('rotate');
});