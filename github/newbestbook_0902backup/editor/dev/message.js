var saveMsgJDom = null;
function showSaveMsg(msg) {
	if(saveMsgJDom == null){
		$('body').append('<div id="save_msg_ui" class="notice_stickie" style="display:none;"></div>');
		saveMsgJDom = $('div#save_msg_ui');
	}
	saveMsgJDom.clearQueue().hide();
	saveMsgJDom.html(msg);
	saveMsgJDom.show(0).delay(5000).hide(0);
}

var loadingObj = null;
var loadingBlockObj = null;
function showLoading() {
	if(loadingObj == null){
		$('body').append('<div id="loading_block" class="blockDiv"></div><div class="loading"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div>');
		
		loadingObj = $('.loading');
		loadingBlockObj = $('div#loading_block');
	}
	
	loadingObj.css("top", ($("html").scrollTop() + $("body").scrollTop()) + ($( window ).height() / 2));
	loadingBlockObj.css("top", ($("html").scrollTop() + $("body").scrollTop()));
	
	loadingObj.show();
	loadingBlockObj.show();
}

function hideLoading() {
	if(loadingObj != null){
		loadingObj.hide();
		loadingBlockObj.hide();
	}
}

var messageJDom = null;
function message(title, content) {
	if(messageJDom == null){
		messageJDom = $('<div class="Dialog confirm_panel"><div class="inner"><div class="icon_14_close close_btu"></div><h3 class="ta_left panel_title"></h3><p class="ta_left panel_content"></p><hr/><div class="ta_right toolbar"><a id="yes_btu" href="#" class="btn btn-navReport send">'+core.i18n.get("yes")+'</a></div></div></div>');
		messageJDom.appendTo( "body" );
		
		var btu = messageJDom.find(".toolbar");
		btu.find(".close_btu").on('click', function () {
			msgColse();
			return false;
		});
		btu.find("#yes_btu").on('click', function () {
			msgColse();
			return false;
		});
	}
	
	messageJDom.find(".panel_title").html(title);
	messageJDom.find(".panel_content").html(content);
	
	$('body').css({overflow: 'hidden'});
	messageJDom.addClass('is-visible');
}

function errorMsg(content) {
	hideLoading();
	message("Error", content);
}

function infoMsg(content) {
	hideLoading();
	message("", content);
}

function msgColse() {
	if(messageJDom != null){
		$('body').css({overflow: 'auto'});
		messageJDom.removeClass('is-visible');
	}
}

var confirmJDom = null;
function confirmMsg(title, content, callback) {
	if(confirmJDom == null){
		confirmJDom = $('<div class="Dialog confirm_panel"><div class="inner"><div class="icon_14_close close_btu"></div><h3 class="ta_left panel_title"></h3><p class="ta_left panel_content"></p><hr/><div class="ta_right toolbar"><a id="cancel_btu" href="#" class="btn outLinebtn-navReport cancel">'+core.i18n.get("cancel")+'</a><a id="yes_btu" href="#" class="btn btn-navReport send">'+core.i18n.get("yes")+'</a></div></div></div>');
		confirmJDom.appendTo( "body" );
		
		var btu = confirmJDom.find(".toolbar");
		btu.find(".close_btu").on('click', function () {
			confirmMsgColse();
			return false;
		});
		btu.find("#cancel_btu").on('click', function () {
			confirmMsgColse();
			return false;
		});
	}
	
	hideLoading();
	
	confirmJDom.find(".panel_title").html(title);
	confirmJDom.find(".panel_content").html(content);
	
	confirmJDom.find(".toolbar").find("#yes_btu").off('click').on('click', function () {
		(callback && typeof(callback) === "function") && callback();
		
		return false;
	});
	
	$('body').css({overflow: 'hidden'});
	confirmJDom.addClass('is-visible');
}

var confirmJDom1 = null;
function confirmMsgNotSelect(title, content, callback) {
	if(confirmJDom1 == null){
		confirmJDom1 = $('<div class="Dialog confirm_panel"><div class="inner"><div class="icon_14_close close_btu"></div><h3 class="ta_left panel_title"></h3><p class="ta_left panel_content"></p><hr/><div class="ta_right toolbar"><a id="cancel_btu" href="#" class="btn outLinebtn-navReport cancel">'+core.i18n.get("cancel")+'</a><a id="yes_btu" href="#" class="btn outLinebtn-navReport cancel">'+core.i18n.get("yes")+'</a></div></div></div>');
		confirmJDom1.appendTo( "body" );
		
		var btu = confirmJDom1.find(".toolbar");
		btu.find(".close_btu").on('click', function () {
			confirmMsgColse();
			return false;
		});
		btu.find("#cancel_btu").on('click', function () {
			confirmMsgColse();
			return false;
		});
	}
	
	hideLoading();
	
	confirmJDom1.find(".panel_title").html(title);
	confirmJDom1.find(".panel_content").html(content);
	
	confirmJDom1.find(".toolbar").find("#yes_btu").off('click').on('click', function () {
		(callback && typeof(callback) === "function") && callback();
		
		return false;
	});
	
	$('body').css({overflow: 'hidden'});
	confirmJDom1.addClass('is-visible');
}

function confirmMsgColse() {
	if(confirmJDom != null){
		$('body').css({overflow: 'auto'});
		confirmJDom.removeClass('is-visible');
	}
	if(confirmJDom1 != null){
		$('body').css({overflow: 'auto'});
		confirmJDom1.removeClass('is-visible');
	}
}