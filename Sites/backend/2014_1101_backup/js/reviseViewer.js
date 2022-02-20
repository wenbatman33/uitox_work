function contentSave() {
	var chapter = viewer.connector.getNeedSaveContent();
	if(!isNull(chapter) && chapter.length > 0){
		console.log(chapter);
		
		showLoading();
		
		try{
			for(var i=0;i<chapter.length;i++){
				saveChapterContentToServer(chapter[i]);
			}
			
		}catch(e){
			console.log(e);
		}
		
		hideLoading();
	}
}

function saveChapterContentToServer(chapter) {
	var saveData = {"sid":chapter.segment[0].sid, "content":chapter.segment[0].content};
	
	$.ajax({ "url": "./bookChapterContentSave.do?book_id="+book_id+"&file="+chapter.file, "async": false, "cache": false, "type": "POST", "data": saveData, "dataType": 'json', "timeout": 60000,
		"error": function(request, status, error){
			if(status == "timeout" || status == "error" || status == "abort" || status == "parsererror"){
				errorMsg(error);
        		
        	}else{
        		errorMsg(status+" "+request.responseText);
        	}
		},
		"success": function(result){
			if(result["success"]){
				viewer.connector.setChapterContentIsChange(chapter.cid, false);
				
			}else{
				errorMsg(result["message"]);
			}
        } 
	});
}

function contentIsChange() {
	return viewer.connector.contentIsChange();
}

window.onbeforeunload = function (e) {
	var msg = null;
	if(contentIsChange()){
		msg = "書籍內容尚未儲存，您確定要關閉頁面？";
	}
	
	if(msg != null){
		var e = e || window.event;
		if (e) {//IE & Firefox
			e.returnValue = msg;
		
		}else{// For Safari
			return msg;
		}
	}
};

function updateNowChapterContentIsChange() {
	return viewer.connector.updateNowChapterContentIsChange();
}

function formatBlock(type) {
	if(!type){
		type = "p";
	}
	
	viewer.connector.getSelectDocument().execCommand("formatBlock", false, "<"+type+">");
	
	reFocus();
	searchStyleTagBySelection();
	
	updateNowChapterContentIsChange();
}

function setJustifyStyle(format) {
	/*
	justifyCenter	text-align: center
	justifyFull	text-align: justify
	justifyLeft	text-align: left
	justifyRight	text-align: right
	*/
	
	var css = "left";
	if(format == "justifyCenter"){
		css = "center";
		
	}else if(format == "justifyRight"){
		css = "right";
		
	}else if(format == "justifyFull"){
		css = "justify";
	}
	
	var node = getParentBlockNode();
	
	if(node != null){
		viewer.connector.getSelectDocument().execCommand(format, false, null);
		if(node.hasAttribute("align")){
			node.removeAttribute("align");
		}
		
		node.style.textAlign = css;
		
		reFocus();
		searchStyleTagBySelection();
	}
	
	updateNowChapterContentIsChange();
}

function setFontColor(color) {
	if(!color){
		color = "#ff0000";
	}
	
	var selection = viewer.connector.getSelectDocument().getSelection();
	var tmp_str = selection.toString();
	
	viewer.connector.getSelectDocument().execCommand("foreColor", false, color);
	
	var node = null;
	var parent = selection.anchorNode;
	if(parent == null || parent.nodeType != 1 || tmp_str != parent.textContent){
		while(parent != null){
			if(parent.nodeType == 1 && tmp_str == parent.textContent){
				node = parent;
				break;
			}
			
			parent = parent.parentNode;
		}
	}
	
	if(node == null){
		parent = selection.anchorNode.nextSibling;
		while(parent != null){
			if(parent.nodeType == 1 && tmp_str == parent.textContent){
				node = parent;
				break;
			}
			
			parent = parent.nextSibling;
		}
	}
	
	if(node != null){
		if(node.hasAttribute("color")){
			node.removeAttribute("color");
		}
		
		var style_arr = transStyleStringToObject(node.getAttribute("style"));
		
		for(var i=0;i<style_arr.length;i++){
			if(style_arr[i].key == "color"){
				style_arr.splice(i, 1);
			}
		}
		style_arr.push(new styleObject("color", color));
		
		var styleStr = "";
		for(var i=0;i<style_arr.length;i++){
			styleStr += style_arr[i].toString()+";";
		}
		
		node.setAttribute("style", styleStr);
	}
	
	reFocus();
	searchStyleTagBySelection();

	updateNowChapterContentIsChange();
}

