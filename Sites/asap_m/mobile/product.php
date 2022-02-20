<?php 
include "__data.php";
$h1_title = "商品詳情";
$prod = $_GET['p'];
?>
<!doctype html>
<html lang="zh-TW">
<head>
	<meta charset="UTF-8">
    <meta http-equiv="Content-Language" content="zh-TW">
    <meta name="description" content="商品介紹">
    <meta name="keywords" content="商品介紹">
    <meta property="og:site_name" content="ASAP閃電購物網"/>
    <meta property="og:title" content="商品名稱 - <?php echo $h1_title;?>"/>
    <meta property="og:type" content="product"/>
    <meta property="og:description" content="商品介紹"/>
    <meta property="og:url" content="http://www.asap.com/product.php"/>
    <meta property="og:image" content="商品照片"/>
	<title><?php echo $h1_title;?></title>
	<link rel="shortcut icon" href="../assets/img/favicon.ico" />
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
	<!--[if lt IE 9]>
    <script src="../js/3rd-party/html5shiv.js"></script>
    <![endif]-->
	<link rel="stylesheet" type="text/css" href="../assets/css/mobile/frame/frame.css">
	<link rel="stylesheet" type="text/css" href="../assets/css/mobile/shop/product.css">
</head>
<body>
	<?php include "_header_inn.php"; ?>
    <figure itemscope itemtype="http://data-vocabulary.org/Product" id="product" class="block">
        <div class="crop">
            <img itemprop="image" src="<?php echo $products[$prod]['images'];?>" />            
        </div>
        <figcaption class="detail">
            <h1 itemprop="name"><?php echo $products[$prod]['name'];?></h1>
            <?php //限時特賣 ?>
            <section class="line">
                <!-- <div class="limit">特賣活動：12/31 18:00 ~ 01/02 10:00 <br>優惠價：
                    <span itemprop="currency" class="dollar">NT$</span>
                    <span itemprop="lowPrice" class="price"><?php echo $products[$prod]['price'];?></span>
                </div> -->                

                <?php  //just for demo   
                if($prod == '0'){?><!--一般狀態-->
                    <div class="limit">特賣公告結束倒數：
                        <div class="countdown_dashboard">
                            18:31:31
                        </div>
                    </div>
                <?php }
                 if($prod == '1'){?><!--預訂商品-->
                    <div class="limit pre-order-info">預訂於2014年6月28日後發貨
                        <div class="pre-order-num">
                            <span>已預訂數量：500</span><span>剩餘數量：100</span>
                        </div>
                    </div>
                <?php }
                if($prod == '2'){?><!--預購結束-->
                    <div class="limit pre-order-end"></div>
                <?php }
                if($prod == '3'){?><!--已搶購一空-->
                    <div class="limit pre-order-end"></div>
                <?php }
                if($prod == '4'){?><!--組合商品-->
                    <div class="group-prod">
                        <p class="group-text">包含下列商品：</p>
                        <div class="limit">
                            <ul>
                                <li>
                                    組合商品細項1
                                    <div class="attr">
                                        <select>
                                            <option value="">請選擇規格</option>
                                            <option value="">規格1</option>
                                            <option value="">規格2</option>
                                            <option value="">規格3</option>
                                        </select>
                                    </div>
                                </li>
                                <li>組合商品細項2</li>
                                <li>組合商品細項3</li>
                            </ul>
                        </div>
                    </div>
                <?php }
                ?>
            </section>
            <?php //價錢 ?>
            <section class="line">
                <span class="head">價錢：</span>
                <div class="price-block">
                    <span itemprop="currency" class="dollar">NT$</span> 
                    <span itemprop="lowPrice" class="price"><?php echo $products[$prod]['price'];?></span>
                    <del><span itemprop="currency">NT$</span><span itemprop="highPrice">850</span></del>
                </div>
            </section>
            <?php //顏色 ?>
            <section class="line">
                <div class="head">顏色：</div>
                <ul class="attr">
                    <?php foreach ($product_color as $key => $value) { //if($key==5){break;}?>
                    <li><img src="<?php echo $value['url'];?>" alt="商品顏色種類"><span class="pro-color" itemprop="color">紅色</span></li>
                    <li><img src="<?php echo $value['url'];?>" alt="商品顏色種類" style="display:none;"><span class="pro-color" itemprop="color" style="display:block;">紅色</span></li>
                    <?php }?>
                </ul>
            </section>
            <?php //尺寸 ?>
            <section class="line">
                <div class="head">尺寸：</div>
                <ul class="attr">
                    <li class="selected"><span itemprop="model" class="type">XS</span></li>
                    <li><span itemprop="model" class="type">S</span></li>
                    <li><span itemprop="model" class="type">M</span></li>
                    <li class="disabled"><span itemprop="model" class="type">L</span></li>
                </ul>
            </section>
            <?php //數量 ?>
            <section class="line">
                <div class="head">數量：</div>
                <ul class="quantity">
                    <li><a href="javascript:void(0);" class="type">-</a></li>
                    <li><span class="type">1</span></li>
                    <li><a href="javascript:void(0);" class="type">+</a></li>
                </ul>
            </section>
            <?php //贈品 ?>
            <section class="line">
                <div class="head">贈品：</div>
                <ol class="present">
                    <li>5200mAh行動電源（隨機出貨不挑色）</li>
                </ol>
            </section>
            <?php //商品介紹 ?>
            <section class="chapter">
                <h2 class="title icon-arrow-ds">商品介紹</h2>
                <div itemprop="description" class="desc"><?php echo $products[$prod]['desc'];?>
                <a href="javascript: void(0);" class="close">收起內容</a>
                </div>
            </section>
            <?php //商品規格 ?>
            <section class="chapter">
                <h2 class="title icon-arrow-ds">商品規格</h2>
                <div itemprop="description" class="desc">
                    <ul>
                        <li>外盒尺寸：約15*15*7(cm)</li>
                        <li>訊息蛋尺寸約6cm</li>
                        <li>品牌國家：日本</li>
                        <li>產地：中國</li>
                        <li>內容物：訊息蛋本體、人偶、空白訊息卡</li>
                        <li>材質：塑膠</li>
                        <li>適用年齡：6歲以上</li>
                        <li>電池：無需電池</li>
                    </ul>
                    <a href="javascript: void(0);" class="close">收起內容</a>
                </div>
            </section>
            <?php //商品保固 ?>
            <section class="chapter">
                <h2 class="title icon-arrow-rs">商品保證</h2>
                <div itemprop="description" class="desc hide">
                    <ul>
                        <li>我們所提供為全新產品，並提供以下保證：</li> 
                        <li>- 保固期限：無</li>
                        <li>- 保固範圍：新品瑕疵</li>
                        <li>顧客諮詢服務中心：本站客服中心</li>
                    </ul>
                    <a href="javascript: void(0);" class="close">收起內容</a>
                </div>
            </section>
            <?php //購買說明 ?>
            <section class="chapter">
                <h2 class="title icon-arrow-rs">購買說明</h2>
                <div itemprop="description" class="desc hide">
                    遊戲軟體商品說明:提醒您請注意使用時間，避免遊戲沉迷。如遊戲軟體以購買遊戲點數[卡]、虛擬遊戲幣或虛擬寶物作為付費方式者，應標示其付費內容及金額。請消費者注意其付費內容及金額、遊戲部分內容或服務是否需另行支付其他費用。發票寄送:由於商品配送皆由廠商直接寄出，發票會在付款完成、出貨後開立，並儲存為電子檔供您查看，您若需要正本可至訂單查詢直接索取 (已捐贈、已索取的發票除外)，詳情請參考「發票託管流程說明」。三聯式發票、索取發票將會在廠商完成出貨後10個工作天寄出，約2-7個工作天內送達，如遇國定假日將順延寄送。如您於收到訂購商品後20天仍未收到發票，請通知客服中心。發票金額是扣除您使用購物金或福利金折抵後的自付額。若您使用信用卡紅利或福利金後訂單金額全額折抵，將不另行開立發票。
                    <a href="javascript: void(0);" class="close">收起內容</a>
                </div>
            </section>
            <section class="chapter">
                <a href="delivery.php" class="link icon-arrow-rs" target="_blank">到貨時間說明</a>
            </section>
        </figcaption>
	</figure>     

    <?php 
    if($prod == '0'){?>
    <div class="inside-service">
        <ul class="buy-actions">
            <li><a href="cart.php?p=0" class="button gray large to-cart">結帳<span class="cart-count hide">(1)</span></a></li>
            <li><a href="javascript: void(0);" class="button large add-cart">加入購物車</a></li>
        </ul>
        <h1>台北市5h. 全台24h到貨. 滿490免運</h1>
    </div>
    <?php }

    if($prod == '1'){?>
    <div class="inside-service">
        <ul class="buy-actions">            
            <li class="order"><a href="cart.php?p=1" class="button large orange">立即預訂</a></li>
        </ul>
        <h1>台北市5h. 全台24h到貨. 滿490免運</h1>
    </div>
    <?php }

    if($prod == '2'){?>
    <div class="inside-service">
        <ul class="buy-actions">            
            <li class="order"><a href="javascript: void(0);" class="button large gray disabled">預購結束</a></li>
        </ul>
        <h1>台北市5h. 全台24h到貨. 滿490免運</h1>
    </div>
    <?php }

    if($prod == '3'){?>
    <div class="inside-service">
        <ul class="buy-actions">            
            <li class="order"><a href="javascript: void(0);" class="button large gray disabled">已搶購一空</a></li>
        </ul>
        <h1>台北市5h. 全台24h到貨. 滿490免運</h1>
    </div>
    <?php }

    if($prod == '4'){?>
    <div class="inside-service">
        <ul class="buy-actions">
            <li><a href="cart.php?p=0" class="button gray large to-cart">結帳<span class="cart-count hide">(1)</span></a></li>
            <li><a href="javascript: void(0);" class="button groupbtn gray large add-cart">請選擇規格</a></li>
        </ul>
        <h1>台北市5h. 全台24h到貨. 滿490免運</h1>
    </div>
    <?php }

    ?>

	<?php include "_footer.php";?>
	<script src="../assets/js/jquery/jquery-1.10.2.min.js"></script>
    <script>
    (function($){
        product();
        function product(){
            var node = {};
            prepare();
            observe();
            function prepare(){
                node.addProd = $('.add-cart');
                node.toCart = $('.to-cart');
                node.quantity = $('.cart-count');
                node.btnClose = $('.close');    
            }
            function observe(){
                //add cart
                node.addProd.on('click', function(){
                if(!$(this).hasClass('gray')){
                        node.toCart.removeClass('gray');
                        node.quantity.slideUp(1).delay(200).slideDown();
                    }
                });
                //pick product product attribute
                $('.attr li').click(function(){
                    $(this).addClass('selected').siblings().removeClass('selected');
                });
                //open list detail
                $('.title').on('click', function(){
                    $('html, body').animate({
                        scrollTop: parseInt($(this).offset().top) - 5
                    }, 500);
                    $(this).toggleClass('icon-arrow-ds').toggleClass('icon-arrow-rs');
                    $(this).next().slideToggle();
                });
                //close desc
                node.btnClose.on('click', function(){
                    $(this).closest('.desc').slideToggle().prev().
                    toggleClass('icon-arrow-ds').toggleClass('icon-arrow-rs');
                });
            }
        }
       
       //<!--組合商品 group-prod-->
       $('.attr select').change(function(){
           $('.attr select option:selected').each(function(){
                if ($(this).text()=="請選擇規格"){
                    $('.groupbtn').addClass('gray');
                    $('.groupbtn').html('請選擇規格');
                }else{
                    $('.groupbtn').removeClass('gray');
                    $('.groupbtn').html('加入購物車');
                }                
           });
       });

    })(jQuery);
    </script>
</body>
</html>