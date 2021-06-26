import $ from "jquery";

require("../../../js/import/maskedinput/jquery.maskedinput.min");
require("../../../js/jquery.fancybox.min");

// masked input
$("#sip-phone-number").mask("+7(999) 999-9999");
$("#ocp-phone-number").mask("+7(999) 999-9999");
$("#sup-phone-number").mask("+7(999) 999-9999");
$("#rvc-phone-number").mask("+7(999) 999-9999");
$("#sup-l-phone-number").mask("+7(999) 999-9999");
$("#sup-n-phone-number").mask("+7(999) 999-9999");
$(".js-form-phone-number").mask("+7(999) 999-9999");

// mobile menu
let isMobile = false; //initiate as false
// device detection
if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
    isMobile = true;
}

// category dropdohff_formwn
$(".btn_burger.desktop").click(function (e) {
    e.stopPropagation();
    $(this).toggleClass("open");
    $(".sbc_dropdown").toggleClass("hidden");

    $(document).click(() => {
        if ($(this).hasClass("open")) {
            $(this).removeClass("open");
            $(".sbc_dropdown").addClass("hidden");
        }
    });
});

// Add en remove class on menu item hover
$(".sbc_dropdown > ul > li").mouseover(function () {
    $(this).addClass("show").siblings().removeClass("show");
});

// Get the minimum height the big-nav elemtn
var min_height = 50;
$(".sbc_dropdown > ul > li > ul").each(function () {
    var this_height = $(this).outerHeight();
    if (this_height > min_height) min_height = this_height;
});

// category dropdown end

$(".load-more-btn").click(function () {
    $(".header__tags_wrapper").removeClass("without-navigation");
    $(this).hide();
    $(".slick-next")[0].click();
});

$(".tags-carousel").slick({
    speed: 300,
    variableWidth: true,
    draggable: false,
    swipe: false,
});

// fancybox
var $initialSliderPopup = false;

$(".fancybox").fancybox({
    scrolling: "no",
    touch: false,
    enableEscapeButton: true,
    helpers: {
        overlay: {
            locked: false,
            css: {"overflow": "hidden"}
        }
    },
    afterShow: function (el) {
        // quick view description
        if (el.current.src === '#quick-view-description-popup' && !$initialSliderPopup) {
            $(".qvd_mobile_slider").slick({
                speed: 300,
                slidesToShow: 1,
                dots: true,
                arrows: false,
            });
            $initialSliderPopup = true;
        }
    }
});

$(document).ready(function () {
    $(".sb_dropdown").mCustomScrollbar({
        autoHideScrollbar: true,
    });

    $(window).scroll(function () {
        const sticky = $("header");
        const scroll = $(window).scrollTop();

        if (scroll >= 100) {
            sticky.addClass("fixed");

            if (isMobile) {
                $(document.body).css("padding-top", "225px");
            } else {
                $(document.body).css("padding-top", "234px");
            }
        } else {
            sticky.removeClass("fixed");
            $(document.body).css("padding-top", "0");
        }
    });
});

if (isMobile) {
    $(".js-search-btn").on("click", function () {
        const $searchInput = $(".js-header-search");

        if ($searchInput.hasClass("not-empty")) {
            $searchInput.val("");
            $(".sb_dropdown").addClass("hidden");
            $(".search-input_wrapper").removeClass("with-dropdown");
            $(document.body).removeClass("__hidden");
        }
    });

    $(".js-mobile-catalog").on("click", function () {
        $(".btn_burger.mobile").toggleClass("open");
        $(".page").attr("style", "transform: initial;");
        $("#mobile-menu").removeClass("show");
        $(".menu_catalogs_wrapper").hide().show(0);
        setImmediate(() => {
            $(".menu_catalogs_wrapper").addClass("__opened");
        }, 1);
    });
}

// input add class logic
$(".input").on("input change", function (e) {
    e.stopPropagation();
    const tmpval = $(this).val();
    if (tmpval === "") {
        $(this).addClass("empty");
        $(this).removeClass("not-empty");
    } else {
        $(this).addClass("not-empty");
        $(this).removeClass("empty");
    }

    if ($(this).hasClass("js-header-search")) {
        // search input
        if ($(".js-header-search").hasClass("not-empty")) {
            if (isMobile) {
                $(document.body).addClass("__hidden");
            }
            $(".sb_dropdown").removeClass("hidden");
            $(".search-input_wrapper").addClass("with-dropdown");
        } else {
            if (isMobile) {
                $(document.body).removeClass("__hidden");
            }
            $(".sb_dropdown").addClass("hidden");
            $(".search-input_wrapper").removeClass("with-dropdown");
        }
    }
});

// request vin code add spare
$(".add-spare-part").on("click", function () {
});

// mobile menu
$(document).ready(function () {
    $(".btn_burger.mobile").click(function (e) {
        e.stopPropagation();
        $(this).toggleClass("open");
        $("#mobile-menu").toggleClass("show");

        if ($(this).hasClass("open")) {
            $(".page").attr("style", "transform: translate3d(269px, 0px, 0px);");
        } else {
            $(".page").attr("style", "transform: initial;");
        }
    });

    // bread-crumbs
    if ($(".bread-crumbs").innerWidth() >= $(window).innerWidth() - 40) {
        $(".bread-crumbs").addClass("__hidden");
    }
});

// basket-popup logic
$(".js-basket-dec").click(function () {
    const $countValue = $(".js-basket-count").val();

    if ($countValue > 1) {
        $(".js-basket-count").val(+$countValue - 1);
    }

    if ($countValue - 1 === 1 || "") {
        $(".js-basket-dec").prop("disabled", true);
    } else {
        $(".js-basket-dec").prop("disabled", false);
    }
});

$(".js-basket-inc").click(function () {
    const $countValue = $(".js-basket-count").val();

    if ($countValue > 0) {
        $(".js-basket-count").val(+$countValue + 1);

        if ($(".js-basket-dec").prop("disabled")) {
            $(".js-basket-dec").prop("disabled", false);
        }
    }
});

// clickable row table
$(document).ready(function($) {
    $('.clickable_row').click(function() {
        window.location = $(this).data("href");
    });
});

// insert example vin code in input
$(".js-search-help").click(function () {
    $(".js-search-input").val($(this).html());
});
