<?php 
include "__data.php";
$h1_title = "訂單明細";
?>
<!doctype html>
<html lang="zh-CN">
<head>
	<meta charset="UTF-8">
    <meta http-equiv="Content-Language" content="zh-CN">
    <title><?php echo $h1_title;?></title>
	<link rel="shortcut icon" href="../assets/img/favicon.ico" />
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<!--[if lt IE 9]>
    <script src="../js/3rd-party/html5shiv.js"></script>
    <![endif]-->
	<link rel="stylesheet" type="text/css" href="../assets/css/mobile/frame/frame.css">
	<link rel="stylesheet" type="text/css" href="../assets/css/mobile/shop/order_detail.css">
</head>
<body>
	<?php include "_header_uitox.php";?>
    <div class="detail block">
        <h1 class="title">訂單編號：201312AP0897654</h1>
        <div class="progress-bar-static">
            <div class="inner-bar" data-state="80"></div>
        </div>
        <?php //the value of 6 state: 10, 25, 40, 55, 70, 100?>
        <ul class="state six">
            <li>09:37<br>收到<br>訂單</li>
            <li>09:37<br>揀貨</li>
            <li>09:37<br>理貨</li>
            <li>09:37<br>出貨</li>
            <li class="">09:37<br>配達<br>未遇</li>
            <!-- <li class="pass">09:37<br>配達<br>未遇</li> -->
            <li class="current">09:37<br>已送達</li>
        </ul>
        <div class="actions-order">
            <a href="javascript: void(0);" class="button gray btn-contact">逾時申訴</a>
        </div>
        <ol class="list">
            <li class="main">
                <p class="name"><a href="#">2013 醉心混邊雙色款深V無鋼圈內衣組</a></p>
                <p class="attr">
                    <span class="count">數量: 1 </span>
                    <span class="price">NT$ 245</span>
                </p>
            </li>
            <li class="main sub">
                <p class="name gray">購物折扣金</p>
                <p class="attr">
                    <span class="count"></span>
                    <span class="price">NT$ -245</span>
                </p>
            </li>
            <li class="main">
                <p class="name"><a href="#">wii U 賠錢賣</a></p>
                <p class="attr">
                    <span class="count">數量: 3 </span>
                    <span class="price">NT$ 1999</span>
                </p>
            </li>
            <?php //信用卡紅利折抵?>
            <li class="main sub">
                <p class="name gray">折抵點數9000點 = 540元</p>
                <p class="name red">(540元於信用卡帳單內扣除，不直接折抵刷卡金額)</p>
            </li>
            <?php //信用卡紅利折抵 end?>
            <li class="main">
                <p class="name"><a href="#">薯條三兄弟</a></p>
                <p class="attr">
                    <span class="count">數量: 3 </span>
                    <span class="price">NT$ 1999</span>
                </p>
                <div class="actions-refund">
                    <span class="count">已退: 3 </span>
                    <a href="refund_state.php" class="button gray">退訂進度查詢</a>                    
                </div>
            </li>
            <li class="main">
                <p class="name"><a href="#">高質感冰絲棉無痕內褲</a></p>
                <p class="attr">
                    <span class="count">數量: 1 </span>
                    <span class="price">NT$ 299</span>
                </p>
            </li>
            <li class="main sub">
                <p class="name">贈品-保暖袋</p>
                <p class="attr">
                    <span class="count">數量: 1 </span>
                    <span class="price">NT$ 0</span>
                </p>
            </li>
            <li class="main">
                <p class="name"><a href="#">組合商品產品名稱</a>，包含以下商品：</p>
                <ul class="group-prod">
                    <li>組合商品細項1</li>
                    <li>組合商品細項2</li>
                    <li>組合商品細項3</li>
                </ul>
                <p class="attr">
                    <span class="count">數量: 1 </span>
                    <span class="price">NT$ 299</span>
                </p>
            </li>            

            <li class="refund">
                <p class="name"><span class="refund-name">出貨前退訂</span>混邊雙色款深V無鋼圈內衣組</p>
                <p class="attr">
                    <span class="count">已退: 1 </span>
                    <span class="price">NT$ 245</span>
                </p>
                <div class="actions-refund">
                    <a href="refund_state.php" class="button gray">退訂進度查詢</a>                    
                </div>
            </li>
        </ol>
        <div class="total">
            <p><span class="head">購物金折扣：</span><span class="price"><span class="dollar">NT$</span>-100</span></p>
            <p><span class="head">運費：</span><span class="price"><span class="dollar">NT$</span>80</span></p>
            <p class="subtotal"><span class="head">總計：</span><span class="price"><span class="dollar">NT$</span>8888</span></p>
        </div>
        <div class="actions">
            <a href="javascript:void(0);" class="button gray btn-contact">聯絡客服</a>
            <a href="javascript:void(0);" class="button gray btn-pinvoice">發票</a>
            <a href="order_refund.php" class="button gray">我要退訂</a>
        </div>
    </div>
    <div class="addr-info block">
        <h1 class="title">收貨人資訊</h1>
        <p>姓名：地大大 <span class="icon-phone-s">0987456321</span></p>
        <p>收貨地址：台北市信義區基隆路一段163號9樓之2</p>
        <p>付款方式：<span class="type">貨到付款</span></p>
    </div>
    <?php //lightbox 
        include "_lightbox_all.php";
    ?>
	<?php include "_footer.php";?>
	<script src="../assets/js/jquery/jquery-1.10.2.min.js"></script>
    <script src="../assets/js/mobile/mobile-actions.js"></script>
    <script>
    (function($){
        progressBar2();
        function progressBar2(){
            var node = {};
            node.bar = $(".inner-bar");
            node.barValue = 0;
            node.barState = node.bar.data('state');
            node.barTime = (1000/node.barState)*5;
            function loading(){
                node.barValue += 5;
                node.bar.width(node.barValue + "%");
                if(node.barValue == node.barState){
                    clearInterval(animate);
                }
            }
            var animate = setInterval(function(){
                loading();
            }, node.barTime);
        }
    })(jQuery);
    </script>
</body>
</html>