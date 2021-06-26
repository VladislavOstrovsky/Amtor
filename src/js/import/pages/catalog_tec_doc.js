import $ from "jquery";

// years filters
$('.js_years_filter').click(function () {
    if ($('.js_years_filter').hasClass('__selected')) {
        $('.js_years_filter').removeClass('__selected');
        $(this).addClass('__selected');
    } else {
        $(this).addClass('__selected');
    }
});

// accordion toggle
$('.js-accordion-link').on("click", function () {
    var $this = $(this);

    if ($this.next().hasClass("open")) {
        $this.next().removeClass("open");
        $this.toggleClass("active");
    } else {
        $this.toggleClass("active");
        $this.next().slideToggle();
    }
});
