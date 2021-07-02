import $ from "jquery";
import noUiSlider from 'nouislider';

// toggle view cards
$('.js-toggle-view').click(function () {
    const $currentView = $('.ctv_item.__selected').data().view;

    $('.catalog_cards')
        .removeClass($currentView)
        .addClass($(this).data().view);

    $('.ctv_item').removeClass('__selected');
    $(this).addClass('__selected');
});

// filters
$('.fci_header').click(function () {
   $(this).parent().toggleClass('__open');
});

// mobile show filters
$('.js-show-filters').click(function () {
    $('.filter_cards').toggleClass('__open');

    if ($('.filter_cards').hasClass('__open')) {
        $(this).html('Скрыть фильтр');
    } else {
        $(this).html('Показать фильтр');
    }
});

// slider
var slider = document.getElementById('range-slider');

noUiSlider.create(slider, {
    start: [1, 208],
    connect: true,
    step: 1,
    range: {
        'min': 0,
        'max': 300
    }
});

var beforeInput = document.getElementById('before-input');
var afterInput = document.getElementById('after-input');

slider.noUiSlider.on('update', function (values, handle) {
    var value = values[handle];

    if (handle) {
        afterInput.value = Math.round(value);
    } else {
        beforeInput.value = Math.round(value);
    }
});

// before
afterInput.addEventListener('input', function () {
    slider.noUiSlider.set([null, this.value]);
});

// after
beforeInput.addEventListener('input', function () {
    slider.noUiSlider.set([this.value, null]);
});