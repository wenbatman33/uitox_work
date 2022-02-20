function isNull(obj) {
    return (typeof obj == 'undefined') || obj == null;
}

function isNumber(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}

function isIE() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0){
    	return true;
    	
    }else{
    	return false;
    }
}

function getTime() {
	var time = new Date().getTime();
	return time;
}

function getUTCTimeToJSON() {
	return new Date().toJSON().toString();
}

function decodeURIFormServer(text) {
	if(isNull(text)){
		return null;
	}
	return decodeURIComponent(text.replace(/\+/g,'%20'));
}

var platformPublish = {"1": "Google Play", "2": "iBooks", "3": "Amazon"};
function getPlatformPublishName(platform) {
	if(!isNull(platformPublish[platform])){
		return platformPublish[platform];
		
	}else{
		return "";
	}
}

Date.prototype.format = function (format) {
    var o = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        "S": this.getMilliseconds()
    };
    if (/(y+)/.test(format)){
    	format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o){
    	if (new RegExp("(" + k + ")").test(format)) format = format.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    }
    
    return format;
};

function randomIdGenerator(length) {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');

    if (!length) {
        length = Math.floor(Math.random() * chars.length);
    }

    var str = '';
    for (var i = 0; i < length; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    
    return str;
}

function isOnline() {
    return (OnlineStatus=="online");
}
var OnlineStatus = navigator.onLine?"online":"offline";
function updateOnlineStatus(event) {
	OnlineStatus = navigator.onLine?"online":"offline";
}

$(document).ready(function(){
	window.addEventListener('online',  updateOnlineStatus);
	window.addEventListener('offline', updateOnlineStatus);
});

var tmpCanvas = null;
function smallImageScale(img, maxWidth, maxHeight) {
	var width = img.width;
	var height = img.height;
	
	var scale_width = (maxWidth / width); 
	var scale_height = (maxHeight / height); 
	  
	var use_scale = (scale_width > scale_height?scale_height:scale_width);
	
	if(tmpCanvas == null){
		tmpCanvas = document.createElement('canvas');
	}
	
	tmpCanvas.width = parseInt((width * use_scale), 10); 
	tmpCanvas.height = parseInt((height * use_scale), 10);
    
    var ctx = tmpCanvas.getContext("2d");
    ctx.drawImage(img, 0, 0, tmpCanvas.width, tmpCanvas.height);
    var dataURL = tmpCanvas.toDataURL("image/png");
    
	return dataURL;
}

function getAbsPosition(dom) {
	var jDom = $(dom);
	var x = jDom.position().left;
	var y = jDom.position().top;
	
	var parent = jDom.offsetParent();

	while(parent != null){
		if(parent[0].nodeName.toLowerCase() == "body" || parent[0].nodeName.toLowerCase() == "html"){
			parent = null;
			
		}else{
			x += parent.position().left;
			y += parent.position().top;
			
			parent = parent.offsetParent();
		}
	}
	
	return {"x": x, "y": y};
}