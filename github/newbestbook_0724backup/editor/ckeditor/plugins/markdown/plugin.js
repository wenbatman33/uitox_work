CKEDITOR.plugins.add('markdown',{
	icons:'markdown',
	hidpi: true,
	init:function(editor){
		// Source mode isn't available in inline mode yet.
		if ( editor.elementMode == CKEDITOR.ELEMENT_MODE_INLINE )
			return;
		
		var markdownarea = CKEDITOR.plugins.sourcearea;
		
		editor.addMode( 'source', function( callback ) {
			var contentsSpace = editor.ui.space( 'contents' ),
				textarea = contentsSpace.getDocument().createElement( 'textarea' );

			textarea.setStyles(
				CKEDITOR.tools.extend({
					// IE7 has overflow the <textarea> from wrapping table cell.
					width: CKEDITOR.env.ie7Compat ? '99%' : '100%',
					height: '100%',
					resize: 'none',
					outline: 'none',
					'text-align': 'left'
				},
				CKEDITOR.tools.cssVendorPrefix( 'tab-size', editor.config.sourceAreaTabSize || 4 ) ) );

			// Make sure that source code is always displayed LTR,
			// regardless of editor language (#10105).
			textarea.setAttribute( 'dir', 'ltr' );

			textarea.addClass( 'cke_source cke_reset cke_enable_context_menu' );

			editor.ui.space( 'contents' ).append( textarea );

			var editable = editor.editable( new markdownEditable( editor, textarea ) );

			// Fill the textarea with the current editor data.
			editable.setData( bestbook.editor.converter.toMarkdown(editor.getData( 1 )) );
			
			// Having to make <textarea> fixed sized to conquer the following bugs:
			// 1. The textarea height/width='100%' doesn't constraint to the 'td' in IE6/7.
			// 2. Unexpected vertical-scrolling behavior happens whenever focus is moving out of editor
			// if text content within it has overflowed. (#4762)
			if ( CKEDITOR.env.ie ) {
				editable.attachListener( editor, 'resize', onResize, editable );
				editable.attachListener( CKEDITOR.document.getWindow(), 'resize', onResize, editable );
				CKEDITOR.tools.setTimeout( onResize, 0, editable );
			}

			editor.fire( 'ariaWidget', this );

			callback();
		});
		
		editor.addCommand( 'markdown', markdownarea.commands.source );
		
		if ( editor.ui.addButton ) {
			editor.ui.addButton( 'markdown', {
				label: 'markdown',
				command: 'markdown',
				toolbar: 'mode,10'
			});
		}
		
		editor.on( 'mode', function() {
			editor.getCommand( 'markdown' ).setState( editor.mode == 'source' ? CKEDITOR.TRISTATE_ON : CKEDITOR.TRISTATE_OFF );
		});
		
		function onResize() {
			// Holder rectange size is stretched by textarea,
			// so hide it just for a moment.
			this.hide();
			this.setStyle( 'height', this.getParent().$.clientHeight + 'px' );
			this.setStyle( 'width', this.getParent().$.clientWidth + 'px' );
			// When we have proper holder size, show textarea again.
			this.show();
		}
	}
});

var markdownEditable = CKEDITOR.tools.createClass({
	base: CKEDITOR.editable,
	proto: {
		setData: function( data ) {
			this.setValue( data );
			this.editor.fire( 'dataReady' );
		},

		getData: function() {
			return bestbook.editor.converter.toHTML(this.getValue());
		},

		// Insertions are not supported in source editable.
		insertHtml: function() {},
		insertElement: function() {},
		insertText: function() {},

		// Read-only support for textarea.
		setReadOnly: function( isReadOnly ) {
			this[ ( isReadOnly ? 'set' : 'remove' ) + 'Attribute' ]( 'readOnly', 'readonly' );
		},

		detach: function() {
			markdownEditable.baseProto.detach.call( this );
			this.clearCustomData();
			this.remove();
		}
	}
});