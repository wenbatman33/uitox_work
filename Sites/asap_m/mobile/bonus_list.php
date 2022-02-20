<?php 
include "__data.php";
$h1_title = "購物金";
?>
<!doctype html>
<html lang="zh-TW">
<head>
	<meta charset="UTF-8">
    <meta http-equiv="Content-Language" content="zh-TW">
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta property="og:site_name" content="ASAP閃電購物網"/>
    <meta property="og:title" content="ASAP閃電購物網-購物金"/>
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
	<link rel="stylesheet" type="text/css" href="../assets/css/mobile/shop/bonus.css">
</head>
<body>
	<?php include "_header_uitox.php";?>
    <article class="block">
        <div class="gold">
            <h1>目前可用點數</h1>
            <p class="point">
                <strong class="available">15</strong>點
            </p>
        </div>
        <div class="gold">
            <h1>待生效點數</h1>
            <p class="point"><strong class="future">0</strong>點</p>
        </div>
    </article>
    <article class="block web">
        <h1 class="title">可折扣網站</h1>
        <section class="list">
            <!-- <i class="icon-logo"></i> -->         
            <h2>ASAP閃電購物網</h2>
            <p>訂單編號：201311AP07000105</p>
            <p>來源：註冊送購物金</p>
            <p>可用點數：<strong class="available">15</strong>點</p>
            <p>待生效點數：<strong>0</strong>點</p>
            <p class="expire">截止日期：2014-01-05</p>
        </section>
    </article>
	<?php include "_footer.php";?>
	<script src="../assets/js/jquery/jquery-1.10.2.min.js"></script>
    <script>
    (function($){
    })(jQuery);
    </script>
</body>
</html>