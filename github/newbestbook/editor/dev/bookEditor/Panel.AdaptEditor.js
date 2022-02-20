function AdaptEditorPanel(Id, File, css, customerStyle){
	
	this.editor = null;
	this.id = Id;
	this.file = File;
	this.css = css;//contentsCss = ['/css/mysitestyles.css', '/css/anotherfile.css'];
	this.customerStyle = customerStyle;
	this.customer_style_element;
	this.content = null;
	this.isLoad = false;
	this.isShow = false;
	
	this.contentIsChange = false;
	
	this.resize_width=0;
	this.resize_height=0;
	
	this.variationBBTag = [];
	this.addVariationBBTag = function(bbTag) {
		if(this.variationBBTag.indexOf(bbTag) == -1){
			this.variationBBTag.push(bbTag);
		}
	};
	
	this.isReady = function() {
		if(this.editor != null && this.editor.status == 'ready'){
			return true;
			
		}else{
			return false;
		}
	};
	
	var chapter = this;
	
	this.initEditor = function() {
		if(this.editor == null){
			var baseHref = bestbook.editor.baseUrl + '/BookResources/' + bestbook.editor.getBookId() + "/";
			var imagesHref = bestbook.editor.baseUrl + '/BookImages.do?book_id=' + bestbook.editor.getBookId();
			var imgUploadUrl = bestbook.editor.baseUrl + '/BookImagesUpload.do?book_id=' + bestbook.editor.getBookId();
			var imgUploadTmpUrl = bestbook.editor.baseUrl + '/tmpFileUpload.do';
			
			var styleCss = [];
			for(var i=0;i<this.css.length;i++){
				styleCss.push(baseHref+this.css[i]);
			}
			
			var config = {
					resize_enabled: false
					,language: bestbook.editor.i18n.use_lang
					,height: bestbook.editor.mainEditor.height()
					,allowedContent: true
					,baseHref : baseHref
					,contentsCss: styleCss
					,autoParagraph: false
					,format_tags: 'p;h1;h2;h3;h4;h5;h6;pre;div'
					//,fontSize_sizes: 'Small/small;Medium/medium;Large/large;Very Large/x-large;'
					//,fontSize_sizes: '12/12px;14/14px;16/16px;18/18px;20/20px;22/22px;24/24px;26/26px;28/28px;36/36px;48/48px;72/72px'
					,fontSize_sizes: '1/1rem;1.1/1.1rem;1.2/1.2rem;1.3/1.3rem;1.4/1.4rem;1.5/1.5rem;1.6/1.6rem;1.7/1.7rem;1.8/1.8rem;2/2rem;3/3rem'
					,font_names: "新細明體;標楷體;微軟正黑體;宋體;Arial;Arial Black;Blackletter;Courier;Fixedsys;Comic Sans;Impact;Marlett;Tahoma;Terminal;Times New Roman;Verdana;"
					//,extraPlugins: 'widget,image2,lineutils,custimage,codesnippet,contentslice,settingsover'
					,extraPlugins: 'markdown,widget,image2,lineutils,custimage,codesnippet,mathjax,contentslice,settingsover'
					,imgListUrl: imagesHref
					,imgUploadUrl: imgUploadUrl
					,imgUploadTmpUrl: imgUploadTmpUrl
					/*
					,toolbar: [
					    [ 'Source' ]
					    ,[ 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo' ]
					    ,[ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtl' ]
					    ,[ 'Link', 'Unlink', 'Anchor' ]
					    , '/'
					    
					    ,[ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat' ]
					    
					    ,[ 'Format', 'Font', 'FontSize' ]//'Styles', 
					    ,[ 'TextColor', 'ShowBlocks' ]
					    ,['custimage', 'Table', 'CodeSnippet', 'contentslice', 'settingsover']
					]*/
					/**/
					,toolbar: [
					    [ 'markdown', 'ShowBlocks' ]
					    ,[ 'Undo', 'Redo' ]
					    ,[ 'Format', 'NumberedList', 'BulletedList' ]
					    ,[ 'Bold', 'Italic', 'Strike', 'Subscript', 'Superscript', '-', 'Blockquote', '-', 'RemoveFormat' ]
					    ,[ 'Link', 'Unlink', 'Anchor' ]
					    , '/'
					    ,['custimage', 'Table', 'CodeSnippet', 'Mathjax', 'contentslice', 'settingsover']
					]
					,startupOutlineBlocks: true
			};
			
			CKEDITOR.on('dialogDefinition', function (ev) {
				var dialogName = ev.data.name;
			    var dialogDefinition = ev.data.definition;

			    if (dialogName == 'image2') {        
			        var infoTab = dialogDefinition.getContents('info');
			        infoTab.remove('hasCaption'); //Removing the "add caption" functionality
			        infoTab.remove('alt'); //Removing the "alternative text" functionality
			        infoTab.remove('src'); //Removing the "change URL" functionality
			    }
			});
			
			this.editor = new CKEDITOR.appendTo(this.id, config);
			this.editor.on("instanceReady", function(event){
				bestbook.editor.mainEditor.resize();
				
				chapter.editor.document.on('click', chapter.mouseClick);
				
				var head = chapter.editor.document.getHead();
				chapter.customer_style_element = new CKEDITOR.dom.element('style');
				chapter.customer_style_element.setAttribute("id", "customer_style");
				
				if(!isNull(bestbook.editor.metaData.customerStyle)){
					chapter.customer_style_element.setHtml(bestbook.editor.mainEditor.toCustomerStyleString(bestbook.editor.metaData.customerStyle));
				}
				
				chapter.customer_style_element.appendTo(head);
				
				if(!chapter.isLoad){
					chapter.loadContent();
				}
			});
			
			this.editor.on("saveSnapshot", function(event){//換行才觸發
				if(chapter.isLoad && chapter.editor.mode == "wysiwyg"){
					console.log(chapter.id+' saveSnapshot');
					chapter.contentIsChange = true;
					
				}else if(chapter.isLoad && chapter.editor.mode == ""){
					var head = chapter.editor.document.getHead();
					chapter.customer_style_element.appendTo(head);
				}
			});
			
			this.editor.on("afterCommandExec", function(event){//執行按鈕事件時觸發
				if(event.data.name == 'contentslice'){
					return false;
					
				}else if(event.data.name == 'settingsover'){
					return false;
					
				}else if(event.data.name == 'custimage'){
					return false;
					
				}else if(event.data.name == 'table'){
					return false;
					
				}else if(event.data.name == 'codeSnippet'){
					return false;
					
				}else if(event.data.name == 'source'){
					return false;
					
				}
				
				if(chapter.isLoad){
					console.log(chapter.id+' afterCommandExec');
					chapter.contentIsChange = true;
				}
			});
			
			this.editor.on("key", function(event){//執行按鈕事件時觸發
				if(event.data.keyCode >= 33 && event.data.keyCode <= 40){//方向鍵、Home、End、PageUp、PageDown
					chapter.changeView();
					
				}else if(event.data.keyCode >= 112 && event.data.keyCode <= 115){//F1、F2、F3、F4
					
				}else if(event.data.keyCode == CKEDITOR.CTRL || event.data.keyCode == CKEDITOR.ALT || event.data.keyCode == CKEDITOR.SHIFT){
					
				}else if(event.data.keyCode == 13){//Enter New Line
					var selection = chapter.editor.getSelection(true);
					
					var element = selection.getStartElement();
					if(element.hasAttribute( "bbtag" )){
						chapter.addVariationBBTag(element.getAttribute( "bbtag" ));
					}
					
					if(chapter.isLoad){
						chapter.contentIsChange = true;
					}
					
				}else{
					if(chapter.isLoad){
						chapter.contentIsChange = true;
					}
				}
			});
			
			var clean_regex = /(<([^>]+)>)/ig;
			
			this.editor.on("paste", function(event){
				event.stop();
				
				//var data = event.data.dataValue.replace(/(<br([^>]+)>)/ig, "\n").replace(clean_regex, "");
				//console.log(data);
				//event.editor.insertText(data);
				
				var data = bestbook.editor.converter.toMarkdown(event.data.dataValue).replace(clean_regex, "");
				data = bestbook.editor.converter.toHTML(data.replace(clean_regex, ""));
				
				event.editor.insertHtml(data);
			});
		}
	};
	
	this.loadContent = function() {
		if(isNull(this.file)){
			if(isNull(this.content)){
				this.isLoad = true;
				this.content = "";
				this.contentIsChange = false;
				
			}else{
            	if(chapter.editor.document.getBody().getFirst() != null){
            		chapter.editor.document.getBody().getFirst().remove();
            	}
            	
            	chapter.editor.document.getBody().appendHtml( chapter.content );
            	
            	chapter.isLoad = true;
            	chapter.contentIsChange = true;
            	
            	chapter.initWidgets();
			}
        	
		}else{
			$.ajax({ "url": './bookChapterContent.do', "cache": false, "type": 'GET', "data": {"bookid": bestbook.editor.getBookId(), "file": this.file}, "dataType": 'json', "timeout": 60000,
	            "error": function(result){return false;},
	            "success": function(result){
	            	if(result["success"]){
		            	chapter.content = decodeURIFormServer(result["content"]);
		                
		            	if(chapter.editor.document.getBody().getFirst() != null){
		            		chapter.editor.document.getBody().getFirst().remove();
		            	}
		            	
		            	chapter.editor.document.getBody().appendHtml( chapter.content );
		            	
		            	chapter.isLoad = true;
		            	chapter.contentIsChange = false;
		            	
		            	chapter.initWidgets();
		            	
	            	}else{
	            		console.log(result["message"]);
	            	}
	            } 
	        });
		}
	};
	
	this.initWidgets = function() {
		//image widgets
		var imgs = chapter.editor.document.getElementsByTag( "img" );
		var tmp = [];
    	for(var i=0;i<imgs.count();i++){
    		var element = imgs.getItem(i);
    		tmp.push(element);
    	}
    	
    	for(var i=0;i<tmp.length;i++){
    		chapter.editor.widgets.initOn(tmp[i], "image");
    	}
    	
    	//code widgets
    	var pres = chapter.editor.document.getElementsByTag( "pre" );
    	tmp = [];
    	for(var i=0;i<pres.count();i++){
    		var element = pres.getItem(i);
    		tmp.push(element);
    	}
    	
    	for(var i=0;i<tmp.length;i++){
    		chapter.editor.widgets.initOn(tmp[i], "codeSnippet");
    	}
	};
	
	this.updateCustomerStyle = function(css) {
		if(!isNull(chapter.customer_style_element)){
			chapter.customer_style_element.setHtml(css);
		}
	};
	
	this.getSelectionIndex = function() {
		var selection = chapter.editor.getSelection(true);
		
		var element = selection.getStartElement();
		element = this.getFirstLevelBlock(element);
		
		return element.getIndex();
	};
	
	this.getFirstLevelBlock = function(element) {
		var block = null;
		if(element.getName() == 'body'){
			block = element.getFirst();
			
		}else if(element.getParent().getName() != 'body'){
			while(element.$.nodeType == 1 && element.getParent().getName() != 'body'){
				element = element.getParent();
			}
			
			block = element;
			
		}else{
			block = element;
		}
		
		return block;
	};
	
	this.isFirstLevelBlock = function(element) {
		return (element.$.nodeType == 1 && element.getParent().getName() == 'body');
	};
	
	this.getSelectionFirstLevelBlock = function() {
		var selection = chapter.editor.getSelection(true);
		
		var element = selection.getStartElement();
		element = this.getFirstLevelBlock(element);
		
		return element;
	};
	
	this.getSelectionBeforeContent = function() {
		var index = this.getSelectionIndex();
		var body = chapter.editor.document.getBody();
		
		var slices = [];
		
		console.log("slice content: 0 ~ "+index);
		for(var i=0;i<index;i++){
			var node = body.getChild(i);
			if(this.isFirstLevelBlock(node)){
				slices.push(node);
			}
		}
		
		return slices;
	};
	
	this.getSelectionAfterContent = function() {
		var index = this.getSelectionIndex();
		var body = chapter.editor.document.getBody();
		
		var count = body.getChildCount();
		
		var slices = [];
		
		console.log("slice content: "+index+" ~ "+count);
		for(var i=index;i<count;i++){
			var node = body.getChild(i);
			if(this.isFirstLevelBlock(node)){
				slices.push(node);
			}
		}
		
		return slices;
	};
	
	this.removeSlices = function(slices) {
		chapter.editor.fire('lockSnapshot');
		for(var i=0;i<slices.length;i++){
			slices[i].remove();
		}
		chapter.editor.fire('unlockSnapshot');
		chapter.editor.fire('saveSnapshot');
	};
	
	this.getBBTagId = function(element) {
		var tid = null;
		
		if(!element.hasAttribute("bbtag")){
			var parents = element.getParents();
			element = null;
			
			for(var i=0;i<parents.length;i++){
				if(parents[i].hasAttribute("bbtag")){
					element = parents[i];
					break;
				}
			}
		}
		
		if(element != null && element.hasAttribute("bbtag")){
			tid = element.getAttribute("bbtag");
		}
		
		return tid;
	};
	
	this.mouseClick = function(event) {
		if(bestbook.editor.enableCompare){
			var tid = chapter.getBBTagId(event.data.getTarget());
			if(tid != null){
				bestbook.editor.jumpToOriginal(tid);
			}
		}
	};
	
	this.changeViewTimer;
	this.changeView = function() {
		if(bestbook.editor.enableCompare){
			window.clearTimeout(chapter.changeViewTimer);
			
			chapter.changeViewTimer = window.setTimeout(function() {
				var selection = chapter.editor.getSelection(true);
				var element = selection.getStartElement();
				
				var tid = chapter.getBBTagId(element);
				if(tid != null){
					bestbook.editor.jumpToOriginal(tid);
				}
				
			}, 300);
		}
	};
	
	this.addImage = function(img) {
		var div = new CKEDITOR.dom.element( 'div' );
		div.setAttribute("bbtag", bestbook.editor.generatorBBTagId());
		
		img.appendTo(div);
		
		chapter.editor.insertElement(div);
		chapter.editor.widgets.initOn(img, "image");
	};
	
	this.getId = function() {
		return this.id;
	};
	
	this.getContent = function() {
		return this.content;
	};

	this.resize = function(width, height) {
		this.resize_width = width;
		this.resize_height = height;
		
		if(this.isReady()){
			this.editor.resize( width, height );
		}
	};
	
	this.show = function() {
		if(!this.isReady()){
			this.initEditor();
		}
		
		this.isShow = true;
		$('#'+this.id).show();
		
		if(this.resize_width > 0 && this.resize_height > 0){
			this.resize(this.resize_width, this.resize_height);
		}
		
		this.editor.focus();
	};

	this.hide = function() {
		this.isShow = false;
		$('#'+this.id).hide();
	};
}