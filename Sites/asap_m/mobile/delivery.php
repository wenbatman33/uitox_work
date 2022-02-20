<?php 
include "__data.php";
$h1_title = "到貨時間說明";
?>
<!doctype html>
<html lang="zh-TW">
<head>
	<meta charset="UTF-8">
	<title>ASAP到貨時間說明</title>
	<link rel="shortcut icon" href="../assets/img/favicon.ico" />
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
	<!--[if lt IE 9]>
    <script src="../js/3rd-party/html5shiv.js"></script>
    <![endif]-->
    <link rel="stylesheet" type="text/css" href="../assets/css/mobile/frame/frame.css">
	<link rel="stylesheet" type="text/css" href="../assets/css/mobile/shop/delivery.css">
</head>
<body>
	<?php include "_header_inn.php"; ?>
    <article class="first block">	    	
    	<h1 class="title">您好，親愛的ASAP尊客：</h1>
    	<p class="center">即日起，我們提供</p>
		<p class="center"><strong>「台北市 5 小時、全台灣 24 小時到貨」</strong></p>
		<p class="center">的服務，若遲到將給 ASAP購物金100 點。</p>
		<p class="center">歡迎您訂購。</p>
	</article>
	<article class="block">
		<h1 class="title">台北市5小時到貨服務</h1>
		<ul class="rule">
			<li class="red">例外一： 晚上9:00-早上8:00的時段不列入到貨時間計算。
				<ul>
					<li class="head">舉例：</li>
					<li>18:01 訂購完成 , 將於隔天上午10點前送達。</li>
					<li>20:01 訂購完成 , 將於隔天中午12點前送達。</li>
					<li>22:01 訂購完成 , 將於隔天下午 1點前送達。</li>
				</ul>
			</li>
			<li>例外二： 付款方式為「超商取貨付款」或「ATM」。</li>
			<li>例外三： 信用卡交易如果銀行需確認資料時。</li>
			<li>例外四： 商品標示「大材積」。</li>
			<li class="red">例外五： 農曆除夕及春節期間(2014/1/30~2014/2/4)，台北市僅提供24小時到貨服務。</li>
		</ul>
		<h1 class="title">台灣本島24小時到貨服務</h1>
		<ul class="rule">
			<li class="red">例外一： 非北北基地區，晚上10:00~早上10:00下訂。</li>
			<li>例外二： 付款方式為「超商取貨付款」或「ATM」。</li>
			<li>例外三： 信用卡交易如果銀行需確認資料時。</li>
		</ul>
	</article>
	<article class="block">
		<h2 class="title">若遇到以下狀況 出貨時間將順延</h2>
		<ul class="rule">
			<li>使用信用卡與貨到付款以外的付款方式，如：ATM轉帳、超商取貨..等。</li>
			<li>收件人資料填寫不完整、更改收件地址或收貨人無法收貨。</li>
			<li>遇颱風地震等天災、公共工程、節慶活動管制路段，或遇系統設備維護，倉儲調整、盤點等情況。</li>
		</ul>
	</article>
	<article class="block">
		<h2 class="title">「超商取貨付款」到貨時間</h2>
		<ul class="rule">
			<li class="red">農曆除夕及春節期間 (2014/1/30~2014/2/4) 到貨時間：</li>
			<li class="red">假設 D日10:00 前 完成訂購，預計會在 D+ 1 日 送達超商門市。</li>
			<li class="red">假設 D日10:00 後 完成訂購，預計會在 D+ 2 日 送達超商門市。</li>
			<li>假設 D日11:00 前 完成訂購，預計會在 D+ 1 日 送達超商門市。</li>
			<li>假設 D日11:00 後 完成訂購，預計會在 D+ 2 日 送達超商門市。
				<ul>
					<li class="head">舉例：</li>
					<li>15日10:00 完成訂購，預計 16日 送達超商門市。</li>
					<li>15日13:00 完成訂購，預計 17日 送達超商門市。</li>
				</ul>
			</li>
			<li>受物流配送與門市營業狀況，可能影響實際送達門市時間。</li>
		</ul>
	</article>
	<section class="check block">
		<p>如需查看出貨進度，請至<strong><a href="order_list.php">查訂單</a></strong></p>
	</section>
	<?php include "_footer.php";?>
</body>
</html>