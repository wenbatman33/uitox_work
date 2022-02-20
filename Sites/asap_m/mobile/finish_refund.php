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
	<link rel="stylesheet" type="text/css" href="../assets/css/mobile/shop/finish_refund.css">
</head>
<body>
    <?php include "_header_uitox.php";?>
    <article class="finish">
        <div class="head block">
            <div class="head-main">
                <i class="icon-success"></i>
                <h1>您退訂的商品將不會出貨，其餘商品會出貨給您。</h1>
            </div>
            <h2>退款金額<span class="price">NT$3599</span>將賄款退還至您的信用卡帳戶。</h2>
            <h2>退款時退回購物金：<span class="point">118點</span></h2>
            <h2>uitox代為處理退貨退款折讓單，您不需處理。</h2>
            <!-- <a href="#" class="button green large">Email折讓單給我</a> -->
        </div>
        <!-- <div class="debitnote block">
            <img src="../assets/img/mobile/sample/debitnote_sample.jpg" alt="折讓單" class="debitnote-pic">
            <p>請將折讓單一、二連蓋公司發票章(或大小章)寄至330 桃園縣龜山鄉頂湖一街55號 新加坡商優達斯國際有限公司台灣分公司 退貨組</p>
            <input type="email" placeholder="請輸入電子郵件信箱" value="test@uitox.com" class="input">
        </div> -->
        <div class="block">
            <h1 class="title">退貨商品</h1>
            <ol class="list">
                <li class="main">
                    <p class="name">2013 醉心混邊雙色款深V無鋼圈內衣組</p>
                    <!-- <p class="attr">
                        <span class="count">數量: 1 </span>
                        <span class="price"><span class="dollar">NT$</span>245</span>
                    </p> -->
                </li>
                <li class="main">
                    <p class="name">2013 醉心混邊雙色款深V無鋼圈內衣組</p>
                    <!-- <p class="attr">
                        <span class="count">數量: 1 </span>
                        <span class="price"><span class="dollar">NT$</span>245</span>
                    </p> -->
                </li>
                <li class="main">
                    <p class="name">高質感冰絲棉無痕內褲</p>
                    <!-- <p class="attr">
                        <span class="count">數量: 1 </span>
                        <span class="price"><span class="dollar">NT$</span>299</span>
                    </p> -->
                </li>
                <li class="main sub">
                    <p class="name">贈品-保暖袋</p>
                    <!-- <p class="attr">
                        <span class="count">數量: 1 </span>
                        <span class="price"><span class="dollar">NT$</span>0</span>
                    </p> -->
                </li>
                <li class="main">
                    <p class="name">組合商品產品名稱，包含以下商品：</p>
                    <ul class="group-prod">
                        <li>組合商品細項1</li>
                        <li>組合商品細項2</li>
                        <li>組合商品細項3</li>
                    </ul>
                    <!-- <p class="attr">
                        <span class="count">數量: 1 </span>
                        <span class="price"><span class="dollar">NT$</span>299</span>
                    </p> -->
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
    </article>
	<?php include "_footer.php";?>
	<script src="../assets/js/jquery/jquery-1.10.2.min.js"></script>
    <script>
    (function($){

    })(jQuery);
    </script>
</body>
</html>