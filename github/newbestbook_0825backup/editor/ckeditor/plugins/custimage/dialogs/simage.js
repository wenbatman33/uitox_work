CKEDITOR.dialog.add( 'custimageDialog', function ( editor ) {
    return {
        title: editor.lang.custimage.title,
        minWidth: 600,
        minHeight: 400,
        buttons: [CKEDITOR.dialog.cancelButton],
        baseHref : editor.config.baseHref,
        imgListUrl: editor.config.imgListUrl,
        imgUploadUrl: editor.config.imgUploadUrl,
        imgUploadTmpUrl: editor.config.imgUploadTmpUrl,
        contents: [
            {
	            id: 'tab1',
	            label: '',
	            title: '',
	            elements: [
	                {
	                	id: 'btus',
	                    type: 'html',
	                    style : 'width: 100%',
	                    html: '<div><div class="fileUpload myButton"><span class="upload_name">'+editor.lang.custimage.upload+'</span><input type="file" class="upload" name="img" value="'+editor.lang.custimage.upload+'" accept=".jpg,.jpeg,.png"/></div></div>'
	                },
	                {
	                	id: 'list',
	                    type: 'html',
	                    style : 'width: 100%; height: 350px; overflow: auto;',
	                    html: '<div></div>'
	                }
	            ]
	        }
        ],
        loadList: function(dialog) {
            $.ajax({ "url": dialog.definition.imgListUrl, "async": true, "cache": false, "type": "GET", "data": {}, "dataType": 'json', "timeout": 60000,
				"error": function(request, status, error){
					if(status == "abort"){
		        		
		        	}else if(status == "timeout" || status == "error" || status == "parsererror"){
						console.log(request.status+" "+request.statusText);
						dialog.hide();
						alert(request.status+" "+request.statusText);
		        		
		        	}else{
		        		console.log(request.status+" "+request.statusText);
		        		dialog.hide();
		        		alert(request.status+" "+request.statusText);
		        	}
				},
				"success": function(result){
					if(result["success"]){
						var html = "";
			            for(var i=0;i<result["list"].length;i++){
			            	var src = dialog.definition.baseHref + result["list"][i].src;
			            	html += '<div class="simg" style="float: left; width: 120px; margin-left: 5px; text-align: center;cursor: hand; cursor: pointer;"><img style="cursor: hand; cursor: pointer; max-width: 120px;" src="'+src+'"></div>';
			            }
						
			            dialog.getContentElement("tab1", "list").getElement().setHtml(html);
			            
			            var simg = dialog.getContentElement("tab1", "list").getElement().find(".simg");
			            
			            for(var i=0;i<simg.count();i++){
			            	$(simg.getItem(i).$).click( function () {
			            		bestbook.editor.mainEditor.addNewImage($(this).find("img")[0].src);
			            		
			            		dialog.hide();
			            	});
			            	
			            }
			            
					}else{
						dialog.hide();
						alert(result["message"]);
					}
		        } 
			});
    	},
        onLoad: function() {
        	var tmp = this;
        	this.definition.loadList(this);
        	this.on('resize',function(ev){
        		tmp.definition.reSize(ev.data.width, ev.data.height);
            });
        	
        	var upload = this.getContentElement("tab1", "btus").getElement().find("input[type='file']");
        	if(upload.count() > 0){
        		$(upload.getItem(0).$).change(function (e) {
        			tmp.definition.imageFileSelect(e);
            	});
        	}
    	},
    	reSize: function(width, height) {
    		this.dialog.getContentElement("tab1", "list").getElement().setAttribute("style", "width: 100%; height: "+(height - 80)+"px; overflow: auto;");
    	},
    	imageFileSelect: function(e) {
    		var files = e.target.files;
    		for(var i=0; i < files.length; i++) {
    			this.dialog.definition.imageFileChange(files[i]);
    	    }
    		
    		var upload = this.dialog.getContentElement("tab1", "btus").getElement().find("input[type='file']");
    		if(upload.count() > 0){
    			$(upload.getItem(0).$).prop("value", "");
    		}
    	},
    	imageFileChange: function(file) {
    		if(file.type == "image/png" || file.type == "image/jpeg"){
    			var tmp = this;
    			var handler = new fileHandler(file, tmp.dialog.definition.imgUploadTmpUrl);
    			handler.completeCallBack = function(serverId) {
    				tmp.dialog.definition.fileCompleteCallBack(serverId, handler, tmp.dialog);
    		    };
    		    
    		    fileUploadPanel.addFileQueue(handler);
    			
    		}else{
    			alert(editor.lang.custimage.unsupport_type+": "+file.type);
    		}
    	},
    	fileCompleteCallBack: function(tmpFileId, fileHandler, dialog) {
    		var data = {"tmpFileId": tmpFileId, "type": fileHandler.type, "size": fileHandler.size};
    		
    		$.ajax({ "url": dialog.definition.imgUploadUrl, "async": false, "cache": false, "type": "GET", "data": data, "dataType": 'json', "timeout": 60000,
    			"error": function(request, status, error){
    				if(status == "timeout" || status == "error" || status == "abort" || status == "parsererror"){
    					throw new Error(error);
    	        		
    	        	}else{
    	        		throw new Error(status+" "+request.responseText);
    	        	}
    			},
    			"success": function(result){
    				if(result["success"]){
    					dialog.definition.loadList(dialog);
    					
    				}else{
    					throw new Error(result["message"]);
    				}
    	        } 
    		});
    	},
        onShow: function() {
        	
    	},
    	onOk: function() {
	        
		}
    };
});