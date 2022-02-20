function Converter() {
	
	this.htmlConverter = new HTMLConverter();
	
	this.toMarkdown = function(html) {
		return this.htmlConverter.toMarkdown(html);
	};
	
	this.markdownConverter = null;
	
	this.toHTML = function(markdown) {
		if(isNull(this.markdownConverter)){
			this.markdownConverter = new MarkdownConverter();
		}
		return this.markdownConverter.toHTML(markdown);
	};
}

function MarkdownConverter() {
	var tmp = this;
	
	this.renderer = new marked.Renderer();
	this.renderer.code = function(code, language) {
		code = code.trim().replace(/&nbsp;/gi, ' ').replace(/&gt;/gi, '>');
		
	    //var firstLine = code.split(/\n/)[0].trim();
	    
	    var lang = "";
	    if(!((typeof language == 'undefined') || language == null)){
	    	lang = "language-"+language;
	    }
	    //console.log(language);
	    //console.log(code);
	    //console.log(firstLine);
	    
	    return "<pre><code class='"+lang+"'>"+code+"\n</code></pre>\n";
	    //return marked.Renderer.prototype.code.apply(this, arguments);
	};
	
	marked.setOptions({
		renderer: tmp.renderer,
		langPrefix: 'language-',
		gfm: true,
		tables: true,
		breaks: false,
		pedantic: false,
		sanitize: false,
		smartLists: true,
		smartypants: true
	});
	
	this.toHTML = function(markdown) {
		return marked(markdown);
	};
}

