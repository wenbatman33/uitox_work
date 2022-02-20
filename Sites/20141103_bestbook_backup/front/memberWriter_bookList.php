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
    <title>bestbook 電子書 會員中心 / 書的總表</title>
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
            <div class="locate">書的總表</div>
            <div class="prompt"><a href="#" class="icon-memberWriter-prompt animate-flicker"></a>9</div>
        </div>
        <?php include "../frame/_memberNav.php";?>
        <div class="memberWriterWrap">
            <table class="mbookList">
            <thead>
                <tr>
                    <th>檔案上傳<span>上架 / 下架</span></th>
                    <th>電子書編輯 / 校稿<span>檔案狀態</span></th>
                    <th>封面</th>
                    <th>書名</th>
                    <th>售價<span>NT / 元</span></th>
                    <th>書籍介紹頁<span>作者 / 內容介紹</span></th>
                    <th>更多功能</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="rec_sell"></td>
                    <td class="rec_bookedit">
                        <div class="posit">
                            <div class="cen"><a class="nonlink">電子書預覽</a></div>
                            <div class="bottom"><a href="bookFileUpload.do" class="btn-default btn-accept">檔案上傳</a></div>
                        </div>
                    </td>
                    <td class="rec_cover"><a href="bookAdd.do"><img src="./images/bookcover-default.jpg" class="bookcover default"></a></td>
                    <td class="rec_name"><a href="bookAdd.do">新增</a></td>
                    <td class="rec_price"><a href="bookAdd.do">新增</a></td>
                    <td class="rec_info"><a href="bookAdd.do">新增</a></td>
                    <td class="rec_more"></td>
                </tr>
            </tbody>
            </table>
        </div>
    </div>
    <?php include "../frame/_footer.php";?>
    <?php include "../frame/_lightbox_search.php";?>
    <?php include "../frame/__js_library.php";?>
    <script>
        $('#memberWriter li:nth-child(2)').addClass("active");
    </script>
</body>
</html>