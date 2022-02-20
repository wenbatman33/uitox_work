SettingsOverPanel.prototype = new BasicPanel();
SettingsOverPanel.prototype.constructor = SettingsOverPanel;
SettingsOverPanel.prototype.parent = BasicPanel.prototype;

function SettingsOverPanel(){
	
	this.id = "settingsOverPanel";
	
	this.blockObj;
	this.panel;
	this.btu;
	
	this.select_opt = "p";
	
	this.default_settings = {
		"h1": {"font-size": "1.6rem", "text-align": "justify", "font-weight": "normal", "font-style": "normal", "text-decoration": "none", "text-indent": 0},
		"h2": {"font-size": "1.5rem", "text-align": "justify", "font-weight": "normal", "font-style": "normal", "text-decoration": "none", "text-indent": 0},
		"h3": {"font-size": "1.4rem", "text-align": "justify", "font-weight": "normal", "font-style": "normal", "text-decoration": "none", "text-indent": 0},
		"h4": {"font-size": "1.3rem", "text-align": "justify", "font-weight": "normal", "font-style": "normal", "text-decoration": "none", "text-indent": 0},
		"h5": {"font-size": "1.2rem", "text-align": "justify", "font-weight": "normal", "font-style": "normal", "text-decoration": "none", "text-indent": 0},
		"h6": {"font-size": "1.1rem", "text-align": "justify", "font-weight": "normal", "font-style": "normal", "text-decoration": "none", "text-indent": 0},
		"p": {"font-size": "1rem", "text-align": "justify", "font-weight": "normal", "font-style": "normal", "text-decoration": "none", "text-indent": 2}
	};
	
	this.settings;
	
	this.preview;
	this.opt_list;
	this.font_size_list;
	
	this.render = function() {
		if(!this.isRender){
			this.blockObj = $('<div class="blockDiv" style="z-index:200; opacity: 0.3"></div>');
			this.panel = $(".settings_over_panel");
			
			this.blockObj.appendTo( "body" );
			
			this.btu = this.panel.find(".toolbar");
			
			this.preview = this.panel.find(".settings_over_preview");
			
			this.isRender = true;
			
			var tmp = this;
			
			this.blockObj[0].addEventListener('mousewheel', function(event){event.preventDefault();}, false);
        	this.blockObj[0].addEventListener('DOMMouseScroll', function(event){event.preventDefault();}, false);
        	
        	this.blockObj.bind('click', function () {tmp.hide();});
        	
			this.btu.find("#close_btu").bind('click', function () {tmp.hide(); return false;});
			
			this.btu.find("#accept_btu").bind('click', function () {
				bestbook.editor.mainEditor.setCustomerStyle(tmp.settings);
				
				tmp.hide();
				return false;
			});
			
			this.preview.find("h1, h2, h3, h4, h5, h6, p").bind('click', function (event) {event.preventDefault(); tmp.changeOpt(this.localName); return false;});
			
			this.opt_list = this.panel.find("#settings_over_opt_list li");
			this.font_size_list = this.panel.find("#settings_over_font_size_list li");
			
			this.opt_list.bind('click', function (event) {
				event.preventDefault();
				
				tmp.changeOpt($(this).find("a").attr("data-v"));
				
				return false;
			});
			
			this.font_size_list.bind('click', function (event) {
				event.preventDefault();
				
				tmp.changeFontSize($(this).find("a").attr("data-v"));
				
				return false;
			});
			
			this.panel.find(".settings_opt_align_left").bind('click', function (event) {tmp.changeAlign("left"); event.preventDefault(); return false;});
			this.panel.find(".settings_opt_align_center").bind('click', function (event) {tmp.changeAlign("center"); event.preventDefault(); return false;});
			this.panel.find(".settings_opt_align_right").bind('click', function (event) {tmp.changeAlign("right"); event.preventDefault(); return false;});
			this.panel.find(".settings_opt_align_justify").bind('click', function (event) {tmp.changeAlign("justify"); event.preventDefault(); return false;});
			
			this.panel.find(".settings_opt_font_bold").bind('click', function (event) {tmp.changeFontBold(); event.preventDefault(); return false;});
			this.panel.find(".settings_opt_font_italic").bind('click', function (event) {tmp.changeFontItalic(); event.preventDefault(); return false;});
			this.panel.find(".settings_opt_font_underline").bind('click', function (event) {tmp.changeFontUnderline(); event.preventDefault(); return false;});
			
			this.panel.find(".settings_opt_indent_increase").bind('click', function (event) {tmp.indentIncrease(); event.preventDefault(); return false;});
			this.panel.find(".settings_opt_indent_decrease").bind('click', function (event) {tmp.indentDecrease(); event.preventDefault(); return false;});
		}
	};
    
	this.changeOpt = function(opt) {
		this.opt_list.removeClass("current");
		
		var select = this.opt_list.find("a[data-v='"+opt+"']");
		if(select.length > 0){
    		select.closest("li").addClass("current");
    		this.select_opt = opt;
    	}
		
		this.panel.find(".settings_over_opt_name").text(select.text());
		this.panel.find(".wrapper-overopt-list").hide(150).show(300);
		
		this.changeFontSize(this.settings[this.select_opt]["font-size"]);
		this.changeAlign(this.settings[this.select_opt]["text-align"]);
		
		if("bold" == this.settings[this.select_opt]["font-weight"]){
			this.panel.find(".settings_opt_font_bold").addClass("active");
			
		}else{
			this.panel.find(".settings_opt_font_bold").removeClass("active");
		}
		
		if("italic" == this.settings[this.select_opt]["font-style"]){
			this.panel.find(".settings_opt_font_italic").addClass("active");
			
		}else{
			this.panel.find(".settings_opt_font_italic").removeClass("active");
		}
		
		if("underline" == this.settings[this.select_opt]["text-decoration"]){
			this.panel.find(".settings_opt_font_underline").addClass("active");
			
		}else{
			this.panel.find(".settings_opt_font_underline").removeClass("active");
		}
		
		this.changeTextIndent(this.settings[this.select_opt]["text-indent"]);
    };
    
	this.changeFontSize = function(size) {
		this.font_size_list.removeClass("current");
		
		var select = this.font_size_list.find("a[data-v='"+size+"']");
		if(select.length > 0){
    		select.closest("li").addClass("current");
    	}
		
		this.panel.find(".settings_opt_font_size").text(select.text());
		this.preview.find(this.select_opt).css("font-size", size);
		this.settings[this.select_opt]["font-size"] = size;
		
		this.panel.find(".wrapper-overopt-list").hide(150).show(300);
    };
    
	this.changeAlign = function(align) {
		this.panel.find("#settings_opt_align a").removeClass("active");
		
		var select = this.panel.find(".settings_opt_align_"+align);
		select.addClass("active");
		
		this.preview.find(this.select_opt).css("text-align", align);
		this.settings[this.select_opt]["text-align"] = align;
    };
    
    this.changeFontBold = function() {
		var select = this.panel.find(".settings_opt_font_bold");
		if(select.hasClass("active")){
			select.removeClass("active");
			this.preview.find(this.select_opt).css("font-weight", "normal");
			this.settings[this.select_opt]["font-weight"] = "normal";
			
		}else{
			select.addClass("active");
			this.preview.find(this.select_opt).css("font-weight", "bold");
			this.settings[this.select_opt]["font-weight"] = "bold";
		}
    };
    
    this.changeFontItalic = function() {
		var select = this.panel.find(".settings_opt_font_italic");
		if(select.hasClass("active")){
			select.removeClass("active");
			this.preview.find(this.select_opt).css("font-style", "normal");
			this.settings[this.select_opt]["font-style"] = "normal";
			
		}else{
			select.addClass("active");
			this.preview.find(this.select_opt).css("font-style", "italic");
			this.settings[this.select_opt]["font-style"] = "italic";
		}
    };
    
    this.changeFontUnderline = function() {
		var select = this.panel.find(".settings_opt_font_underline");
		if(select.hasClass("active")){
			select.removeClass("active");
			this.preview.find(this.select_opt).css("text-decoration", "none");
			this.settings[this.select_opt]["text-decoration"] = "none";
			
		}else{
			select.addClass("active");
			this.preview.find(this.select_opt).css("text-decoration", "underline");
			this.settings[this.select_opt]["text-decoration"] = "underline";
		}
    };
    
    this.changeTextIndent = function(indent) {
    	if(indent > 0){
    		this.panel.find(".settings_opt_indent_tips").text(indent+" "+bestbook.editor.i18n.get("settings.indent.unit"));
        	this.preview.find(this.select_opt).css("text-indent", indent+"em");
        	
    	}else{
    		this.panel.find(".settings_opt_indent_tips").text("");
        	this.preview.find(this.select_opt).css("text-indent", indent+"em");
    	}
    	
    	this.settings[this.select_opt]["text-indent"] = indent;
    };
    
    this.indentIncrease = function() {
    	var indent = this.settings[this.select_opt]["text-indent"];
    	indent++;
    	
    	this.changeTextIndent(indent);
    };
    
    this.indentDecrease = function() {
    	var indent = this.settings[this.select_opt]["text-indent"];
    	indent--;
    	
    	if(indent < 0){
    		indent = 0;
    	}
    	
    	this.changeTextIndent(indent);
    };
    
	this.hide = function() {
    	if(this.isRender){
    		this.blockObj.hide();
    		this.panel.hide();
    		this.isShow = false;
    	}
    };
    
	this.show = function(customerStyle) {
    	if(!this.isRender){
    		this.render();
    	}
		
    	if(isNull(customerStyle)){//clone object
    		this.settings = JSON.parse(JSON.stringify(this.default_settings));
    		
    	}else{
    		this.settings = customerStyle;
    	}
    	
		this.blockObj.css("top", ($("html").scrollTop() + $("body").scrollTop()));
		
		this.panel.show();
		this.blockObj.show();
		
		this.isShow = true;
		
		this.changeOpt(this.select_opt);
    };
}