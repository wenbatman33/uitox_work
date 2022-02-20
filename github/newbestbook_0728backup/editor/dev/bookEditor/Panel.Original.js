OriginalPanel.prototype = new BasicPanel();
OriginalPanel.prototype.constructor = OriginalPanel;
OriginalPanel.prototype.parent = BasicPanel.prototype;

function OriginalPanel(){
	
	this.id = "originalPanel";
	
	this.panel;
	this.imgPanel;
	
	this.zoomControl = 1;
	this.zoomMax = 3;
	this.zoomMin = 0.5;
	
	this.render = function() {
		if(!this.isRender){
			this.panel = $("#originalPanel");
			this.imgPanel = $(".original_panel_imgs");
			
			if(bestbook.editor.enableCompare){
				var parent = this;
				
				this.panel.find("#btu_original_zoomin").bind( "click", function() {
					parent.zoomIn(0.25);
					
					return false;
				});
				this.panel.find("#btu_original_zoomout").bind( "click", function() {
					parent.zoomOut(0.25);
					
					return false;
				});
				$("#btu_original").bind( "click", function() {
					parent.zoomRestore();
					
					return false;
				});
				
				var original = this.imgPanel.find(".original");
				
				for(var i=0;i<bestbook.editor.metaData.imgMeta.pagecount;i++){
					var idx = (i+1);
					
					var page = null;
					for(var p=0;p<bestbook.editor.metaData.imgMeta.pages.length;p++){
						if(bestbook.editor.metaData.imgMeta.pages[p].pn == idx){
							page = bestbook.editor.metaData.imgMeta.pages[p];
							break;
						}
					}
					
					if(page != null){
						var item = $('<div class="item" style="height:'+page.h+'px; width:'+page.w+'px;" pn="'+page.pn+'"><img pn="'+page.pn+'" src="./images/bookcover-default.jpg" pre_src="originalImg/'+bestbook.editor.book_id+'/'+page.pn+'"/></div>');
						item.on( "click", function(event) {
							var obj = $(this);
							var padding_top = parseInt(obj.css("padding-top").replace("px",""), 10);
							var padding_left = parseInt(obj.css("padding-left").replace("px",""), 10);
							
							var pos = {"x": obj.offset().left, "y": obj.offset().top};
							
							var page_x = (event.clientX - padding_left - pos.x) / parent.zoomControl;
							var page_y = (event.clientY - padding_top - pos.y) / parent.zoomControl;
							
							var pn = parseInt(this.getAttribute("pn"), 10);
							parent.jumpToPage(pn, {"page_x": page_x, "page_y": page_y});
							
							return false;
						});
						/*
						item.on( "mouseup", function(event) {
							if(event.which == 3){
								var pn = this.getAttribute("pn");
								var src = "originalImg/"+bestbook.editor.book_id+"/"+pn;
								
								bestbook.editor.cropper.newImage(src, pn);
								bestbook.editor.cropper.show();
								
								event.preventDefault();
							}
							
							return false;
						});*/
						item.on( "mouseenter", function(event) {
							var obj = $(this);
							var cropper_img_btu = obj.find(".cropper_img_btu");
							if(cropper_img_btu.length == 0){
								var new_cropper_img_btu = $('<div class="cropper_img_btu"></div>');
								
								var pn = this.getAttribute("pn");
								var src = "originalImg/"+bestbook.editor.book_id+"/"+pn;
								new_cropper_img_btu.on( "click", function(event) {
									bestbook.editor.cropper.newImage(src, pn);
									bestbook.editor.cropper.show();
									
									event.preventDefault();
								});
								obj.append(new_cropper_img_btu);
								
								cropper_img_btu = new_cropper_img_btu;
							}
							cropper_img_btu.show();
							
							var padding_top = parseInt(obj.css("padding-top").replace("px",""), 10);
							var page_top = parent.imgPanel.offset().top - obj.offset().top;
							if(page_top < 0){
								page_top = 0;
							}
							
							var top = obj.height() - 50 - padding_top - page_top;
							
							cropper_img_btu.css("top", "-"+top+"px");
							
							//return false;
						});
						item.on( "mousemove", function(event) {
							var obj = $(this);
							var cropper_img_btu = obj.find(".cropper_img_btu");
							if(cropper_img_btu.length > 0){
								var padding_top = parseInt(obj.css("padding-top").replace("px",""), 10);
								var page_top = parent.imgPanel.offset().top - obj.offset().top;
								if(page_top < 0){
									page_top = 0;
								}
								
								var top = obj.height() - 50 - padding_top - page_top;
								cropper_img_btu.css("top", "-"+top+"px");
							}
							
							//return false;
						});
						item.on( "mouseleave", function(event) {
							$(this).find(".cropper_img_btu").hide();
							
							//return false;
						});
						
						original.append(item);
					}
				}
				
				this.loadConfirm();
				this.initLazyLoadImg();
			}
			
			this.isRender = true;
            this.resize();
		}
	};
	
	this.confirmArr = [];//{"cid", "tag", "desc"}
	this.confirmScore = 60;
	this.loadConfirm = function() {
		if(!isNull(bestbook.editor.metaData.mappingMeta) && !isNull(bestbook.editor.metaData.mappingMeta.chapter)){
			for(var c=0;c<bestbook.editor.metaData.mappingMeta.chapter.length;c++){
				for(var t=0;t<bestbook.editor.metaData.mappingMeta.chapter[c].tags.length;t++){
					if(bestbook.editor.metaData.mappingMeta.chapter[c].tags[t].cs <= this.confirmScore){
						var nowTag = bestbook.editor.getBBTagByTagMapping(bestbook.editor.metaData.mappingMeta.chapter[c].tags[t].ti);
						if(nowTag != null){
							this.confirmArr.push({"cid": bestbook.editor.metaData.mappingMeta.chapter[c].cid, "tag": bestbook.editor.metaData.mappingMeta.chapter[c].tags[t], "desc": bestbook.editor.i18n.get("original.confirm.no")+" "+(this.confirmArr.length + 1)+" "+bestbook.editor.i18n.get("original.confirm.position")});
						}
					}
				}
			}
		}
		
		var original_confirm = this.panel.find("#btu_original_confirm");
		original_confirm.find("b").text(this.confirmArr.length);
		for(var i=0;i<this.confirmArr.length;i++){
			original_confirm.find("ul").append('<li><a href="#" idx="'+i+'">'+this.confirmArr[i]["desc"]+'</a></li>');
		}

		var parent = this;
		this.panel.find("#btu_original_confirm a").bind( "click", function() {
			var tmp = $(this);
			
			parent.panel.find("#btu_original_confirm").find("li").removeClass("current");
			tmp.closest("li").addClass("current");
			
			tmp.css("text-decoration", "line-through");
			
			parent.confirmFocus(tmp.attr("idx"));
			
			return false;
		});
		
	};
	this.confirmFocus = function(idx) {
		var nowTag = this.confirmArr[idx].tag;
		
		this.markArea(nowTag);
		
		bestbook.editor.mainEditor.markBBTag(this.confirmArr[idx].cid, this.confirmArr[idx].tag.ti);
	};
	
	this.lastMarkTag;
	this.markArea = function(tag) {
		this.imgPanel.find('.original_mark').remove();
		this.lastMarkTag = tag;
		
		if(!isNull(tag.bk) && tag.bk.length > 0){
			for(var pns=0;pns<tag.bk.length;pns++){
				var new_mark = $('<div class="original_mark"></div>');
				
				var foucsDiv = this.imgPanel.find("div[pn='"+tag.bk[pns].pn+"']");
				var foucsImg = foucsDiv.find("img[pn='"+tag.bk[pns].pn+"']");
				
				var top = $(foucsImg).height() - ((tag.bk[pns].y - 10) * this.zoomControl);
				var left = tag.bk[pns].x * this.zoomControl;
				
				var height = tag.bk[pns].h * this.zoomControl;
				var width = tag.bk[pns].w * this.zoomControl;
				
				if(height < 2){
					height = 2;
				}
				
				if(width < 2){
					width = 2;
				}
				
				top += 20;
				left -= 15;
				width += 30;
				height += 30;
				
				new_mark.css("top", "-"+top+"px");
				new_mark.css("left", left+"px");
				new_mark.css("height", height+"px");
				new_mark.css("width", width+"px");
				
				new_mark.insertAfter(foucsImg);
			}
		}
		
		var first = this.imgPanel.find('.original_mark:first');
		if(first.length > 0){
			var moveY = first[0].offsetTop - 185;
			this.imgPanel.clearQueue().animate({scrollTop: moveY}, 300);
		}
	};
	
	this.getInPositionTagByPn = function(pn, pos) {
		console.log("pn: "+pn+" page_x: "+pos.page_x+" page_y: "+pos.page_y);
		
		for(var mc=0;mc<bestbook.editor.metaData.mappingMeta.chapter.length;mc++){
			for(var mt=0;mt<bestbook.editor.metaData.mappingMeta.chapter[mc].tags.length;mt++){
				
				for(var pns=0;pns<bestbook.editor.metaData.mappingMeta.chapter[mc].tags[mt].bk.length;pns++){
					if(bestbook.editor.metaData.mappingMeta.chapter[mc].tags[mt].bk[pns].pn == pn){
						var x = bestbook.editor.metaData.mappingMeta.chapter[mc].tags[mt].bk[pns].x - 20;
						var x1 = x + bestbook.editor.metaData.mappingMeta.chapter[mc].tags[mt].bk[pns].w + 20;
						var y = bestbook.editor.metaData.mappingMeta.chapter[mc].tags[mt].bk[pns].y - 20;
						var y1 = y + bestbook.editor.metaData.mappingMeta.chapter[mc].tags[mt].bk[pns].h + 20;
						
						if((pos.page_x >= x && pos.page_x <= x1) && (pos.page_y >= y && pos.page_y <= y1)){
							return {"cid": bestbook.editor.metaData.mappingMeta.chapter[mc].cid, "tag": bestbook.editor.metaData.mappingMeta.chapter[mc].tags[mt]};
						}
					}
				}
			}
		}
		
		return null;
	};
	
	this.jumpToPage = function(pn, pos) {
		var mapping = this.getInPositionTagByPn(pn, pos);
		
		if(mapping != null){
			this.markArea(mapping.tag);
			bestbook.editor.mainEditor.markBBTag(mapping.cid, mapping.tag.ti);
		}
	};
	
	this.zoomRestore = function() {
		this.zoomControl = 1;
		this.changeZoom();
	};
	this.zoomIn = function(value) {
		this.zoomControl = this.zoomControl + value;
		if(this.zoomMax < this.zoomControl){
			this.zoomControl = this.zoomMax;
		}
		
		this.changeZoom();
	};
	this.zoomOut = function(value) {
		this.zoomControl = this.zoomControl - value;
		if(this.zoomMin > this.zoomControl){
			this.zoomControl = this.zoomMin;
		}
		
		this.changeZoom();
	};
	
	this.changeZoom = function() {
		var original = this.imgPanel.find(".original");
		
		for(var i=0;i<bestbook.editor.metaData.imgMeta.pagecount;i++){
			var idx = (i+1);
			
			var page = null;
			for(var p=0;p<bestbook.editor.metaData.imgMeta.pages.length;p++){
				if(bestbook.editor.metaData.imgMeta.pages[p].pn == idx){
					page = bestbook.editor.metaData.imgMeta.pages[p];
					break;
				}
			}
			if(page != null){
				var pageDom = original.find("div[pn='"+page.pn+"']");
				var h = page.h * this.zoomControl;
				var w = page.w * this.zoomControl;
				
				pageDom.css("height", h+"px");
				pageDom.css("width", w+"px");
			}
		}
		
		if(!isNull(this.lastMarkTag)){
			this.markArea(this.lastMarkTag);
		}
	};
	
	this.setHeight = function(height) {
		this.panel.height(height);
		this.imgPanel.height(height - 35);
	};
	
	this.initLazyLoadImg = function() {
		var lazyLoad = new imagePreLoad();
		lazyLoad.singleThread = true;
		lazyLoad.stretch=700;
		
		var parent = this;
		
		lazyLoad.initPreLoad = function() {
			var tmp = this;
			
			parent.imgPanel.on("scrollstop", function() {
				tmp.setViewRange();
				tmp.scanImage();
			});
			
			tmp.setViewRange();
			tmp.scanImage();
		};
		lazyLoad.initPreLoad();
	};
}