function HTMLConverter() {
	this.toMarkdown = function(html, isInline) {
		var tmp = this;
		var output = "";
		
		var obj = $("<div>"+html+"</div>").contents();
		
		obj.each(function() {
			var block_out = tmp.converter(this);
			
			if(isNull(isInline)){
				block_out = tmp.doBold(block_out);
				block_out = tmp.doItalic(block_out);
				block_out = tmp.doDel(block_out);
				
				//block_out = tmp.doSuperscript(block_out);
				//block_out = tmp.doSubscript(block_out);
				
				block_out = tmp.toMarkdown(block_out, true);
			}
			
			output += block_out;
			console.log(block_out);
		});
		
		return output;
	};
	
	this.converter = function(element) {
		if(element.nodeType == 1){
			switch(element.tagName) {
				case "DIV":
					return this.doDiv(element);
					
				case "P":
					return this.doP(element);
					
				case "H1":
					return this.doH1(element);
					
				case "H2":
					return this.doH2(element);
					
				case "H3":
					return this.doH3(element);
					
				case "H4":
					return this.doH4(element);
					
				case "H5":
					return this.doH5(element);
					
				case "H6":
					return this.doH6(element);

				case "UL":
					return this.doUl(element);
					
				case "OL":
					return this.doOl(element);

				case "HR":
					return this.doHr(element);

				case "BLOCKQUOTE":
					return this.doBlockQuote(element);

				case "PRE":
					return this.doPre(element);

				case "IMG":
					return this.doImage(element);
					
				case "A":
					return this.doLink(element);
					
				default:
					console.log(element.tagName);
					return element.outerHTML;
			}
			
		}else if(element.nodeType == 3){
			return element.nodeValue;
			
		}else{
			return "";
		}
	};
	
	this.doDiv = function(element) {
		return element.innerHTML + "\n";
	};
	
	this.doP = function(element) {
		return this.doBr(element.innerHTML);
		//return this.doBr(element.innerHTML.replace(/\n/gi, '') + "\n");
		//return element.innerHTML.replace(/\n/gi, '') + "\n";
	};
	
	this.doH1 = function(element) {
		return "# "+ element.innerHTML.replace(/\n/gi, '');
	};
	
	this.doH2 = function(element) {
		return "## "+ element.innerHTML.replace(/\n/gi, '');
	};
	
	this.doH3 = function(element) {
		return "### "+ element.innerHTML.replace(/\n/gi, '');
	};
	
	this.doH4 = function(element) {
		return "#### "+ element.innerHTML.replace(/\n/gi, '');
	};
	
	this.doH5 = function(element) {
		return "##### "+ element.innerHTML.replace(/\n/gi, '');
	};
	
	this.doH6 = function(element) {
		return "###### "+ element.innerHTML.replace(/\n/gi, '');
	};
	
	this.doImage = function(element) {
		return "!["+element.alt+"]("+element.getAttribute("src")+" "+element.title+")";
	};
	
	this.doLink = function(element) {
		return "["+element.innerHTML+"]("+element.getAttribute("href")+" "+element.title+")";
	};
	
	this.doUl = function(element) {
		var tmp = this;
		html = element.innerHTML.replace(/<li\b[^>]*>([\s\S]*?)<\/li>/gi, function(str, inner) {
			return "+ "+tmp.doNotAllowP(inner);
		});
		
		//return html;
		return html.replace(/\t/gi, '');
	};
	
	this.doOl = function(element) {
		var tmp = this;
		var i=0;
		html = element.innerHTML.replace(/<li\b[^>]*>([\s\S]*?)<\/li>/gi, function(str, inner) {
			return (++i)+". "+tmp.doNotAllowP(inner);
		});
		
		//return html;
		return html.replace(/\t/gi, '');
	};
	
	this.doNotAllowP = function(html) {
		html = html.replace(/<p\b[^>]*>([\s\S]*?)<\/p>/gi, function(str, inner) {
			return inner;
		});
		
		return html.replace(/\n/gi, '');
	};
	
	this.doBlockQuote = function(element, level) {
		//var obj = $(element).contents();
		var obj = $(element).children();
		
		if(isNull(level)){
			level = ">";
			
		}else{
			level += ">";
		}
		
		var tmp = this;
		var output = "";
		
		obj.each(function() {
			if(this.nodeType == 1){
				if(this.tagName == "BLOCKQUOTE"){
					output += tmp.doBlockQuote(this, level);
					
				}else if(this.tagName == "P"){
					output += (level + " " + tmp.doP(this) + "\n\n");
					
				}else{
					console.log(this.tagName);
				}
				
			}else if(this.nodeType == 3){
				output += this.nodeValue.replace(/\n\n/gi, '\n');
			}
		});
		
		return output;
	};
	
	this.doPre = function(element) {
		var output = "";
		
		var obj = $(element).children("code");
		if(obj.length > 0){
			output += "```";
			
			var _class = $(obj).attr('class');
			if(!isNull(_class)){
				output += _class.replace(/language-/gi, '');
			}
			
			output += "\n"+obj.html();
			output += "\n```";
			
		}else{
			return element.outerHTML;
		}
		
		return output;
	};
	
	this.doHr = function(element) {
		return "---";
	};
	
	this.doBr = function(html) {
		return html.replace(/<br>/gi, "  ");
	};
	
	this.doBold = function(html) {
		html = html.replace(/<strong\b[^>]*>([\s\S]*?)<\/strong>/gi, function(str, inner) {
			return "**"+inner+"**";
		});
		
		return html;
	};
	
	this.doItalic = function(html) {
		html = html.replace(/<em\b[^>]*>([\s\S]*?)<\/em>/gi, function(str, inner) {
			return "*"+inner+"*";
		});
		
		return html;
	};
	
	this.doDel = function(html) {
		html = html.replace(/<del\b[^>]*>([\s\S]*?)<\/del>/gi, function(str, inner) {
			return "~~"+inner+"~~";
		});
		
		return html;
	};
	
	//上標，需特別處理空白字元
	this.doSuperscript = function(html) {
		html = html.replace(/<sup\b[^>]*>([\s\S]*?)<\/sup>/gi, function(str, inner) {
			return "^"+inner+"^";
		});
		
		return html;
	};
	
	//下標，需特別處理空白字元
	this.doSubscript = function(html) {
		html = html.replace(/<sub\b[^>]*>([\s\S]*?)<\/sub>/gi, function(str, inner) {
			return "~"+inner+"~";
		});
		
		return html;
	};
}