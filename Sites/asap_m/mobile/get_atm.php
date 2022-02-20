<?php 
include "__data.php";
$h1_title = "ATM轉帳";
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
	<link rel="stylesheet" type="text/css" href="../assets/css/mobile/shop/get_style.css">
</head>
<body>
	<?php include "_header_uitox.php";?>
    <article class="receive block">
        <input type="text" class="name" placeholder="購買人姓名">
        <input type="tel" class="tel" placeholder="手機號碼">
        <input type="tel" class="tel" placeholder="市話（選填）">      
    </article>
    <article class="receive block">
        <input type="text" class="name" placeholder="收貨人姓名">
        <input type="tel" class="tel" placeholder="手機號碼">
        <input type="tel" class="tel" placeholder="市話（選填）">
        <input type="text" class="address" placeholder="收貨人地址">
        <div class="actions">
            <a href="javascript: void(0);" class="button gray addr-add">加到通訊錄</a>
            <a href="address_list.php" class="button gray" target="_blank">打開通訊錄</a>
            <a href="javascript: void(0);" class="button gray vat-add">發票需打統編</a>
        </div>
        <p class="msg hide">已加到通訊錄</p>
        <input type="tel" class="input-vat hide" placeholder="統一編號(選填)">
        <div class="actions">
            <a href="finish.php" id="submit" class="button red large">確定送出</a>
        </div>
    </article>
	<?php include "_footer.php";?>
	<script src="../assets/js/jquery/jquery-1.10.2.min.js"></script>
<script>
(function($){
    $(window).load(function(){
        $('.block').slideUp(1).delay(200).slideDown('slow');
    });
    $('.vat-add').on('click', function(){
        $('.input-vat').removeClass('hide').focus();
    });
    $('.addr-add').on('click', function(){
        $('.msg').fadeIn('slow').delay(2000).fadeOut('slow');
    });
})(jQuery);
</script>
</body>
</html>