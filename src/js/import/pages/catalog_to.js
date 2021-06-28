import $ from "jquery";
import tippy from "tippy.js";
require('../../../js/jquery.fancybox.min');

// mobile show filters
$('.js-oc-show-filters').click(function () {
    $('.catalog_filters').toggleClass('__open');

    if ($('.catalog_filters').hasClass('__open')) {
        $(this).html('Скрыть фильтр');
    } else {
        $(this).html('Показать фильтр');
    }
});

// show more cells desired-number
$('.js-show-more-cells-desired-number').click(function () {
    $(this).toggleClass('open');

    if ($(this).hasClass('open')) {
        $(this).find('.text').html('Скрыть');
    } else {
        $(this).find('.text').html('Показать ещё');
    }
    $(this).closest('.dct_table').find('tr[data-desired-number]').toggleClass('__hide');
});

// show more cells analogs
$('.js-show-more-cells-analogs').click(function () {
    $(this).toggleClass('open');

    if ($(this).hasClass('open')) {
        $(this).find('.text').html('Скрыть');
    } else {
        $(this).find('.text').html('Показать ещё');
    }
    $(this).closest('.dct_table').find('tr[data-analogs]').toggleClass('__hide');
});

// mobile
$('.js-mobile-show-more-dn').click(function () {
    $(this).toggleClass('open');

    if ($(this).hasClass('open')) {
        $(this).find('.text').html('Скрыть');
    } else {
        $(this).find('.text').html('Показать ещё');
    }
    $('div[data-desired-hidden]').toggleClass('__hidden');
});

$('.js-mobile-show-more-a').click(function () {
    $(this).toggleClass('open');

    if ($(this).hasClass('open')) {
        $(this).find('.text').html('Скрыть');
    } else {
        $(this).find('.text').html('Показать ещё');
    }
    $('div[data-analogs-hidden]').toggleClass('__hidden');
});

// tooltips
tippy('.icon_revert', {
    content: 'Возможность возврата',
});

tippy('.icon_count', {
    content: 'Количество',
});

tippy('.icon_probability', {
    content: 'Вероятность выдачи данным поставщиком',
});

// ajax popup content
// $('#button').fancybox({
//     width: 400,
//     height: 400,
//     autoSize: false,
//     href: './quick_view.html',
//     type: 'ajax'
// });
