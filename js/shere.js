$(function() {
  /*-----------------------------------------------------------
  // ソーシャルアイコン処理
  ------------------------------------------------------------*/
    //mobile 
    var mobile = location.href;
    var hatena = 'http://b.hatena.ne.jp/entry/'
    var google = 'https://plus.google.com/share?url='
    var twitter = 'https://twitter.com/intent/tweet?text='
    var pocket = 'https://getpocket.com/edit?url='
      // はてなブックマーク 
    var buttom = $('.social-buttons');
    var social = '<div title="上の文字をクリック" class="social_b"><a id="so_hatena" href="hatena + mobile" class="hatena-bookmark-button" data-hatena-bookmark-title="" title="このエントリーをはてなブックマークに追加"><img src="https://b.st-hatena.com/images/entry-button/button-only@2x.png" alt="このエントリーをはてなブックマークに追加" width="20" height="20" style="border: none;" /></a><p>はてなブックマーク</p><script type="text/javascript" src="https://b.st-hatena.com/js/bookmark_button.js" charset="utf-8" async="async"></script></div>';
      // google
      social += '<div title="クリックにて共有" class="social_b"><a id="so_google" href="'+ google + mobile +'" target="_blank"><i class="fa fa-google-plus"></i></a><p>Google+</p></div>'
      // twitter
      social += '<div title="クリックにてツイートする" class="social_b"><a id="so_twitter" href="'+ twitter + mobile +'" target="_blank"><i class="fa fa-twitter"></i></a><p>Twitter</p></div>'
      // pocket
      social += '<div title="この記事を保存する。" class="social_b"><a id="so_pocket" href="'+ pocket + mobile +'" target="_blank" class="pocket-btn" data-lang="ja"><i class="fa fa-get-pocket"></i></a><p>Pocket</p></div>'
    
    buttom.append(social);
  /*-----------------------------------------------------------
  // タイトルからブログのURL取得
  ------------------------------------------------------------*/
    $('.entry-title-link').each(function(){
      var href = $(this).attr('href');
      var title = $(this).text();
      var parent = $(this).parents('.entry-inner,.archive-entry');

      // はてなブックマーク 
      parent.find('#so_hatena').parent('div').css('color', '#008fde');
      parent.find('#so_hatena').attr({
        'href': hatena + href,
        'data-hatena-bookmark-title': title,
      });
      // Google +
      
      parent.find('#so_google').parent('div').css('color', '#db4a39');
      parent.find('#so_google').children('i').css('color', '#db4a39');
      parent.find('#so_google').attr('href', google + href);
      parent.find('#so_google').parent('div').click(function(){
        window.open(google + href, 'Gwindow', 'width=650, height=650, menubar=no, toolbar=no, scrollbars=yes');
        return false;
      });

      //twitter
      parent.find('#so_twitter').parent('div').css('color', '#55acee');
      parent.find('#so_twitter').children('i').css('color', '#55acee');
      parent.find('#so_twitter').attr('href', twitter + title + "　" +href + " #はてなブログ");
      parent.find('#so_twitter').parent('div').click(function(){
        window.open(twitter + title + "　" +href, 'TWwindow', 'width=650, height=450, menubar=no, toolbar=no, scrollbars=yes');
        return false;
      });

      //Pocket
      parent.find('#so_pocket').parent('div').css('color', '#d05254');
      parent.find('#so_pocket').children('i').css('color', '#d05254');
      parent.find('#so_pocket').attr('href', pocket + href);
      parent.find('#so_pocket').parent('div').click(function(){
        window.open(pocket +href , 'POwindow', 'width=650, height=450, menubar=no, toolbar=no, scrollbars=yes');
        return false;
      });
      
    });
});