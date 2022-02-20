function i18n(default_resource){
	
	this.default_lang = "en";
	this.use_lang = "en";
	this.lang_arr = {"en": default_resource};
	
	this.lang = function (lang){
		if(!isNull(this.lang_arr[lang])){
			this.use_lang = lang;
		}
	};
	
	this.push = function (lang, resource){
		if(!isNull(resource)){
			if(isNull(resource[lang])){
				var tmp = lang.split("-");
				if(!isNull(resource[tmp[0]])){
					lang = tmp[0];
				}
			}
			
			if(!isNull(resource[lang])){
				this.lang_arr[lang] = resource[lang];
				this.lang(lang);
			}
		}
	};
	
	this.get = function (key){
		if(!isNull(this.lang_arr[this.use_lang]) && !isNull(this.lang_arr[this.use_lang][key])){
			return this.lang_arr[this.use_lang][key];
			
		}else{
			return this.lang_arr[this.default_lang][key];
		}
	};
}

var core = {};
core.i18n = new i18n(core_lang["en"]);