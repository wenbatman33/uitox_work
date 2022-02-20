CropperPanel.prototype = new BasicPanel();
CropperPanel.prototype.constructor = CropperPanel;
CropperPanel.prototype.parent = BasicPanel.prototype;

function CropperPanel(){
	
	this.id = "cropperPanel";
	
	this.blockObj;
	this.panel;
	this.btu;
	
	this.render = function() {
		if(!this.isRender){
			this.blockObj = $('<div class="blockDiv" style="z-index:200; opacity: 0.3"></div>');
			this.panel = $(".image_cropper_panel");
			
			this.blockObj.appendTo( "body" );
			
			this.btu = this.panel.find(".toolbar");
			
			this.isRender = true;
			
			var tmp = this;
			
			this.blockObj[0].addEventListener('mousewheel', function(event){event.preventDefault();}, false);
        	this.blockObj[0].addEventListener('DOMMouseScroll', function(event){event.preventDefault();}, false);
        	
        	this.blockObj.bind('click', function () {tmp.hide();});
        	
			this.btu.find("#close_btu").bind('click', function () {tmp.hide(); return false;});
			this.btu.find("#cropper_btu").bind('click', function () {tmp.cropperImage(); return false;});
		}
	};
	
	this.cropperImg;
	this.cropperSourceImg;
	this.cropperPN;
	this.newImage = function(src, pn) {
		if(!this.isRender){
    		this.render();
    	}
    	
		this.cropperSourceImg = src;
		this.cropperPN = pn;
		
		if(!isNull(this.cropperImg)){
			this.cropperImg.cropper("destroy");
		}
		var container = this.panel.find(".img-container");
		container.find("img").remove();
		container.append('<img src="'+src+'"/>');
		
		this.cropperImg = container.find("img").cropper({zoomable: false, autoCropArea: 0.3});
	};
    
	this.cropperImage = function() {
		if(!isNull(this.cropperImg)){
			var parent = this;
			
			var image = new Image();
			image.onload = function() {
				var bbId = bestbook.editor.generatorBBTagId();
				var cropperOut = "images/"+bbId+".jpg";
				
				var cropperData = parent.cropperImg.cropper("getData");
				//cropperData.ratio = parent.cropperImg.cropper("getImageData").ratio;
				
				var job = new ImageCropperJob();
		    	
		    	job.book_id = bestbook.editor.book_id;
		    	job.cropperPN = parent.cropperPN;
		    	job.cropperOut = cropperOut;
		    	job.x = cropperData.x;
		    	job.y = cropperData.y;
		    	job.width = cropperData.width;
		    	job.height = cropperData.height;
		    	//job.ratio = cropperData.ratio;
		    	
		    	bestbook.editor.mainEditor.addNewImage(image.src, job);
		    	
		    	parent.addServerCropQueue(job);
			};
			image.onerror = function() {
				console.log(" load error");
			};
			image.src = this.cropperImg.cropper("getDataURL", "image/jpeg", 0.9);
		}
		
		this.hide();
	};
	
    this.queueArray = [];//ImageCropperJob
    this.addServerCropQueue = function(cropperJob) {
    	this.queueArray.push(cropperJob);
    	this.startServerCropThread();
    };
    
    this.hasServerCropQueue = function() {
    	var has = false;
    	
    	for(var i=this.queueArray.length;i>0;i--){
    		if(!this.queueArray[i-1].isEnd){
    			has = true;
    		}
    	}
    	
    	return has;
    };
    
    this.getServerCropQueue = function() {
    	var queue = null;
    	
    	for(var i=this.queueArray.length;i>0;i--){
    		if(!this.queueArray[i-1].isEnd){
    			queue = this.queueArray[i-1];
    		}
    	}
    	
    	return queue;
    };
    
    this.cropQueueIsComplete = function(cropperOut) {
    	var complete = false;
    	
    	for(var i=this.queueArray.length;i>0;i--){
    		if(this.queueArray[i-1].cropperOut == cropperOut && this.queueArray[i-1].isComplete){
    			complete = true;
    			break;
    		}
    	}
    	
    	return complete;
    };
    
    this.addServerCropThread = null;
    this.startServerCropThread = function() {
    	window.clearTimeout(this.addServerCropThread);
    	
    	var tmp = this;
    	this.addServerCropThread = setTimeout(function(){tmp.syncServerCropThread();}, 1000);
	};
	
	this.syncLock = false;
	this.syncServerCropThread = function() {
		if(!this.syncLock && isOnline()){
			this.syncLock = true;
			
			var queue = this.getServerCropQueue();
			if(queue == null){
				this.syncLock = false;
				
			}else if(!queue.isProcess){
				queue.isProcess = true;
				queue.serverTry++;
				
				var tmp = this;
		    	
				var data = {"book_id": queue.book_id, "cropperPN": queue.cropperPN, "cropperOut": queue.cropperOut, "x": queue.x, "y": queue.y, "width": queue.width, "height": queue.height, "ratio": queue.ratio};
				
				$.ajax({ "url": bestbook.editor.baseUrl+"/serverCrop.do", "async": false, "cache": false, "type": "GET", "data": data, "dataType": 'json', "timeout": 60000,
					"error": function(request, status, error){
						queue.isProcess = false;
						tmp.syncLock = false;
						
						if(status == "abort"){
							queue.isEnd = true;
							
			        	}else if(status == "timeout" || status == "error" || status == "parsererror"){
			        		console.log(request.status+" "+request.statusText);
			        		
			        	}else{
			        		console.log(request.status+" "+request.statusText);
			        	}
					},
					"success": function(result){
						if(result["success"]){
							queue.isProcess = false;
							queue.isComplete = true;
							queue.isEnd = true;
							
							queue.syncComplete();
							
						}else{
							console.log(result["message"]);
							
							queue.isProcess = false;
							
							if(queue.serverTry > 2){
								queue.isEnd = true;
							}
						}
						
						tmp.syncLock = false;
		            } 
				});
			}
		}
		
		this.startServerCropThread();
	};
    
	this.hide = function() {
    	if(this.isRender){
    		this.blockObj.hide();
    		this.panel.hide();
    		this.isShow = false;
    	}
    };
    
	this.show = function() {
    	if(!this.isRender){
    		this.render();
    	}
    	
    	var width = $(window).width() - 200;
    	var height = $(window).height() - 140;
    	
    	if(width > 800){
    		width = 800;
    	}
    	
    	this.panel.css("top", (($(window).height() - height - 50) / 2));
		this.panel.css("left", (($(window).width() - width) / 2));
		
		this.panel.width(width);
		this.panel.height(height);
		
		this.panel.find(".img-container").css("max-height", height+"px");
		
		this.blockObj.css("top", ($("html").scrollTop() + $("body").scrollTop()));
		
		this.panel.show();
		this.blockObj.show();
		
		this.isShow = true;
    };
}

function ImageCropperJob() {
	this.book_id;
	this.cropperPN;
	this.cropperOut;
	this.x;
	this.y;
	this.width;
	this.height;
	this.ratio;
	
	this.serverTry = 0;
	this.isComplete = false;
	this.isProcess = false;
	this.isEnd = false;
	
	this.syncComplete = function() {
		bestbook.editor.mainEditor.clearCropperData(this.cropperOut);
	};
}