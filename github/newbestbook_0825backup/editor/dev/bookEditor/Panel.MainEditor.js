MainEditorPanel.prototype = new BasicPanel();
MainEditorPanel.prototype.constructor = MainEditorPanel;
MainEditorPanel.prototype.parent = BasicPanel.prototype;

function MainEditorPanel(){
	
	this.id = "mainEditorPanel";
	
	this.panel;
	
	this.contentSlice = new ContentSlicePanel();
	this.settingsOver = new SettingsOverPanel();
	
	this.render = function() {
		if(!this.isRender){
			this.panel = $(".main_editor_panel");
			//Interface
			this.isRender = true;
            this.resize();
		}
	};
	
	this.resize = function() {
		if(!isNull(bestbook.editor.metaData.chapter)){
			for(var i=0;i<bestbook.editor.metaData.chapter.length;i++){
				if(bestbook.editor.metaData.chapter[i].editorInterface != null && bestbook.editor.metaData.chapter[i].editorInterface.isReady()){
					bestbook.editor.metaData.chapter[i].editorInterface.resize( this.width() - 1, this.height() - bestbook.editor.tools.height());
				}
			}
		}
	};
	
	this.last_select_cid = null;
	this.showChapter = function(cid) {
		if(this.last_select_cid == cid) return;
		
		for(var i=0;i<bestbook.editor.metaData.chapter.length;i++){
			if(bestbook.editor.metaData.chapter[i].cid == cid){
				bestbook.editor.metaData.chapter[i].editorInterface.show();
				
			}else{
				bestbook.editor.metaData.chapter[i].editorInterface.hide();
			}
		}
		
		this.last_select_cid = cid;
	};
	
	this.getChapter = function(cid) {
		var chapter = null;
		
		if(isNull(cid)){
			cid = this.last_select_cid;
		}
		
		for(var i=0;i<bestbook.editor.metaData.chapter.length;i++){
			if(bestbook.editor.metaData.chapter[i].cid == cid){
				chapter = bestbook.editor.metaData.chapter[i];
				break;
			}
		}
		
		return chapter;
	};
	
	this.addChapter = function(data, content) {
		if(isNull(data.editorInterface)){
			var id = 'interface_'+data.cid;
			this.panel.append('<div id="'+id+'" class="adapt_editor"></div>');
			
			data.editorInterface = new AdaptEditorPanel('interface_'+data["cid"], data["file"], data["style"], data["customerStyle"]);
			if(!isNull(content)){
				data.editorInterface.content = content;
				data.editorInterface.contentIsChange = true;
				
			}else if(isNull(data.file)){
				data.editorInterface.content = "<p></p>";
				data.editorInterface.contentIsChange = true;
			}
		}
	};
	
	this.removeChapter = function(cid) {
		var id = 'interface_'+cid;
		
		var obj = this.panel.find("#"+id);
		if(obj.length > 0){
			obj.remove();
		}
	};
	
	this.showSettingsOver = function() {
		this.settingsOver.show(bestbook.editor.metaData.customerStyle);
	};
	
	this.setCustomerStyle = function(css) {
		bestbook.editor.metaData.customerStyle = css;
		var cssString = this.toCustomerStyleString(css);
		
		bestbook.editor.metaData.customerStyle.isSync = false;
		
		for(var i=0;i<bestbook.editor.metaData.chapter.length;i++){
			bestbook.editor.metaData.chapter[i].editorInterface.updateCustomerStyle(cssString);
		}
	};
	
	this.toCustomerStyleString = function(customerStyle) {
		var css = "";
    	for (var name in customerStyle) {
		    var style = name + "{";
		    
		    style += ("font-size: "+customerStyle[name]["font-size"]+";");
		    style += ("text-align: "+customerStyle[name]["text-align"]+";");
		    style += ("font-weight: "+customerStyle[name]["font-weight"]+";");
		    style += ("font-style: "+customerStyle[name]["font-style"]+";");
		    style += ("text-decoration: "+customerStyle[name]["text-decoration"]+";");
		    style += ("text-indent: "+customerStyle[name]["text-indent"]+"em;");
		    
		    style += "}";
		    
		    css += style;
		}
    	
    	return css;
	};
	
	this.selectSliceContent = function() {
		var chapter = null;
		for(var i=0;i<bestbook.editor.metaData.chapter.length;i++){
			if(bestbook.editor.metaData.chapter[i].cid == this.last_select_cid){
				chapter = bestbook.editor.metaData.chapter[i];
				break;
			}
		}
		
		var element = chapter.editorInterface.getSelectionFirstLevelBlock();
		this.contentSlice.setSelection(element);
		this.contentSlice.show();
	};
	
	this.doSliceBeforeToNewChapter = function() {
		var chapter = null;
		var index = -1;
		for(var i=0;i<bestbook.editor.metaData.chapter.length;i++){
			if(bestbook.editor.metaData.chapter[i].cid == this.last_select_cid){
				chapter = bestbook.editor.metaData.chapter[i];
				index = i;
				break;
			}
		}
		
		var slices = chapter.editorInterface.getSelectionBeforeContent();
		
		var html = "";
		var text = "";
		for(var i=0;i<slices.length;i++){
			if(i == 0){
				text = slices[i].$.textContent;
			}
			html += slices[i].$.outerHTML;
		}
		
		if(text.length > 13){
			text = text.substring(0, 12) + "...";
		}
		
		var cid = bestbook.editor.generatorCid();
		var data = {'cid': cid,'segment': [{"sid":0}],'file': null,'name': text,'style': chapter.editorInterface.css};
		
		data.isSelect = false;
		data.isSync = false;
		
		this.addChapter(data, html);
		bestbook.editor.metaData.chapter.splice(index, 0, data);
		bestbook.editor.coordination.chapterList.refreshList();
		bestbook.editor.coordination.chapterList.showEffect(cid);
		
		//觸發還原
		var span = new CKEDITOR.dom.element( 'span' );
		chapter.editorInterface.editor.insertElement(span);
		
		chapter.editorInterface.removeSlices(slices);
		chapter.editorInterface.editor.getSelection().scrollIntoView();
	};
	
	this.doSliceAfterToNewChapter = function() {
		var chapter = null;
		var index = -1;
		for(var i=0;i<bestbook.editor.metaData.chapter.length;i++){
			if(bestbook.editor.metaData.chapter[i].cid == this.last_select_cid){
				chapter = bestbook.editor.metaData.chapter[i];
				index = i;
				break;
			}
		}
		
		var slices = chapter.editorInterface.getSelectionAfterContent();
		
		var html = "";
		var text = "";
		for(var i=0;i<slices.length;i++){
			if(i == 0){
				text = slices[i].$.textContent;
			}
			html += slices[i].$.outerHTML;
		}
		
		if(text.length > 13){
			text = text.substring(0, 12) + "...";
		}
		
		var cid = bestbook.editor.generatorCid();
		var data = {'cid': cid,'segment': [{"sid":0}],'file': null,'name': text,'style': chapter.editorInterface.css};
		
		data.isSelect = false;
		data.isSync = false;
		
		this.addChapter(data, html);
		bestbook.editor.metaData.chapter.splice(index + 1, 0, data);
		bestbook.editor.coordination.chapterList.refreshList();
		bestbook.editor.coordination.chapterList.showEffect(cid);
		
		//觸發還原
		var span = new CKEDITOR.dom.element( 'span' );
		chapter.editorInterface.editor.insertElement(span);
		
		chapter.editorInterface.removeSlices(slices);
	};
	
	this.markBBTag = function(cid, tid) {
		if(!isNull(cid) && cid.indexOf(".") != -1){
			cid = cid.replace(".", "。");
		}
		
		if(cid != this.last_select_cid){
			var tmp = this;
			if(tmp.getChapter(cid) != null){
				bestbook.editor.chapterSelect(cid);
				
				setTimeout(function(){
					tmp.markBBTag(cid, tid);
					
				}, 1500);
			}
			
			return false;
		}
		
		for(var i=0;i<bestbook.editor.metaData.chapter.length;i++){
			if(bestbook.editor.metaData.chapter[i].cid == cid){
				bestbook.editor.metaData.chapter[i].editorInterface.show();
				
				if(bestbook.editor.metaData.chapter[i].editorInterface.isReady()){
					var oldMark = bestbook.editor.metaData.chapter[i].editorInterface.editor.document.findOne(".markBBTag");
					if(oldMark != null){
						oldMark.removeClass( "markBBTag" );
					}
					
					var bb = bestbook.editor.metaData.chapter[i].editorInterface.editor.document.findOne("[bbtag='"+tid+"']");
					if(!isNull(bb)){
						bb.addClass("markBBTag");
						bb.scrollIntoView(true);
						
						setTimeout(function(){
							bb.removeClass( "markBBTag" );
						}, 3000);
						
					}else{
						console.log("bbtag is null, tid: "+tid);
					}
					
				}else{
					var tmp = this;
					setTimeout(function(){
						tmp.markBBTag(cid, tid);
						
					}, 300);
				}
				
				break;
			}
		}
	};
	
	this.addNewImage = function(src, cropperData) {
		var chapter = this.getChapter();
		
		var element = new CKEDITOR.dom.element( 'img' );
		
		element.setAttribute("src", src);
		element.setAttribute("style", "height: auto; max-width: 100%;");
		
		if(!isNull(cropperData)){
			element.setAttribute("data-cropper-src", cropperData.cropperOut);
			element.setAttribute("data-cropper-pn", cropperData.cropperPN);
			element.setAttribute("data-cropper-x", cropperData.x);
			element.setAttribute("data-cropper-y", cropperData.y);
			element.setAttribute("data-cropper-width", cropperData.width);
			element.setAttribute("data-cropper-height", cropperData.height);
		}
		
		chapter.editorInterface.addImage(element);
	};
	
	this.clearCropperData = function(cropperOut) {
		var chapter = this.getChapter();
		
		var cropper = chapter.editorInterface.editor.document.findOne("[data-cropper-src='"+cropperOut+"']");
		if(cropper != null){
			//cropper.setAttribute("src", this.cropperOut);
			//cropper.removeAttribute("data-cropper-src");
			cropper.removeAttribute("data-cropper-pn");
			cropper.removeAttribute("data-cropper-x");
			cropper.removeAttribute("data-cropper-y");
			cropper.removeAttribute("data-cropper-width");
			cropper.removeAttribute("data-cropper-height");
			//cropper.removeAttribute("data-cropper-ratio");
		}
	};
	
	this.save = function() {
		for(var i=0;i<bestbook.editor.metaData.chapter.length;i++){
			if(bestbook.editor.metaData.chapter[i].editorInterface.contentIsChange){
				var chapter = bestbook.editor.metaData.chapter[i];
				
				var content = null;
				if(isNull(chapter.editorInterface.editor)){
					content = chapter.editorInterface.content;
					
				}else{
					content = bestbook.editor.transCropContent(chapter.editorInterface.editor.getData());
				}
				
				var data = {"cid": bestbook.editor.restoreCid(chapter.cid), "file": chapter.editorInterface.file, "content": content, "variation": chapter.editorInterface.variationBBTag.join(",")};
				
				$.ajax({ "url": "./bookChapterContentSave.do?book_id="+bestbook.editor.getBookId(), "async": false, "cache": false, "type": "POST", "data": data, "dataType": 'json', "timeout": 90000,
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
							if(!isNull(result["file"])){
								chapter.file = result["file"];
								chapter.isSync = false;
								chapter.editorInterface.file = result["file"];
							}
							
							chapter.editorInterface.contentIsChange = false;
							
						}else{
							errorMsg(result["message"]);
						}
			        } 
				});
			}
		}
    };
}