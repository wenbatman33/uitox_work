CKEDITOR.plugins.add('settingsover',{
	icons:'settingsover',
	init:function(editor){
		editor.addCommand('settingsover', {
	        exec: function( editor ) {
	        	bestbook.editor.mainEditor.showSettingsOver();
	        }
	    });
		
		editor.ui.addButton('settingsover',{
			label: editor.lang.settingsover.title,
			command:'settingsover',
			toolbar: 'insert'
		});
	}
});