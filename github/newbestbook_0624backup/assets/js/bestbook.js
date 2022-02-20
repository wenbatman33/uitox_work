$(function() {
	$('#moreBooksEdit').click(function() {
		$('.booksEdit__Block:first-child').addClass('borderRight');
		$('.is-hide').removeClass("is-hide");
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
	$('.SelectListBtns .cancel').on('click', function(){
		$('body').css({overflow: 'auto'});
		$('.SelectList-inner').removeClass('is-visible');
	});
	$('.SelectListBtns .send').on('click', function(){
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
});