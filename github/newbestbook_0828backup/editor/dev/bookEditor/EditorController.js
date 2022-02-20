bestbook = {};
bestbook.editor = new EditorController();

function EditorController() {
	
	this.book_id = "";
	this.baseUrl = "";
	this.metaUrl = "";
	
	//this.logger = new Logger();
	//this.event;
	
	this.i18n = new i18n(editor_lang["en"]);
	this.loading = new Loading();
	
	this.metaData = new MetaData();
	this.monitor = new Monitor();
	
	this.editorMode = "adapt";//Fixed
	
	this.enableCompare = false;
	
	this.tools = new ToolsPanel();
	this.mainEditor = new MainEditorPanel();
	this.coordination = new CoordinationPanel();
	this.cropper = new CropperPanel();
	this.preview;
	
	this.converter = new Converter();
	
	this["adaptMode"] = function(bookid, base_url) {
		var tmp = this;
		
		tmp.initLoading();
		
		window.setTimeout(function() {
			try{
				tmp.book_id = bookid;
				tmp.baseUrl = base_url;
				tmp.metaUrl = tmp.baseUrl + "/editor/meta.do";
				
				tmp.loadMetaData();
				
				tmp.initLayout();
				
				tmp.initSize();
				
				if(tmp.metaData.chapter.length > 0){
					tmp.chapterSelect(tmp.metaData.chapter[0].cid);
				}
				
				tmp.loading.hide();
				
			}catch(e){
				console.log(e);
				tmp.loading.hide();
			}
			
		}, 100);
	};
	
	this.initLoading = function() {
		this.loading.render();
		this.loading.show();
	};
	
	this.reSizeThread = null;
	this.initSize = function() {
		window.clearTimeout(this.reSizeThread);
		
		var tmp = this;
    	this.reSizeThread = setTimeout(function(){tmp.reSize();}, 300);
	};
	
	this.reSize = function() {
		$("#splitterContainer").height($(window).height() - (bestbook.editor.tools.height() + 1));
		this.coordination.resize();
		
		$('.main_editor_panel').width($(window).width() - (this.coordination.width() + 1) - 8);
		
		this.mainEditor.resize();
	};
	
	this.loadMetaData = function() {
		console.log(this.metaUrl);
		$.ajax({ "url": this.metaUrl, "async": false, "cache": false, "type": 'GET', "data": {"book_id": this.book_id}, "dataType": 'json', "timeout": 60000,
			"error": function(request, status, error){
				if(status == "abort"){
					
				}else if(status == "timeout" || status == "error" || status == "parsererror"){
					console.log("loadMeta: " + status+" "+request.responseText);
					//viewer.logger.addError("loadMeta", {"status": status, "msg": request.responseText});
	        		throw new Error("loadMeta: " + status+" "+request.responseText);
	        		
	        	}else{
	        		console.log("loadMeta: " + status+" "+request.responseText);
	        		//viewer.logger.addError("loadMeta", {"status": status, "msg": request.responseText});
	        		throw new Error("loadMeta: " + status+" "+request.responseText);
	        	}
			},
			"success": function(result){
				if(result["success"]){
					bestbook.editor.metaData.chapter = result["chapter"];
					bestbook.editor.metaData.customerStyle = result["customerStyle"];
					bestbook.editor.metaData.imgMeta = result["imgMeta"];
					bestbook.editor.metaData.mappingMeta = result["mappingMeta"];
					bestbook.editor.metaData.tagMappingMeta = result["tagMappingMeta"];
					
					bestbook.editor.enableCompare = (!isNull(bestbook.editor.metaData.imgMeta));
					
				}else{
					console.log("loadMeta: "+request.responseText);
					//viewer.logger.addError("loadMeta", {"msg": request.responseText});
					throw new Error("loadMeta: " + result["success"]+" error: " + result["error"]);
				}
            } 
		});
	};
	
	this.initLayout = function() {
		this.tools.render();
		this.mainEditor.render();
		this.coordination.render();
		
		if(this.editorMode == "adapt"){
			CKEDITOR.addCss('.markBBTag{background-color: #F9BBBD; opacity: 0.9; filter: Alpha(opacity=90);}');
			
			this.preview = new AdaptPreViewPanel();
		}
		
		this.monitor.start();
		
		$("#splitterContainer").splitter({
			minAsize: 310,
			maxAsize: 800,
			splitVertical:true,
			A: $('#coordinationPanel'),
			B: $('#mainEditorPanel'),
			closeableto: 0.45
		});
		
		$(".splitbarV").mousedown(function(e) {
			$( ".frame_mask" ).show();
		});
		$( document ).mouseup(function() {
			$( ".frame_mask" ).hide();
		});
		
		window.onbeforeunload = function (e) {
			var msg = null;
			if(bestbook.editor.contentIsChange()){
				msg = bestbook.editor.i18n.get("msg.unsave");
			}
			
			if(msg != null){
				var e = e || window.event;
				if (e) {//IE & Firefox
					e.returnValue = msg;
				
				}else{// For Safari
					return msg;
				}
			}
		};
	};
	
	this.chapterSelect = function(cid) {
		this.coordination.chapterList.focusChapter(cid);
		this.mainEditor.showChapter(cid);
	};
	
	this.getBookId = function() {
		return this.book_id;
	};
	
	this.getBBTagByTagMapping = function(tid) {
		var nowTag = null;
		
		if(!isNull(this.metaData.tagMappingMeta)){
			for(var c=0;c<this.metaData.tagMappingMeta.chapter.length;c++){
				for(var t=0;t<this.metaData.tagMappingMeta.chapter[c].tags.length;t++){
					if(tid == this.metaData.tagMappingMeta.chapter[c].tags[t].ti){
						nowTag = this.metaData.tagMappingMeta.chapter[c].tags[t];
						break;
					}
				}
				
				if(nowTag != null){
					break;
				}
			}
		}
		
		return nowTag;
	};
	
	this.getBBTagByMapping = function(tid) {
		var nowTag = null;
		
		if(!isNull(this.metaData.mappingMeta)){
			for(var c=0;c<this.metaData.mappingMeta.chapter.length;c++){
				for(var t=0;t<this.metaData.mappingMeta.chapter[c].tags.length;t++){
					if(tid == this.metaData.mappingMeta.chapter[c].tags[t].ti){
						nowTag = this.metaData.mappingMeta.chapter[c].tags[t];
						break;
					}
				}
				
				if(nowTag != null){
					break;
				}
			}
		}
		
		return nowTag;
	};
	
	this.jumpToOriginal = function(tid) {
		var nowTag = this.getBBTagByMapping(tid);
		
		if(nowTag != null){
			this.coordination.compare.markArea(nowTag);
		}
	};
	
	this.generatorBBTagId = function() {
    	return randomIdGenerator(13);
    };
	
	this.replaceCid = function() {
		if(!isNull(this.metaData.chapter)){
			for(var i=0;i<this.metaData.chapter.length;i++){
				if(!isNull(this.metaData.chapter[i].cid)){
					this.metaData.chapter[i].cid = this.metaData.chapter[i].cid.replace(".", "。");
				}
			}
		}
	};
	
	this.restoreCid = function(cid) {
		return cid.replace("。", ".");
	};
	
	this.generatorCid = function() {
		while(true){
			var cid = randomIdGenerator(5);
			
			var exist = false;
			for(var i=0;i<this.metaData.chapter.length;i++){
				if(this.metaData.chapter[i].cid == cid){
					exist = true;
					break;
				}
			}
			
			if(!exist){
				return cid;
			}
		}
	};
	
	this.contentIsChange = function() {
		return (this.listIsChange() || this.chapterIsChange() || this.customerStyleIsChange());
    };
	
	this.chapterIsChange = function() {
		var isChange = false;
		
		for(var i=0;i<this.metaData.chapter.length;i++){
			if(this.metaData.chapter[i].editorInterface.contentIsChange){
				isChange = true;
				break;
			}
		}
		
		return isChange;
    };
    
    this.listIsChange = function() {
		return this.coordination.listIsChange();
    };
    
    this.customerStyleIsChange = function() {
		var isChange = false;
		
		if(!isNull(bestbook.editor.metaData.customerStyle) && !isNull(bestbook.editor.metaData.customerStyle.isSync) && !bestbook.editor.metaData.customerStyle.isSync){
			isChange = true;
		}
		
		return isChange;
    };
    
    this.saveAll = function(callback) {
    	if(this.contentIsChange()){
    		this.loading.show();
    		
    		if(this.chapterIsChange()){
    			this.contentSave();
    		}
    		
    		if(this.listIsChange()){
    			this.coordination.save();
    		}
    		
    		if(this.customerStyleIsChange()){
    			this.customerStyleSave();
    		}
    		
    		this.monitor.updateContentSaveStatus();
    		
    		this.loading.hide();
    	}
    	
    	(callback && typeof(callback) === "function") && callback();
    };
    
	this.customerStyleSave = function() {
		var customer_style_string = JSON.stringify(bestbook.editor.metaData.customerStyle);
    	
    	var success = false;
    	
    	$.ajax({ "url": "./bookCustomerStyleSave.do?book_id="+bestbook.editor.getBookId(), "async": false, "cache": false, "type": "POST", "data": {"customer_style": customer_style_string}, "dataType": 'json', "timeout": 90000,
    		"error": function(request, status, error){
    			if(status == "abort"){
            		
            	}else if(status == "timeout" || status == "error" || status == "parsererror"){
    				console.log(request.status+" "+request.statusText);
    				errorMsg(request.status+" "+request.statusText);
            		
            	}else{
            		console.log(request.status+" "+request.statusText);
            		errorMsg(request.status+" "+request.statusText);
            	}
    		},
    		"success": function(result){
    			if(result["success"]){
    				bestbook.editor.metaData.customerStyle.isSync = true;
    				
    				success = true;
    				
    			}else{
    				errorMsg(result["message"]);
    			}
            } 
    	});
    	
    	return success;
    };

    this.contentSave = function() {
		if(this.cropper.hasServerCropQueue()){
			var tmp = this;
			window.setTimeout(function() {tmp.contentSave(callback);}, 500);
			return;
		}
		
		this.mainEditor.save();
    };
    
    this.contentPublish = function(callback) {
    	this.loading.show();
    	
    	if(this.contentIsChange()){
    		if(this.chapterIsChange()){
    			this.contentSave();
    		}
    		
    		if(this.listIsChange()){
    			this.coordination.save();
    		}
    		
    		this.monitor.updateContentSaveStatus();
    	}
    	
    	$.ajax({ "url": "./bookContentPublish.do?book_id="+this.getBookId(), "async": false, "cache": false, "type": "GET", "data": {}, "dataType": 'json', "timeout": 90000,
    		"error": function(request, status, error){
    			if(status == "abort"){
            		
            	}else if(status == "timeout" || status == "error" || status == "parsererror"){
            		errorMsg(request.status+" "+request.statusText);
            		
            	}else{
            		errorMsg(request.status+" "+request.statusText);
            	}
    		},
    		"success": function(result){
    			if(result["success"]){
    				message(bestbook.editor.i18n.get("msg.publish.success.title"), bestbook.editor.i18n.get("msg.publish.success.desc"));
    				
    			}else{
    				errorMsg(result["message"]);
    			}
            } 
    	});
    	
    	this.loading.hide();
    	
    	(callback && typeof(callback) === "function") && callback();
    };
    
    this.transCropContent = function(content) {
    	if(!isNull(content) && content.indexOf("src=\"data:image") != -1){
    		var tmp = this;
    		
    		var obj = $("<div>"+content+"</div>");
    		obj.find("[data-cropper-src]").each(function() {
    			var cropperSrc = this.getAttribute("data-cropper-src");
    			if(tmp.cropper.cropQueueIsComplete(cropperSrc)){
    				this.setAttribute("src", cropperSrc);
    				this.removeAttribute("data-cropper-src");
    				
    			}else{
    				this.setAttribute("src", "");
    			}
    		});
    		
    		content = obj.html();
    	}
    	
    	return content;
    };
}