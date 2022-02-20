<?php 
include "__data.php";
$h1_title = "我的帳戶";
?>
<!doctype html>
<html lang="zh-TW">
<head>
	<meta charset="UTF-8">
    <meta http-equiv="Content-Language" content="zh-TW">
    <meta name="description" content="商品介紹">
    <meta name="keywords" content="商品介紹">
    <meta property="og:site_name" content="iGraden"/>
    <meta property="og:title" content="商品名稱 - <?php echo $h1_title;?>"/>
    <meta property="og:type" content="product"/>
    <meta property="og:description" content="商品介紹"/>
    <meta property="og:url" content="http://www.igarden.com/products.php"/>
    <meta property="og:image" content="商品照片"/>
	<title><?php echo $h1_title;?></title>
	<link rel="shortcut icon" href="../assets/img/favicon.ico" />
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<!--[if lt IE 9]>
    <script src="../js/3rd-party/html5shiv.js"></script>
    <![endif]-->
	<link rel="stylesheet" type="text/css" href="../assets/css/mobile/frame/frame.css">
	<link rel="stylesheet" type="text/css" href="../assets/css/mobile/shop/account.css">
</head>
<body>
	<?php include "_header_inn.php";?>
    <article class="user">
        <ul class="actions">
            <li><a href="cart.php"><i class="tag-cart"></i><p>購物車</p></a></li>
            <li><a href="order_list.php"><i class="tag-order"></i><p>查訂單</p></a></li>
            <li><a href="pwd_modify.php"><i class="tag-pwd"></i><p>修改密碼</p></a></li>
            <li><a href="index.php"><i class="tag-logout"></i><p>登出</p></a></li>
        </ul>
    </article>
	<?php include "_footer.php";?>
	<script src="../assets/js/jquery/jquery-1.10.2.min.js"></script>
    <script>
    (function($){
    })(jQuery);
    </script>
</body>
</html>