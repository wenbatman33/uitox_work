<?php 
include "__data.php";
$h1_title = "進度查詢";
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
	<link rel="stylesheet" type="text/css" href="../assets/css/mobile/shop/refund_state.css">
</head>
<body>
    <?php include "_header_uitox.php";?>
    <article class="refund-state">
        <div class="head block">
            <span class="date">2013-07-25</span>
            <h1 class="title">訂單編號：A897987984</h1>
            <h2>預計退款方式及金額：</h2>
            <h2><span class="dollar">NT$</span><span class="price">3599</span>(退至信用卡帳戶)</h2>
            <h2>退款時退回購物金：118點</h2>
        </div>
        <div class="progress block">
            <h1 class="title">退訂進度</h1>
            <ul class="progress">
                <li>
                    <i class="icon-check-red-s"></i>
                    <span class="state">申請退訂</span>
                    <span class="red">07/25 09:34</span>
                </li>
                <li>
                    <i class="icon-check-red-s"></i>
                    <span class="state">物流取件</span>
                    <span class="red">07/25 09:37</span>
                </li>
                <li>
                    <span class="state">賣方收到</span>
                    <span class="gray">商品未出貨</span>
                </li>
                <li>
                    <i class="icon-check-red-s"></i>
                    <span class="state">發票/折讓單處理完成</span>
                    <span class="gray">尚未產生折讓單</span>
                </li>
                <li>
                    <span class="state">退款方式確認</span>
                    <a href="javascript:void(0);" class="button red btn-bank">填寫銀行帳戶</a>
                    <?php //填寫完銀行帳戶後，上面的a tag 換成下面的span?>
                    <!-- <span class="gray">退貨至國泰世華帳戶</span> -->
                </li>
            </ul>
            <p class="tip">以上完成後會立即退款給您</p>
            <div class="actions">
                <a href="javascript:void(0);" class="button gray btn-contact">聯絡客服</a>
            </div>
        </div>
        <div class="block">
            <h1 class="title">退貨商品</h1>
            <ol class="list">
                <li class="main">
                    <p class="name">2013
                     醉心混邊雙色款深V無鋼圈內衣組</p>
                    <p class="attr">
                        <span class="count">退訂數: 1 </span>
                        <span class="price"><span class="dollar">單價：</span>245</span>
                    </p>
                </li>
                <li class="main">
                    <p class="name">2013 醉心混邊雙色款深V無鋼圈內衣組</p>
                    <p class="attr">
                        <span class="count">退訂數: 1 </span>
                        <span class="price"><span class="dollar">單價：</span>245</span>
                    </p>
                </li>
                <li class="main">
                    <p class="name">高質感冰絲棉無痕內褲</p>
                    <p class="attr">
                        <span class="count">退訂數: 1 </span>
                        <span class="price"><span class="dollar">單價：</span>299</span>
                    </p>
                </li>
                <li class="main sub">
                    <p class="name">贈品-保暖袋</p>
                    <p class="attr">
                        <span class="count">退訂數: 1 </span>
                        <span class="price"></span>
                    </p>
                </li>
                <li class="main">
                    <p class="name">組合商品產品名稱，包含以下商品：</p>
                    <ul class="group-prod">
                        <li>組合商品細項1</li>
                        <li>組合商品細項2</li>
                        <li>組合商品細項3</li>
                    </ul>
                    <p class="attr">
                        <span class="count">退訂數: 1 </span>
                        <span class="price"><span class="dollar">單價：</span>299</span>
                    </p>
                </li>                
                <li class="main">
                    <p class="name">運費</p>
                    <p class="attr">
                        <span class="count"></span>
                        <span class="price"><span class="dollar">單價：</span>299</span>
                    </p>
                </li>
            </ol>
        </div>
        <div class="explain block">
            <h1 class="title">退貨說明</h1>
            <h2>取件時間：</h2>
            <p>假設D日18:00<strong>前</strong>辦理退訂，預計會在<strong>D+2</strong>日 前往取貨。</p>
            <p>假設D日18:00<strong>後</strong>辦理退訂，預計會在<strong>D+3</strong>日 前往取貨。</p>
            <h2>例如：</h2>
            <p>15日下午5:00 辦理退訂，預計17日 前往取貨。</p>
            <p>15日下午6:30 辦理退訂，預計18日 前往取貨。</p>
            <p class="tip">*取貨前宅配公司可能與您聯繫，請保持電話暢通，不要拒接不明來電顯示。</p>
            <p class="tip">*實際派車取件時間，可能受物流商派車狀況影響，如有問題，請撥打客服專線：<a href="tel:02-2748-1531">02-2748-1531</a></p>
        </div>
        <div class="inv block">
            <h1 class="title">發票折讓單處理：</h1>
            <p>uitox代為處理退貨退款折讓單(發票)，您不需處理。</p>
        </div>
    </article>
	<?php include "_footer.php";?>
    <?php 
        //lightbox
        include "_lightbox_all.php";
    ?>
	<script src="../assets/js/jquery/jquery-1.10.2.min.js"></script>    
    <script src="../assets/js/mobile/mobile-actions.js"></script>
</body>
</html>