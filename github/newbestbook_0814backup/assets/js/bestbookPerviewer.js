var rangePanel = null;
$(document).ready(function(){
	rangePanel = new RangePanel();
	rangePanel.render();
	
	$(window).resize(function() {
		$(rangePanel).trigger('resize');
	});
});

function RangePanel(){
	this.id = "rangePanel";
	
	this.allRange = [];
    
	this.render = function() {
		this.isRender = true;
		this.resize();
		
		var parent = this;
		//parent.jumpPercentage(10);
		
		document.getElementById(this.id).addEventListener('mouseup', function(event){
			parent.changeRangePoint();
			parent.enableMove = false;
			
			event.preventDefault();
			return false;
			
		}, false);
		
		document.getElementById(this.id).addEventListener('mousedown', function(event){
			parent.enableMove = true;
			
			event.preventDefault();
			return false;
			
		}, false);

		document.getElementById(this.id).addEventListener('mousemove', function(event){
			parent.changeRange(event);
			
			event.preventDefault();
			return false;
			
		}, false);
		
		document.getElementById(this.id).addEventListener('touchstart', function(event){
			parent.enableMove = true;
			
			event.preventDefault();
			return false;
			
		}, false);
		
		document.getElementById(this.id).addEventListener('touchmove', function(event){
			parent.changeRange(event.touches[0]);
			
			event.preventDefault();
			return false;
			
		}, false);

		document.getElementById(this.id).addEventListener('touchend', function(event){
			parent.changeRangePoint();
			parent.enableMove = false;
			
			event.preventDefault();
			return false;
			
		}, false);
	
		document.getElementById(this.id).addEventListener('touchcancel', function(event){
			parent.changeRange(event.changedTouches[0]);
			parent.enableMove = false;
			
			event.preventDefault();
			return false;
			
		}, false);
	
	}
	
	this.enableMove = false;
	this.overPosition = 0;
	
	this.changeRange = function(event) {
		var x = event.clientX;
		var position = $('div#'+this.id).find(".rangeBar").position();
		x = x - position.left;
		
		if(x < 0){
			x = 0;
			
		}else if(x > this.allRange[this.allRange.length -1]){
			x = this.allRange[this.allRange.length -1];
		}
		
		this.overPercentage = Math.round((x / this.pointWidth));
		this.overPosition = this.allRange[this.overPercentage];
		
		this.showTooltip();
		this.showDragPoint();
	};
	
	this.overPercentage = 0;
	this.showTooltip = function() {
		this.changeTooltip(this.overPercentage);
		var tooltip = $('div#'+this.id).find(".range_tooltip");
		tooltip.clearQueue().show(0).delay(3000).hide(0);
	};
	
	this.changeTooltip = function(percentage) {
		var tooltip = $('div#'+this.id).find(".range_tooltip");
		tooltip.html(percentage+" %");
		tooltip.css("left", this.allRange[percentage]);
		//tooltip.css("margin-left", "-"+(tooltip.width()+8)+"px");
	};
	
	this.nowPosition = 0;
	this.nowPercentage = 0;
	this.changeRangePoint = function() {
		this.nowPercentage = this.overPercentage;
		this.nowPosition = this.allRange[this.nowPercentage];
		$('div#'+this.id).find(".rangePoint").css("left", this.nowPosition);
		$('div#'+this.id).find(".rangeDragPoint").css("left", this.nowPosition);
	};
	
	this.showDragPoint = function() {
		if(this.enableMove){
			$('div#'+this.id).find(".rangeDragPoint").css("left", this.overPosition);
		}
	};
	
	this.jumpPercentage = function(percentage) {
		this.nowPercentage = percentage;
		this.nowPosition = this.allRange[this.nowPercentage];
		this.overPercentage = this.nowPercentage;
		
		this.changeRangePoint();
		this.showTooltip();
	};
	
	this.pointWidth = 0;
	
    $(this).bind( "resize", function( event ) {
    	this.resize();
	});
    this.resize = function() {
    	$('div#'+this.id).find(".rangeBar").width($('div#'+this.id).width() - 100);
    	
    	var width = $('div#'+this.id).find(".rangeBar").width();
    	this.pointWidth = parseFloat((width / 100), 10);
    	
    	var all_point = [];
    	all_point.push(0);
    	for(var i=1;i<100;i++){
    		all_point.push(( i * this.pointWidth));
    	}
    	all_point.push(width);
    	
    	this.allRange = all_point;
    };
    
    this.width = function() {
    	return $('div#'+this.id).width();
    };
}