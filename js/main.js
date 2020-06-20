// ハンバーガーメニュー
$(function(){
    $('.menu').on('click',function(){
        $('.gnav').slideToggle(200);
        $('.menu').toggleClass('on');
    });
});



// $(document).ready(function(){
//     $('.slider').slick({
//         autoplay: true,
//         autoplaySpeed: 2000,
//         dots: true,
//         infinite: true,
//         speed: 2500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         fade: true,
//         cssEase: 'linear',
//     });
// });



// SCROLL
jQuery(function($) {
    $(window).scroll(function() {
        var headerHeight = $('.page-header').innerHeight();
        var scrollPos = $(this).scrollTop();
        if( scrollPos > headerHeight ) {
            $('.page-header').addClass('js_active js_active_res')
            $('.side-logo').addClass('js_active_side');
        }
        else {
            $('.page-header').removeClass('js_active js_active_res')
            $('.side-logo').removeClass('js_active_side');
        }
    });
});


// 自動かな入力
$(function() {
    $.fn.autoKana('#kanji', '#kana', {
        katakana : true  //true：カタカナ、false：ひらがな（デフォルト）
    });
});


// スクロールでふわっと現れるフェードイン
$(function(){
    $(window).scroll(function (){
        $('.left-to-right, .down-to-top, .right-to-left').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 200){
                $(this).addClass('scrollin');
            }
        });
    });
});


