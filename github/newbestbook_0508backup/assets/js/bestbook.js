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
	});
});