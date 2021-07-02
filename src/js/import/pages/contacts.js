import $ from "jquery";
require('./../yandexmap/map');

// change city
$('.js-change-city').click(function () {
    $('.js-change-city').removeClass('selected');
    $(this).addClass('selected');
});
