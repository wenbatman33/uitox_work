<?php 
include "__data.php";
$h1_title = "通訊錄";
?>
<!doctype html>
<html lang="zh-CN">
<head>
	<meta charset="UTF-8">
    <meta http-equiv="Content-Language" content="zh-CN">
	<title><?php echo $h1_title;?></title>
	<link rel="shortcut icon" href="../assets/img/favicon.ico" />
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<!--[if lt IE 9]>
    <script src="../js/3rd-party/html5shiv.js"></script>
    <![endif]-->
	<link rel="stylesheet" type="text/css" href="../assets/css/mobile/frame/frame.css">
	<link rel="stylesheet" type="text/css" href="../assets/css/mobile/shop/address_select.css">
</head>
<body>
	<?php include "_header_uitox.php";?>
    <article class="block layout">
        <h1 class="title">請選擇收貨地址</h1>
        <section class="addr-list">
            <input type="radio" id="addr-01" name="selectAddr">
            <label for="addr-01">
                <span class="icon-person-s">王曉明</span>
                <span class="icon-phone-s">0921940845</span>
                <p class="addr">110台北市信義區忠***路四段565號8樓</p>
            </label>
            <a href="javascript: void(0);" class="icon-edit"></a>
        </section>
        <section class="addr-list">
            <input type="radio" id="addr-02" name="selectAddr">
            <label for="addr-02">
                <span class="icon-person-s">王曉明</span>
                <span class="icon-phone-s">0921940845</span>
                <p class="addr">110台北市信義區忠***路四段565號8樓</p>
            </label>
            <a href="javascript: void(0);" class="icon-edit"></a>
        </section>
        <section class="addr-list">
            <input type="radio" id="addr-03" name="selectAddr">
            <label for="addr-03">
                <span class="icon-person-s">王曉明</span>
                <span class="icon-phone-s">0921940845</span>
                <p class="addr">110台北市信義區忠***路四段565號8樓</p>
            </label>
            <a href="javascript: void(0);" class="icon-edit"></a>
        </section>
        <section class="btn-area">
            <a href="#" class="button gray large btn-add">新增其他收貨地址</a>            
        </section>
        <section class="btn-area">
            <a href="finish.php" class="button red large btn-submit">確定送出</a>
        </section>
    </article>
    <?php //新增修改收貨人資訊 lightbox
        include "_lightbox_addr.php";
    ?>
	<?php include "_footer.php";?>
	<script src="../assets/js/jquery/jquery-1.10.2.min.js"></script>
    <script>
    (function($){
        lightboxAddr();
        function lightboxAddr(){
            var node = {};
            node.root = $('.lightbox-addr');
            nodeBtn = node.root.find('.button');
            nodeBtnAdd = $('.btn-add');
            nodeBtnEdit = $('.icon-edit');
            nodeClose = node.root.find('.icon-close');
            observe();
            function observe(){
                nodeClose.on('click', function(){
                    node.root.fadeOut();
                });
                nodeBtn.on('click', function(){
                    node.root.fadeOut();
                });
                // for demo template
                nodeBtnAdd.on('click', function(){
                    node.root.find('h1').html('新增收貨資訊');
                    node.root.find('.input-name').val('');
                    node.root.find('.input-phone').val('');
                    node.root.find('.input-addr').val('');
                    node.root.find('.button.purple').html('儲存');
                    node.root.find('.button.gray').html('取消');
                    node.root.fadeIn();
                });
                // for demo template
                nodeBtnEdit.on('click', function(){
                    node.root.find('h1').html('修改收貨資訊');
                    node.root.find('.input-name').val('王曉明');
                    node.root.find('.input-phone').val('0921940845');
                    node.root.find('.input-addr').val('110台北市信義區忠***路四段565號8樓');
                    node.root.find('.button.purple').html('修改');
                    node.root.find('.button.gray').html('刪除');
                    node.root.fadeIn();
                });
            }
        }
        $('input:radio[name="vat"]').on('change' ,function(){
            if ($("#vat-business").is(':checked')) {
                $('.input-vat').removeClass('hide').focus();
            }else{
                $('.input-vat').addClass('hide');
            }
        });
    })(jQuery);
    </script>
</body>
</html>