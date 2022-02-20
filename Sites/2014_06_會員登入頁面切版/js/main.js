require(['jquery', 'message', 'another'], function ($, message, another) {
	$('#output').html(message + ' ' + another);
});