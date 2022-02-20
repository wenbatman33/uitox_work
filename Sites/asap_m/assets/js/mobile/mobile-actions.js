(function($){
    //查看分期付款
    lightbox($('.lightbox-installment'), $('.btn-installment'), $('.btn-close'));
    //填寫銀行帳戶
    lightbox($('.lightbox-bank'), $('.btn-bank'), $('.bank-submit'), "輸入完成");
    //索取紙本發票
    lightbox($('.lightbox-pinvoice'), $('.btn-pinvoice'), $('.pinvoice-submit'), "您的發票將會隨貨寄出");
    //填寫統一編號 
    lightbox($('.lightbox-ubn'), $('.btn-ubn'), $('.ubn-submit'), "統編輸入完成，您的發票將隨貨寄出");
    //聯絡客服
    lightbox($('.lightbox-contact'), $('.btn-contact'), $('.contact-submit'), "您的訊息已送出");
    //服務條款
    lightbox($('.lightbox-contract'), $('.btn-submit'), $('.contract-submit'));
    //捐發票
    lightbox($('.lightbox-INV-donate'), $('#invoice-do'), $('.donate-submit'), "您的發票將隨貨寄出");
    //修改通訊錄
    function lightbox(root, open, submit, message){
        var node = {};
        node.BtnOpen = open;
        node.BtnOpen.temp;
        node.root = root;
        node.BtnSubmit = submit;
        node.BtnClose = node.root.find('.icon-close, .btn-close');
        node.Input = node.root.find('.input-code');
        observe();
        function observe(){
            node.BtnClose.on('click', function(){
                node.root.fadeOut();
            });            
            node.BtnSubmit.on('click', function(){                
                if(!message){
                    node.root.fadeOut();
                }else{
                    alert(message);
                    node.root.fadeOut();    
                }
            });
            node.BtnOpen.on('click', function(){
                node.root.fadeIn();
                node.BtnOpen.temp = $(this);
            });
            //發票
            node.Input.focus(function(){
               $(this).closest('.line').find('#donate-do').prop('checked', true);
            });
        }
    }

    lightboxProdAttr();
    //lightboxAddr(); 商品顏色尺寸; 預訂商品顏色尺寸
    function lightboxProdAttr(){
        var node = {};
        prepare();
        observe();
        function prepare(){
            node.root = $('.lightbox-prod-attr');            
            nodeBtnAdd = $('.add-cart');
            nodeBtnPre = $('.pre-order');
            node.BtnSubmit = $('.btn-cart');
            nodeClose = node.root.find('.icon-close');
        }
        function observe(){
            nodeClose.on('click', function(){
                node.root.fadeOut();
            });          
            node.BtnSubmit.on('click', function(){
                //index add cart actions                
                if($('.attr li').hasClass('selected')){
                    node.root.fadeOut();    
                    $('.msg').addClass('hide');
                    node.BtnOpen.temp.addClass('selected');
                }else{
                    $('.msg').removeClass('hide');
                    return false;
                }                             
                //index end                  
            });            
            nodeBtnAdd.on('click', function(){
                node.root.fadeIn();
                node.root.find('.button').removeClass('orange');
                node.root.find('.button').html('加入購物車');
            });
            nodeBtnPre.on('click', function(){
                node.root.find('.button').addClass('orange');
                node.root.find('.button').html('立即預訂');
                node.root.fadeIn();
            });            
        }
    }

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
                node.root.find('.btn-submit').html('儲存');
                node.root.find('.btn-close').html('取消');
                node.root.fadeIn();
            });
            // for demo template
            nodeBtnEdit.on('click', function(){
                node.root.find('h1').html('修改收貨資訊');
                node.root.find('.input-name').val('王曉明');
                node.root.find('.input-phone').val('0921940845');
                node.root.find('.input-addr').val('110台北市信義區忠***路四段565號8樓');
                node.root.find('.btn-submit').html('儲存');
                node.root.find('.btn-close').html('刪除');
                node.root.fadeIn();
            });
        }
    }
})(jQuery);