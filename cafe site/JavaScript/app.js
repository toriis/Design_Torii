// スクロールでヘッダー部分の背景色を出現させる
$(window).on('load scroll', function(){
    $(function(){
        var imgHeight = $('#js-mainVisual').outerHeight() - 50; //画像の高さを取得 位置調整のため-50する
        var header = $('#js-header'); //ヘッダーコンテンツ

            if ($(window).scrollTop() < imgHeight) {
                //メインビジュアル内にいるので、クラスを外す
                header.removeClass('headerColor-default');
            }else {
                //メインビジュアルより下までスクロールしたので、クラスを付けて色を変える
                header.addClass('headerColor-default');
            }
    });
});
// END--スクロールでヘッダー部分の背景色を出現させる

// ページ内スクロールでゆっくり移動させる
$(function(){
    $('a[href^="#"]').click(function() {     /* リンク先が#から始まる時 */
        var speed = 500;                     /* スクロールにかける時間を設定 */
        var href = $(this).attr("href");     /* hrefの内容を取得 */
        var target = $(href == "#" ? 'html' : href);  /* hrefが#だけだった場合、htmlに置き換えて、そうでない場合はhrefの値をtargetに格納 */
        var position = target.offset().top - 50;  /* 飛び先のIDの上からの位置を取得 位置調整のため-50する*/
      $('body,html').animate({scrollTop:position}, speed, 'swing'); /* cssのアニメーションを使ってスクロールさせる */
        return false;
    });
});
 // END--ページ内スクロールでゆっくり移動させる

// ページトップボタン
$(function() {
    var topBtn = $('#page_top');
    topBtn.hide();

    // ボタンの表示設定
    $(window).scroll(function() {
        if($(this).scrollTop() > 1000) {
        // 画面を1000pxスクロールしたら、ボタンを表示する
        topBtn.fadeIn();
        } else {
        // 画面が1000pxより上なら、ボタンを表示しない
        topBtn.fadeOut();
        }
    });
    
    // ボタンをクリックしたら、スクロールして上に戻る
    topBtn.click(function() {
        $('body,html').animate({
        scrollTop: 0},500);
        return false;
    });
});
// END--ページトップボタン

// ハンバーガーメニュー表示・非表示
$(function() {
    $('.btn,.sp_nav li a').click(function() {
        $('.sp_nav').fadeToggle();
        $('.btn').toggleClass('open');
    });
});
// END--ハンバーガーメニュー表示・非表示

// スライダー
$(function() {
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 2500,
        dots: true,
        arrows: false,
        pauseOnFocus: false,
        pauseOnHover: false
    });

    $('.slider2').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 768, // 767px以下のサイズに適用
                settings: {
                slidesToShow: 1,
                },
            },
        ],
    });
});
// END--スライダー