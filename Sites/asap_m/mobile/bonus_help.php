<?php 
include "__data.php";
$h1_title = "購物金說明";
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
	<link rel="stylesheet" type="text/css" href="../assets/css/mobile/shop/bonus.css">
</head>
<body>
	<?php include "_header_uitox.php";?>
    <article class="help">
        <section class="list">
            <h1>購物金1點折1元，最高折抵結帳商品總金額20%，結帳立即折抵！</h1>
            <div class="content">
                <p class="desc">
                    購物金是網站不定期舉辦購物金贈送活動，回饋給消費者的福利。參與活動所贈送的購物金，會自動發送到購買帳戶，購物金生效後，您在網站消費時，即可使用購物金1點=1元，折抵結帳金額。
                </p>
                <p class="desc">
                    *購物金僅能於ASAP網站進行結帳金額折抵，不得共用於其他使用uitox金物流服務的網站，或要求替換成現金、贈品。
                </p>
            </div>
        </section>
        <section class="list">
            <h1>使用說明</h1>
            <div class="content">
                <p class="desc">
                    結帳時，系統將自動計算此次消費可折抵金額，勾選「用購物金折抵」，可立即折抵。
                </p>
            </div>
        </section>
        <section class="list">
            <h1>折抵上限</h1>
            <div class="content">
                <p class="desc">
                    每次消費最高可折抵結帳商品總金額20%，折抵後低於免運門檻，適用免運費規則。
                </p>
            </div>
        </section>
        <section class="list">
            <h1>購物金有效期限</h1>
            <div class="content">
                <p class="desc">
                生效日期加30天為有效期限。
            </p>
            </div>
        </section>
        <section class="list">
            <h1>退訂/退貨歸還購物金</h1>
            <div class="content">
                <ol>
                    <li>整筆訂單退訂時，確認商品未出貨且無須退款，立即歸還購物金(原使用效期不變)。</li>
                    <li>商品已出貨，退款時，重新發送該筆使用的購物金。</li>
                    <li>訂單全退，該筆使用的購物金全數退回；訂單部分退，按比例歸還。</li>
                </ol>
            </div>
        </section>
    </article>
	<?php include "_footer.php";?>
	<script src="../assets/js/jquery/jquery-1.10.2.min.js"></script>
    <script>
    (function($){
        $(window).load(function(){
            $('.list').slideUp(1).delay(200).slideDown('slow');
        });
    })(jQuery);
    </script>
</body>
</html>