ToolsPanel.prototype = new BasicPanel();
ToolsPanel.prototype.constructor = ToolsPanel;
ToolsPanel.prototype.parent = BasicPanel.prototype;

function ToolsPanel(){
	
	this.id = "toolsPanel";
	
	this.panel;
	
	this.render = function() {
		if(!this.isRender){
			this.panel = $(".tools_panel");
			
			var preview_btu = this.panel.find("#preview_btu");
			preview_btu.bind('click', function (e) {
				if(!isNull(bestbook.editor.preview)){
					bestbook.editor.loading.show();
					
					window.setTimeout(function() {
						bestbook.editor.preview.show();
						
					}, 100);
				}
				
				return false;
    		});
			
			var save_btu = this.panel.find("#save_btu");
			save_btu.bind('click', function (e) {
				bestbook.editor.saveAll();
				return false;
    		});
			
			var btu_publish = this.panel.find("#btu_publish");
			btu_publish.bind('click', function (e) {
				bestbook.editor.contentPublish();
				return false;
    		});
			
			var leave_btu = this.panel.find("#leave_btu");
			leave_btu.bind('click', function (e) {
				window.location.href = bestbook.editor.baseUrl+"/bookMain.do";
				return false;
    		});
			
			this.isRender = true;
            this.resize();
		}
	};
	
	this.upadteSaveButtonText = function(text) {
		var save_btu = this.panel.find("#save_btu");
		save_btu.text(text);
	};
}