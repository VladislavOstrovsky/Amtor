import $ from "jquery";

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