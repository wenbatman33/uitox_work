<?php
session_unset();
session_start();
$msg ='';
if(isset($_POST['submit'])){
	if($_POST['password'] == 'uitox12'){
		$_SESSION['isLogin'] = 'true';
		header('Location: index.php');
		$msg = '';
	}else{
		session_destroy();
		$msg = 'The password is incorrect.';
	}
}
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
	<style>
	.layout{
		padding-top: 40px;
	}
	.msg-alert{
		line-height: 140%;
		padding-bottom: 10px;
	}
	</style>
</head>
<body>
    <div class="layout">
    	<h1>Prototype of Mobile Website</h1>
		<form action="ulogin.php" method="post" id="form-signin" class="block">
			<input type="password" name="password" placeholder="password">
			<input type="submit" name="submit" class="button red" value="login"></input>
			<p class="msg-alert"><?php echo $msg;?></p>
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