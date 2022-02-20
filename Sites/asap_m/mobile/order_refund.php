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
	<link rel="stylesheet" type="text/css" href="../assets/css/mobile/shop/order_refund.css">
</head>
<body>
	<?php include "_header_uitox.php";?>
    <div class="refund block">
        <h1 class="title">請選擇要退訂的商品及數量</h1>
        <ol class="list">
            <li class="main">
                <input type="checkbox" id="prod-01" class="checkbox">
                <label for="prod-01" class="name">2013 醉心混邊雙色款深V無鋼圈內衣醉心混邊雙色款深V無鋼圈內衣醉心混邊雙色款深V無鋼圈內衣組醉心混邊雙色款深V無鋼圈內衣組</label>
                <p class="attr">
                    <span class="price">NT$ 245</span>
                    <span class="count">退訂數量:
                        <select>
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                            <option value="">5</option>
                        </select>
                    </span>
                </p>
                <div class="reason hide">退訂原因:
                    <select>
                        <option value="">請選擇</option>
                        <option value="">不符所需</option>
                        <option value="">商品缺件</option>
                        <option value="">規格不合</option>
                        <option value="">不想等太久</option>
                        <option value="">寄錯商品</option>
                        <option value="">商品瑕疵</option>
                        <option value="">其他</option>
                    </select>
                </div>
            </li>
            <li class="main">
                <input type="checkbox" id="prod-02" class="checkbox">
                <label for="prod-02" class="name">2013 醉心混邊雙色款深V無鋼圈內衣組</label>
                <p class="attr">
                    <span class="price">NT$ 245</span>
                    <span class="count">退訂數量:
                        <select>
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                            <option value="">5</option>
                        </select>
                    </span>
                </p>
                <div class="reason hide">退訂原因:
                    <select>
                        <option value="">請選擇</option>
                        <option value="">不符所需</option>
                        <option value="">商品缺件</option>
                        <option value="">規格不合</option>
                        <option value="">不想等太久</option>
                        <option value="">寄錯商品</option>
                        <option value="">商品瑕疵</option>
                        <option value="">其他</option>
                    </select>
                </div>
            </li>
            <li class="main">
                <input type="checkbox" id="prod-03" class="checkbox">
                <label for="prod-03" class="name">高質感冰絲棉無痕內褲</label>
                <p class="attr">
                    <span class="price">NT$ 245</span>
                    <span class="count">退訂數量:
                        <select>
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                            <option value="">5</option>
                        </select>
                    </span>
                </p>
                <ul class="sub">
                    <li>
                        <input type="checkbox" id="prod-04" class="checkbox">
                        <label for="prod-04" class="name">贈品-保暖袋</label>
                        <p class="attr">
                            <span class="price"></span>
                            <span class="count">退訂數量: 1 </span>
                        </p>
                    </li>
                </ul>
                <div class="reason hide">退訂原因:
                    <select>
                        <option value="">請選擇</option>
                        <option value="">不符所需</option>
                        <option value="">商品缺件</option>
                        <option value="">規格不合</option>
                        <option value="">不想等太久</option>
                        <option value="">寄錯商品</option>
                        <option value="">商品瑕疵</option>
                        <option value="">其他</option>
                    </select>
                </div>
            </li>
            <li class="main">
                <input type="checkbox" id="prod-05" class="checkbox">
                <label for="prod-05" class="name">組合商品產品名稱，包含以下商品：</label>
                <ul class="group-prod">
                    <li>組合商品細項1</li>
                    <li>組合商品細項2</li>
                    <li>組合商品細項3</li>
                </ul>
                <p class="attr">
                    <span class="price">NT$ 299</span>
                    <span class="count">退訂數量: 
                        <select>
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                            <option value="">5</option>
                        </select>
                    </span>
                </p>                
                <div class="reason hide">退訂原因:
                    <select>
                        <option value="">請選擇</option>
                        <option value="">不符所需</option>
                        <option value="">商品缺件</option>
                        <option value="">規格不合</option>
                        <option value="">不想等太久</option>
                        <option value="">寄錯商品</option>
                        <option value="">商品瑕疵</option>
                        <option value="">其他</option>
                    </select>
                </div>
            </li>
        </ol>
        <div class="total">
            <a href="javascript: void(0);" class="button gray btn-all">全選</a>
        </div>
        <a href="refund_info.php" class="button large red btn-next">下一步</a>
    </div>
	<?php include "_footer.php";?>
	<script src="../assets/js/jquery/jquery-1.10.2.min.js"></script>
    <script>
    (function($){
        //組合商品或贈品，群組勾選
        $('.checkbox').on('click', function(){
            if($(this).is(':checked')){
                $(this).closest('.main').find('.checkbox').prop('checked', true);
            }else{
                $(this).closest('.main').find('.checkbox').prop('checked', false);
            }
            $(this).closest('.main').find('.reason').slideToggle();
        });
        //全選
        $('.btn-all').on('click', function(){
            $('.checkbox').prop('checked', true);
            $('.reason').slideToggle();
        });
    })(jQuery);
    </script>
</body>
</html>