function setFormat(format) {
	viewer.connector.getSelectDocument().execCommand(format, false, null);
	
	reFocus();
	searchStyleTagBySelection();

	updateNowChapterContentIsChange();
}

function removeFormat() {
	viewer.connector.getSelectDocument().execCommand("removeFormat", false, null);
	
	reFocus();
	searchStyleTagBySelection();

	updateNowChapterContentIsChange();
}

function ExecCommand(exec) {
	hideContextMenu();
	
	try{
		viewer.connector.getSelectDocument().execCommand(exec, false, null);
		
	}catch(e){
		console.log(e);
	}
	
	reFocus();
	searchStyleTagBySelection();

	updateNowChapterContentIsChange();
	
	return false;
}

function setFontSize(fontSize) {
	viewer.connector.getSelectDocument().execCommand("fontSize", false, fontSize);
	
	var selection = viewer.connector.getSelectDocument().getSelection();
	var tmp_str = selection.toString();
	
	var font = selection.anchorNode;
	if((font == null || font.nodeType != 1) || tmp_str != font.textContent){
		font = selection.anchorNode.nextSibling;
	}
	
	if((font == null || font.nodeType != 1) || tmp_str != font.textContent){
		font = selection.anchorNode.parentNode;
	}
	
	if(font != null && font.nodeType == 1 && tmp_str == font.textContent && font.hasAttribute("size")){
		font.removeAttribute("size");
		font.style.fontSize = fontSize;
	}
	
	reFocus();
	searchStyleTagBySelection();

	updateNowChapterContentIsChange();
}

function changeNodeStyle(node, style_key, style_value) {
	var style_arr = transStyleStringToObject(node.getAttribute("style"));
	
	var has_back = false;
	for(var i=0;i<style_arr.length;i++){
		if(style_arr[i].key == style_key){
			has_back = true;
			style_arr.splice(i, 1);
		}
	}
	if(has_back){
		style_arr.push(new styleObject(style_key, style_value));
		
		var styleStr = "";
		for(var i=0;i<style_arr.length;i++){
			styleStr += style_arr[i].toString()+";";
		}
		
		node.setAttribute("style", styleStr);
	}
}

function addNewBlockP() {
	var nowBlock = getParentBlockNode();
	if(nowBlock.hasAttribute("bbtag")){
		nowBlock.removeAttribute("bbtag");
	}
}

var apply_text_align_tag = ["div", "p", "h1", "h2", "h3", "h4", "h5", "h6"];
function getParentBlockNode() {
	//search parent block, p or h1 ~ h6 or div
	var selection = viewer.connector.getSelectDocument().getSelection();
	var node = null;
	if(selection.anchorNode.nodeType == 1 && containsStyleTag(apply_text_align_tag, selection.anchorNode.nodeName.toLowerCase())){
		node = selection.anchorNode;
	}
	
	var parent = selection.anchorNode.parentNode;
	if(parent != null){
		while(node == null && parent != null){
			if(parent.nodeType == 1 && containsStyleTag(apply_text_align_tag, parent.nodeName.toLowerCase())){
				node = parent;
			}
			
			if(node == null){
				parent = parent.parentNode;
			}
		}
	}
	
	return node;
}

function getParentClass() {
	var class_arr = [];
	
	var selection = viewer.connector.getSelectDocument().getSelection();
	
	var parent = selection.anchorNode;
	while(parent != null){
		if(parent.nodeType == 1 && parent.className != ""){
			var tmp_class = parent.className.split(" ");
			for(var i=0;i<tmp_class.length;i++){
				if(!containsStyleTag(class_arr, tmp_class[i])){
					class_arr.push(tmp_class[i]);
				}
			}
		}
		
		parent = parent.parentNode;
	}
	
	return class_arr;
}

