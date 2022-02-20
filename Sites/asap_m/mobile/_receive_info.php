<div class="receive block">
    <?php //第一次填寫?>
    <h1 class="title">收貨人資訊</h1>
    <form action="">
    <input type="text" class="name" placeholder="收貨人姓名">
    <input type="tel" class="tel" placeholder="手機">
    <input type="tel" class="tel" placeholder="市話(可不填)">
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
    <input type="text" class="address" placeholder="地址">
    <?php //第一次填寫 end?>

    <?php //第二次以上填寫?>
    <!-- <h1 class="title">請選擇收貨地址</h1>
    <section class="select-list">
        <input type="radio" id="addr-01" name="selectAddr">
        <label for="addr-01">
            <span class="icon-person-s">王曉明</span>
            <span class="icon-phone-s">0921940845</span>
            <p class="addr">110台北市信義區忠***路四段565號8樓</p>
        </label>
        <a href="javascript: void(0);" class="icon-edit"></a>
    </section>
    <section class="select-list">
        <input type="radio" id="addr-02" name="selectAddr">
        <label for="addr-02">
            <span class="icon-person-s">王曉明</span>
            <span class="icon-phone-s">0921940845</span>
            <p class="addr">110台北市信義區忠***路四段565號8樓</p>
        </label>
        <a href="javascript: void(0);" class="icon-edit"></a>
    </section>
    <section class="select-list">
        <input type="radio" id="addr-03" name="selectAddr">
        <label for="addr-03">
            <span class="icon-person-s">王曉明</span>
            <span class="icon-phone-s">0921940845</span>
            <p class="addr">110台北市信義區忠***路四段565號8樓</p>
        </label>
        <a href="javascript: void(0);" class="icon-edit"></a>
    </section>
    <a href="#" class="select-list btn-add">新增其他收貨地址</a>-->
    <?php //第二次以上填寫 end?>

    <div class="line">
        <input type="checkbox" id="btn-vat"><label for="btn-vat">發票需打統編請按此</label>
    </div>
    <input type="tel" class="input-vat hide" placeholder="統一編號">
    <div class="actions">
        <a href="javascript: void(0);" class="button red large btn-submit">確定送出</a>
    </div>
    </form>
</div>