$(function() {
	$('#moreBooksEdit').click(function() {
		$('.booksEdit__Block:first-child').addClass('borderRight');
		$('.is-hide').removeClass("is-hide");
		$(this).hide();
	});
});