var selectClass = [];
function searchStyleTagBySelection() {
	var selection = viewer.connector.getSelectDocument().getSelection();
	
	selectFormatTags = [];
	selectStyles = [];
	
	var parent = selection.anchorNode;
	while(parent){
		if(parent.nodeType == 1){
			var nodeName = parent.nodeName.toLowerCase();
			if(nodeName == "body" || nodeName == "html" || nodeName == "#document"){
				break;
				
			}else if(nodeName == "p" || nodeName == "div"){
				
			}else{
				addFormatTag(nodeName);
			}
			
			if(parent.getAttribute){
				addStyles(parent.getAttribute("style"));
			}
		}
		
		parent = parent.parentNode;
	}
	
	if(selection.anchorNode.childNodes.length > 0){
		for(var i=0;i<selection.anchorNode.childNodes.length;i++){
			if(selection.anchorNode.childNodes[i].nodeType == 1){
				var nodeName = selection.anchorNode.childNodes[i].nodeName.toLowerCase();
				if(nodeName == "p" || nodeName == "div"){
					
				}else{
					addFormatTag(nodeName);
				}
				
				if(selection.anchorNode.childNodes[i].getAttribute){
					addStyles(selection.anchorNode.childNodes[i].getAttribute("style"));
				}
			}
		}
	}
	
	//childNodes
	/*
	parent = selection.focusNode;
	while(parent){
		var nodeName = parent.nodeName.toLowerCase();
		if(nodeName == "body" || nodeName == "html" || nodeName == "#document"){
			break;
			
		}else if(nodeName == "p" || nodeName == "div"){
			
		}else{
			addFormatTag(nodeName);
		}
		
		if(parent.getAttribute){
			addStyles(parent.getAttribute("style"));
		}
		
		parent = parent.parentNode;
	}*/
	
	if (!selection.isCollapsed) {//有選擇範圍
		var selRange = selection.getRangeAt(0);
		
		var tmp_str = selection.toString();
		if(selRange.commonAncestorContainer.nodeName.toLowerCase() == "body"){	//有問題的全選, IE、Firefox
			selRange.selectNodeContents(viewer.connector.getSelectDocument().body.firstChild);
		}
		
		if(!selRange.commonAncestorContainer.childElementCount){//修正IE 不支援
			selRange.commonAncestorContainer.childElementCount = selRange.commonAncestorContainer.childNodes.length;
			selRange.commonAncestorContainer.children = selRange.commonAncestorContainer.childNodes;
		}
		
		if(selRange.commonAncestorContainer.childElementCount == 1){
			var children = selRange.commonAncestorContainer.children[0];
			while(children){
				if(tmp_str == children.textContent){
					addFormatTag(children.nodeName.toLowerCase());
					if(children.getAttribute){
						addStyles(children.getAttribute("style"));
					}
				}
				
				if(children.childElementCount == 1){//loop
					children = children.children[0];
				
				}else{
					children = null;
				}
			}
		}
	}
	
	//console.log( "selectFormatTags: " + selectFormatTags );
	//console.log( "selectStyles: " + selectStyles );
	
	selectClass = getParentClass();
	//console.log( "selectClass: " + selectClass );
}

function showContextMenu(event) {
	$('#contextmenu #class_set_list').hide();
	
	$('#contextmenu #class_set_list').find("li").remove();
	
	$('#contextmenu #class_set_list').show();
	
	var block = getParentBlockNode();
	var bbShow = block.hasAttribute("bbtag");
	if(bbShow){
		$('#contextmenu #opt_bb').unbind( "click" ).bind("click", function(){
			hideContextMenu();
			jumpToOriginal(block, true);
			
			return false;
		});
		
		$('#contextmenu #opt_bb').show();
		
	}else{
		$('#contextmenu #opt_bb').hide();
	}
	
	var selection = viewer.connector.getSelectDocument().getSelection();
	if (!selection.isCollapsed) {
		//目前不支援存取剪貼簿
		$('#contextmenu #opt_cut').hide();
		$('#contextmenu #opt_copy').hide();
		$('#contextmenu #opt_paste').hide();
		
		$('#contextmenu #opt_delete').show();
		
	}else{
		$('#contextmenu #opt_cut').hide();
		$('#contextmenu #opt_copy').hide();
		$('#contextmenu #opt_paste').hide();
		$('#contextmenu #opt_delete').hide();
	}
	
	var right_position = $( "#rightPane" ).position();
	var viewer_position = $( ".viewer_frame" ).position();
	
	var x = viewer_position.left + right_position.left + event.clientX + 20;
	var y = viewer_position.top + right_position.top + event.clientY + 60;
	
	if(y > ($( window ).height() - $('#contextmenu').height() - 85)){
		y = ($( window ).height() - $('#contextmenu').height() - 85);
	}
	
	$('#contextmenu').css("left", x+"px");
	$('#contextmenu').css("top", y+"px");
	
	$('#contextmenu').show();
	
	searchStyleTagBySelection();
}

function hideContextMenu() {
	$('#contextmenu').hide();
	hideDropdown();
}

