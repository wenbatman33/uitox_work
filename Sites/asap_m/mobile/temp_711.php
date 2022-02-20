<?php 
include "__data.php";
?>
<!doctype html>
<html lang="zh-TW">
<head>
	<meta charset="UTF-8">
	<title>超商取貨</title>
	<link rel="shortcut icon" href="../assets/img/favicon.ico" />
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<!--[if lt IE 9]>
    <script src="../js/3rd-party/html5shiv.js"></script>
    <![endif]-->
	<link rel="stylesheet" type="text/css" href="../assets/css/mobile/frame/frame.css">
	<style>
	img{
		width: 100%;
	}
	</style>
</head>
<body>
	<div class="layout">
		<a href="javascript: void(0);" class="711">
			<img src="../assets/img/mobile/sample/711_1.jpg" alt="">			
		</a>
		<a href="javascript: void(0);" class="711 hide">
			<img src="../assets/img/mobile/sample/711_2.jpg" alt="">			
		</a>
		<a href="javascript: void(0);" class="711 hide">
			<img src="../assets/img/mobile/sample/711_3.jpg" alt="">			
		</a>
		<a href="javascript: void(0);" class="711 hide">
			<img src="../assets/img/mobile/sample/711_4.jpg" alt="">			
		</a>
		<a href="javascript: void(0);" class="711 hide">
			<img src="../assets/img/mobile/sample/711_5.jpg" alt="">			
		</a>
		<a href="get_addr_eleven.php" class="711 hide">
			<img src="../assets/img/mobile/sample/711_6.jpg" alt="">			
		</a>
	</div>
	<script src="../assets/js/jquery/jquery-1.10.2.min.js"></script>
	<script>
	(function($){
		$('.711').on('click', function(){
			$(this).hide().next().removeClass('hide');
		});
	})(jQuery);
	</script>
</body>
</html>