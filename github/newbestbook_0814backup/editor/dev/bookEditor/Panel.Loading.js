Loading.prototype = new BasicPanel();
Loading.prototype.constructor = Loading;
Loading.prototype.parent = BasicPanel.prototype;

function Loading(){
	
	this.id = "loadingPanel";
	
	this.panel;
	this.blockObj;
	
	this.render = function() {
		if(!this.isRender){
			$('body').append('<div id="'+this.id+'_block" class="blockDiv"></div><div id="'+this.id+'" class="loading"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div>');
	            
			this.panel = $('div#'+this.id);
			this.blockObj = $('div#'+this.id+'_block');
	        			
			this.isRender = true;
            this.resize();
		}
	};
	
	this.resize = function() {
    	if(this.isRender){
    		this.panel.css("left",($( window ).width() / 2 - (this.panel.width() / 2) - 15)+"px");
    		this.panel.css("top",($( window ).height() / 2 - (this.panel.height() / 2))+"px");
    	}
    };
    
    this.hide = function() {
    	if(this.isRender){
    		this.panel.hide();
    		this.blockObj.hide();
    		this.isShow = false;
    	}
    };
    
    this.show = function() {
    	if(this.isRender){
    		this.panel.show();
    		this.blockObj.show();
    		this.isShow = true;
    	}
    };
}