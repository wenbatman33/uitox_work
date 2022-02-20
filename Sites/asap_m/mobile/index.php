<?php 
include "__data.php";
$h1_title = "行動閃購專區-ASAP閃電購物網";
?>
<!doctype html>
<html lang="zh-TW">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="Content-Language" content="zh-TW">
    <meta name="description" content="想體驗閃電到貨的網路購物體驗，就上ASAP閃電購物網，台北市5h全台灣24h閃電到貨。智慧型手機、時尚精品、化妝品…數萬件商品讓你看的到就買的到，買的到也能閃電馬上拿的到，買錯閃電退貨不囉唷！每日整點下殺，讓你從此愛上網路購物">
	<meta name="keywords" content="前三個商品名稱">
    <meta property="og:site_name" content="行動閃購專區-ASAP閃電購物網"/>
    <meta property="og:title" content="行動閃購專區-ASAP閃電購物網>"/>
    <meta property="og:type" content="website"/>
    <meta property="og:description" content="店家介紹"/>
    <meta property="og:url" content="http://www.asap.com/index.php"/>
    <meta property="og:image" content=""/>
	<title><?php echo $h1_title;?></title>
	<link rel="shortcut icon" href="../assets/img/favicon.ico" />
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<!--[if lt IE 9]>
    <script src="../js/3rd-party/html5shiv.js"></script>
    <![endif]-->
	<link rel="stylesheet" type="text/css" href="../assets/css/mobile/frame/frame.css">
	<link rel="stylesheet" type="text/css" href="../assets/css/mobile/shop/index.css">
</head>
<body>
	<?php include "_header_index.php";?>
	<header class="banner">
        <img src="../assets/img/mobile/sample/20140213110636_mobile_banner-01.jpg" class="cover">
        <p class="desc">想看更多超殺商品？快上ASAP閃電購物網<br>台北市5h.全台灣24h 閃電到貨！</p>
    </header>
    <article id="products" class="product-image">
    	<?php foreach ($products_mobile as $key => $item) {?>
    	<div class="items">
			<figure itemscope itemtype="http://data-vocabulary.org/Product">
				<div class="crop">
					<a itemprop="offerurl" href="product.php?p=<?php echo $key;?>">
						<img itemprop="image" src="<?php echo $item['images'];?>">
					</a>
				</div>
				<figcaption>
					<p class="name">
						<a itemprop="offerurl" href="product.php?p=<?php echo $key;?>">
						<span itemprop="name"><?php echo $item['name'];?></span>
						</a>
					</p>
					<p class="ptitle">
						<span class="type">閃購價</span> 
						<span itemprop="currency" content="TWD" class="dollar">$</span>
						<strong itemprop="price" class="price"><?php echo $item['price'];?></strong>
						<del><span itemprop="currency">$</span><span itemprop="highPrice">14900</span></del>
					</p>
					
				</figcaption>
				<!-- <ul class="actions-group">
					<li><a itemprop="availability" content="in_stock" href="javascript:void(0);" class="add-cart">加入購物車</a></li>
					<li><a itemprop="availability" content="out_of_stock" class="button gray disabled">售完</a></li>
					<li><a href="product.php?p=<?php echo $key;?>">去看看 ></a></li>
				</ul> -->

				<?php if($key==0){//just for demo?>
				<ul class="actions-group2">
					<li><a itemprop="availability" content="in_stock" href="javascript:void(0);" class="add-cart icon-cart-w">加入購物車</a></li>
					<li><a href="product.php?p=<?php echo $key;?>" class="open">去看看></a></li>
				</ul>
				<?php }?>
				<?php if($key==1){//just for demo?>
				<ul class="actions-group2">
					<li><a itemprop="availability" content="preorder" href="javascript:void(0);" class="add-cart pre-order orange icon-cart-w">立即預訂</a></li>
					<li><a href="product.php?p=<?php echo $key;?>" class="open">去看看></a></li>
				</ul>
				<?php }?>
				<?php if($key==2){//just for demo?>
				<ul class="actions-group2">
					<li><a itemprop="availability" content="out_of_stock" href="javascript:void(0);" class="disabled">預購結束</a></li>
					<li><a href="product.php?p=<?php echo $key;?>" class="open">去看看></a></li>
				</ul>
				<?php }?>
				<?php if($key==3){//just for demo?>
				<ul class="actions-group2">
					<li><a itemprop="availability" content="out_of_stock" href="javascript:void(0);" class="disabled">已搶購一空</a></li>
					<li><a href="product.php?p=<?php echo $key;?>" class="open">去看看></a></li>
				</ul>
				<?php }?>
				<?php if($key==4){//just for demo?>
				<ul class="actions-group2">
					<li><a itemprop="availability" content="in_stock" href="product.php?p=<?php echo $key;?>" class="add-cart icon-cart-w">加入購物車</a></li>
					<li><a href="product.php?p=<?php echo $key;?>" class="open">去看看></a></li>
				</ul>
				<?php }?>
			</figure>
		</div>
		<?php }?>
	</article>
	<!-- <p class="note block">活動網頁的商品、規格、顏色、價位如與銷售網頁(商品詳情頁)不符，請以銷售網頁為準；活動特價商品均限量供應，售完為止！</p> -->
	<?php include "_footer.php";?>
	<footer class="hour">
		<h1>台北市5h. 全台24h到貨. 滿490免運 <a href="delivery.php" class="link" target="_blank">(說明)</a></h1>
	</footer>
	<?php include "_lightbox_all.php";?>
	<script src="../assets/js/jquery/jquery-1.10.2.min.js"></script>
	<script src="../assets/js/3rd-party/masonry.pkgd.min.js"></script>
	<script src="../assets/js/3rd-party/imagesloaded.pkgd.min.js"></script>
	<script src="../assets/js/mobile/mobile-actions.js"></script>
	<script>
	(function($){
		//pick product product attribute
        $('.attr li').click(function(){
        	if($(this).hasClass('disabled')){
        		return false;
        	}else{
        		$(this).addClass('selected').siblings().removeClass('selected');
        	}
        });
		productInit();
		function productInit(){
			//waterfall
			var container = $('#products');
			container.imagesLoaded(function(){
				container.masonry({
					columnWidth: 0,
					itemSelector: '.items'
				});
			});
		}
    })(jQuery);
	</script>
</body>
</html>