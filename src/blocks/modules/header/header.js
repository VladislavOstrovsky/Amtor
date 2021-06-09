import $ from 'jquery';

$('.btn_burger').click(function() {
    $(this).toggleClass('open');
});

$('.load-more-btn').click(function () {
    $('.header__tags_wrapper').removeClass('without-navigation');
    $(this).hide();
    $('.slick-next')[0].click();
});

$(window).scroll(function(){
    const sticky = $('header');
    const scroll = $(window).scrollTop();

    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
});

$('.tags-carousel').slick({
    speed: 300,
    variableWidth: true,
    draggable: false,
});

// input add class logic
$('.input').on('input', function(){
    const tmpval = $(this).val();
    if(tmpval === '') {
        $(this).addClass('empty');
        $(this).removeClass('not-empty');
    } else {
        $(this).addClass('not-empty');
        $(this).removeClass('empty');
    }
});

$('.responsive').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
