<?php // 商品顏色尺寸 lightbox?>
<div class="lightbox-prod-attr hide">
    <div class="block">
        <h1 class="title">請選擇顏色和數量</h1>
        <?php //顏色 ?>
        <section class="line">
            <div class="head">顏色：</div>
            <ul class="attr">
                <?php foreach ($product_color as $key => $value) {?>
                <li><img src="<?php echo $value['url'];?>" alt="商品顏色種類"><span itemprop="color">紅色</span></li>
                <?php }?>
            </ul>
        </section>
        <?php //尺寸 ?>
        <section class="line">
            <div class="head">尺寸：</div>
            <ul class="attr">
                <li><span itemprop="model" class="type">XS</span></li>
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
        <?php //價錢 ?>
        <section class="line">
            <span class="head">價錢：</span>
            <div class="price-block">
                <span itemprop="currency" content="TWD" class="dollar">NT$</span> 
                <span itemprop="lowPrice" class="price">1200</span>
            </div>
        </section>
        <p class="msg hide">請選擇尺寸</p>
        <div class="actions">
            <a href="javascript:void(0);" class="button btn-cart">加入購物車</a>
        </div>
        <a href="javascript:void(0);" class="icon-close"></a>
    </div>
</div>

<?php //填寫統一發票 lightbox?>
<div class="lightbox-ubn hide">
    <div class="block">
        <h1 class="title">統一編號</h1>
        <input type="tel" placeholder="統一編號號碼" class="input-ubn">
        <h2>公司戶發票一經開立，無法換開為個人戶發票，您的發票將會隨貨寄出</h2>
        <div class="actions">
            <a href="#" class="button gray btn-close">取消</a>
            <a href="#" class="button red ubn-submit">送出</a>
        </div>
        <a href="#" class="icon-close"></a>
    </div>
</div>

<?php //索取紙本發票 ligtbox?>
<div class="lightbox-pinvoice hide">
    <div class="block">
        <h1 class="title">索取紙本發票</h1>
        <h2>使用電子發票電腦會自動幫您對獎，中獎時會mail通知並掛號寄出紙本發票給您。</h2>
        <h2>使用電子發票退貨時，不會因為找不到紙本發票導致無法退款。</h2>
        <h2>提醒您：個人戶(二聯式)發票一經開立，不得任意更改為公司戶(三聯式)發票。</h2>
        <div class="actions">
            <a href="#" class="button gray pinvoice-submit">仍要索取</a>
            <a href="#" class="button red btn-close">使用電子發票</a>
        </div>
        <a href="#" class="icon-close"></a>
    </div>
</div>

<?php //授權中 lightbox?>
<div class="lightbox-loading hide">
    <div class="block">
        <div class="spinner">
                <div class="spinner-container container1">
                    <div class="circle1"></div>
                    <div class="circle2"></div>
                    <div class="circle3"></div>
                    <div class="circle4"></div>
                </div>
                <div class="spinner-container container2">
                    <div class="circle1"></div>
                    <div class="circle2"></div>
                    <div class="circle3"></div>
                    <div class="circle4"></div>
                    </div>
                <div class="spinner-container container3">
                    <div class="circle1"></div>
                    <div class="circle2"></div>
                    <div class="circle3"></div>
                    <div class="circle4"></div>
                </div>
            </div>
        <p class="line center">授權中，請勿關閉視窗...</p>
    </div>
</div>

<?php //捐發票 lightbox?>
<div class="lightbox-INV-donate hide">
    <div class="block">
        <h1 class="title">發票捐贈</h1>
        <p class="line">
            <input type="radio" name="donate" id="donate-not" checked="checked">
            <label for="donate-not">發票捐給家扶基金會</label>
        </p>
        <p class="line">
            <input type="radio" name="donate" id="donate-do">
            <label for="donate-do">
                <input type="tel" placeholder="請輸入愛心碼" class="input-code">    
            </label>
        </p>
        <div class="actions">
            <a href="javascript:void(0);" class="button gray btn-close">取消</a>
            <a href="javascript:void(0);" class="button red donate-submit">捐贈</a>
        </div>
        <a href="javascript:void(0);" class="icon-close"></a>
    </div>
</div>

