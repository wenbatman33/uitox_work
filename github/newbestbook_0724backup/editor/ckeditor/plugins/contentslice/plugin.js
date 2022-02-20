CKEDITOR.plugins.add('contentslice',{
	icons:'contentslice',
	init:function(editor){
		editor.addCommand('contentslice', {
	        exec: function( editor ) {
	        	bestbook.editor.mainEditor.selectSliceContent();
	        }
	    });
		
		editor.ui.addButton('contentslice',{
			label: editor.lang.contentslice.title,
			command:'contentslice',
			toolbar: 'insert'
		});
		
		if(editor.addMenuItem) {
			editor.addMenuGroup( 'contentsliceGroup' );
			
			editor.addMenuItem( 'contentsliceItem', {
                label: editor.lang.contentslice.title,
                icon: this.path + 'icons/contentslice.png',
                command: 'contentslice',
                group: 'contentsliceGroup'
			});
		}
		
		if (editor.contextMenu) {
            editor.contextMenu.addListener( function( element ) {
            	return { contentsliceItem: CKEDITOR.TRISTATE_OFF };
            });
        }
	}
});