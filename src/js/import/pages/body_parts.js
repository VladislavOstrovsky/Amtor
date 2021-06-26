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
