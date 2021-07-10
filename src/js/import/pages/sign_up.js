import $ from "jquery";

// Физическое лицо
const NATURAL_TITLE_STEP_1 = "Ключевые регистрационные данные";
const NATURAL_TITLE_STEP_2 = "Ваши контактные данные";
const NATURAL_TITLE_STEP_3 = "Адрес доставки";

// next step
let currentStep = 1;
const $signUpClassNatural = $(".sign-up-natural");
const $counterNatural = $(".js-reg-counter");
const $titleNatural = $(".js-reg-title");

$(".js-reg-next-step").click(function () {
    if (currentStep === 1) {
        $counterNatural.html("2");
        $titleNatural.html(NATURAL_TITLE_STEP_2);
        $signUpClassNatural.removeClass("step-1");
        $signUpClassNatural.addClass("step-2");
        currentStep = 2;
    } else if (currentStep === 2) {
        $counterNatural.html("3");
        $titleNatural.html(NATURAL_TITLE_STEP_3);
        $signUpClassNatural.removeClass("step-2");
        $signUpClassNatural.addClass("step-3");
        currentStep = 3;
    }
    $("html, body").animate({ scrollTop: 0 }, 600);
});

// prev step
$(".js-reg-prev-step").click(function () {
    $counterNatural.html("1");
    $titleNatural.html(NATURAL_TITLE_STEP_1);
    $signUpClassNatural.removeClass("step-2");
    $signUpClassNatural.addClass("step-1");
    currentStep = 1;
    $("html, body").animate({ scrollTop: 0 }, 600);
});

// Юридическое лицо
const LEGAL_TITLE_STEP_1 = "Ключевые регистрационные данные";
const LEGAL_TITLE_STEP_2 = "Ваши контактные данные";
const LEGAL_TITLE_STEP_3 = "Данные о компании";
const LEGAL_TITLE_STEP_4 = "Юридический адрес";
const LEGAL_TITLE_STEP_5 = "Адрес доставки";

const $signUpClassLegal = $(".sign-up-legal");
const $counterLegal = $(".js-reg-legal-counter");
const $titleLegal = $(".js-reg-legal-title");

$(".js-reg-legal-next-step").click(function () {
    switch (currentStep) {
    case 1: {
        $counterLegal.html("2");
        $titleLegal.html(LEGAL_TITLE_STEP_2);
        $signUpClassLegal.removeClass("step-1");
        $signUpClassLegal.addClass("step-2");
        currentStep = 2;
        break;
    }
    case 2: {
        $counterLegal.html("3");
        $titleLegal.html(LEGAL_TITLE_STEP_3);
        $signUpClassLegal.removeClass("step-2");
        $signUpClassLegal.addClass("step-3");
        currentStep = 3;
        break;
    }
    case 3: {
        $counterLegal.html("4");
        $titleLegal.html(LEGAL_TITLE_STEP_4);
        $signUpClassLegal.removeClass("step-3");
        $signUpClassLegal.addClass("step-4");
        currentStep = 4;
        break;
    }
    case 4: {
        $counterLegal.html("5");
        $titleLegal.html(LEGAL_TITLE_STEP_5);
        $signUpClassLegal.removeClass("step-4");
        $signUpClassLegal.addClass("step-5");
        currentStep = 5;
        break;
    }
    }
    $("html, body").animate({ scrollTop: 0 }, 600);
});

$(".js-history-back").click(function () {
   window.location.href = "./sign-up-select.html";
});

// prev step
$(".js-reg-legal-prev-step").click(function () {
    switch (currentStep) {
    case 2: {
        $counterLegal.html("1");
        $titleLegal.html(LEGAL_TITLE_STEP_1);
        $signUpClassLegal.removeClass("step-2");
        $signUpClassLegal.addClass("step-1");
        currentStep = 1;
        break;
    }
    case 3: {
        $counterLegal.html("2");
        $titleLegal.html(LEGAL_TITLE_STEP_2);
        $signUpClassLegal.removeClass("step-3");
        $signUpClassLegal.addClass("step-2");
        currentStep = 2;
        break;
    }
    case 4: {
        $counterLegal.html("3");
        $titleLegal.html(LEGAL_TITLE_STEP_3);
        $signUpClassLegal.removeClass("step-4");
        $signUpClassLegal.addClass("step-3");
        currentStep = 3;
        break;
    }
    }
    $("html, body").animate({ scrollTop: 0 }, 600);
});