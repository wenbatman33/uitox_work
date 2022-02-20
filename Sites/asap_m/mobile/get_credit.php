<?php 
include "__data.php";
$h1_title = "信用卡";
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
	<link rel="stylesheet" type="text/css" href="../assets/css/mobile/shop/get_style.css">
</head>
<body>
	<?php
    //header
    include "_header_uitox.php";

    //商品清單
    include "_prod_list.php";
    
    //信用卡資訊
    include "_get_credit_info.php";

    //收貨人資訊
    include "_receive_info.php";

    //footer
	include "_footer.php";

    //lightbox
    include "_lightbox_all.php";
    ?>
	<script src="../assets/js/jquery/jquery-1.10.2.min.js"></script>
    <script src="../assets/js/mobile/mobile-actions.js"></script>
    <script>
    (function($){
        //統編
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