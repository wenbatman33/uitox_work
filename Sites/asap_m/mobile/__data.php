<?php
// session_set_cookie_params(0);
// session_start();
// if($_SESSION['isLogin'] != 'true'){
//     header("Location: login_temp.php");
// }
$products = array(
    array(
        "name"      => "2013最新混邊雙色款深V無鋼圈內衣套組 (4顏色,3尺寸可選) -深藍S",
        "state"     => "",
        "images"    => "../assets/img/mobile/sample/asap_p01.jpg", 
        "url"       => "#",
        "price"     => "245",
        "desc"      => "超柔軟設計~讓你穿一整天都舒適，特殊剪裁設計,加強胸部提高效果,讓雙峰自然托高不下垂，內衣+內褲一整套$249,輕鬆無負擔",
    ),
    array(
        "name"      => "高質感冰絲棉無痕內褲 10入組",
        "state"     => "",
        "images"    => "../assets/img/mobile/sample/asap_p02.jpg", 
        "url"       => "#",
        "price"     => "299",
        "desc"      => "冰絲涼感,親膚透氣,貼心無痕設計,貼身衣物不外露    完整包屁屁,舒適感NO.1,保證一穿就愛上,褲底雙層布料,加倍呵護私密處    一件不到$30,快趁便宜多買幾件!   尺寸:均碼 全彈性布料,臀圍40吋以下都適穿",
    ),
    array(
        "name"      => "變天不怕冷!!冬季必備保暖羊絨褲襪團購組超低價 -組合A",
        "state"     => "",
        "images"    => "../assets/img/mobile/sample/asap_p03.jpg", 
        "url"       => "#",
        "price"     => "599",
        "desc"      => "【裡起毛】羊絨保暖褲襪，裡起毛羊絨保暖褲襪，讓你不用再當冰山美人。款式、顏色多樣，多款任選，超划算6件組,1雙不到一百元!!!",
    ),
    array(
        "name"      => "強吸震豆豆鞋.4顏色6尺寸可選 -橘色37",
        "state"     => "",
        "images"    => "../assets/img/mobile/sample/asap_p04.jpg", 
        "url"       => "#",
        "price"     => "389",
        "desc"      => "趕打卡、搶特賣、追公車!?此時你最需要的是腳底下的一雙好鞋!"
    ),
    array(
        "name"      => "時尚健康運動健走鞋(顏色:桃/藍/灰)共6尺寸 -灰39",
        "state"     => "",
        "images"    => "../assets/img/mobile/sample/asap_p05.jpg", 
        "url"       => "#",
        "price"     => "699",
        "desc"      => "輕鬆健走就能達到意想不到的健身效果!  增高底部讓妳的腿看起來更修長  三種顏色可選!!!時尚好搭配",
    ),
    array(
        "name"      => "AllezVoyager奧莉薇閣 行雲流水輕量ABS超值二件套組 行李箱/登機箱 20+24吋 -魔力藍",
        "state"     => "",
        "images"    => "../assets/img/mobile/sample/asap_p06.jpg", 
        "url"       => "#",
        "price"     => "2680",
        "desc"      => "耐刮耐磨的ABS，保護行李刮痕不明顯。 不佔空間，好收納，全家皆可使用。    鋁合金拉桿、三號密碼鎖保障個人隱私。",
    ),
    array(
        "name"      => "大材積 超大雙排加寬12格簡易防塵鞋櫃 -棗紅",
        "state"     => "",
        "images"    => "../assets/img/mobile/sample/asap_p07.jpg", 
        "url"       => "#",
        "price"     => "499",
        "desc"      => "超大容量，再多鞋子也不怕    三色可選，美觀大方   堅固耐用，組裝方便",
    ),
    array(
        "name"      => "二代超強無敵防風傘(顏色可選:粉藍/粉紅/粉紫/深藍/灰/酒紅/黑) -灰",
        "state"     => "",
        "images"    => "../assets/img/mobile/sample/asap_p08.jpg", 
        "url"       => "#",
        "price"     => "199",
        "desc"      => "無敵防風，傘骨Q彈有勁 颱風來也不怕，甩一甩雨傘輕鬆回復原狀  UV防曬塗層，7吋大傘面烈陽、大雨都頂得住!",
    ),
    array(
        "name"      => "超方便折疊電腦桌 -紅色",
        "state"     => "",
        "images"    => "../assets/img/mobile/sample/asap_p09.jpg", 
        "url"       => "#",
        "price"     => "499",
        "desc"      => "大小桌面設計，可依照自己喜愛調整角度  調節鈕皆附有安全鎖，堅固耐用  金屬材質更散熱，顏色紅/黑兩色可選   為生活帶來更便利的愜意享受~",
    ),
    array(
        "name"      => "超輕時尚極簡風雨衣 (四種尺寸/四色任選 -俏麗粉2XL",
        "state"     => "",
        "images"    => "../assets/img/mobile/sample/asap_p10.jpg", 
        "url"       => "#",
        "price"     => "599",
        "desc"      => "台灣嚴選!! SGS認證    包邊車縫線設計! 防水超耐用  多種尺寸，男女皆可穿",
    ),
);

