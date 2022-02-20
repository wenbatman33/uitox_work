<header class="header-inn">
    <div class="container">
        <a href="../front/index.php" class="logo"><img src="../assets/img/frame/bestbook_logo.png" alt="bestbook 電子書"></a>
        <div class="main-category">
            <div id="dl-menu" class="dl-menuwrapper">
                <button class="dl-trigger">Open Menu</button>
                <ul class="dl-menu">
                    <li>
                        <a href="#">文學小說</a>
                        <ul class="dl-submenu">
                            <li>
                                <a href="#">翻譯文學</a>
                                <ul class="dl-submenu">
                                    <li><a href="category.php">日本</a></li>
                                    <li><a href="category.php">美國</a></li>
                                    <li><a href="category.php">歐洲</a></li>
                                    <li><a href="category.php">東南亞</a></li>
                                </ul>
                            </li>
                            <li><a href="http://127.0.0.1/bestbook/front/category.php">電影/電視小說</a></li>
                            <li><a href="#">散文詩歌</a></li>
                            <li><a href="#">其他類小說</a></li>
                        </ul>
                    </li>
                    <li><a href="category.php">愛情文藝小說</a></li>
                    <li>
                        <a href="#">幻俠推理小說</a>
                        <ul class="dl-submenu">
                            <li><a href="category.php">科幻/奇幻小說</a></li>
                            <li><a href="category.php">懸疑/推理小說</a></li>
                            <li><a href="category.php">武俠小說</a></li>
                            <li><a href="category.php">歷史/軍事小說</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">生活休閒</a>
                        <ul class="dl-submenu">
                            <li><a href="#">寵物</a></li>
                            <li><a href="#">旅遊</a></li>
                            <li><a href="#">攝影</a></li>
                            <li><a href="#">美食</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">圖文漫畫</a>
                        <ul class="dl-submenu">
                            <li><a href="#">動漫畫</a></li>
                            <li><a href="#">圖文/插畫</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">商業理財</a>
                        <ul class="dl-submenu">
                            <li><a href="#">管理</a></li>
                            <li><a href="#">投資理財</a></li>
                            <li><a href="#">行銷</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">親子家庭</a>
                        <ul class="dl-submenu">
                            <li>
                                <a href="#">童書</a>
                                <ul class="dl-submenu">
                                    <li><a href="#">0-2歲</a></li>
                                    <li><a href="#">3-6歲</a></li>
                                    <li><a href="#">7-10歲</a></li>
                                    <li><a href="#">11-14歲</a></li>
                                    <li><a href="#">兒童繪本</a></li>
                                </ul>
                            </li>
                            <li><a href="#">家庭教育</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">醫療/心靈</a>
                        <ul class="dl-submenu">
                            <li><a href="#">醫療保健</a></li>
                            <li><a href="#">心靈養生</a></li>i>
                        </ul>
                    </li>
                    <li>
                        <a href="#">其他</a>
                        <ul class="dl-submenu">
                            <li>
                                <a href="#">人文史地</a>
                                <ul class="dl-submenu">
                                    <li><a href="#">史地</a></li>
                                    <li><a href="#">哲學</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">社會科學</a>
                                <ul class="dl-submenu">
                                    <li><a href="#">心理學</a></li>
                                    <li><a href="#">政治/軍事</a></li>
                                    <li><a href="#">法律</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">自然科普</a>
                                <ul class="dl-submenu">
                                    <li><a href="#">應用科學</a></li>
                                    <li><a href="#">自然科學</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">藝術設計</a>
                                <ul class="dl-submenu">
                                    <li><a href="#">藝術</a></li>
                                    <li><a href="#">設計</a></li>
                                </ul>
                            </li>
                            <li><a href="#">語言學習</a></li>
                            <li><a href="#">考試用書</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <div class="categoryBG"></div>
        <nav id="function" class="function">
            <input type="search" name="" id="" class="input-search" placeholder="搜尋書籍">
            <a href="#" class="link icon-search"></a>
            <a href="#" class="link icon-publish" title="我要出書"></a>
            <div class="link link-account">
                <a href="#" class="icon-account"></a>
                <ul class="account-item icon-account-arrow hide">
                    <li><a href="#">登入/註冊</a></li>
                    <li><a href="#">查訂單</a></li>
                    <li><a href="#">我的帳戶</a></li>
                    <li><a href="#">我的閱讀清單</a></li>
                    <li><a href="#">我的最愛</a></li>
                </ul>
            </div>
            <!--
            <div class="link link-cart">
                <a href="#" class="icon-cart">
                    <span class="count">1</span>
                </a>
                <ul class="cart-item icon-cart-arrow hide">
                    <li class="list">
                        <?php foreach ($cart_products as $key => $value) {?>
                        <div class="prod">
                            <a href="../front/product.php" class="crop"><img src="<?php echo $value['images'];?>" alt=""></a>
                            <a href="../front/product.php" class="name-box">
                                <div class="name-table">
                                <span class="name"><?php echo $value['name'];?></span>
                                </div>
                            </a>
                            <span class="line">
                                <span class="currency">$</span>
                                <span class="price"><?php echo $value['price'];?></span>    
                            </span>
                            <ul class="quantity">
                                <li><a href="javascript:void(0);" class="type disabled">-</a></li>
                                <li><span itemprop="offerCount" class="type">1</span></li>
                                <li><a href="javascript:void(0);" class="type">+</a></li>
                            </ul>
                            <a href="#" class="del">刪除</a>
                        </div>
                        <?php }?>
                    </li>
                    <li class="cart-actions">
                        <span class="total-title">商品合計</span>
                        <span class="total">
                            <span class="currency">$</span>
                            <span class="price">6990</span>    
                        </span>
                        <a href="../cart/cart.php" class="button red full">結帳</a>
                    </li>
                </ul>
            </div>
            -->
        </nav>
    </div>
</header>