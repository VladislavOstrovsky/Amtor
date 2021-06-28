import $ from "jquery";

$('#vcp-form').submit(function(e) {
    if ($('.select-container').val() === '') {
        e.preventDefault();
        $('.select-container').addClass('error');
    }
});

// select box
$('select').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;

    $this.addClass('select-hidden');
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());

    var $list = $('<ul />', {
        'class': 'select-options',
    }).insertAfter($styledSelect);

    $(document).ready(function() {
        $(".select-options").mCustomScrollbar({
            autoHideScrollbar: true,
        });
    });

    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val(),
        }).appendTo($list);
    }

    var $listItems = $list.children('li');

    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function(){
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });

    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $(this).parent().find('.active').removeClass('active');
        $(this).addClass('active');
        $this.addClass('active');
        $list.hide();
    });

    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });
});

// js-detail-page slider
$(document).on('click', '.js-slider-card > div', function () {
    var $this = $(this),
        data = $this.attr('data-img'),
        imgSrc = $this.closest('.dpi_gallery').find('.dpi_gallery__main img').attr('src'),
        img = $this.closest('.dpi_gallery').find('.dpi_gallery__main img');
    $('.js-slider-card > div').removeClass('active');
    $this.addClass('active');

    if(!(data === imgSrc)) {
        img.fadeOut('fast', function () {
            img.attr('src', data);
            img.fadeIn('fast');
        });
    }
});

