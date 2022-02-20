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
	<link rel="stylesheet" type="text/css" href="../assets/css/mobile/shop/finish.css">
</head>
<body>
    <?php include "_header_uitox.php";?>
    <article class="finish">
        <?php //此筆訂單尚未進入出貨程序，僅能整筆退訂?>
        <div class="head block">
            <div class="head-main">
                <i class="icon-fail"></i>
                <h1>此筆訂單尚未進入出貨程序，僅能整筆退訂</h1>
                <h2>請您稍後再重新訂購，造成您的不便請見諒。</h2>
            </div>
        </div>
        <div class="actions">
            <a href="#" class="button gray large">回上一頁</a>
            <a href="index.php" class="button gray large">回ASAP</a>
        </div>
        <?php //很抱歉，可能由於網路問題，訂單沒有成功?>
        <div class="head block">
            <div class="head-main">
                <i class="icon-alert"></i>
                <h1>很抱歉，可能由於網路問題，訂單沒有成功！</h1>
                <h2>若訂單內尚有您需要的商品，請重新訂購</h2>
            </div>
        </div>
        <div class="actions">
            <a href="#" class="button gray large">確定要退</a>
            <a href="#" class="button gray large">不退了</a>
        </div>
        <?php //很抱歉，可能由於網路問題，訂單沒有成功?>
        <div class="head block">
            <div class="head-main">
                <i class="icon-fail"></i>
                <h1>很抱歉，在您購買過程中，可能由於搶購原因</h1>
                <h2 class="gray">下列商品已經缺貨：</h2>
                <ul class="list lack">
                    <li><a href="#" class="name">iphone 6s 160G 賭土豪津津版</a></li>
                    <li><a href="#" class="name">iphone 6s 160G 賭土豪津津版</a></li>
                    <li><a href="#" class="name">iphone 6s 160G 賭土豪津津版</a></li>
                </ul>
                <h2 class="gray">若訂單內尚有您需要的商品，請重新訂購</h2>
            </div>
        </div>
        <div class="actions">
            <a href="#" class="button gray large">回上一頁</a>
            <a href="#" class="button red large">回賣場再選購</a>
        </div>
    </article>
	<?php include "_footer.php";?>
	<script src="../assets/js/jquery/jquery-1.10.2.min.js"></script>    
</body>
</html>