var bookStyle = new BookStyle();
function loadBookStyle() {
	var bookStyleElement = viewer.connector.getSelectDocument().getElementById("bookStyle");
	if(bookStyleElement != null){
		var tmp_css = bookStyleElement.innerHTML.replace(/\r\n/g,"").replace(/\n/g,"").replace(/\t/g,"");
		tmp_css = tmp_css.trim().replace(/\}/g,"}\n");
		
		var css_list = tmp_css.split("\n");
		for(var i=0;i<css_list.length;i++){
			var sIdx = css_list[i].indexOf("{");
			if(sIdx > 0 && css_list[i].indexOf("}") == (css_list[i].length -1)){
				var name = css_list[i].substring(0, sIdx).trim();
				
				var css = new cssStyleObject(name);
				
				var styles = css_list[i].substring(sIdx + 1 , css_list[i].indexOf("}")).trim().split(";");
				for(var j=0;j<styles.length;j++){
					if(styles[j].indexOf(":") > 0){
						var style = styles[j].split(":");
						
						css.setStyle(style[0].trim(), style[1].trim());
					}
				}
				
				transCssKey(css);
				css.removeEmptyStyle();
				
				bookStyle.setCss(css);
			}
		}
	}
}

function transStyleStringToObject(styleString) {
	var style_arr = [];
	
	if(styleString != null){
		var styles = styleString.trim().split(";");
		for(var j=0;j<styles.length;j++){
			if(styles[j].indexOf(":") > 0){
				var style = styles[j].split(":");
				
				style_arr.push(new styleObject(style[0].trim(), style[1].trim()));
			}
		}
	}
	
	return style_arr;
}

function transCssKey(css) {
	var trans_key = ["margin", "padding"];
	//top right bottom left
	//margin: 0px 0px 0px 1.5em;
	for(var t=0;t<trans_key.length;t++){
		if(css.getStyle(trans_key[t]) != null && css.getStyle(trans_key[t]) != ""){
			var tmp = css.getStyle(trans_key[t]).value.split(" ");
			if(tmp.length == 1){
				css.setStyle(trans_key[t]+"-top", tmp[0]);
				css.setStyle(trans_key[t]+"-right", tmp[0]);
				css.setStyle(trans_key[t]+"-bottom", tmp[0]);
				css.setStyle(trans_key[t]+"-right", tmp[0]);
				
				css.setStyle(trans_key[t], "");
				
			}else{
				if(tmp.length > 0){
					css.setStyle(trans_key[t]+"-top", tmp[0]);
					css.setStyle(trans_key[t], "");
				}
				
				if(tmp.length > 1){
					css.setStyle(trans_key[t]+"-right", tmp[1]);
				}
				
				if(tmp.length > 2){
					css.setStyle(trans_key[t]+"-bottom", tmp[2]);
				}
				
				if(tmp.length > 3){
					css.setStyle(trans_key[t]+"-left", tmp[3]);
				}
			}
		}
	}
}

function showBlockSetting(type) {
	hideContextMenu();
	
	var css = bookStyle.getCss(type);
	if(css == null){
		var css = new cssStyleObject(type);
		bookStyle.setCss(css);
		
		console.log( bookStyle.toString() );
	}
	
	var block = $('#blockSetting');
	
	//var x = (window.innerWidth / 2) - (block.width() / 2);
	//var y = (window.innerHeight / 2) - (block.height() / 2);
	var x = (window.innerWidth / 2) - 520;
	if(x < block.height()){
		x = (window.innerWidth / 2) - (block.width() / 2);
	}
	
	var y = 150;
	
	block.css("left", x+"px");
	block.css("top", y+"px");
	
	block.find("input[name='name']").val(css.name);
	block.find( "form" )[0].reset();
	
	for(var i=0;i<css.styles.length;i++){
		block.find("[name='"+css.styles[i].key+"']").val(css.styles[i].value);
	}
	
	block.show();
}

function saveBlockSetting() {
	var block = $('#blockSetting');
	var css = bookStyle.getCss(block.find("input[name='name']").val());
	
	var serialize = block.find( "form" ).serializeArray();
	
	for(var i=0;i<serialize.length;i++){
		css.setStyle(serialize[i].name, serialize[i].value);
	}
	
	bookStyle.setCss(css);
	
	updateBookStyleElement();
}

function updateBookStyleElement() {
	var bookStyleElement = viewer.connector.getSelectDocument().getElementById("bookStyle");
	if(bookStyleElement == null){
		bookStyleElement = viewer.connector.getSelectDocument().createElement("style");
		bookStyleElement.id = "bookStyle";
		
		viewer.connector.getSelectDocument().head.appendChild(bookStyleElement);
	}
	
	bookStyleElement.innerHTML = bookStyle.toString();
}

