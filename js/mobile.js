$(function() {
  /*-----------------------------------------------------------
  // ソーシャルアイコン処理
  ------------------------------------------------------------*/
    // 公式ボタンを削除
    $('.social-button-units').remove();
    //mobile モバイル版のみあるのをIF(each)で処理をする。
    $('.header-blog-icon').each(function() {
      var mobile = location.href;
      var hatena = 'http://b.hatena.ne.jp/entry/'
      var google = 'https://plus.google.com/share?url='
      var twitter = 'https://twitter.com/intent/tweet?text='
      var pocket = 'https://getpocket.com/edit?url='
        // はてなブックマーク 
      var buttom = $('.social-buttons');
      var social = '<div title="上の文字をクリック"><a id="so_hatena" href="hatena + mobile" class="hatena-bookmark-button" data-hatena-bookmark-title="" title="このエントリーをはてなブックマークに追加"><img src="https://b.st-hatena.com/images/entry-button/button-only@2x.png" alt="このエントリーをはてなブックマークに追加" width="20" height="20" style="border: none;" /></a><p>はてなブックマーク</p><script type="text/javascript" src="https://b.st-hatena.com/js/bookmark_button.js" charset="utf-8" async="async"></script></div>';
        // google
        social += '<div title="クリックにて共有"><a id="so_google" href="'+ google + mobile +'" target="_blank"><i class="fa fa-google-plus"></i></a><p>Google+</p></div>'
        // twitter
        social += '<div title="クリックにてツイートする"><a id="so_twitter" href="'+ twitter + mobile +'" target="_blank"><i class="fa fa-twitter"></i></a><p>Twitter</p></div>'
        // pocket
        social += '<div title="この記事を保存する。"><a id="so_pocket" href="'+ pocket + mobile +'" target="_blank" class="pocket-btn" data-lang="ja"><i class="fa fa-get-pocket"></i></a><p>Pocket</p></div>'
      
      buttom.append(social);
      $("i.fa").css('margin-left', '18px');
      });
    
});