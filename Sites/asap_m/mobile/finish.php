<?php 
include "__data.php";
$h1_title = "購買完成";
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
        <div class="head block">
            <div class="head-main">
                <i class="icon-success"></i>
                <h1>已經收到您的訂購資訊，謝謝！</h1>
                <p class="order">訂單編號：A897987984</p>
                <!-- <p class="order">訂單日期：2013-03-03</p> -->
                <p class="order">付款方式：超商取貨</p>
                <h2>訂單查詢、退貨、訂單疑問<br>請至「<a href="order_list.php" class="order-link">查訂單</a>」</h2>
                <?php //信用卡紅利折抵?>
                <p class="line red">信用卡紅利折抵(折抵金額逾信用卡帳單內扣除，不直接折抵刷卡金額)</p>
                <?php //信用卡紅利折抵 end?>
            </div>
            
        </div>
        <div class="block">
            <h1 class="title">訂購明細</h1>
            <ol class="list">
                <li class="main">
                    <p class="name">2013 醉心混邊雙色款深V無鋼圈內衣組</p>
                    <p class="attr">
                        <span class="count">數量: 1 </span>
                        <span class="price"><span class="dollar">NT$</span>245</span>
                    </p>
                </li>
                <li class="main">
                    <p class="name">2013 醉心混邊雙色款深V無鋼圈內衣組</p>
                    <p class="attr">
                        <span class="count">數量: 1 </span>
                        <span class="price"><span class="dollar">NT$</span>245</span>
                    </p>
                </li>
                <li class="main">
                    <p class="name">高質感冰絲棉無痕內褲</p>
                    <p class="attr">
                        <span class="count">數量: 1 </span>
                        <span class="price"><span class="dollar">NT$</span>299</span>
                    </p>
                </li>
                <li class="main sub">
                    <p class="name">贈品-保暖袋</p>
                    <p class="attr">
                        <span class="count">數量: 1 </span>
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
                        <span class="count">數量: 1 </span>
                        <span class="price"><span class="dollar">NT$</span>299</span>
                    </p>
                </li>                
            </ol>
            <p class="subtotal"><span class="head">總計：</span><span class="price"><span class="dollar">NT$</span>8888</span></p>
        </div>
        <div class="invoice block">
            <h1 class="title">發票說明：出貨後開立電子發票</h1>
            <p class="line"><input type="radio" name="invoice" id="invoice-not" checked="checked"><label for="invoice-not">不捐贈發票(中獎會通知您)</label></p>
            <p class="line"><input type="radio" name="invoice" id="invoice-do"><label for="invoice-do">捐贈發票</label></p>
            <div class="actions-invoice">
                <a href="javascript:void(0);" class="button gray btn-ubn">發票打統編</a>
                <a href="javascript:void(0);" class="button gray btn-pinvoice">索取紙本發票</a>
            </div>
        </div>
        <?php //索取發票後改成以下內容?>
        <div class="invoice block">
            <h1 class="title">發票說明：出貨後開立電子發票</h1>
            <p class="line">發票將隨貨寄送</p>
        </div>
        <div class="actions">
            <a href="order_list.php" class="button gray large">查訂單</a>
            <a href="index.php" class="button red large">回ASAP</a>
        </div>
    </article>
    <?php //lightbox 
        include "_lightbox_all.php";
    ?>
	<?php include "_footer.php";?>
	<script src="../assets/js/jquery/jquery-1.10.2.min.js"></script>    
    <script src="../assets/js/mobile/mobile-actions.js"></script>
</body>
</html>