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
    <title>bestbook 電子書 會員中心 / 訂購記錄</title>
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
            <div class="locate">訂購記錄</div>
        </div>
        <?php include "../frame/_memberNav.php";?>
        <div class="memberWrap">
            <?php foreach ($products as $key => $value) {?>
                <div class="orderList_col">
                    <div class="listInner">
                        <div class="orderListInfo">
                            <div class="orderListInfo_l">2014/04/23 訂單編號：<a href="#">201404B6</a>  NT$ 567</div>
                            <div class="orderListInfo_r">
                                <a href="#">訂單明細</a>
                                <a href="#">聯絡客服</a>
                                <a href="#">發票</a>
                                <a href="#">退訂</a>
                            </div>
                        </div>
                        <div class="orderListbBooks">
                            <div class="orderListbBooksItem">
                                <a href="../front/product.php" class="BooksPhoto"><img src="../assets/css/img/sample/book_01.jpg" alt="完美"></a>
                                <a href="../front/product.php" class="BooksName">完美</a>
                            </div>
                            <div class="orderListbBooksItem">
                                <a href="../front/product.php" class="BooksPhoto"><img src="../assets/css/img/sample/book_02.jpg" alt="完美"></a>
                                <a href="../front/product.php" class="BooksName">跟著喬叔，隨意喇皂：搞怪工程師教你做美美天然好皂</a>
                            </div>
                            <div class="orderListbBooksItem">
                                <a href="../front/product.php" class="BooksPhoto"><img src="../assets/css/img/sample/book_03.jpg" alt="完美"></a>
                                <a href="../front/product.php" class="BooksName">聊天再也不缺梗：106個絕妙科學話題讓你瞬間成為人氣王！</a>
                            </div>
                            <div class="orderListbBooksItem">
                                <a href="../front/product.php" class="BooksPhoto"><img src="../assets/css/img/sample/book_04.jpg" alt="完美"></a>
                                <a href="../front/product.php" class="BooksName">來來貓大和11</a>
                            </div>
                        </div>
                    </div>
                </div>
            <?php }?>
        </div>
    </div>
    <?php include "../frame/_footer.php";?>
    <?php include "../frame/_lightbox_search.php";?>
    <?php include "../frame/__js_library.php";?>
    <script>
        $('#memberReader li:nth-child(3)').addClass("active");
    </script>
</body>
</html>