function hideBlockSetting() {
	$('#blockSetting').hide();
}

function changeBlockSettingFontSize(select, input_name) {
	var block = $('#blockSetting');
	block.find("input[name='"+input_name+"']").val(select.value);
	
	select.value="";
}

function showClassTxtSetting(class_name) {
	hideContextMenu();
	
	var block = $('#classTxtSetting');
	
	//var x = (window.innerWidth / 2) - (block.width() / 2);
	//var y = (window.innerHeight / 2) - (block.height() / 2);
	var x = (window.innerWidth / 2) - 520;
	if(x < block.height()){
		x = (window.innerWidth / 2) - (block.width() / 2);
	}
	
	var y = 150;
	
	block.css("left", x+"px");
	block.css("top", y+"px");
	
	block.find("select").find("option").remove();
	
	var option_html = "";
	for(var i=0;i<bookStyle.cssStyles.length;i++){
		option_html += ("<option value=\""+bookStyle.cssStyles[i].name+"\">"+bookStyle.cssStyles[i].name+"</option>");
	}
	block.find("select").html(option_html);
	
	var css = bookStyle.getCss(class_name);
	if(css == null){
		css = bookStyle.cssStyles[0];
	}
	if(css != null){
		block.find("select").val(css.name);
		block.find("textarea").val(css.toString().replace(/\{/g,"{\n").replace(/\;/g,";\n"));
	}
	
	block.show();
}

function saveClassTxtSetting() {
	var block = $('#classTxtSetting');
	
	var tmp_css = block.find("textarea").val().replace(/\r\n/g,"").replace(/\n/g,"").replace(/\t/g,"");
	tmp_css = tmp_css.trim().replace(/\}/g,"}\n");
	
	var oldCss = bookStyle.getCss(block.find("select[name='name']").val());
	if(oldCss != null){
		bookStyle.removeCss(oldCss);
	}
	
	var css_list = tmp_css.split("\n");
	for(var i=0;i<css_list.length;i++){
		var sIdx = css_list[i].indexOf("{");
		if(sIdx > 0 && css_list[i].indexOf("}") == (css_list[i].length -1)){
			var name = css_list[i].substring(0, sIdx).trim();
			
			var css = new cssStyleObject(name);
			
			var styles = css_list[i].substring(sIdx + 1 , css_list[i].indexOf("}")).trim().split(";");
			for(var j=0;j<styles.length;j++){
				if(styles[j].indexOf(":") > 0){
					var style = styles[j].split(":");
					
					css.setStyle(style[0].trim(), style[1].trim());
				}
			}
			
			transCssKey(css);
			css.removeEmptyStyle();
			
			bookStyle.setCss(css);
		}
	}
	
	showClassTxtSetting(block.find("select[name='name']").val());
	
	updateBookStyleElement();
}

function hideClassTxtSetting() {
	$('#classTxtSetting').hide();
}

function changeClassTxtSetting(select) {
	showClassTxtSetting(select.value);
}

function changeColorPicker(element) {
	colorpicker.linkTo(element);
	colorpicker.setColor(element.value);
	
	var element_position = $( element ).position();
	var x = element_position.left;
	var y = element_position.top + element.scrollHeight;
	
	var parent = element.parentNode;
	while( parent != null){
		if(parent.style != null){
			if(parent.style.left != "" || parent.style.top != ""){
				var parent_position = $( parent ).position();
				
				x += parent_position.left;
				y += parent_position.top;
			}
		}
		
		parent = parent.parentNode;
		var nodeName = parent.nodeName.toLowerCase();
		if(nodeName == "body" || nodeName == "html"){
			break;
		}
	}
	
	$('#colorpicker').css("left", x+"px");
	$('#colorpicker').css("top", y+"px");
	
	$("#colorpicker").show();
}

function changeThisBlackColor(element) {
	if(element.value == ""){
		element.style.color = "";
		element.style.backgroundColor = "";
		
	}else{
		element.style.backgroundColor = element.value;
	}
}

function reFocus(hasRange) {
	var selection = viewer.connector.getSelectDocument().getSelection();
	
	viewer.connector.getSelectDocument().getElementsByTagName("body")[0].focus();
}

var selectFormatTags = [];
var ruleOutFormatTags = ["span", "font"];
function addFormatTag(name) {
	if(!containsStyleTag(ruleOutFormatTags, name) && !containsStyleTag(selectFormatTags, name)){
		selectFormatTags.push(name);
	}
}

