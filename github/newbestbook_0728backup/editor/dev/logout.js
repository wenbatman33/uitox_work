$(document).ready(function(){
	$(".logout_btu").on( "click", function(event) {
		try{
			var localKey = ["nmlr", "nmlrBys", "LastLoadNoticesData", "LastLoadTransJobData"];
			for(var i=0;i<localKey.length;i++){
				if(!isNull(window.localStorage.getItem(localKey[i]))){
					window.localStorage.removeItem(localKey[i]);
		    	}
			}
	    	
		}catch(e){
			console.log(e);
		}
	});
});