<?php 
include "__data.php";
?>
<!doctype html>
<html lang="zh-TW">
<head>
	<meta charset="UTF-8">
	<title>登入</title>
	<link rel="shortcut icon" href="../assets/img/favicon.ico" />
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<!--[if lt IE 9]>
    <script src="../js/3rd-party/html5shiv.js"></script>
    <![endif]-->
	<link rel="stylesheet" type="text/css" href="../assets/css/mobile/frame/frame.css">
	<link rel="stylesheet" type="text/css" href="../assets/css/mobile/shop/login.css">
</head>
<body>
	<header class="branding">
		<a href="#">
			<img src="../assets/img/mobile/frame/logo_asap_2.png" alt="" class="logo">	
		</a>
    </header>
    <div class="layout">
    	<h1>使用uitox金物流服務</h1>
		<form action="#" id="form-signin" class="block">
			<input type="email" placeholder="請輸入e-mail">
			<input type="password" placeholder="請輸入密碼">
			<?php //超過三次的話才顯示?>
			<div class="reg-check">
				<input type="text" placeholder="請輸入下方數字" class="input-reg">
	        	<img src="../assets/img/mobile/sample/captcha_demo.png" alt="驗證碼" class="reg-pic">
	        	<a href="#" class="reg-change">看不清楚，換一張</a>
	        </div>
	        <?php //end?>
			<a href="<?php echo $topLink;?>" class="button">登入</a>
			<a href="pwd_forgot.php" class="fpwd">忘記密碼</a>
			<i class="icon-logo-uitox-s"></i>
		</form>
	</div>
	<script src="../assets/js/jquery/jquery-1.10.2.min.js"></script>
	<script src="//cdn.jsdelivr.net/jquery.cookie/1.4.0/jquery.cookie.min.js"></script>
	<script>
	(function($){

	})(jQuery);
	</script>
</body>
</html>