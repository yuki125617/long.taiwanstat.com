"use strict";
(function(window, document, undefined) {

	var str = '<header>'
		str += '<span id="stat-title">用數據看台灣  </span>'
		str += '</header>'
		str += '<div class="btn-sites">'
		str += '<a href="http://real.taiwanstat.com/">'
		str += '<div class="ui pink button">所有即時資料</div>'
		str += '</a>'
		str += '<a href="http://long.taiwanstat.com/">'
		str += '<div class="ui pink button">所有統計資料</div>'
		str += '</a>'
		str += '<a href="http://taiwanstat.com/">'
		str += '<div class="ui pink button">用數據看台灣官網</div>'
		str += '</a>'
		str += '<a href="https://www.facebook.com/taiwanstat">'
		str += '<div class="ui pink button">Facebook 粉絲專頁</div>'
		str += '</a>'
		str += '</div>'

		var discussion = '<discussion>'
				discussion += '<span id="discussion_title">數據討論區</span>'
				discussion += '<div id="fb-root"></div>'
				discussion += '<script>'
				discussion += '(function(d, s, id) {var js, fjs = d.getElementsByTagName(s)[0];if (d.getElementById(id)) return;js = d.createElement(s); js.id = id;js.src = "//connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=v2.3&appId=1659889874241396";fjs.parentNode.insertBefore(js, fjs);}(document, "script", "facebook-jssdk"));'
				discussion += '</script>'
				discussion +='<div class="fb-comments" data-href="' + document.location.href + '" data-width="100%" data-numposts="8"></div>'
				discussion += '</discussion>'


	$('body').prepend(str);
	$('body').append(discussion);



  // grab an element
	var myElement = document.querySelector("header");
	// construct an instance of Headroom, passing the element
	var headroom  = new Headroom(myElement);
	// initialise
	headroom.init();



})(window, document)
