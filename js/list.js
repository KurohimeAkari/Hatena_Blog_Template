/*-----------------------------------------------------------
// (C) Kurohime Akari + TMC45 INC様
// Website: http://shioneko.sakura.ne.jp
// はてなブログ用 Blog Templates . Varsion 1.0.0
//
// Comments: Game blog.js 制作
//
------------------------------------------------------------*/
/*-----------------------------------------------------------
// http://tech.tmd45.jp/entry/2012/04/03/170348 様の改変
------------------------------------------------------------*/

$(function() {
	//[ 表示させる数 ]----------------------------------------//
	var hideSize = 8;
	var removeSize = 3;
	//------------------------------------------------------//

	var categories = $(".hatena-module-category ul li a");
	$.each(
		categories,
		function(index, domEle) {
			var ele = $(domEle);
			var texts = $.trim(ele.text());
			
			// リンクテキストから記事件数を取得
			var count1 = texts.match(/\([^\(\s +]+\)/);
			var count2 = count1[0].match(/\d+/);
			
			if(count2 <= removeSize) {
				ele.parent('li').remove();
			} else if (count2 <= hideSize){
				ele.parent('li').hide();
			}
			// リンクテキストから記事件数を除去
			ele.text(texts.replace(/\([^\(\s +]+\)/, ''));
			// ツールチップに記事件数含めて表示する（title要素）
			ele.attr("title", texts);
		}
	);
	$('.hatena-module-category').append('<div id="list_c">クリックにて追加表示</div>');
		$('#list_c').css({
			clear: 'both',
			width: '91%',
			padding: '2px 10px',
			border: '1px solid #666',
			margin: '5px auto',
			"border-radius": '3px',
			"text-align": 'center',
		});
		$('#list_c').click(function() {
			categories.parent('li').slideDown();
			$(this).fadeOut('slow');
		});
		$('#list_c').hover(function() {
			$(this).css({
				color : '#666',
				background: '#ccc'
			});
		}, function() {
			$(this).css({
				color : 'inherit',
				background: 'inherit'
		});
	});
/*
		$('h4.click').nextAll('p').hide();
		$('h4.click').nextAll('p').next('div').hide();
		$('h4.click').append(' :表示したい場合はクリック')
		$('h4.click').click(function(event) {
			$(this).nextAll('p').toggle('slow');
		});
		*/

	/* -----------------------------------------------------------
	// Milliard ( 設置型 コンテンツ)
	------------------------------------------------------------*/
});