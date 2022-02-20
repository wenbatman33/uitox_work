CoordinationPanel.prototype = new BasicPanel();
CoordinationPanel.prototype.constructor = CoordinationPanel;
CoordinationPanel.prototype.parent = BasicPanel.prototype;

function CoordinationPanel(){
	
	this.id = "coordinationPanel";
	
	this.panel;
	
	this.chapterList = new ChapterListPanel();
	this.compare = new OriginalPanel();
	
	this.render = function() {
		if(!this.isRender){
			//$('body').append('<div id="'+this.id+'_block" class="blockDiv" style="opacity: 0;"></div><div id="'+this.id+'" class="showAside"></div>');
            
			this.panel = $(".coordination_panel");
			
			this.chapterList.render();
			
			if(bestbook.editor.enableCompare){
				this.compare.render();
			}
			
			this.isRender = true;
            this.resize();
            
            var tmp = this;
            
            var chapter_btu = $(".coordination_panel_nav").find("#chapter_add_btu");
            chapter_btu.bind('click', function (event) {
            	event.preventDefault();
            	
            	tmp.addChapter();
    		});
            
            var chapter_btu = $(".coordination_panel_nav").find("#chapter_list_btu");
            chapter_btu.bind('click', function (event) {
            	event.preventDefault();
            	
            	tmp.panel.find("li").removeClass("current");
            	$(this).addClass("current");
            	
            	if(!tmp.chapterList.isShow){
            		tmp.chapterList.show();
                	tmp.compare.hide();
                	bestbook.editor.initSize();
            	}
    		});
            
            var compare_btu = $(".coordination_panel_nav").find("#compare_btu");
            compare_btu.bind('click', function (event) {
            	event.preventDefault();
            	
            	tmp.panel.find("li").removeClass("current");
            	$(this).addClass("current");
            	
            	if(!tmp.compare.isShow){
            		tmp.chapterList.hide();
                	tmp.compare.show();
                	bestbook.editor.initSize();
            	}
    		});
            
            if(bestbook.editor.enableCompare){
            	this.chapterList.hide();
            	this.compare.show();
            	
            	this.panel.find("li").removeClass("current");
            	this.panel.find("li#compare_btu").addClass("current");
            	
			}else{
				this.chapterList.show();
				compare_btu.hide();
				
				this.panel.find("li").removeClass("current");
				this.panel.find("li#chapter_list_btu").addClass("current");
			}
		}
	};
	
	this.resize = function() {
		/*
		var coordination_panel_width = 300;
		if(this.compare.isShow){
			coordination_panel_width = $(window).width() / 2;
			
			if(coordination_panel_width > 600){
				coordination_panel_width = 600;
				
			}else if(coordination_panel_width < 350){
				coordination_panel_width = 350;
			}
		}
		
		this.panel.width(coordination_panel_width);
		*/
		if(this.isRender){
			this.panel.height($(window).height() - bestbook.editor.tools.height());
			
			if(this.compare.isRender){
				this.compare.setHeight(this.panel.height() - $(".coordination_panel_nav").height());
			}
			
			this.chapterList.setHeight(this.panel.height() - $(".coordination_panel_nav").height());
		}
	};
	
	this.listIsChange = function() {
		return this.chapterList.isChange();
    };
	
	this.save = function() {
		return this.chapterList.save();
    };
	
	this.addChapter = function(name, content) {
		this.panel.find("li").removeClass("current");
		this.panel.find("li#chapter_list_btu").addClass("current");
    	
    	if(!this.chapterList.isShow){
    		this.chapterList.show();
    		this.compare.hide();
    		bestbook.editor.initSize();
    	}
    	
    	this.chapterList.addChapter(name, content);
	};
}