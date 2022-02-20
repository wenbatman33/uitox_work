<?php 
include "__data.php";
$h1_title = "填寫收貨資訊";
?>
<!doctype html>
<html lang="zh-TW">
<head>
	<meta charset="UTF-8">
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
    <?php include "_prod_list.php";?>
    <article class="receive block">
        <p class="line icon-eleven">取貨門市：聯合門市<a href="temp_711.php" class="button gray btn-reset">重選</a></p>            
        <p class="line">門市地址：台北市信義區忠孝東路四段565號8樓</p>
    </article>
    <article class="receive block">
        <h1 class="title">收貨人資訊</h1>
        <input type="text" class="name" placeholder="姓名">
        <input type="tel" class="mobile-100" placeholder="手機">
        <div class="line">
            <input type="checkbox" id="btn-vat"><label for="btn-vat">發票需打統編請按此</label>
        </div>
        <input type="tel" class="input-vat hide" placeholder="統一編號">
        <div class="actions">
            <a href="finish.php" id="submit" class="button red large btn-submit">確定送出</a>
        </div>
    </article>
	<?php include "_footer.php";?>
	<script src="../assets/js/jquery/jquery-1.10.2.min.js"></script>
    <script>
    (function($){
        //統編發票
        $('#btn-vat').on('click', function(){
            if($(this).is(':checked')){
                $('.input-vat').removeClass('hide');
            }else{
                $('.input-vat').addClass('hide');
            }
        });
        $('#btn-vat2').on('click', function(){
            if($(this).is(':checked')){
                $('.input-vat').removeClass('hide');
            }else{
                $('.input-vat').addClass('hide');
            }
        });
        //商品清單
        $('.total').on('click', function(){
            $(this).toggleClass('icon-arrow-ds');
            $('.list').slideToggle();
        })
    })(jQuery);
    </script>
</body>
</html>