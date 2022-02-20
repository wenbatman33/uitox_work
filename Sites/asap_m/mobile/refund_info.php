<?php 
include "__data.php";
$h1_title = "退款資訊";
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
	<link rel="stylesheet" type="text/css" href="../assets/css/mobile/shop/refund_info.css">
</head>
<body>
	<?php include "_header_uitox.php";?>
    <article class="refund block">
        <h1 class="title">退款金額：<span class="dollar">NT$</span><span class="price">3599</span> (退至信用卡帳戶)</h1>
        <p class="head">退款人資料</p>
        <input type="text" class="name" placeholder="收貨人姓名" value="裡大人">
        <input type="tel" class="tel" placeholder="手機號碼" value="0921575987">
        <select class="city-1">
            <option value="">台北市</option>
            <option value="">新北市</option>
            <option value="">桃園縣</option>
        </select>
        <select class="city-2">
            <option value="">信義區</option>
            <option value="">大安區</option>
            <option value="">永和區</option>
        </select>
        <input type="text" class="tel" placeholder="收貨人地址" value="基隆路一段163號9樓之2">
        <p class="head">退款資料</p>
        <select class="bank-account">
            <option selected disabled>選擇銀行</option>
            <option value="">中國信託銀行</option>
            <option value="">中華郵政</option>
            <option value="">國泰世華銀行</option>
        </select>
        <!-- <input type="text" class="address" placeholder="收貨人地址"> -->
        <input type="text" class="name" placeholder="戶名">
        <input type="tel" class="account" placeholder="帳號">
        <div class="line">
            <input type="checkbox" id="agree"><label for="agree">我同意由uitox代為處理退貨退款之發票及折讓單相關事宜</label>            
        </div>
        <div class="actions">
            <a href="finish_refund.php" class="button red large btn-submit">送出</a>
        </div>
    </article>
	<?php include "_footer.php";?>
	<script src="../assets/js/jquery/jquery-1.10.2.min.js"></script>
    <script>
    (function($){
        $('.btn-submit').on('click', function(event){
            if($('#agree').is(':checked')){
            }else{
                alert("請勾選 我同意由uitox代為處理退貨退款之發票及折讓單相關事宜");
                event.preventDefault();
            }
        })
    })(jQuery);
    </script>
</body>
</html>