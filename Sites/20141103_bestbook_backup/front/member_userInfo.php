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
    <title>bestbook 電子書 會員中心 / 個人資料</title>
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
            <div class="locate">個人資料</div>
        </div>
        <?php include "../frame/_memberNav.php";?>
        <div class="memberWrap">
            <div class="userInfoBtn">
                <div class="userInfoInner_blue">
                    <div class="userInfoInner_left">
                        <img src="../assets/css/img/frame/userImages_1.png" alt="">
                    </div>
                    <div class="userInfoInner_right">
                        <p class="txtwhite title">我的帳號：</p>
                        <p class="txtwhite">an******26@y****.com.tw</p>
                    </div>
                    <div class="userInfoInnerBtn "><a class="button white large" href="member_userInfo_password.php">修改密碼</a></div>
                    <!--<a href="member_userInfo_password.php"><div class="userInfoInnerBtn button white large">修改密碼</div></a>-->
                </div>
            </div>
            <div class="userInfoBtn">
                <div class="userInfoInner_bacsic">
                    <div class="userInfoInner_left">
                        <img src="../assets/css/img/frame/userImages_3.png" alt="">
                    </div>
                    <div class="userInfoInner_right">
                        <p class=" title">是否已手機認證？</p>
                        <p>Not yet</p>
                    </div>
                    <a herf="#"><div class="userInfoInnerBtn button large">立即手機認證</div></a>
                </div>
            </div>
            <!--若已經註冊過請顯示下面區塊
            <div class="userInfoBtn">
                <div class="userInfoInner_bacsic">
                    <div class="userInfoInner_left">
                        <img src="../assets/css/img/frame/userImages_2.png" alt="">
                    </div>
                    <div class="userInfoInner_right">
                        <p class=" title">是否已手機認證？</p>
                        <p>You already registered</p>
                    </div>
                </div>
            </div>
            -->
        </div>
    </div>
    <?php include "../frame/_footer.php";?>
    <?php include "../frame/_lightbox_search.php";?>
    <?php include "../frame/__js_library.php";?>
    <script>
        $('#memberReader li:nth-child(6)').addClass("active");
    </script>
</body>
</html>