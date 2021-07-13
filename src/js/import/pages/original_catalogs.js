import $ from "jquery";
import tippy from "tippy.js";

$.fn.toggleText = function(t1, t2){
    if (this.text() == t1) this.text(t2);
    else                   this.text(t1);
    return this;
};
// accordion toggle
$('.js-accordion-link').on("click", function () {
    var $this = $(this);

    if ($this.next().hasClass("open")) {
        $this.next().removeClass("open");
        $this.toggleClass("active");
    } else {
        $this.toggleClass("active");
        $this.next().slideToggle();
    }
});

// mobile show filters
$('.js-oc-show-filters').click(function () {
    $('.catalog_filters').toggleClass('__open');
    $(this).toggleText('Скрыть фильтр', 'Показать фильтр');
});

// show more cells desired-number
$('.js-show-more-cells-desired-number').click(function () {
    $(this).toggleClass('open');
    $(this).find('.text').toggleText('Скрыть', 'Показать ещё');
    $(this).closest('.dct_table').find('tr[data-desired-number]').toggleClass('__hide');
});

// show more cells analogs
$('.js-show-more-cells-analogs').click(function () {
    $(this).toggleClass('open');
    $(this).find('.text').toggleText('Скрыть', 'Показать ещё');
    $(this).closest('.dct_table').find('tr[data-analogs]').toggleClass('__hide');
});

// mobile
$('.js-mobile-show-more-dn').click(function () {
    $(this).toggleClass('open');
    $(this).find('.text').toggleText('Скрыть', 'Показать ещё');
    $('div[data-desired-hidden]').toggleClass('__hidden');
});

$('.js-mobile-show-more-a').click(function () {
    $(this).toggleClass('open');
    $(this).find('.text').toggleText('Скрыть', 'Показать ещё');
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
