// Adobeフォント読み込み
(function(d) {
    var config = {
        kitId: 'dxc5lvg',
        scriptTimeout: 3000,
        async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
})(document);
// END--Adobeフォント読み込み

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
        arrows: true,
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