var selectStyles = [];//styleObject array
function addStyles(style_attr) {
	if(style_attr != null && style_attr.trim() != ""){
		var styles = style_attr.trim().split(";");
		for(var i=0;i<styles.length;i++){
			var tmp = styles[i].split(":");
			if(tmp.length == 2){
				var key = tmp[0].trim();
				var value = tmp[1].trim();
				
				var obj = new styleObject(tmp[0].trim(), tmp[1].trim());
				
				if(!containsStyles(selectStyles, obj)){
					selectStyles.push(obj);
				}
				
			}
		}
	}
}

function getStyleObject(styles, key) {
	var obj = null;
	
	for(var i=0;i<styles.length;i++){
		if(styles[i].key == key){
			obj = styles[i];
			break;
		}
	}
	
	return obj;
}

function BookStyle() {
	this.cssStyles = [];
	
	this.getCss = function(css_name) {
		var css = null;
		
		for(var i=0;i<this.cssStyles.length;i++){
			if(this.cssStyles[i].name == css_name){
				css = this.cssStyles[i];
				break;
			}
		}
		
		return css;
	};
	
	this.setCss = function(cssStyle) {
		var exist = false;
		for(var i=0;i<this.cssStyles.length;i++){
			if(this.cssStyles[i].name == cssStyle.name){
				this.cssStyles[i] = cssStyle;
				exist = true;
				break;
			}
		}
		
		if(!exist){
			this.cssStyles.push(cssStyle);
		}
	};
	
	this.removeCss = function(cssStyle) {
		for(var i=0;i<this.cssStyles.length;i++){
			if(this.cssStyles[i].name == cssStyle.name){
				this.cssStyles.splice(i, 1);
				break;
			}
		}
	};
}
BookStyle.prototype.toString = function () {
	var ret ="";
	
	for(var i=0;i<this.cssStyles.length;i++){
		ret += (this.cssStyles[i].toString()+"\n");
	}
	
	return ret;
}

function cssStyleObject(name) {
	this.name = name;
	this.styles = [];
	
	this.getStyle = function(style_name) {
		var style = null;
		
		for(var i=0;i<this.styles.length;i++){
			if(this.styles[i].key == style_name){
				style = this.styles[i];
				break;
			}
		}
		
		return style;
	};
	
	this.setStyle = function(style_name, style_value) {
		var exist = false;
		for(var i=0;i<this.styles.length;i++){
			if(this.styles[i].key == style_name){
				this.styles[i].value = style_value;
				exist = true;
				break;
			}
		}
		
		if(!exist){
			this.styles.push(new styleObject(style_name, style_value));
		}
	};

	this.removeStyle = function(style_name) {
		for(var i=0;i<this.styles.length;i++){
			if(this.styles[i].key == style_name){
				this.styles.splice(i, 1);
				break;
			}
		}
	};
	
	this.removeEmptyStyle = function() {
		for(var i=0;i<this.styles.length;i++){
			if(this.styles[i].value == ""){
				this.styles.splice(i, 1);
			}
		}
	};
}
cssStyleObject.prototype.toString = function () {
	var ret = this.name + " {";
	
	for(var i=0;i<this.styles.length;i++){
		ret += (this.styles[i].toString()+";");
	}
	
	ret += "}";
	
	return ret;
}

function styleObject(key, value) {
	this.key = key;
	this.value = value;
}
styleObject.prototype.toString = function () {
	var ret = this.key + ": " + this.value;
	return ret;
}

function containsStyleTag(tags, tag) {
	if(tags.indexOf(tag) == -1){
		return false;
		
	}else{
		return true;
	}
}

function containsStyles(styles, styleObj) {
	var exist = false;
	
	for(var i=0;i<styles.length;i++){
		if(styles[i].key == styleObj.key){
			exist = true;
			break;
		}
	}
	
	return exist;
}

function cleanEmpty() {
	var selection = viewer.connector.getSelectDocument().getSelection();
	if (!selection.isCollapsed) {
		var selRange = selection.getRangeAt(0);
		
		if(selRange.commonAncestorContainer.childElementCount > 0){
			for(var i=selRange.commonAncestorContainer.childElementCount;i>0;i--){
				var children = selRange.commonAncestorContainer.children[(i-1)];
				
				if(children.textContent == ""){
					console.log( children );
					
					if(children.remove){
						children.remove();
						
					}else{
						children.parentNode.removeChild(children);
					}
				}
			}
		}
	}
}