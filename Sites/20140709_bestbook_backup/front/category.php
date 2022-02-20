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
    <meta property="og:image" content="../assets/img/sample/mobile_hero.png"/>
    <title>bestbook 電子書 館頁</title>
    <link rel="shortcut icon" href="../assets/img/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <link rel="stylesheet" type="text/css" href="../assets/css/frame/frame.css">
    <link rel="stylesheet" type="text/css" href="../assets/css/shop/category.css">
    <!--[if lt IE 9]>
        <script src="http://ie7-js.googlecode.com/svn/version/2.1(beta4)/IE9.js"></script>
        <script src="../assets/js/3rd-party/respond.js"></script>
    <![endif]-->
</head>
<body>
    <?php include "../frame/_header_inn.php";?>
    <div class="category-page container">
        <!--
        <div class="search-result">
            <p>目前顯示的搜尋結果：<span class="red-text">文學小說</span> 共計：<span class="red-text">2491筆</span>，頁數<span class="red-text">1/25</span></p>
            <p>您是不是想找：<a href="#">科幻小說</a>、<a href="#">散文創作</a>、<a href="#">古典文學</a></p>
        </div>
        -->
        <?php include "../frame/_breadcrumbs.php";?>
        <div class="category-left">
            <p>全部分類：</p>
            <ul id="menu" class="menu">
                <li><span class="main">文學小說</span>
                    <ul class="second-menu hide">
                        <li><a>行銷活動</a></li>
                        <li><a>新書</a></li>
                        <li><a>暢銷排行榜</a></li>
                        <li><a class="current">焦點注目↘79折</a></li>
                        <li><a>館長選書</a></li>
                        <li><a>簡體書</a></li>
                    </ul>
                </li>
                <li><span class="main">商業理財</span>
                    <ul class="second-menu hide">
                        <li><a>行銷活動</a></li>
                        <li><a>新書</a></li>
                        <li><a>暢銷排行榜</a></li>
                        <li><a>焦點注目↘79折</a></li>
                        <li><a>館長選書</a></li>
                        <li><a>簡體書</a></li>
                    </ul>
                </li>
                <li><span class="main">藝術設計</span></li>
                <li><span class="main">人文史地</span></li>
                <li><span class="main">自然科學</span></li>
                <li><span class="main">親子教育</span></li>
                <li><span class="main">語言學習</span></li>
                <li><span class="main">行銷企管</span></li>
                <li><span class="main">健康養生</span></li>
                <li><span class="main">烹調飲食</span></li>
                <li><span class="main">動漫動漫</span></li>
                <li><span class="main">休閒雜誌</span></li>
                <li><span class="main">政府出版</span></li>
            </ul>
        </div>
        <div class="category-right">
            <!--
            <div class="filter">
                <div class="column">
                    <div class="filter-tpye">分類</div>
                    <div class="filter-content">
                        <label>
                            <input type="checkbox">
                            <span title="<?php echo $value['name'];?>" class="all">全部</span>
                        </label>
                        <?php foreach ($search_category as $key => $value) {?>
                        <label>
                            <input type="checkbox">
                            <span title="<?php echo $value['name'];?>"><?php echo $value['name'];?></span>
                        </label>
                        <?php }?>
                    </div>
                </div>
                <div class="column">
                    <div class="filter-tpye">語言</div>
                    <div class="filter-content">
                        <label>
                            <input type="checkbox">
                            <span title="<?php echo $value['name'];?>" class="all">全部</span>
                        </label>
                        <?php foreach ($search_language as $key => $value) {?>
                        <label>
                            <input type="checkbox">
                            <span title="<?php echo $value['name'];?>"><?php echo $value['name'];?></span>
                        </label>
                        <?php }?>
                    </div>
                </div>
                <div class="column">
                    <div class="filter-tpye">出版年份</div>
                    <div class="filter-content">
                        <label>
                            <input type="checkbox">
                            <span title="<?php echo $value['name'];?>" class="all">全部</span>
                        </label>
                        <?php foreach ($search_year as $key => $value) {?>
                        <label>
                            <input type="checkbox">
                            <span title="<?php echo $value['name'];?>"><?php echo $value['name'];?></span>
                        </label>
                        <?php }?>
                    </div>
                </div>
                <div class="column">
                    <div class="filter-tpye">出版社</div>
                    <div class="filter-content">
                        <label>
                            <input type="checkbox">
                            <span title="<?php echo $value['name'];?>" class="all">全部</span>
                        </label>
                        <?php foreach ($search_press as $key => $value) {?>
                        <label>
                            <input type="checkbox">
                            <span title="<?php echo $value['name'];?>"><?php echo $value['name'];?></span>
                        </label>
                        <?php }?>
                        <?php foreach ($search_press as $key => $value) {?>
                        <label>
                            <input type="checkbox">
                            <span title="<?php echo $value['name'];?>"><?php echo $value['name'];?></span>
                        </label>
                        <?php }?>
                    </div>
                    <a href="#" class="expand">展開</a>
                </div>
                <div class="column">
                    <div class="filter-tpye">價格</div>
                        <div class="filter-content">
                        <label>
                            <input type="checkbox">
                            <span title="<?php echo $value['name'];?>" class="all">全部</span>
                        </label>
                        <?php foreach ($search_price as $key => $value) {?>
                        <label>
                            <input type="checkbox">
                            <span title="<?php echo $value['name'];?>"><?php echo $value['name'];?></span>
                        </label>
                        <?php }?>
                    </div>
                </div>
            </div>
            <div class="filter-m">
                <div class="row">
                    <select>
                        <option selected disabled>分類</option>
                        <?php foreach ($search_category as $key => $value) {?>
                        <option><?php echo $value['name'];?></option>
                        <?php }?>
                    </select>
                    <select>
                        <option selected disabled>出版年份</option>
                        <?php foreach ($search_year as $key => $value) {?>
                        <option><?php echo $value['name'];?></option>
                        <?php }?>
                    </select>
                    <select>
                        <option selected disabled>分類</option>
                        <?php foreach ($search_category as $key => $value) {?>
                        <option><?php echo $value['name'];?></option>
                        <?php }?>
                    </select>
                    <select>
                        <option selected disabled>出版社</option>
                        <?php foreach ($search_press as $key => $value) {?>
                        <option><?php echo $value['name'];?></option>
                        <?php }?>
                    </select>
                    <select>
                        <option selected disabled>價格</option>
                        <?php foreach ($search_press as $key => $value) {?>
                        <option><?php echo $value['name'];?></option>
                        <?php }?>
                    </select>
                </div>
            </div>
            <ul class="sort">
                <li class="active"><a href="">默認排序</a></li>
                <li><a href="">免費閱讀</a></li>
                <li><a href="">最新上載</a></li>
                <li><a href="">暢銷閱讀</a></li>
                <li><a href="">價格由高到低</a></li>
                <li><a href="">價格由低到高</a></li>
            </ul>
            <div class="sortby-m">
                <select>
                    <option>默認排序</option>
                    <option>銷量排行</option>
                    <option >新品上市</option>
                    <option>價格由高到低</option>
                    <option>價格由低到高</option>
                </select>
            </div>
            -->
            <div class="row">
                <?php foreach ($products as $key => $value) {?>
                <div class="col-3">
                    <figure itemscope itemtype="http://data-vocabulary.org/Product" class="product">
                    <a href="../front/product.php" itemprop="offerurl" class="photo">
                        <img src="<?php echo $value['images'];?>" title="<?php echo $value['name'];?>" alt="<?php echo $value['name'];?>">
                    </a>
                    <figcaption>
                        <a title="" target="_blank" href="" itemprop="offerURL">
                            <p itemprop="name" class="name"><?php echo $value['name'];?></p>
                        </a>
                        <ul class="msg">
                            <li>作者：東野圭吾</li>
                            <li>出版日期：2013/08/05 </li>
                        </ul>
                        <p itemprop="price" class="price"><span class="dollar">$</span>990</p>
                        <div class="actions-double">
                            <!--<a class="button double" href="#">試閱</a>-->
                            <!--<a class="button double" href="#">購買</a>-->
                        </div>
                    </figcaption>
                </figure>
                </div>
                <?php }?>
            </div>
            <!--
            <ul class="pagination">
                <li> &lt;&lt;</li>
                <li><a href=""> &lt;</a></li>
                <li class="page"><a href="?page=1" class="current">1</a></li>
                <li class="page"><a href="?page=2">2</a></li>
                <li class="page"><a href="?page=3">3</a></li>
                <li><a href=""> &gt;</a></li>
                <li><a href=""> &gt;&gt;</a></li>
            </ul>
            -->
        </div>
    </div>
    <?php include "../frame/_footer.php";?>
    <?php include "../frame/_lightbox_search.php";?>
    <?php include "../frame/__js_library.php";?>
    <script>
    $('select').on('change', function(){
        $(this).addClass('selected');
    });
    </script>
</body>
</html>