$products_mobile = array(
    array(
        "name"      => "HTC Desire 600 (606h) 四核生活智慧機",
        "state"     => "",
        "images"    => "../assets/img/mobile/sample/201310AM170000157_922565264.jpg", 
        "url"       => "#",
        "price"     => "8999",
        "attr"      => FALSE,
        "desc"      => "HTC Desire 600除擁有HTC BlinkFeed首頁外，更提供熱門的Video Highlights生活微電影能將拍攝的照片與影片自動轉輯為精華影片，內建多種主題特效與配樂，搭配HTC BoomSound音響觀看，讓絕佳的音質豐富情感記憶。搭載四核心高效處理器，使用內建的多種相片編輯功能時，更加流暢順手。慢動作影片還可任意選擇片段，加以慢速播放，你可更加仔細觀賞最精彩的瞬間，讓影片更加精彩有趣。",
    ),
    array(
        "name"      => "【BUYBLE國際精品】 COACH 織布皮革飾邊肩背手提水餃包 50084 - 兩色",
        "state"     => "",
        "images"    => "../assets/img/mobile/sample/201401AM280000363_502567493.jpg", 
        "url"       => "#",
        "price"     => "4980",
        "attr"      => TRUE,
        "desc"      => "★經典C LOGO織布設計★皮革飾邊增添質感★可肩背亦可手提，方便實用",
    ),
    array(
        "name"      => "【韓式作風】秋冬嚴選，潮流連帽騎士外套(二色)",
        "state"     => "",
        "images"    => "../assets/img/mobile/sample/201311AM070001268_147877324.jpg", 
        "url"       => "#",
        "price"     => "799",
        "attr"      => TRUE,
        "desc"      => "讓影片更加精彩有趣。",
    ),
    array(
        "name"      => "[VOLA] 12雙入 素肌無痕 網路銷售NO.1透膚絲襪 自然均勻顯色 - 黑",
        "state"     => "",
        "images"    => "../assets/img/mobile/sample/201311AM010000631_771750624.jpg", 
        "url"       => "#",
        "price"     => "299",
        "attr"      => TRUE,
        "desc"      => "OL最愛，回購率NO.1 進口彈性紗織造，觸感柔韌，彈力大 腰下全透明，美麗不留痕跡 獨家下殺!一雙只要$25!",
    ),
    array(
        "name"      => "HTC Desire 600 (606h) 四核生活智慧機-組合商品",
        "state"     => "",
        "images"    => "../assets/img/mobile/sample/201310AM170000157_922565264.jpg", 
        "url"       => "#",
        "price"     => "8999",
        "attr"      => FALSE,
        "desc"      => "HTC Desire 600除擁有HTC BlinkFeed首頁外，更提供熱門的Video Highlights生活微電影能將拍攝的照片與影片自動轉輯為精華影片，內建多種主題特效與配樂，搭配HTC BoomSound音響觀看，讓絕佳的音質豐富情感記憶。搭載四核心高效處理器，使用內建的多種相片編輯功能時，更加流暢順手。慢動作影片還可任意選擇片段，加以慢速播放，你可更加仔細觀賞最精彩的瞬間，讓影片更加精彩有趣。",
    ),
);

