<div class="credit block">
    <?php //信用卡分期付款?>
    <h1 class="title">請選擇分期 <span class="gray">(除不盡餘數於第一期收取)</span></h1>
    <section class="select-list">
        <input type="radio" id="addr-01" name="selectAddr">
        <label for="addr-01">
            <p>NT$599 x 3期0利率</p>
            <p class="desc">(接受18家銀行線上分期付款)</p>
        </label>
        <a href="javascript: void(0);" class="btn-installment">查看銀行</a>
    </section>
    <section class="select-list">
        <input type="radio" id="addr-02" name="selectAddr">
        <label for="addr-02">
            <p>NT$299 x 6期0利率</p>
            <p class="desc">(接受13家銀行線上分期付款)</p>
        </label>
        <a href="javascript: void(0);" class="btn-installment">查看銀行</a>
    </section>
    <?php //信用卡分期付款 end?>
</div>

<div class="credit block">
    <h1 class="title">信用卡資訊</h1>
    <div class="line">
        <input type="text" class="name" placeholder="持卡人姓名">
    </div>
    <div class="line">
        <input type="tel" class="mobile" placeholder="手機">
        <input type="tel" class="tel" placeholder="市話(可不填)">
    </div>
    <div class="line">信用卡卡號</div>
    <div class="line">
        <select name="type" class="type">
            <option value="10">VISA</option>
            <option value="11">JCB</option>
            <option value="12">MASTER</option>
        </select>
        <input type="tel" class="credit" placeholder="●●●● ●●●● ●●●● ●●●●">
    </div>
    <div class="line">信用卡截止日</div>
    <select name="month" class="month">
        <option selected disabled>月</option>
        <option value="01">01</option>
        <option value="02">02</option>
        <option value="03">03</option>
        <option value="04">04</option>
        <option value="05">05</option>
        <option value="06">06</option>
        <option value="07">07</option>
        <option value="08">08</option>
        <option value="09">09</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
    </select>
    <select name="year" class="year">
        <option selected disabled>年</option>
        <option value="2013">2013</option>
        <option value="2014">2014</option>
        <option value="2015">2015</option>
        <option value="2016">2016</option>
        <option value="2017">2017</option>
        <option value="2018">2018</option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
    </select>
    <input type="tel" class="code" placeholder="背面末三碼">
    <?php //信用卡紅利折抵?>
    <div class="line">
        <input type="checkbox" id="btn-bonus"><label for="btn-bonus" class="red">使用紅利點數折抵刷卡金</label>
    </div>
    <?php //信用卡紅利折抵 end?>
</div>