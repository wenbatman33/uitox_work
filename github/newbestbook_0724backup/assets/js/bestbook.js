$(function() {
	$('#moreBooksEdit').click(function() {
		$(".hideBg").show();
		$(this).hide();
	});


	/////_booksPreviewer
	$( "#Previewer__selector li" ).click(function() {
	  var index = $( "#Previewer__selector li" ).index( this );
	  $( "#Previewer__simulator li" ).siblings().addClass("is-hide").eq(index).removeClass("is-hide")
	  $( "#Previewer__selector li" ).siblings().removeClass("active").eq(index).addClass("active");
	});

	///////
	$( ".notices_btu" ).click(function() {
		$( ".notice_rec" ).toggle();
		$( ".logMenu" ).hide();
	});
	$( ".userlogged" ).click(function() {
		$( ".logMenu" ).toggle();
		$( ".notice_rec" ).hide();
	});


	$('.triggerBttn').on('click', function(){
		if( $('.SelectList-inner').hasClass('is-visible') ) {
			$('body').css({overflow: 'auto'});
			$('.SelectList-inner').removeClass('is-visible');
		} else {
			$('body').css({overflow: 'hidden'});
			$('.SelectList-inner').addClass('is-visible');
		}
	});
	/////
	$('.confirmBlock .cancel').on('click', function(){
		$('body').css({overflow: 'auto'});
		$('.SelectList-inner').removeClass('is-visible');
	});
	$('.confirmBlock .send').on('click', function(){
		$('body').css({overflow: 'auto'});
		$('.SelectList-inner').removeClass('is-visible');
	});

	///////
	$('.category_1').on('click', function(){
		$(this).parent().parent().siblings('ul').removeClass('panel-hide');
	});

	$('.category_2').on('click', function(){
		$(this).parent().siblings('ul').removeClass('panel-hide');
	});
	/////
	///
	$('.export').on('click', function(){
		if( $('.MODAL').hasClass('is-visible') ) {
			$('body').css({overflow: 'auto'});
			$('.MODAL').removeClass('is-visible');
		} else {
			$('body').css({overflow: 'hidden'});
			$('.MODAL').addClass('is-visible');
		}
	});
	$('.MODAL .cancel').on('click', function(){
		$('body').css({overflow: 'auto'});
		$('.MODAL').removeClass('is-visible');
	});

	$('.delete').on('click', function(){
		if( $('.Dialog').hasClass('is-visible') ) {
			$('body').css({overflow: 'auto'});
			$('.Dialog').removeClass('is-visible');
		} else {
			$('body').css({overflow: 'hidden'});
			$('.Dialog').addClass('is-visible');
		}
	});
	$('.Dialog .cancel, .Dialog .send,.Dialog .icon_14_close').on('click', function(){
		$('body').css({overflow: 'auto'});
		$('.Dialog').removeClass('is-visible');
	});
	///////
	$('.showGallery').on('click', function(){
		$('.coverGallery').removeClass('is-hide');
		$('.coverOption').addClass('is-hide');
	});
	$('.resetcoverOption').on('click', function(){
		$('.coverGallery').addClass('is-hide');
		$('.coverOption').removeClass('is-hide');
	});

	////accountSetting
	$('.accountDataBtn').on('click', function(){
		$('.accountSetting_1').hide();
		$('.accountSetting_2').show();
		$('.accountSetting_3').hide();
	});
	$('.gototep_2').on('click', function(){
		$('.accountSetting_1').hide();
		$('.accountSetting_2').show();
	})
	$('.backStep_1').on('click', function(){
		$('.accountSetting_1').show();
		$('.accountSetting_2').hide();
	});
	/////
	///
	var tempNum1=1;
	var tempNum2=1;
	$('input[name="radio1"]').change(function(e) { // Select the radio input group
		tempNum1= $(this).val();
		radioChecking(tempNum1,tempNum2);
	});
	$('input[name="radio2"]').change(function(e) { // Select the radio input group
		tempNum2= $(this).val();
		radioChecking(tempNum1,tempNum2);
	});
	function radioChecking(A,B) {
		if(A =="2"){
			$('.occ1').hide();
			$('.occ1-2').hide();
			$('.occ2').show();
			 if(B != "1"){
			 	$('.accountTips_1').show();
			 	$('.accountTips_2').hide();
			 }else{
				$('.accountTips_1').hide();
				$('.accountTips_2').show();
			 }
		}else if(A == "1" && B == "1"  ){
			$('.occ1').show();
			$('.occ1-2').hide();
			$('.occ2').hide();
		}else{
			$('.occ1').hide();
			$('.occ1-2').show();
			$('.occ2').hide();
		}
	}
});
