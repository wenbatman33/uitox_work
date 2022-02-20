var preLoad = null;
var viewer = null;
function initRevise() {
	$( window ).resize(function() {
		$("#splitterContainer").css("height", $( window ).height() - 105);
		$("#viewer_panel").css("height", $( "#rightPane" ).height() - 70);
		$("#original_panel").css("height", $( "#leftPane" ).height() - 35);
	});
	
	bookReviseOpt.setDataLinkedOpt(window.localStorage.getItem("data_linked_opt"));
	bookReviseOpt.setViewerPanelOpt(window.localStorage.getItem("viewer_panel_opt"));
	
	loadOriginalConfirm();
	
	if(!isNull(imgMeta) && !isNull(imgMeta.pagecount)){
		var original = $("#original_panel .original");
		
		for(var i=0;i<imgMeta.pagecount;i++){
			var idx = (i+1);
			
			var page = null;
			for(var p=0;p<imgMeta.pages.length;p++){
				if(imgMeta.pages[p].pn == idx){
					page = imgMeta.pages[p];
					break;
				}
			}
			if(page != null){
				original.append('<div class="item" style="height:'+page.h+'px; width:'+page.w+'px;" pn="'+page.pn+'"><img pn="'+page.pn+'" src="./images/bookcover-default.jpg" pre_src="originalImg/'+book_id+'/'+page.pn+'"/></div>');
			}
		}
	}
	
	preLoad = new imagePreLoad();
	preLoad.singleThread=true;
	preLoad.stretch=700;
	preLoad.initPreLoad();
	
	initOriginalScrollTrigger();
	
	$("#original_panel").on("scrollstop", function() {
		preLoad.setViewRange();
		preLoad.scanImage();
		originalScrollTrigger();
	});
	
	$(".viewer_frame").load(function(){
		viewer = $(".viewer_frame")[0].contentWindow['viewer'];
	});
	
	$("#splitterContainer").css("height", $( window ).height() - 105);
	
	var minWidth = 350;
	var maxWidth = $( window ).width() * 0.6;
	
	////imgMeta
	if(!isNull(imgMeta) && !isNull(imgMeta.pagecount)){
		$('#leftPane').css("width", "40%");
		$('#rightPane').css("width", "60%");
		
	}else{
		$('#leftPane').css("width", "0%");
		$('#rightPane').css("width", "100%");
		
		minWidth = 0;
	}
	
	$("#splitterContainer").splitter({
		minAsize: minWidth,
		maxAsize: maxWidth,
		splitVertical:true,
		A:$('#leftPane'),
		B:$('#rightPane'),
		closeableto: 0.5
	});
	
	$(".wrapper-dropdown").click(function(){
		var jDom = $(this);
		if(jDom.hasClass("active")){
			$(this).removeClass("active");
		}else{
			hideDropdown();
			$(this).addClass("active");
		}
		return false;
	});
	
	$(".dropdown li").bind( "click", function() {
		$( this ).closest(".wrapper-dropdown").removeClass("active");
		return false;
	});

	$(window).click(function(){
		hideDropdown();
		return false;
	});
	
	
	$("#data_linked_opt .resize").click(function(){
		$( this ).closest(".wrapper-dropdown").removeClass("active");
		bookReviseOpt.setDataLinkedOpt( this.id);
		
		return false;
	});
	
	$("#viewer_panel_opt .resize").click(function(){
		bookReviseOpt.setViewerPanelOpt(this.id);
		$( this ).closest(".wrapper-dropdown").removeClass("active");
		
		return false;
	});
	
	loadRangeSlider();
	
	$("#btu_original_confirm a").bind( "click", function() {
		var jDom = $( this );
		jDom.closest(".wrapper-dropdown").removeClass("active");
		loadOriginalConfirmFocus(jDom.attr("idx"));
		return false;
	});
	
	$("#btu_left_page").bind( "click", function() {
		goLeftPage();
		return false;
	});
	
	$("#btu_right_page").bind( "click", function() {
		goRightPage();
		return false;
	});

	$("#btu_justify_left").bind( "click", function() {
		setJustifyStyle('justifyLeft');
		return false;
	});

	$("#btu_justify_center").bind( "click", function() {
		setJustifyStyle('justifyCenter');
		return false;
	});
	
	$("#btu_justify_right").bind( "click", function() {
		setJustifyStyle('justifyRight');
		return false;
	});
	
	$("#btu_justify_full").bind( "click", function() {
		setJustifyStyle('justifyFull');
		return false;
	});
	
	$("#btu_remove_rormat").bind( "click", function() {
		removeFormat();
		return false;
	});

	$("#btu_block_h1").bind( "click", function() {
		formatBlock('h1');
		$( this ).closest(".wrapper-dropdown").removeClass("active");
		return false;
	});
	
	$("#btu_block_h2").bind( "click", function() {
		formatBlock('h2');
		$( this ).closest(".wrapper-dropdown").removeClass("active");
		return false;
	});
	
	$("#btu_block_h3").bind( "click", function() {
		formatBlock('h3');
		$( this ).closest(".wrapper-dropdown").removeClass("active");
		return false;
	});
	
	$("#btu_block_p").bind( "click", function() {
		formatBlock('p');
		$( this ).closest(".wrapper-dropdown").removeClass("active");
		return false;
	});

	$("#btu_format_bold").bind( "click", function() {
		setFormat('bold');
		return false;
	});
	
	$("#btu_format_italic").bind( "click", function() {
		setFormat('italic');
		return false;
	});
	
	$("#btu_format_underline").bind( "click", function() {
		setFormat('underline');
		return false;
	});
	
	$("#btu_format_strikeThrough").bind( "click", function() {
		setFormat('strikeThrough');
		return false;
	});
	
	$("#btu_format_superscript").bind( "click", function() {
		setFormat('superscript');
		$( this ).closest(".wrapper-dropdown").removeClass("active");
		return false;
	});
	
	$("#btu_format_subscript").bind( "click", function() {
		setFormat('subscript');
		$( this ).closest(".wrapper-dropdown").removeClass("active");
		return false;
	});

	$("#btu_save").bind( "click", function() {
		console.log("contentIsChange: "+contentIsChange());
		contentSave();
		return false;
	});
	
	$("#btu_undo").bind( "click", function() {
		ExecCommand('undo');
		return false;
	});
	
	$("#btu_redo").bind( "click", function() {
		ExecCommand('redo');
		return false;
	});

	$(".ColorPicker div.color-items").bind( "click", function() {
		var color = $(this).attr("title");
		setFontColor(color);
		$( this ).closest(".wrapper-dropdown").removeClass("active");
		return false;
	});
	
	$("#btu_fontsize_200").bind( "click", function() {
		setFontSize("200%");
		$( this ).closest(".wrapper-dropdown").removeClass("active");
		return false;
	});
	
	$("#btu_fontsize_150").bind( "click", function() {
		setFontSize("150%");
		$( this ).closest(".wrapper-dropdown").removeClass("active");
		return false;
	});
	
	$("#btu_fontsize_120").bind( "click", function() {
		setFontSize("120%");
		$( this ).closest(".wrapper-dropdown").removeClass("active");
		return false;
	});
	
	$("#btu_fontsize_75").bind( "click", function() {
		setFontSize("75%");
		$( this ).closest(".wrapper-dropdown").removeClass("active");
		return false;
	});
	
	//btu_original_zoomin
	$("#btu_original_zoomin").bind( "click", function() {
		originalZoomControl = originalZoomControl + 0.25;
		if(originalZoomMax < originalZoomControl){
			originalZoomControl = originalZoomMax;
		}
		originalChangeZoom();
		
		return false;
	});
	
	//btu_original
	$("#btu_original").bind( "click", function() {
		originalZoomControl = 1;
		originalChangeZoom();
		
		return false;
	});
	
	//btu_original_zoomout
	$("#btu_original_zoomout").bind( "click", function() {
		originalZoomControl = originalZoomControl - 0.25;
		if(originalZoomMin > originalZoomControl){
			originalZoomControl = originalZoomMin;
		}
		originalChangeZoom();
		
		return false;
	});
}

function hideDropdown() {
	$(".wrapper-dropdown").removeClass("active");
}

var bookReviseOpt = new BookReviseOpt();
function BookReviseOpt() {
	this.data_linked_opt = "linked_two";
	this.viewer_panel_opt = "iPhone-5s";
	
	this.getDataLinkedOpt = function() {
		return this.data_linked_opt;
	};
	this.setDataLinkedOpt = function(value) {
		if(!isNull(value)){
			var opts = $("#data_linked_opt #"+value);
			if(opts.length > 0){
				this.data_linked_opt = value;
				window.localStorage.setItem("data_linked_opt", value);
				
				opts.closest("div").find("span").html(opts.html());
			}
		}
	};

	this.getViewerPanelOpt = function() {
		return this.viewer_panel_opt;
	};
	this.setViewerPanelOpt = function(value) {
		if(!isNull(value)){
			var opts = $("#viewer_panel_opt #"+value);
			if(opts.length > 0){
				this.viewer_panel_opt = value;
				window.localStorage.setItem("viewer_panel_opt", value);
				
				$("#viewer_panel .viewer").attr("class", "viewer "+this.viewer_panel_opt);
				opts.closest("div").find("span").html(opts.html());
			}
		}
	};
}