<?php 
include "__data.php";
$h1_title = "查訂單";
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
	<link rel="stylesheet" type="text/css" href="../assets/css/mobile/shop/order_list.css">
</head>
<body>
	<?php include "_header_uitox.php";?>
    <div class="order_gold">
        <a href="https://member.uitox.com/bonus/bonus_return/store" class="button gray">兌換購物金</a>
    </div>
    <div class="order-list">
        <div class="block null">
            <p>您目前無訂單</p>   
        </div>
        <div class="block icon-arrow-rs">
            <a href="order_detail.php">
                <p><span class="date">2013-12-07</span></p>
                <p>訂單編號：201312AP07000260</p>
                <p>訂單金額：NT$450</p>
            </a>    
        </div>
        <div class="block icon-arrow-rs">
            <a href="order_detail.php">
                <p>
                    <span class="date">2013-12-05</span>
                    <!-- <span class="state-refund">退訂處理中</span> -->
                </p>
                <p>訂單編號：201312AP07000260</p>
                <p>訂單金額：NT$450</p>
            </a>    
        </div>
        <div class="block cancel">
            <p>
                <span class="date">2013-11-30</span>
                <span class="state-cancel">訂單失敗</span>
            </p>
            <p>訂單編號：201312AP07000540</p>
            <p>訂單金額：NT$9510</p>
            <a href="javascript:void(0);" class="button gray btn-contact">聯絡客服</a>
        </div>
        <nav class="page">
            <a href="#" class="page-prev">上一頁</a>
            <span>第2頁，共3頁</span>
            <a href="#" class="page-next">下一頁</a>
        </nav>
    </div>
    <?php //lightbox 
        include "_lightbox_all.php";
    ?>
	<?php include "_footer.php";?>
	<script src="../assets/js/jquery/jquery-1.10.2.min.js"></script>
    <script src="../assets/js/mobile/mobile-actions.js"></script>
</body>
</html>