<?php //服務條款 lightbox?>
<div class="lightbox-contract hide">
    <div class="block">
        <h1 class="title">服務條款</h1>
        <div class="scroll">
            <h2>感謝貴用戶向 新加坡商優達斯國際有限公司台灣分公司(下稱優達斯)訂購商品，為維護貴用戶的權益，請仔細閱讀下述說明：</h2>
            <ol class="rule">
                <li>當貴用戶使用優達斯官方網站時，即表示貴用戶已閱讀、瞭解並同意接受本購物須知所訂之所有內容。本須知得隨時修訂並公告於優達斯之官方網站上，修訂後之內容自公告時起生效。</li>
                <li>若貴用戶未滿二十歲，貴用戶應於貴用戶的家長（或監護人）閱讀、瞭解並同意本購物須知之所有內容及其後修改變更後，方得使用或繼續使用優達斯之官方網站。當貴用戶使用或繼續使用優達斯時，即推定貴用戶的家長（或監護人）已閱讀、瞭解並同意接受本購物須知之所有內容及其後修改變更。</li>
                <li>當貴用戶使用或繼續使用優達斯之官方網站時，即表示貴用戶同意以電子文件作為意思表示之方法。</li>
                <li>當貴用戶訂購多筆商品並選擇以信用卡或信用卡分期付款時，優達斯將就各筆訂單分別向銀行取得授權，惟可能會因信用卡額度不足或系統因素等問題，導致發生當次訂購之商品無法全部取得銀行授權之情形。有此種情形發生時，優達斯將會就已成功取得授權部分之商品繼續處理貴用戶的訂單，若貴用戶就其他商品仍有需要時，請重新訂購。但若當次訂購享有跨產品優惠、滿額 / 滿件優惠者， 優達斯將視為授權全部失敗，請貴用戶重新選擇付款方式。</li>
                <li>當貴用戶完成商品訂購程序後，優達斯將自動發送電子郵件於貴用戶所留存的電子郵件信箱，通知貴用戶優達斯已經收到貴用戶的訂購需求。</li>
                <li>優達斯將在確認交易條件無誤、付款完成且仍有庫存後，直接通知配合廠商出貨，商品寄出時我們會寄一封出貨通知信給貴用戶。貴用戶可隨時至「查訂單」確認訂單最新資料，並可點選該筆訂單的「訂單明細」確認付款/訂購/出貨資訊等資料。</li>
                <li>為保護貴用戶的權益，在優達斯之配合廠商出貨之前，貴用戶都可以申請取消訂單（但若貴用戶的商品為訂製商品，且已經製作，貴用戶將無法取消訂單）。</li>
                <li>退貨退款事宜
                    <ul>
                        <li>如貴用戶訂購的商品有瑕疵可要求全額退費，且可依消費者保護法第十九條第一項行使權利。</li>
                        <li>退貨退款方式與條件，按照每個商品網頁及訂購流程的相關網頁所記載的內容。</li>
                        <li>退回的商品，應保持所有商品、贈品、附件、包裝、及所有附隨文件或資料在出貨當時狀態的完整性，如果有實體發票，並應連同發票一併退回及簽署折讓單等相關法令所要求之單據；否則，優達斯得拒絕接受您的退貨退款要求。</li>
                        <li>貴用戶瞭解並同意，若因要求退貨或換貨、或因優達斯無法接受您全部或部分之訂單、或契約因故解除或失其效力，而需為您辦理退款事宜時，得代您處理發票或折讓單等相關法令所要求之單據。</li>
                    </ul>
                </li>
                <li>優達斯與貴用戶交易所使用之電腦系統將確保具有符合一般可合理期待之安全性。</li>
                <li>若優達斯依法或依約須對貴用戶負擔賠償或補償責任時，優達斯之賠償或補償責任以有爭議之該筆交易之實收金額為上限，優達斯對於任何因該筆交易所生之其他損害〈包含但不限於間接損失），不負任何補償或賠償責任。</li>
                <li>本購物須知如有疑義時，應為有利於消費者之解釋。</li>
                <li>優達斯上之所有服務說明均為本購物須知之一部分，本須知未規範之事宜，請詳見相關事項及個別商品之網頁說明及其他的服務說明。</li>
                <li>準據法：本購物須知之解釋與適用，以及與本購物須知有關的爭議，均應依照中華民國法律予以處理並以台灣台北地方法院管轄。</li>
                <li>四機回收消費者權益須知：「新購公告指定規格之電視機、洗衣機、電冰箱或冷、暖氣機時，販賣業者應提供同項目、數量、時間及同送達地址之廢四機回收（搬、載運）無償服務。但不包含為搬運、拆卸而動用大型機具、工程或危險施工等。請於交付廢四機時向業者索取回收聯單，憑單參加抽獎活動。消費者本人簽名確認已被口頭告知或知悉上述權益」。</li>
            </ol>
        </div>
        <div class="actions">
            <a href="javascript: void(0);" class="button gray btn-close">取消</a>
            <a href="finish.php" class="button red contract-submit">同意</a>
        </div>
        <a href="#" class="icon-close"></a>
    </div>
