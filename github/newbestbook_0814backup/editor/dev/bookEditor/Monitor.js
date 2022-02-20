function Monitor() {
	
	this.start = function() {
		this.updateContentSaveStatus();
	};
	
	/**
	 * 檢查內文是否需要存檔
	 */
	this.saveStatusTimer;
	this.updateContentSaveStatus = function() {
		window.clearTimeout(this.saveStatusTimer);
		
		if(bestbook.editor.contentIsChange()){
			bestbook.editor.tools.upadteSaveButtonText("*"+bestbook.editor.i18n.get("button.save.text"));
			
		}else{
			bestbook.editor.tools.upadteSaveButtonText(bestbook.editor.i18n.get("button.save.text"));
		}
		
		var tmp = this;
		this.saveStatusTimer = window.setTimeout(function() {
			tmp.updateContentSaveStatus();
			
		}, 1000);
	};
}