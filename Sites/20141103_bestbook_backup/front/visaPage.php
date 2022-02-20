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
    <title>bestbook 電子書 會員中心 / 我的閱讀清單</title>
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
        </div>
        <div class="visaTitle">刷卡金額: <span class="visaAmount">100</span></div>
        <div class="memberRow">
            <div class="gLineBox">
                <div class="tabtr clearfix">
                    <div class="columnleft">信用卡卡號</div>
                    <div class="columnright clearfix">
                        <div id="CreditCardInput" class="cardinput">
                            <input type="text" maxlength="16">
                        </div>
                    </div>
                </div>
                <div class="tabtr clearfix">
                    <div class="columnleft"><span>信用卡截止日</span></div>
                    <div class="columnright">
                        <span class="select"><select id="CardMonth" name="CardMonth" class="input-text1"><option value="">--</option><option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option></select></span>
                        <span>月 &nbsp; </span>
                        <span class="select"><select id="CardYear" name="CardYear" class="input-text1"><option value="">----</option><option value="2014">2014</option><option value="2015">2015</option><option value="2016">2016</option><option value="2017">2017</option><option value="2018">2018</option><option value="2019">2019</option><option value="2020">2020</option><option value="2021">2021</option><option value="2022">2022</option><option value="2023">2023</option><option value="2024">2024</option></select></span>
                        <span>年</span>
                    </div>
                </div>
                <div class="tabtr clearfix">
                    <div class="columnleft"><span>背面末三碼</span></div>
                    <div class="columnright">
                        <input type="text" id="creditCardBackNum" name="creditCardBackNum" size="3" maxlength="3" class="input-text1" autocomplete="off">
                        (圖示→) <img src="../assets/css/img/frame/cridit.gif" alt="" border="0">
                    </div>
                </div>
                <div class="tabtr clearfix">
                    <div class="columnleft"></div>
                    <div class="columnright">
                        <input id="ck1" type="checkbox"><label for="ck1">記住卡號</label>
                    </div>
                </div>
                <div class="btns center"> <input type="submit" class="button double large" value="確認送出"/> <a class=" button double large" href="#">確認送出</a> </div>
            </div>
        </div>
        <div class="cart_exptxt">
                <p class="col000">信用卡資訊 : 採用SSL 128 bits安全加密後傳送至發卡銀行進行驗證 </p>
                *為確保網路交易安全，您同意本公司就此筆交易向發卡銀行、收單行及持卡人核對是否屬實；您所填寫的姓名、電話資料,亦將於核對完成後刪除。
                <br>若您同意以上所約定的付款程序，請按確認送出進行程序。
                <br>*為確保交易安全，本公司會將上述資料向發卡銀行及持卡人照會，如有冒用他人信用卡交易者，經查獲必移送法辦。
                <br><span class="colff0"></span>
            </div>
    </div>
    <?php include "../frame/_footer.php";?>
    <?php include "../frame/_lightbox_search.php";?>
    <?php include "../frame/__js_library.php";?>
    <script>
        $('#memberReader li:nth-child(2)').addClass("active");
        $('.member-page').css({"min-height": "500px"});
    </script>
</body>
</html>