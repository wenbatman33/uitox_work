<?php 
include "__data.php";
$h1_title = "購物車";
if(!isset($_GET["p"])){
    $prod = "1";
}else{
    $prod = $_GET["p"];
};
?>
<!doctype html>
<html lang="zh-TW">
<head>
	<meta charset="UTF-8">
    <meta http-equiv="Content-Language" content="zh-TW">
	<title><?php echo $h1_title;?></title>
	<link rel="shortcut icon" href="../assets/img/favicon.ico" />
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
	<!--[if lt IE 9]>
    <script src="../js/3rd-party/html5shiv.js"></script>
    <![endif]-->
	<link rel="stylesheet" type="text/css" href="../assets/css/mobile/frame/frame.css">
	<link rel="stylesheet" type="text/css" href="../assets/css/mobile/shop/cart.css">
</head>
<body>
	<?php include "_header_uitox.php";?>
    <article class="block">
        <h1 class="title">您選購的商品</h1>
        <?php foreach ($products as $key => $value) {if($key==3){break;}?>
        <div class="product">
            <h1><a href="product.php?p=<?php echo $key;?>" target="_blank"><?php echo $value['name'];?></a></h1>

            <?php if($key==2){//just for demo?>
            <div class="group-prod">
                <p>包含以下商品：</p>
                <ul>
                    <li>組合商品細項1</li>
                    <li>組合商品細項2</li>
                    <li>組合商品細項3</li>
                </ul>
            </div>
            <?php }?>
            
            <div class="actions">
                <a href="javascript: void(0);" class="button gray btn-cancel">取消</a>
            </div>
            <ul class="content">
                <li>單價：$<?php echo $value['price'];?></li>
                <li>數量： 
                    <select name="" id="" class="count">
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                        <option value="">5</option>
                    </select>
                </li>
                <li>小計：$<?php echo $value['price'];?></li>
            </ul>
        </div>
        <div class="product gift">贈品-保暖袋 <span class="count">數量: 1</span></div>
        <?php }?>
        <div class="total">
            <p class="red">
                <span class="head">購物折扣金：</span>
                <span class="price">-<span class="dollar">NT$</span>100</span>
            </p>
            <p class="red align-right">
                <input type="checkbox" id="discount">
                <label for="discount">用購物金折抵96元(打勾使用)</label>
            </p>
            <p>
                <span class="head">運費：</span>
                <span class="price"><span class="dollar">NT$</span>80</span>
            </p>
            <p class="tip">
                *滿490免運費>> <a href="index.php">繼續選購</a>
            </p>
            <p class="subtotal">
                <span class="head">總計：</span>
                <span class="price"><span class="dollar">NT$</span>8888</span>
            </p>
            <?php 
            if($prod == '1'){?>
            <p class="pre-order-tip">預購商品，請先結帳</p>
            <?php }
            ?>
        </div>
    </article>
    <article class="pay block">
        <h1 class="title">付款方式</h1>
        <a href="get_cod.php" class="button large gray">貨到付款</a>
        <a href="temp_711.php" class="button large gray icon-eleven-s">超商取貨</a>
        <a href="get_credit.php" class="button large gray">信用卡一次付清</a>
        <div class="clearfix"></div>
        <div class="link"><a href="#">其他付款方式(電腦版購物車)</a></div>
    </article>
    </article>
	<?php include "_footer.php";?>
	<script src="../assets/js/jquery/jquery-1.10.2.min.js"></script>
    <script>
    (function($){
        $('.btn-cancel').on('click', function(){
            $(this).closest('.product').fadeOut('slow');
        });
    })(jQuery);
    </script>
</body>
</html>