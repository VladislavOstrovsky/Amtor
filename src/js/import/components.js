import $ from "jquery";

$("#vcp-form").submit(function (e) {
    if ($(".select-container").val() === "") {
        e.preventDefault();
        $(".select-container").addClass("error");
    }
});

let isMobile = false; //initiate as false
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
    isMobile = true;
}

function prepareSelectbox() {
    var $this = $(this), numberOfOptions = $(this).find('option').length;

    $this.addClass("select-hidden");
    $this.wrap("<div class=\"select\"></div>").parent();
    $this.after("<div class=\"select-styled\"></div>");

    var $styledSelect = $(this).parent().find(".select-styled");
    if ($this.hasClass("lcm-mobile")) {
        let convertUrl = location.pathname.split("/");
        convertUrl = convertUrl[convertUrl.length - 1].replace('.html', '');
        $styledSelect.text(getTextForSelectBox(convertUrl));
    } else {
        $styledSelect.text($this.find("option").eq(0).text());
    }

    var $list = $("<ul />", {
        "class": "select-options",
    }).insertAfter($styledSelect);

    for (var i = 0; i < numberOfOptions; i++) {
        $("<li />", {
            text: $this.find("option").eq(i).text(),
            rel: $this.find("option").eq(i).val(),
        }).appendTo($list);
    }

    var $listItems = $list.find("li");

    $styledSelect.click(function (e) {
        e.stopPropagation();
        $("div.select-styled.active").not(this).each(function () {
            $(this).removeClass("active").next("ul.select-options").hide();
        });
        $(this).toggleClass("active").next("ul.select-options").toggle();
    });

    $listItems.on('click', function (e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass("active");
        $this.val($(this).attr("rel"));
        $(this).parent().find(".active").removeClass("active");
        $(this).addClass("active");
        $this.addClass("active");
        $list.hide();

        if ($this.hasClass("lcm-mobile")) {
            location.href = `./${$this.get(0).value}.html`;
        }
    });

    $(document).click(function () {
        $styledSelect.removeClass("active");
        $list.hide();
    });

    $(document).ready(function () {
        if (!isMobile) {
            $(".select-options").mCustomScrollbar({
                autoHideScrollbar: true,
            });
        }
    });

    if ($(this).closest('.js-spare-part').hasClass('__copy')) {
        $(this).closest('.js-spare-part').removeClass('__copy');
    }

    if ($(this).closest('.js-vr-add-spare-part').hasClass('__copy')) {
        $(this).closest('.js-vr-add-spare-part').removeClass('__copy');
    }
}

// initial select box
$("select").each(prepareSelectbox);

// add spare part vin code popup
$(document).ready(function($) {
    var $copyEl = $('.js-spare-part');

    $('.js-add-part').click(function () {
        const ab = $(this).closest('.content').find('.js-copy-wrapper').append($copyEl.clone().addClass('__copy'));
        setTimeout(() => {
            const newSelect = ab.find('.js-spare-part.__copy').find('.select');
            newSelect.each(prepareSelectbox);
        }, 1);
    });

    // add spare part vin request page
    var $copyVinEl = $('.js-vr-add-spare-part');

    $('.js-vr-add-part').click(function () {
        const ab = $(this).before($copyVinEl.clone().addClass('__copy'));

        setTimeout(() => {
            const newSelect = ab.parent().find('.js-vr-add-spare-part.__copy').find('.select');
            newSelect.each(prepareSelectbox);
        }, 1);
    });
});

// js-detail-page slider
$(document).on("click", ".js-slider-card > div", function () {
    var $this = $(this),
        data = $this.attr("data-img"),
        imgSrc = $this.closest(".dpi_gallery").find(".dpi_gallery__main img").attr("src"),
        img = $this.closest(".dpi_gallery").find(".dpi_gallery__main img");
    $(".js-slider-card > div").removeClass("active");
    $this.addClass("active");

    if (!(data === imgSrc)) {
        img.fadeOut("fast", function () {
            img.attr("src", data);
            img.fadeIn("fast");
        });
    }
});

// product slider
$(".sp_slider").slick({
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: false,
            }
        }
    ]
});

$('.basket-btn.fancybox').on('touchstart click', function (e) {
    $(this).fancybox({
        scrolling: "no",
        touch: false,
        enableEscapeButton: true,
        helpers: {
            overlay: {
                locked: false,
                css: {"overflow": "hidden"}
            }
        },
    });
});

// get text for mobile lc
function getTextForSelectBox(value) {
    switch (value) {
    case "lc-balance":
    case "lc-balance-empty": {
        return "Баланс";
    }
    case 'lc-history':
    case 'lc-history-empty': {
        return 'История заказов';
    }
    case 'lc-basket':
    case 'lc-basket-empty': {
        return 'Корзина';
    }
    case 'lc-my-car':
    case 'lc-my-car-empty': {
        return 'Мои автомобили';
    }
    case 'lc-vin-requests':
    case 'lc-vin-requests-empty': {
        return 'VIN запросы';
    }
    case 'lc-invoices':
    case 'lc-invoices-empty':
    case 'lc-invoices-pay-confirmation': {
        return 'Счета';
    }
    case 'lc-invoice-account':
    case 'lc-invoice-account-empty': {
        return 'Накладные';
    }
    case 'lc-dispatches':
    case 'lc-dispatches-empty': {
        return 'Отправки';
    }
    case 'lc-messages':
    case 'lc-messages-empty': {
        return 'Сообщения';
    }
    case 'lc-friends':
    case 'lc-friends-empty': {
        return 'Друзья';
    }
    case 'lc-batch-percentage':
    case 'lc-batch-percentage-empty': {
        return 'Пакетная проценка';
    }
    case 'lc-bonuses':
    case 'lc-bonuses-empty': {
        return 'Бонусы';
    }
    case 'lc-manager': {
        return 'Менеджер';
    }
    case 'lc-return': {
        return 'Возврат товара';
    }
    case 'lc-personal-data': {
        return 'Личные данные';
    }
    }
}

// scroll top btn
$('.js-scroll-top').click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
   setTimeout(() => {
       $(this).removeClass('__show');
   }, 1);
});

// test page
$('.image_slider').slick({
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
});

// payment page
$('.js-payment-item').click(function () {
    $(this).parent().toggleClass('__open');
});