var rangeSliderArr = [];//{"cid", "tag", "desc"}
function loadRangeSlider() {
	var tagCount = 0;
	if(!isNull(mappingMeta) && !isNull(mappingMeta.chapter)){
		for(var c=0;c<mappingMeta.chapter.length;c++){
			for(var t=0;t<mappingMeta.chapter[c].tags.length;t++){
				tagCount++;
			}
		}
		
		var range = parseInt(tagCount / 100);
		if(range < 1){
			range = 1;
		}
		
		var start = 0;
		for(var c=0;c<mappingMeta.chapter.length;c++){
			for(var t=0;t<mappingMeta.chapter[c].tags.length;t++){
				if((start % range) == 0 && rangeSliderArr.length < 100){
					rangeSliderArr.push({"cid": mappingMeta.chapter[c].cid, "tag": mappingMeta.chapter[c].tags[t], "desc": rangeSliderArr.length+ " %"});
				}
				start++;
				
				if(rangeSliderArr.length == 100 && start == tagCount){
					rangeSliderArr.push({"cid": mappingMeta.chapter[c].cid, "tag": mappingMeta.chapter[c].tags[t], "desc": rangeSliderArr.length+ " %"});
				}
				
				mappingMeta.chapter[c].tags[t].jump = (rangeSliderArr.length - 1);
			}
		}
		
		initRangeSlider(mappingMeta);
	}
}

var focusRangeSlider = false;
function initRangeSlider() {
	var tooltip = $('<div id="range_tooltip" />').hide();
	
	$(".RangeSlider").slider({
	    value: 0,
	    min: 0,
	    max: (rangeSliderArr.length -1),
	    step: 0,
	    slide: function(event, ui) {
	    	focusRangeSlider = true;
	        tooltip.text(rangeSliderArr[ui.value].desc);
	    },
	    change: function(event, ui) {
	    	if(focusRangeSlider){
	    		changeRangeSlider(ui.value);
	    	}
	    	
	    	tooltip.text(rangeSliderArr[ui.value].desc);
	    	focusRangeSlider = false;
	    }
	}).find(".ui-slider-handle").append(tooltip).hover(function() {
	    tooltip.show();
	    
	}, function() {
	    tooltip.hide();
	});
}

function changeRangeSlider(idx) {
	var original_panel = $("#original_panel");
	
	var foucsDiv = original_panel.find("div[pn='"+rangeSliderArr[idx].tag.pn+"']");
	var foucsImg = foucsDiv.find("img[pn='"+rangeSliderArr[idx].tag.pn+"']");
	var nowTag = rangeSliderArr[idx].tag;
	
	if(bookReviseOpt.getDataLinkedOpt() == 'linked_two' || bookReviseOpt.getDataLinkedOpt() == 'linked_eBook'){
		focusOriginalAndMark(foucsDiv, foucsImg, nowTag);
		
	}else{
		var nowPage = null;
		var nowChapter = null;
		originalMarkTrigger(foucsImg, nowPage, nowChapter, nowTag);
	}
	
	jumpToViewerTag(rangeSliderArr[idx].cid, null, rangeSliderArr[idx].tag.ti);
}

var originalConfirmArr = [];//{"cid", "tag", "desc"}
var originalConfirmScore = 120;
function loadOriginalConfirm() {
	if(!isNull(mappingMeta) && !isNull(mappingMeta.chapter)){
		for(var c=0;c<mappingMeta.chapter.length;c++){
			for(var t=0;t<mappingMeta.chapter[c].tags.length;t++){
				if(mappingMeta.chapter[c].tags[t].cs < originalConfirmScore){
					originalConfirmArr.push({"cid": mappingMeta.chapter[c].cid, "tag": mappingMeta.chapter[c].tags[t], "desc": (originalConfirmArr.length + 1)+" cs: "+mappingMeta.chapter[c].tags[t].cs});
				}
			}
		}
	}
	
	var original_confirm = $("#btu_original_confirm");
	original_confirm.find("b").text(originalConfirmArr.length);
	for(var i=0;i<originalConfirmArr.length;i++){
		original_confirm.find("ul").append('<li><a href="#" idx="'+i+'">'+originalConfirmArr[i].desc+'</a></li>');
	}
}

function loadOriginalConfirmFocus(idx) {
	var original_panel = $("#original_panel");
	
	var foucsDiv = original_panel.find("div[pn='"+originalConfirmArr[idx].tag.pn+"']");
	var foucsImg = foucsDiv.find("img[pn='"+originalConfirmArr[idx].tag.pn+"']");
	var nowTag = originalConfirmArr[idx].tag;
	
	focusOriginalAndMark(foucsDiv, foucsImg, nowTag);
	
	if(bookReviseOpt.getDataLinkedOpt() == 'linked_two' || bookReviseOpt.getDataLinkedOpt() == 'linked_original'){
		$( ".RangeSlider" ).slider( "value", nowTag.jump );
		jumpToViewerTag(originalConfirmArr[idx].cid, null, originalConfirmArr[idx].tag.ti);
	}
}


function focusOriginalAndMark(foucsDiv, foucsImg, Tag) {
	var original_panel = $("#original_panel");
	
	var moveY = foucsDiv[0].offsetTop - 45;
	original_panel.animate({scrollTop: moveY}, 300);
	
	var nowPage = null;
	var nowChapter = null;
	originalMarkTrigger(foucsImg, nowPage, nowChapter, Tag);
}

