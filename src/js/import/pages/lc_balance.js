import $ from "jquery";
import '../bootstrap-datepicker/bootstrap-datepicker.min';
import '../bootstrap-datepicker/bootstrap-datepicker.ru.min';

$('.datepicker_wrapper input').each(function() {
    $(this).datepicker({
        language: "ru",
        format: 'dd / mm / yyyy',
        autoclose: true,
        disableTouchKeyboard: true,
    });
});

