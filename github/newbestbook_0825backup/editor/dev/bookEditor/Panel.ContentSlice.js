ContentSlicePanel.prototype = new BasicPanel();
ContentSlicePanel.prototype.constructor = ContentSlicePanel;
ContentSlicePanel.prototype.parent = BasicPanel.prototype;

function ContentSlicePanel(){
	
	this.id = "contentSlicePanel";
	
	this.blockObj;
	this.panel;
	this.btu;
	
	this.before_range;
	this.after_range;
	
	this.render = function() {
		if(!this.isRender){
			this.blockObj = $('<div class="blockDiv" style="z-index:200; opacity: 0.3"></div>');
			this.panel = $(".content_slice_panel");
			
			this.blockObj.appendTo( "body" );
			
			this.before_range = this.panel.find(".content_slice_range_before");
			this.after_range = this.panel.find(".content_slice_range_after");
			
			this.btu = this.panel.find(".toolbar");
			
			this.isRender = true;
			
			var tmp = this;
			
			this.blockObj[0].addEventListener('mousewheel', function(event){event.preventDefault();}, false);
        	this.blockObj[0].addEventListener('DOMMouseScroll', function(event){event.preventDefault();}, false);
        	
        	this.blockObj.bind('click', function () {tmp.hide();});
        	
        	this.before_range.bind('click', function () {
        		tmp.sliceBefore();
        		tmp.hide(); return false;
        	});
        	this.after_range.bind('click', function () {
        		tmp.sliceAfter();
        		tmp.hide(); return false;
        	});
        	
			this.btu.find("#close_btu").bind('click', function () {tmp.hide(); return false;});
		}
	};
    
	this.sliceBefore = function() {
		this.selectionElement.removeClass("markBBTag");
		bestbook.editor.mainEditor.doSliceBeforeToNewChapter();
    };
    
	this.sliceAfter = function() {
		this.selectionElement.removeClass("markBBTag");
		bestbook.editor.mainEditor.doSliceAfterToNewChapter();
    };
    
	this.selectionElement;
	this.setSelection = function(element) {
		if(!this.isRender){
    		this.render();
    	}
		
		this.selectionElement = element;
		var index = element.getIndex(true);
		if(index == 0){
			this.before_range.hide();
			
		}else{
			this.before_range.show();
		}
		
		this.after_range.find("p:first").html(element.getText());
    };
    
	this.hide = function() {
    	if(this.isRender){
    		this.blockObj.hide();
    		this.panel.hide();
    		this.isShow = false;
    		
    		if(!isNull(this.selectionElement)){
    			this.selectionElement.removeClass("markBBTag");
    		}
    	}
    };
    
	this.show = function() {
    	if(!this.isRender){
    		this.render();
    	}
		
		this.blockObj.css("top", ($("html").scrollTop() + $("body").scrollTop()));
		
		this.panel.show();
		this.blockObj.show();
		
		this.isShow = true;
		
		if(!isNull(this.selectionElement)){
			this.selectionElement.addClass("markBBTag");
		}
    };
}