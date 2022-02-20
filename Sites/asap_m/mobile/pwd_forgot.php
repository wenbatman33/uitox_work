<?php 
include "__data.php";
$h1_title = "";
?>
<!doctype html>
<html lang="zh-TW">
<head>
	<meta charset="UTF-8">
    <meta http-equiv="Content-Language" content="zh-TW">
	<title><?php echo $h1_title;?></title>
	<link rel="shortcut icon" href="../assets/img/favicon.ico" />
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<!--[if lt IE 9]>
    <script src="../js/3rd-party/html5shiv.js"></script>
    <![endif]-->
	<link rel="stylesheet" type="text/css" href="../assets/css/mobile/frame/frame.css">
	<link rel="stylesheet" type="text/css" href="../assets/css/mobile/shop/pwd_forgot.css">
</head>
<body>
	<?php include "_header_uitox.php";?>
    <article class="layout-wrapper">
        <form action="">
        <h1 class="title">請輸入您上次購買的e-mail，我們將會協助您取回密碼！</h1>
        <input type="email" placeholder="e-mail">
        <div class="reg-check">
            <input type="text" placeholder="請輸入下方數字" class="input-reg">
            <img src="../assets/img/mobile/sample/captcha_demo.png" alt="驗證碼" class="reg-pic">
            <a href="#" class="reg-change">重新產生</a>
        </div>
        <a href="#" class="button red large">送出</a>
        </form>
    </article>
	<?php include "_footer.php";?>
	<script src="../assets/js/jquery/jquery-1.10.2.min.js"></script>
    <script>
    (function($){

    })(jQuery);
    </script>
</body>

</html>