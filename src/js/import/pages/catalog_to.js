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

// clickable row table
$(document).ready(function($) {
    $('.clickable_row').click(function() {
        window.location = $(this).data("href");
    });
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

// js-detail-page slider
$(document).on('click', '.js-slider-card > div', function () {
    var $this = $(this),
        data = $this.attr('data-img'),
        imgSrc = $this.closest('.dpi_gallery').find('.dpi_gallery__main img').attr('src'),
        img = $this.closest('.dpi_gallery').find('.dpi_gallery__main img');
    $('.js-slider-card > div').removeClass('active');
    $this.addClass('active');

    if(!(data === imgSrc)) {
        img.fadeOut('fast', function () {
            img.attr('src', data);
            img.fadeIn('fast');
        });
    }
});

// ajax popup content
// $('#button').fancybox({
//     width: 400,
//     height: 400,
//     autoSize: false,
//     href: './quick_view.html',
//     type: 'ajax'
// });
