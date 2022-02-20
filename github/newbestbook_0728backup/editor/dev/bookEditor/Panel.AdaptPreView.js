AdaptPreViewPanel.prototype = new BasicPanel();
AdaptPreViewPanel.prototype.constructor = AdaptPreViewPanel;
AdaptPreViewPanel.prototype.parent = BasicPanel.prototype;

function AdaptPreViewPanel(){

	this.id = "adaptPreViewPanel";
	
	this.blockObj;
	this.panel;
	this.main;
	this.tools;
	
	this.chapter_info;
	this.viewer;
	this.column_pages_num;
	
	this.baseHref = null;
	
	this.render = function() {
		if(!this.isRender){
			this.blockObj = $('<div class="blockDiv" style="z-index:200; opacity: 0.4"></div>');
			this.panel = $(".adapt_preview_panel");
			
			this.blockObj.appendTo( "body" );
			
			this.tools = this.panel.find(".adapt_preview_panel_tools");
			this.main = this.panel.find(".adapt_preview_panel_main");
			this.chapter_info = this.main.find(".adapt_preview_chapter_info");
			this.viewer = this.main.find(".adapt_preview_panel_viewer_frame");
        	this.column_pages_num = this.main.find(".adapt_preview_panel_viewer_column_pages_num");
        	
			this.isRender = true;
            this.resize();
            
            var parent = this;
            
            this.baseHref = bestbook.editor.baseUrl + '/BookResources/' + bestbook.editor.getBookId() + "/";
			
			var doc = this.viewer[0].contentDocument;
			
			doc.open();
			doc.write("<!DOCTYPE html><head><meta charset='utf-8'/></head><html><body></body></html>");
			doc.close();
			
            this.blockObj[0].addEventListener('mousewheel', function(event){event.preventDefault();}, false);
        	this.blockObj[0].addEventListener('DOMMouseScroll', function(event){event.preventDefault();}, false);
        	
        	this.blockObj.bind('click', function () {parent.hide();});
        	
            this.tools.find("#preview_close_btu").bind('click', function () {parent.hide(); return false;});
            
            this.tools.find(".adapt_preview_panel_option li").bind( "click", function(event) {
            	event.preventDefault();
            	parent.selectDeviceOption(this.id);
            	parent.chapterContentReady();
        		return false;
        	});
            
            this.panel.find("#btu_left_page").bind( "click", function(event) {
            	event.preventDefault();
            	parent.goLeftPage();
        		return false;
        	});
            this.panel.find("#btu_right_page").bind( "click", function(event) {
            	event.preventDefault();
            	parent.goRightPage();
        		return false;
        	});
            
            this.panel.find("#btu_left_page").bind('dblclick', function (e) {e.preventDefault(); return false;});
            this.panel.find("#btu_right_page").bind('dblclick', function (e) {e.preventDefault(); return false;});
            
            $(window).resize(function() {parent.reSize();});
        	
        	this.viewer[0].contentWindow.onscroll = function (event) {
        		parent.column_pages_num.scrollLeft(parent.getScrollLeft());
        		parent.showArrowButton();
        	};
		}
	};
	
	this.hide = function() {
    	if(this.isRender){
    		this.blockObj.hide();
    		this.panel.hide();
    		this.isShow = false;
    		
    		this.setViewerContent("");
    	}
    };
    
	this.show = function() {
    	if(!this.isRender){
    		this.render();
    	}
		
		this.panel.show();
		this.blockObj.show();
		
		this.isShow = true;
		
		this.selectDeviceOption();
		this.loadChapterList();
		this.showViewerContent();
    };
    
    this.reSize = function() {
    	if(this.isRender){
    		this.panel.css("top", $("html").scrollTop() + $("body").scrollTop());
    		this.main.height(this.panel.height() - this.tools.height());
    		
    		var viewerControl = this.main.find(".adapt_preview_panel_viewer");
    		
    		this.viewColumnCount = parseInt((this.panel.width() - 200) / (this.columnWidth + this.columnGap));
    		
    		viewerControl.width(((this.columnWidth * this.viewColumnCount) + (this.columnGap * this.viewColumnCount) - this.columnGap));
    		
    		viewerControl.height((this.columnHeight + this.margin_top));
    		
    		viewerControl.css("padding-left", this.margin_left+"px");
    		viewerControl.css("padding-right", this.margin_left+"px");
    		
    		var offset = viewerControl.offset();
    		
    		var btu_left_page = this.main.find("#btu_left_page");
    		var btu_right_page = this.main.find("#btu_right_page");
    		
    		var left = offset.left - (btu_left_page.width() + 5);
    		var right = offset.left - (btu_left_page.width() + 5);
    		
    		btu_left_page.css("left", left);
    		btu_right_page.css("right", right);
    		
    		this.stratTrackColumn();
    	}
    };
    
    this.nowChapterIdx = -1;
    this.showViewerContent = function() {
    	if(this.isRender){
    		if(!isNull(bestbook.editor.metaData.chapter) && bestbook.editor.metaData.chapter.length > 0){
    			var idx = 0;
    			var cid = bestbook.editor.mainEditor.last_select_cid;
    			if(!isNull(cid)){
    				for(var i=0;i<bestbook.editor.metaData.chapter.length;i++){
    					if(bestbook.editor.metaData.chapter[i].cid == cid){
    						idx = i;
    						break;
    					}
    				}
    			}
    			
    			this.loadChapterContent(idx);
    		}
    	}
    };
    
    this.loadChapterContent = function(idx, move) {
    	if(!isNull(bestbook.editor.metaData.chapter) && bestbook.editor.metaData.chapter.length > idx){
    		bestbook.editor.loading.show();
    		
    		this.nowChapterIdx = idx;
    		
    		var chapter = bestbook.editor.metaData.chapter[this.nowChapterIdx];
    		var content = null;
			if(isNull(chapter.editorInterface.editor)){
				content = chapter.editorInterface.content;
				
			}else{
				content = chapter.editorInterface.editor.getData();
			}
			
			if(isNull(content) && !isNull(chapter.editorInterface.file)){
				this.loadChapterContentByServer(idx, move);
				
			}else{
				this.selectChapter(idx, chapter);
				this.setViewerStyle(chapter.style, bestbook.editor.mainEditor.toCustomerStyleString(bestbook.editor.metaData.customerStyle));
	    		this.updateColumnStyle();
	    		
				this.setViewerContent(content);
				this.stratTrackColumn();
				this.chapterContentReady(move);
			}
    	}
    };
    
    this.loadChapterContentByServer = function(idx, move) { 
    	var tmp = this;
    	
    	var chapter = bestbook.editor.metaData.chapter[idx];
    	
    	$.ajax({ "url": './bookChapterContent.do', "cache": false, "type": 'GET', "data": {"bookid": bestbook.editor.getBookId(), "file": chapter.editorInterface.file}, "dataType": 'json', "timeout": 60000,
            "error": function(result){return false;},
            "success": function(result){
            	if(result["success"]){
            		chapter.editorInterface.content = decodeURIFormServer(result["content"]);
	                tmp.loadChapterContent(idx, move);
	                
            	}else{
            		console.log(result["message"]);
            	}
            } 
        });
    };
    
    this.chapterContentReady = function(move) {
    	var tmp = this;
    	
    	if(tmp.finishLoad){
    		tmp.generatePagesNum();
    		
    		if(!isNull(move) && move){
				var left = (tmp.getScrollWidth() - tmp.getControlWidth() + tmp.columnGap);
	        	tmp.moveScrollLeft(left);
			}
    		
    		bestbook.editor.loading.hide();
    		tmp.showArrowButton();
    		
    	}else{
    		window.setTimeout(function() {
				tmp.chapterContentReady(move);
				
			}, 100);
    	}
    };
    
    this.loadChapterList = function() {
    	this.chapter_info.find(".wrapper-chapter-list").remove();
    	if(!isNull(bestbook.editor.metaData.chapter)){
    		var obj = this.chapter_info.find(".wrapper-chapter-info li:first");
    		if(obj.length > 0){
    			var list = $('<ul class="wrapper-chapter-list"></ul');
    			for(var i=0;i<bestbook.editor.metaData.chapter.length;i++){
    				list.append('<li><a href="#" data-idx="'+i+'">'+bestbook.editor.metaData.chapter[i].name+'</a></li>');
				}
    			obj.append(list);
    			
    			var tmp = this;
    			list.find("a").bind( "click", function(event) {
                	event.preventDefault();
                	
                	var idx = parseInt(this.getAttribute("data-idx"));
                	if(tmp.nowChapterIdx != idx){
                		tmp.loadChapterContent(idx);
                	}
                	
            		return false;
            	});
    		}
    	}
    };
    
    this.selectChapter = function(idx, chapter) {
    	this.chapter_info.find(".adapt_preview_chapter_info_name").html(chapter.name);
    	this.chapter_info.find(".wrapper-chapter-list li").removeClass("current");
    	
    	var select = this.chapter_info.find(".wrapper-chapter-list a[data-idx='"+idx+"']");
    	if(select.length > 0){
    		select.closest("li").addClass("current");
    	}
    };
    
    this.last_select_device = "Phone";
    this.selectDeviceOption = function(device) {
    	if(!isNull(device)){
    		this.last_select_device = device;
    	}
    	
    	if(this.last_select_device == "Phone"){
    		this.columnWidth = 320;
    		this.columnHeight = 540 - (this.margin_top * 2);
			
		}else if(this.last_select_device == "Note"){
			this.columnWidth = 360;
			this.columnHeight = 640 - (this.margin_top * 2);
			
		}else if(this.last_select_device == "Kindle"){
			this.columnWidth = 480;
			this.columnHeight = 800 - (this.margin_top * 2);
			
		}else if(this.last_select_device == "Pad"){
			this.columnWidth = 768;
			this.columnHeight = 1024 - (this.margin_top * 2);
		}
		
    	this.tools.find(".adapt_preview_panel_option li").removeClass("current");
    	this.tools.find(".adapt_preview_panel_option li#"+this.last_select_device).addClass("current");
		
    	this.updateColumnStyle();
    	this.reSize();
    	this.moveScrollLeft(0);
    };
    
    this.viewColumnCount = 1;
    this.columnWidth = 320;
    this.columnHeight = 480;
    this.columnGap = 60;
    
    this.margin_top = 20;
	this.margin_left = 30;
	this.getColumnStyle = function(width, height) {
	    var column_style = "body {";
	    column_style += " padding-top: "+this.margin_top+"px;";
	    
	    column_style += " -webkit-column-count: auto;";
		column_style += " -moz-column-count: auto;";
		column_style += " column-count: auto;";

		column_style += " -webkit-column-gap: "+(this.columnGap)+"px;";
		column_style += " -moz-column-gap: "+(this.columnGap)+"px;";
		column_style += " column-gap: "+(this.columnGap)+"px;";
		
		column_style += " -webkit-column-fill: auto;";
		column_style += " -moz-column-fill: auto;";
		column_style += " column-fill: auto;";
		
		column_style += " -webkit-column-span: 1;";
		column_style += " -moz-column-span: 1;";
		column_style += " column-span: 1;";

		column_style += " -webkit-column-width: "+width+"px;";
		column_style += " -moz-column-width: "+width+"px;";
		column_style += " column-width: "+width+"px;";
		
		column_style += " -webkit-column-rule: 1px double black;";
		column_style += " -moz-column-rule: 1px double black;";
		column_style += " column-rule: 1px double black;";
		
		column_style += " height: "+ (height - (this.margin_top * 2)) +"px;";
		column_style += "}";
		
		return  column_style;
    };
	
	this.updateColumnStyle = function() {
		var column_style = this.getColumnStyle(this.columnWidth, this.columnHeight);
		this.viewer.contents().find("#column_style").html(column_style);
	};
	
	this.generatePagesNum = function() {
		var nowColumnCount = this.getColumnCount();
		
		this.column_pages_num.html("");
		for(var i=0;i<nowColumnCount;i++){
			this.column_pages_num.append("<p>"+(i+1)+"</p>");
		}
		
		var max_width = (((this.columnWidth * nowColumnCount) + (this.columnGap * nowColumnCount)));
		var set_width = "max-width:100%;";
		
		if(this.viewer.width() > max_width){
			set_width = "max-width:"+max_width+"px;";
		}
		
		this.column_pages_num.attr( "style", set_width+this.getPagesColumnStyle(this.columnWidth));
		this.column_pages_num.scrollLeft(this.getScrollLeft());
		this.chapter_info.find(".adapt_preview_chapter_info_pages").html(nowColumnCount);
	};
	this.getPagesColumnStyle = function(width) {
    	var column_style = "";

    	column_style += " -webkit-column-count: auto;";
		column_style += " -moz-column-count: auto;";
		column_style += " column-count: auto;";

		column_style += " -webkit-column-gap: "+(this.columnGap)+"px;";
		column_style += " -moz-column-gap: "+(this.columnGap)+"px;";
		column_style += " column-gap: "+(this.columnGap)+"px;";
		
		column_style += " -webkit-column-fill: auto;";
		column_style += " -moz-column-fill: auto;";
		column_style += " column-fill: auto;";
		
		column_style += " -webkit-column-span: 1;";
		column_style += " -moz-column-span: 1;";
		column_style += " column-span: 1;";

		column_style += " -webkit-column-width: "+width+"px;";
		column_style += " -moz-column-width: "+width+"px;";
		column_style += " column-width: "+width+"px;";
		
		column_style += " -webkit-column-rule-width: 0px;";
		column_style += " -moz-column-rule-width: 0px;";
		column_style += " column-rule-width: 0px;";
		
		return  column_style;
    };
	
	this.updateImageStyle = function() {
		var imgs = this.viewer.contents().find('img');
		imgs.removeAttr("width").removeAttr("height");
		imgs.css("width", "").css("height", "").css("max-height", this.columnHeight+"px").css("max-width", this.columnWidth+"px");
	};
	
	this.updateOptionStyle = function(style) {
		this.viewer.contents().find("#option_style").html(style);
	};
	
	this.setViewerStyle = function(styles, customer_style) {
    	this.viewer.contents().find("head").html("<meta charset='utf-8'/>");
    	this.viewer.contents().find("head").append("<base href='"+this.baseHref+"' />");
    	
    	if(!isNull(styles)){
    		for(var i=0;i<styles.length;i++){
    			this.viewer.contents().find("head").append("<link rel='stylesheet' type='text/css' href='"+this.baseHref+styles[i]+"'/>");
    		}
    	}
    	
    	if(!isNull(customer_style)){
    		this.viewer.contents().find("head").append("<style id='customer_style'>"+customer_style+"</style>");
    	}
    	
    	var option_style = "";
    	this.viewer.contents().find("head").append("<style>html {overflow: hidden;} html, body {margin: 0px; padding: 0px; height: 100%; border: none; -webkit-touch-callout: none; -webkit-user-select: none;	-khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;}</style>");
    	this.viewer.contents().find("head").append("<style id='column_style'></style>");
    	this.viewer.contents().find("head").append("<style id='option_style'>"+option_style+"</style>");
    };
    
    this.setViewerContent = function(content) {
    	var doc = this.viewer[0].contentDocument;
		doc.body.innerHTML = content;
		
		this.moveScrollLeft(0);
		this.replaceLink();
		this.updateImageStyle();
		
		this.trans = {"width": 0, "count": 0, "offsetWidth": 0, "left": 0, "top": 0};
		this.finishLoad = false;
    };
    
    this.replaceLink = function() {
    	this.viewer.contents().find("a").each(function() {
    		this.addEventListener('click', function(event){
				var target = this.getAttribute("target");
				if(!isNull(target) && target == "_blank"){//開新頁面
					return true;
					
				}else{
					event.preventDefault();
					return false;
				}
				
			}, false);
    	});
    };
    
    this.trans = {"width": 0, "count": 0, "offsetWidth": 0, "left": 0, "top": 0};
	this.finishLoad = false;
	
	this.trackColumnRenderInterval = 100;
	this.trackColumnRenderCount = 0;
	this.trackColumnTimer = null;
	this.stratTrackColumn = function() {
		this.trackColumnRenderCount = 0;
		this.finishLoad = false;
		
		window.clearTimeout(this.trackColumnTimer);
		
		var tmp = this;
		this.trackColumnTimer = window.setTimeout(function() {tmp.trackColumnRender();}, this.trackColumnRenderInterval);
	};
	this.trackColumnRender = function() {
		if(this.trans["width"] != this.getScrollWidth()){
			this.trans["width"] = this.getScrollWidth();
			this.trackColumnRenderCount = 0;
			
		}else{
			this.trackColumnRenderCount ++;
		}
		
		if(this.trackColumnRenderCount < 3){
			var tmp = this;
			this.trackColumnTimer = window.setTimeout(function() {tmp.trackColumnRender();}, this.trackColumnRenderInterval);
			
		}else{
			this.probeContentEnd();
			this.trans["count"] = this.getColumnCount();
			this.finishLoad = true;
			
			console.log("width: "+this.trans["width"]+" count: "+this.trans["count"]+" control: "+this.columnWidth+" offsetWidth: "+this.trans["offsetWidth"]+" top: "+this.trans["top"]+" left: "+this.trans["left"]);
		}
	};
	
	this.probeContentEnd = function() {
		var content_end = this.viewer.contents().find(".track_content_end");
    	if(content_end.length == 0){
    		this.viewer.contents().find("body").append("<span class='track_content_end' style='padding: 0px;margin: 0px;display: block;'></span>");
    		content_end = this.viewer.contents().find(".track_content_end");
    	}
    	
    	this.trans["offsetWidth"] = content_end[0].offsetWidth;
    	
    	var position = content_end.position();
    	var left = position.left;
    	
    	content_end.remove();
    	
    	if(left == 0){
    		var lastChild = this.viewer.contents().find("body").children().last();
    		var last = lastChild.position();
    		if(last.left > 0){
    			left = last.left;
    		}
    	}
    	
    	this.trans["top"] = position.top;
    	this.trans["left"] = left;
	};
	
	this.trackContentEnd = function() {
		this.probeContentEnd();
		
    	this.trans["width"] = this.getScrollWidth();
    	this.trans["count"] = this.getColumnCount();
    	
    	var tmp = this;
		this.trackColumnTimer = window.setTimeout(function() {tmp.trackContentEnd();}, 500);
    };
	
    this.getColumnCount = function() {
    	var width = this.trans["left"] + this.trans["offsetWidth"];
    	if(width > this.getScrollWidth()){
    		width = this.getScrollWidth();
    	}
    	
    	var columnsNumber = Math.floor( (width - this.trans["offsetWidth"]) / (this.trans["offsetWidth"] + (this.trans["offsetWidth"] - (this.trans["offsetWidth"] - this.columnGap))));
        if (isNaN(columnsNumber) || columnsNumber < 1) columnsNumber = 0;
        return columnsNumber+1;
    };
    
	this.moveScrollLeft = function(left) {
		this.viewer.contents().find("html, body").scrollLeft(left);
	};
	
    this.getScrollLeft = function() {
		var scrollLeft = 0;
		
		scrollLeft = this.viewer[0].contentDocument.documentElement.scrollLeft;
    	if(scrollLeft < this.viewer[0].contentDocument.body.scrollLeft){//for chrome
    		scrollLeft = this.viewer[0].contentDocument.body.scrollLeft;
    	}

    	return scrollLeft;
	};
	
	this.getScrollWidth = function() {
    	var scrollWidth = 0;
    	
    	scrollWidth = this.viewer[0].contentDocument.documentElement.scrollWidth;
    	
    	return scrollWidth;
	};
	
	this.getControlWidth = function() {
		var controlWidth = (this.viewColumnCount * this.columnWidth) + (this.viewColumnCount * this.columnGap);
		
    	return controlWidth;
	};
	
	this.goPrevPage = function() {
		if(this.getScrollLeft() == 0){//跳到上一個chapter
			var prevIdx = this.nowChapterIdx - 1;
    		if(!isNull(bestbook.editor.metaData.chapter) && prevIdx >= 0){
    			this.loadChapterContent(prevIdx, true);
    		}
        	
        }else{
        	var left = (this.getScrollLeft() - this.getControlWidth());
        	
        	this.moveScrollLeft(left);
        }
	};
	this.hasPrevPage = function() {
		if(this.getScrollLeft() > 0){
			return true;
			
		}else if(!isNull(bestbook.editor.metaData.chapter) && this.nowChapterIdx > 0){
    		return true;
    		
    	}else{
    		return false;
    	}
    };
    
    this.goNextPage = function() {
    	var left = (this.getScrollLeft() + this.getControlWidth());
		
    	if(left >= this.getScrollWidth()){//跳到下一個chapter
    		var nextIdx = this.nowChapterIdx + 1;
    		if(!isNull(bestbook.editor.metaData.chapter) && bestbook.editor.metaData.chapter.length > nextIdx){
    			this.loadChapterContent(nextIdx);
    		}
			
		}else{
			this.moveScrollLeft(left);
		}
	};
    this.hasNextPage  = function() {
    	if(isNull(bestbook.editor.metaData.chapter) || this.nowChapterIdx < 0){
    		return false;
    		
    	}else if(bestbook.editor.metaData.chapter.length > (this.nowChapterIdx + 1)){
    		return true;
    		
    	}else{
    		var has = false;
    		
    		if(this.getScrollLeft() >= (this.getScrollWidth() - this.getControlWidth())){
				has = false;
				
			}else{
				has = true;
			}
    		
    		return has;
    	}
    };
    
    this.goLeftPage  = function() {
    	return this.goPrevPage();
    };
    this.hasLeftPage  = function() {
    	return this.hasPrevPage();
    };
    
    this.goRightPage  = function() {
    	return this.goNextPage();
    };
    this.hasRightPage  = function() {
    	return this.hasNextPage();
    };
    
    this.showArrowButton = function() {
    	if(this.hasLeftPage()){
    		this.main.find("#btu_left_page").show();
    		
    	}else{
    		this.main.find("#btu_left_page").hide();
    	}
    	
    	if(this.hasRightPage()){
    		this.main.find("#btu_right_page").show();
    		
    	}else{
    		this.main.find("#btu_right_page").hide();
    	}
    };
}