</div>

<?php //查看分期付款 lightbox?>
<div class="lightbox-installment hide">
    <div class="block">
        <h1 class="title">接受18家銀行線上分期付款</h1>
        <p>匯豐、 上海、大眾、 聯邦、遠東、 渣打、第一、 華南、元大、 台灣永旺、華泰、 三信商銀臺企、 安泰、土銀、 合庫、萬泰、 日盛</p>
        <div class="actions">
            <a href="#" class="button gray btn-close">關閉</a>
        </div>
        <a href="#" class="icon-close"></a>
    </div>
</div>

<?php //超商取貨 lightbox?>
<div class="lightbox-eleven hide">
    <div class="block">
        <h1 class="title">超商取貨</h1>
        <h2>您選擇超商取貨付款，不受到貨時間規則限制，預計會在後天送達超商門市</h2>
        <div class="actions">
            <a href="#" class="button red btn-submit">確認</a>
        </div>
        <a href="#" class="icon-close"></a>
    </div>
</div>

<? //聯絡客服 lightbox?>
<div class="lightbox-contact hide">
    <div class="block">
        <h1 class="title">聯絡ASAP客服</h1>
        <h2>（客服上班時間：每日上午09:00～下午18:00）</h2>
        <input type="email" placeholder="您的電子郵件信箱" value="test@uitox.com">
        <textarea name="Text1" rows="5" placeholder="請描述您的問題"></textarea>
        <div class="actions">
            <a href="javascript:void(0);" class="button gray btn-close">取消</a>
            <a href="javascript:void(0);" class="button red contact-submit">送出</a>
        </div>
        <a href="javascript:void(0);" class="icon-close"></a>
    </div>
</div>

<?php //填寫銀行帳戶?>
<div class="lightbox-bank hide">
    <div class="block">
        <h1 class="title">填寫銀行帳戶</h1>
        <select class="bank-account">
            <option selected disabled>選擇銀行</option>
            <option value="">中國信託銀行</option>
            <option value="">中華郵政</option>
            <option value="">國泰世華銀行</option>
        </select>
        <input type="text" class="name" placeholder="戶名">
        <input type="tel" class="account" placeholder="帳號">
        <div class="actions">
            <a href="#" class="button gray btn-close">取消</a>
            <a href="#" class="button red bank-submit">送出</a>
        </div>
        <a href="#" class="icon-close"></a>
    </div>
</div>

<?php //新增收貨資訊?>
<div class="lightbox-addr hide">
    <div class="block">
        <h1 class="title">新增收貨資訊</h1>
        <input type="text" placeholder="收貨人姓名" class="input-name">
        <input type="tel" placeholder="手機" class="input-phone">
        <input type="tel" placeholder="市話(可不填)" class="input-phone">
        <select name="" id="" class="city-1">
            <option value="">台北市</option>
            <option value="">新北市</option>
            <option value="">台中市</option>
        </select>
        <select name="" id="" class="city-2">
            <option value="">信義區</option>
            <option value="">永和區</option>
            <option value="">中和區</option>
        </select>
        <input type="text" placeholder="地址" class="input-addr">
        <div class="actions">
            <a href="#" class="button gray btn-close">取消</a>
            <a href="#" class="button red btn-submit">新增</a>
        </div>
        <a href="#" class="icon-close"></a>
    </div>
</div>