import $ from "jquery";

// click row
$('.js-bt-row').click(function (e) {
    e.preventDefault();
    const checkBoxes = $(this).find('input[type="checkbox"]');
    checkBoxes.prop("checked", !checkBoxes.get(0).checked);

    const allCheckBoxes = $('.js-bt-row');
    const allCheckBoxesChecked = $('.js-bt-row input:checked');
    const headerCheckbox = $('.js-basket-check-all input[type="checkbox"]');

    if (allCheckBoxes.length !== allCheckBoxesChecked.length) {
        headerCheckbox.prop("checked", false);
    } else if (allCheckBoxes.length === allCheckBoxesChecked.length) {
        headerCheckbox.prop("checked", true);
    }
});

var allChecked = false;
// check all
$('.js-basket-check-all').click(function (e) {
    e.preventDefault();
    const checkBoxess = $('.basket_table input:checkbox');
    checkBoxess.not(this).prop('checked', !allChecked);
    allChecked = !allChecked;
});

// remove selected
$('.js-basket-remove').click(function () {
    const checkBoxess = $('.basket_table input:checked').closest('.js-bt-row');
    if (checkBoxess.length) {
        checkBoxess.fadeOut(300, function () {
            $(this).remove();
        });
    }

    setTimeout(() => {
        if (!$('.js-bt-row').length) {
            window.location.href = './basket-empty.html';
        }
    }, 400);
});

$('.bt_btn_delete').click(function (e) {
    e.preventDefault();
    $(this).closest('.js-bt-row').fadeOut(300, function () {
        $(this).closest('.js-bt-row').remove();
    });

    setTimeout(() => {
        if (!$('.js-bt-row').length) {
            window.location.href = './basket-empty.html';
        }
    }, 400);
});

// basket-popup logic
$(".js-basket-page-dec").click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    const $countValue = $(this).parent().find(".js-basket-page-count").html();

    if (+$countValue > 0) {
        $(this).parent().find(".js-basket-page-count").html(+$countValue - 1);
    }

    if (+$countValue - 1 === 0) {
        $(this).parent().find(".js-basket-page-dec").prop("disabled", true);
    } else {
        $(this).parent().find(".js-basket-page-dec").prop("disabled", false);
    }
});

$(".js-basket-page-inc").click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    const $countValue = $(this).parent().find(".js-basket-page-count").html();

    if (+$countValue >= 0) {
        $(this).parent().find(".js-basket-page-count").html(+$countValue + 1);

        if ($(this).parent().find(".js-basket-page-dec").prop("disabled")) {
            $(this).parent().find(".js-basket-page-dec").prop("disabled", false);
        }
    }
});
