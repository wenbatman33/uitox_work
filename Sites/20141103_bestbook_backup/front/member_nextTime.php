<?php 
include "../frame/__data.php";
?>
<!doctype html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Language" content="zh-TW">
    <meta name="description" content="bestbook">
    <meta name="keywords" content="ebook, pdf">
    <meta property="og:site_name" content="bestbook 電子書"/>
    <meta property="og:title" content="bestbook 電子書 - <?php echo $h1_title;?>"/>
    <meta property="og:type" content="product"/>
    <meta property="og:description" content="bestbook 電子書"/>
    <meta property="og:url" content="http://bestbook.com/"/>
    <meta property="og:image" content="../assets/css/img/sample/mobile_hero.png"/>
    <title>bestbook 電子書 會員中心 / 下次再買</title>
    <link rel="shortcut icon" href="../assets/css/img/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <link rel="stylesheet" type="text/css" href="../assets/css/frame/frame.css">
    <link rel="stylesheet" type="text/css" href="../assets/css/member/member.css">
    <!--[if lt IE 9]>
        <link rel="stylesheet" type="text/css" href="../assets/css/shop/ie8.css">
        <script src="../assets/js/3rd-party/respond.js"></script>
        <script src="http://ie7-js.googlecode.com/svn/version/2.1(beta4)/IE9.js"></script>
    <![endif]-->
</head>
<body>
    <?php include "../frame/_header_inn.php";?>
    <div class="member-page container">
        <div class="member-breadcrumbs">
            <a href="../front/index.php" class="">會員中心 &gt;</a>
            <div class="locate">下次再買</div>
        </div>
        <?php include "../frame/_memberNav.php";?>
        <div class="memberWrap">
        <?php foreach ($products as $key => $value) {?>
            <div class="nextTimeList_col">
                <div class="listInner">
                    <div class="photo">
                        <a href="../front/product.php">
                            <img src="<?php echo $value['images'];?>" title="<?php echo $value['name'];?>" alt="<?php echo $value['name'];?>">
                        </a>
                    </div>
                    <ul class="msg">
                        <li class="title"><p itemprop="name" class="name"><?php echo $value['name'];?></p></li>
                        <li class="info">作者：東野圭吾</li>
                        <li class="Price">$99 </li>
                        <li class="PriceBtns"> <a class="button double full red memberBuy" href="#">購買</a> <a class="button double memberCancel" href="#">取消收藏</a></li>
                    </ul>
                </div>
            </div>
        <?php }?>
        </div>
    </div>
    <?php include "../frame/_footer.php";?>
    <?php include "../frame/_lightbox_search.php";?>
    <?php include "../frame/__js_library.php";?>
    <script>
        $('#memberReader li:nth-child(4)').addClass("active");
    </script>
</body>
</html>