var originalZoomControl = 1;
var originalZoomMax = 3;
var originalZoomMin = 0.5;
function originalChangeZoom() {
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
			var pageDom = original.find("div[pn='"+page.pn+"']");
			var h = page.h * originalZoomControl;
			var w = page.w * originalZoomControl;
			
			pageDom.css("height", h+"px");
			pageDom.css("width", w+"px");
		}
	}
}


var focusOriginalScroll = false;
function initOriginalScrollTrigger() {
	$("#original_panel").on("mousewheel DOMMouseScroll mousedown", function() {
		focusOriginalScroll = true;
	});
	/*
	$("#original_panel").on("mouseover", function() {
		focusOriginalScroll = true;
	});
	*/
	$("#original_panel").on("mouseout", function() {
		focusOriginalScroll = false;
	});
}

function originalScrollTrigger() {
	if(focusOriginalScroll){
		var original_panel = $("#original_panel");
		var foucsImg = null;
		
		var top = (0 - (original_panel.find("img").first().height() * 0.65));
		original_panel.find("img").each(function() {
			if(foucsImg == null){
				var jDom = $( this );
				
				var element_position = jDom.position();
				var y = element_position.top;
				if(y >= top){
					foucsImg = jDom;
				}
			}
		});
		
		if(foucsImg != null){
			var pn = foucsImg.attr("pn");
			if(!isNull(mappingMeta)){
				var nowPage = null;
				for(var i=0;i<mappingMeta.pages.length;i++){
					if(mappingMeta.pages[i].pn == pn){
						nowPage = mappingMeta.pages[i];
						break;
					}
				}
				
				if(nowPage != null){
					var nowChapter = null;
					var nowTag = null;
					
					for(var c=0;c<mappingMeta.chapter.length;c++){
						for(var t=0;t<mappingMeta.chapter[c].tags.length;t++){
							if(mappingMeta.chapter[c].tags[t].ti == nowPage.ti){
								nowChapter = mappingMeta.chapter[c];
								nowTag = mappingMeta.chapter[c].tags[t];
								
								break;
							}
						}
						
						if(nowChapter != null){
							break;
						}
					}
					
					originalMarkTrigger(foucsImg, nowPage, nowChapter, nowTag);
					
					if(bookReviseOpt.getDataLinkedOpt() == 'linked_two' || bookReviseOpt.getDataLinkedOpt() == 'linked_original'){
						$( ".RangeSlider" ).slider( "value", nowTag.jump );
						jumpToViewerTag(nowChapter.cid, null, nowTag.ti);
					}
				}
			}
		}
	}
}

var original_mark = null;
function originalMarkTrigger(foucsImg, imgPage, chapter, tag) {
	if(original_mark == null){
		original_mark = $('<div class="original_mark"></div>');
	}
	
	var top = $(foucsImg).height() - ((tag.y - 10) * originalZoomControl);
	var left = tag.x * originalZoomControl;
	
	var height = tag.h * originalZoomControl;
	var width = tag.w * originalZoomControl;
	
	if(height < 2){
		height = 2;
	}
	
	original_mark.css("top", "-"+top+"px");
	original_mark.css("left", left+"px");
	original_mark.css("height", height+"px");
	original_mark.css("width", width+"px");
	
	original_mark.insertAfter(foucsImg);
}

function goLeftPage() {
	viewer.connector.goLeftPage();
	var firstTag = viewer.connector.getInViewFirstBBTag();
	if(firstTag != null){
		jumpToOriginal(firstTag);
	}
}

function goRightPage() {
	viewer.connector.goRightPage();
	var firstTag = viewer.connector.getInViewFirstBBTag();
	if(firstTag != null){
		jumpToOriginal(firstTag);
	}
}

function jumpToViewerTag(cid, sid, tid) {
	viewer.connector.jumpToTag(cid, sid, tid);
}

function jumpToOriginal(Tag, focus) {
	if(!isNull(mappingMeta)){
		var bbTag = $(Tag).attr("bbtag");
		
		var nowTag = null;
		for(var c=0;c<mappingMeta.chapter.length;c++){
			for(var t=0;t<mappingMeta.chapter[c].tags.length;t++){
				if(bbTag == mappingMeta.chapter[c].tags[t].ti){
					nowTag = mappingMeta.chapter[c].tags[t];
					break;
				}
			}
			
			if(nowTag != null){
				break;
			}
		}
		
		if(nowTag != null){
			var original_panel = $("#original_panel");
			
			var foucsDiv = original_panel.find("div[pn='"+nowTag.pn+"']");
			var foucsImg = foucsDiv.find("img[pn='"+nowTag.pn+"']");
			
			if(!isNull(focus) && focus){
				focusOriginalAndMark(foucsDiv, foucsImg, nowTag);
				
			}else if(bookReviseOpt.getDataLinkedOpt() == 'linked_two' || bookReviseOpt.getDataLinkedOpt() == 'linked_eBook'){
				focusOriginalAndMark(foucsDiv, foucsImg, nowTag);
				
			}else{
				var nowPage = null;
				var nowChapter = null;
				originalMarkTrigger(foucsImg, nowPage, nowChapter, nowTag);
			}
			
			$( ".RangeSlider" ).slider( "value", nowTag.jump );
		}
	}
}