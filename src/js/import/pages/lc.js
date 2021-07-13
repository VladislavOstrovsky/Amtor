import $ from "jquery";
require('./basket');

// lc-menu add active link
const pathNameSplit = location.pathname.split("/");
let currentPage = pathNameSplit[pathNameSplit.length - 1];

if (currentPage.includes('empty') || currentPage.includes('pay-confirmation')) {
   currentPage = currentPage
       .replace('-empty', '')
       .replace('-pay-confirmation', '');
}

const activeLinkDropdown = $(".lc_menu_dropdown").find(`[data-url-page="${currentPage}"]`);
const activeLink = $(".lcm_wrapper_desktop").find(`[data-url-page="${currentPage}"]`);
activeLinkDropdown.addClass('active');
activeLink.addClass('active');

$('input[type="file"]').on('change', function () {
   const value = $(this).val() === '' ? 'Файл не выбран' : this.value.replace("C:\\fakepath\\", "");
   $(this).parent().find('.file-name').html(value);
})

$(".js-history-back").click(function () {
   window.location.href = "./lc-vin-requests.html";
});

// vin request code - steps
const VIN_TITLE_STEP_1 = "Данные об автомобиле";
const VIN_TITLE_STEP_2 = "Необходимые вам запчасти и их количество";

let vrCurrentStep = 1;
const $mainEl = $(".vin-requests");
const $counterEl = $(".js-step-counter");
const $titleEl = $(".js-vr-title");

// next step
$(".js-next-step").click(function () {
   $counterEl.html("2");
   $titleEl.html(VIN_TITLE_STEP_2);
   $mainEl.removeClass("step-1");
   $mainEl.addClass("step-2");
   vrCurrentStep = 2;
   $("html, body").animate({ scrollTop: 0 }, 600);
});

// prev step
$(".js-prev-step").click(function () {
   $counterEl.html("1");
   $titleEl.html(VIN_TITLE_STEP_1);
   $mainEl.removeClass("step-2");
   $mainEl.addClass("step-1");
   vrCurrentStep = 1;
   $("html, body").animate({ scrollTop: 0 }, 600);
});

// invoice account
let timeoutToggle;
$('.js-ia-print').click(function (e) {
   e.stopPropagation();
   $(this).find('.icon_arrow').toggleClass('rotate');
   $(this).parent().find('.iar_dropdown').toggleClass('__hidden');

   clearTimeout(timeoutToggle);
   timeoutToggle = setTimeout(() => document.addEventListener('click', hiddenDropDown), 1);
});

function hiddenDropDown() {
   const $openDropdown = $('.iar_dropdown').not('.__hidden');

   if ($openDropdown) {
      $openDropdown.addClass('__hidden');
      $openDropdown.parent().find('.icon_arrow').removeClass('rotate');
   }
   document.removeEventListener('click', hiddenDropDown);
}

// toggle message block
$('.js-toggle-dialog').click(function () {
   $(this).toggleText('Показать ленту сообщений', 'Скрыть ленту сообщений');
   $(this).closest('.mt_row_wrapper').find('.message_block').toggleClass('__hidden');
});

$.fn.toggleText = function(t1, t2){
   if (this.text() == t1) this.text(t2);
   else                   this.text(t1);
   return this;
};