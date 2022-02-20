ChapterListPanel.prototype = new BasicPanel();
ChapterListPanel.prototype.constructor = ChapterListPanel;
ChapterListPanel.prototype.parent = BasicPanel.prototype;

function ChapterListPanel(){
	
	this.id = "chapterListPanel";
	
	this.panel;
	
	this.render = function() {
		if(!this.isRender){
			this.panel = $(".chapter_panel");
			
			bestbook.editor.replaceCid();
			
			for(var i=0;i<bestbook.editor.metaData.chapter.length;i++){
				bestbook.editor.metaData.chapter[i].isSelect = false;
				bestbook.editor.metaData.chapter[i].isSync = true;
				
				this.addChapterTree(bestbook.editor.metaData.chapter[i]);
			}
			
			this.isRender = true;
            this.resize();
		}
	};
	
	this.refreshList = function() {
		this.panel.find("div").remove();
		
		for(var i=0;i<bestbook.editor.metaData.chapter.length;i++){
			this.addChapterTree(bestbook.editor.metaData.chapter[i]);
		}
		
		this.focusChapter(bestbook.editor.mainEditor.last_select_cid);
		
		bestbook.editor.coordination.compare.hide();
		this.show();
    	bestbook.editor.initSize();
	};
	
	this.showEffect = function(cid) {
		this.panel.find("div[data-cid='"+cid+"']").hide().show("normal");
	};
	
	this.focusChapter = function(cid) {
		this.panel.find("div").removeClass("current");
		this.panel.find("div[data-cid='"+cid+"']").addClass("current");
	};
	
	this.addChapter = function(name, content) {
		var needShowEffect = (isNull(name) && isNull(content));
		
		if(isNull(name)){
			name = bestbook.editor.i18n.get("chapter.unnamed");
		}
		if(isNull(content)){
			content = null;
		}
		
		var cid = bestbook.editor.generatorCid();
		var data = {'cid': cid,'segment': [{"sid":0}], 'file': null, 'name': name, 'style':[]};
		
		if(bestbook.editor.metaData.chapter.length > 0){
			for(var i=0;i<bestbook.editor.metaData.chapter[0]["style"].length;i++){
				data["style"].push(bestbook.editor.metaData.chapter[0]["style"][i]);
			}
		}
		
		data.isSelect = false;
		data.isSync = false;
		
		bestbook.editor.metaData.chapter.push(data);
		
		this.addChapterTree(data, content);
		
		if(needShowEffect){
			this.showEffect(cid);
		}
	};
	
	this.addChapterTree = function(data, content) {
		var tmp = this;
		
		var templateTree = $('<div id="tree_'+data.cid+'" data-cid="'+data.cid+'" ><span class="remove_btu">X</span><input type="text" name="name" value="'+data.name+'" /></div>');
		templateTree.find("[name='name']").bind('click', function (e) {
			tmp.focusChapter(data.cid);
			bestbook.editor.chapterSelect(data.cid);
			
			return false;
		});
		
		templateTree.find("[name='name']").bind('change', function (e) {
			data.name = this.value;
			data.isSync = false;
		});
		
		templateTree.find(".remove_btu").bind('click', function (e) {
			tmp.removeChapter(data.cid);
		});
		
		this.panel.append(templateTree);
		
		bestbook.editor.mainEditor.addChapter(data, content);
	};
	
	this.removeChapter = function(cid) {
		var tmp = this;
		
		confirmMsg(bestbook.editor.i18n.get("chapter.msg.remove.title"), bestbook.editor.i18n.get("chapter.msg.remove.desc"), function () {
			tmp.panel.find('#tree_'+cid).remove();
			bestbook.editor.mainEditor.removeChapter(cid);
			
			for(var c=0;c<bestbook.editor.metaData.chapter.length;c++){
				if(bestbook.editor.metaData.chapter[c].cid == cid){
					bestbook.editor.metaData.chapter.splice(c, 1);
					
					break;
				}
			}
			
			for(var c=0;c<bestbook.editor.metaData.chapter.length;c++){
				bestbook.editor.metaData.chapter[c].isSync = false;
			}
			
			$(this).dialog("close");
		});
	};
	
	this.isChange = function() {
		var isChange = false;
		
		var nowList = this.panel.find("div");
		
		for(var i=0;i<bestbook.editor.metaData.chapter.length;i++){
			if(!bestbook.editor.metaData.chapter[i].isSync || bestbook.editor.metaData.chapter[i].cid != nowList[i].getAttribute("data-cid")){
				isChange = true;
				break;
			}
		}
		
		return isChange;
    };
    
    this.save = function() {
    	var nowTree = $('#chapter_tree').find("div");
    	var sortChapter = [];
    	var hasChangeSort = false;
    	var hasRemove = false;
    	for(var i=0;i<nowTree.length;i++){//sort chapter
    		var exist = false;
    		for(var c=0;c<bestbook.editor.metaData.chapter.length;c++){
    			if(bestbook.editor.metaData.chapter[c].cid == nowTree[i].getAttribute("data-cid")){
    				sortChapter.push(bestbook.editor.metaData.chapter[c]);
    				exist = true;
    				hasChangeSort = true;
    			}
    		}
    		
    		if(!exist){
    			hasRemove = true;
    		}
    	}
    	
    	if(hasChangeSort || hasRemove){
    		bestbook.editor.metaData.chapter = sortChapter;
    		
    		for(var c=0;c<bestbook.editor.metaData.chapter.length;c++){
    			bestbook.editor.metaData.chapter[c].isSync = false;
    		}
    	}
    	
    	var navigation = {};
    	navigation['chapter'] = [];
    	for(var i=0;i<bestbook.editor.metaData.chapter.length;i++){
    		var chapter = bestbook.editor.metaData.chapter[i];
    		var data = {'cid': bestbook.editor.restoreCid(chapter.cid), 'segment': chapter.segment, 'file': chapter.file, 'name': chapter.name, 'style': chapter.style};
    		navigation['chapter'].push(data);
    	}
    	
    	var chapter_list_string = JSON.stringify(navigation);
    	
    	var success = false;
    	
    	$.ajax({ "url": "./bookChapterNavigationSave.do?book_id="+bestbook.editor.getBookId(), "async": false, "cache": false, "type": "POST", "data": {"chapter_list": chapter_list_string}, "dataType": 'json', "timeout": 90000,
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
    				for(var i=0;i<bestbook.editor.metaData.chapter.length;i++){
    					bestbook.editor.metaData.chapter[i].isSync = true;
    				}
    				
    				success = true;
    				
    			}else{
    				errorMsg(result["message"]);
    			}
            } 
    	});
    	
    	return success;
    };
	
	this.setHeight = function(height) {
		this.panel.height(height);
	};
}