$products_line = array(
        array(
        "name"      => "LINE禮物 可妮兔 kiss布朗熊 毛絨公仔 手機鏈 掛飾",
        "images"    => "../assets/img/mobile/sample/line_p05.jpg", 
        "url"       => "#",
        "price"     => "180",
        "desc"      => "毛絨公仔 手機鏈 掛飾",
        "state"     => "limit",
    ),
    array(
        "name"      => "LINE - 訊息蛋 熊大",
        "images"    => "../assets/img/mobile/sample/line_p01.jpg", 
        "url"       => "#",
        "price"     => "450",
        "desc"      => "通訊軟體LINE獨家貼圖角色人偶，偷偷將訊息寫好讓人偶幫你傳達，彈開瞬間給對方一個驚喜吧",
        "state"     => "new",
    ),
    array(
        "name"      => "APP LINE布朗熊與饅頭人慶典鯉魚室內裝飾品擺件",
        "images"    => "../assets/img/mobile/sample/line_p02.jpg", 
        "url"       => "#",
        "price"     => "4100",
        "desc"      => "毛絨公仔 手機鏈 掛飾",
        "state"     => "limit",
    ),
    array(
        "name"      => "LINE - 卡片套 白",
        "images"    => "../assets/img/mobile/sample/line_p03.jpg", 
        "url"       => "#",
        "price"     => "295",
        "desc"      => "★通訊軟體LINE獨家貼圖角色人偶★放入車票識別證也不會遮掉圖案喔★附有掛帶扣環可配戴喔",
        "state"     => "hot",
    ),
    array(
        "name"      => "LINE - iPhone5手機殼 兔兔",
        "images"    => "../assets/img/mobile/sample/line_p04.jpg", 
        "url"       => "#",
        "price"     => "650",
        "desc"      => "毛絨公仔 手機鏈 掛飾",
        "state"     => "hot",
    ),
    array(
        "name"      => "布朗熊 潮人款 日本尾單連我LINE公仔 手拿錄音機造型大號掛件款",
        "images"    => "../assets/img/mobile/sample/line_p06.jpg", 
        "url"       => "#",
        "price"     => "120",
        "desc"      => "超可爱布朗手拿录音机款公仔，萌哒哒的，中秋快到了，一套买回去让熊爸爸和小熊团聚吧~，一套购买更优惠哦~，大只的36厘米，小只的10厘米左右，拿录音机款的熊还穿着潮人衣服的哦，录音机是配件，不具备录音功能的哦~",
        "state"     => "new",
    ),
    array(
        "name"      => "最新款日本原單正版ラインLine表情 小熊掛件 包鏈 鑰匙鏈",
        "images"    => "../assets/img/mobile/sample/line_p07.jpg", 
        "url"       => "#",
        "price"     => "490",
        "desc"      => "本店这批新到的Line公仔价格依然不变。这次的版本有非常可爱的抱小鸡的版本，快来收~！挂件的挂绳材质是金属豆豆绳，可以方便挂在背，钥匙或车上挂件的尺寸：平均身高10cm小熊系列一共三款，抱小鸡款有三只，抱桃心款和拳击款各两只。请亲们购买前询问本店具体的库存情况。另外，购买时请亲们备注好要哪个款，不标注的店主会随机发货。12月4日新增三款布朗熊，另外拳击熊已售完。",
        "state"     => "limit",
    ),
    array(
        "name"      => "小號 LINE 上班族系列 布朗熊 可妮兔 饅頭人 毛絨公仔 現貨",
        "images"    => "../assets/img/mobile/sample/line_p08.jpg", 
        "url"       => "#",
        "price"     => "580",
        "desc"      => "本店这批新到的Line公仔价格依然不变。这次的版本有非常可爱的抱小鸡的版本，快来收~！挂件的挂绳材质是金属豆豆绳，可以方便挂在背，钥匙或车上挂件的尺寸：平均身高10cm小熊系列一共三款，抱小鸡款有三只，抱桃心款和拳击款各两只。请亲们购买前询问本店具体的库存情况。另外，购买时请亲们备注好要哪个款，不标注的店主会随机发货。12月4日新增三款布朗熊，另外拳击熊已售完。",
        "state"     => "hot",
    ),
    array(
        "name"      => "日本 TAKARATOMY LINE絨毛娃娃 LINE玩偶 回聲鰻頭人",
        "images"    => "../assets/img/mobile/sample/line_p09.jpg", 
        "url"       => "#",
        "price"     => "950",
        "desc"      => "LINE公仔也加入迴聲小家族囉！聰明的他們喜歡模仿，只要有人對他說話，他就會用可愛的語氣模仿，還會努力的扭動身體，可愛逗趣的模樣讓人不禁想把他抱在懷裡，心情也跟著愉快了起來。",
        "state"     => "hot",
    ),
    array(
        "name"      => "日本 TAKARATOMY LINE絨毛娃娃 LINE玩偶 回聲鰻頭人",
        "images"    => "../assets/img/mobile/sample/line_p10.jpg", 
        "url"       => "#",
        "price"     => "580",
        "desc"      => "熊大可妮兔布朗熊 可愛卡通披肩 披風 鬥篷",
        "state"     => "new",
    ),
);

$product_color = array(
    array(
        "url"       => "http://img.uitox.com/A/item/2013/1024/AG0006394/c201310AG240006394_162863075.jpg",
    ),
    array(
        "url"       => "http://img.uitox.com/A/item/2013/1024/AG0006395/c201310AG240006395_462243939.jpg",
    ),
    array(
        "url"       => "http://img.uitox.com/A/item/2013/1024/AG0006396/c201310AG240006396_759395295.jpg",
    ),
    array(
        "url"       => "http://img.uitox.com/A/item/2013/1024/AG0006397/c201310AG240006397_652486871.jpg",
    ),
    array(
        "url"       => "http://img.uitox.com/A/item/2013/1024/AG0006399/c201310AG240006399_751465963.jpg",
    ),
    array(
        "url"       => "http://img.uitox.com/A/item/2013/1024/AG0006404/c201310AG240006404_653980514.jpg",
    ),
    array(
        "url"       => "http://img.asap.com.tw/A/item/2013/1219/AG0000306/c201312AG190000306_120806856.png",
    ),
);

?>