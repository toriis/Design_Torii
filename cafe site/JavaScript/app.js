//ページ内スクロールでゆっくり移動させる
$(function(){
    $('a[href^="#"]').click(function() {     /* リンク先が#から始まる時 */
      var speed = 500;                     /* スクロールにかける時間を設定 */
      var href = $(this).attr("href");     /* hrefの内容を取得 */
      var target = $(href == "#" ? 'html' : href);  /* hrefが#だけだった場合、htmlに置き換えて、そうでない場合はhrefの値をtargetに格納 */
      var position = target.offset().top;  /* 飛び先のIDの上からの位置を取得 */
      $('body,html').animate({scrollTop:position}, speed, 'swing'); /* cssのアニメーションを使ってスクロールさせる */
        return false;
    });
});
 //END--ページ内スクロールでゆっくり移動させる

$(function() {
    var topBtn = $('#page_top');
    topBtn.hide();

    //ボタンの表示設定
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