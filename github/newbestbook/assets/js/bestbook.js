$(function() {
	$('#moreBooksEdit').click(function() {
		$(".hideBg").show();
		$(this).hide();
	});


	/////_booksPreviewer
	$( "#Previewer__selector li" ).click(function() {
	  var index = $( "#Previewer__selector li" ).index( this );
	  $( "#Previewer__simulator li" ).siblings().addClass("is-hide").eq(index).removeClass("is-hide")
	  $( "#Previewer__selector li" ).siblings().removeClass("active").eq(index).addClass("active");
	});

	///////
	$( ".notices_btu" ).click(function() {
		$( ".notice_rec" ).toggle();
		$( ".logMenu" ).hide();
	});
	$( ".userlogged" ).click(function() {
		$( ".logMenu" ).toggle();
		$( ".notice_rec" ).hide();
	});


	$('.triggerBttn').on('click', function(){
		if( $('.SelectList-inner').hasClass('is-visible') ) {
			$('body').css({overflow: 'auto'});
			$('.SelectList-inner').removeClass('is-visible');
		} else {
			$('body').css({overflow: 'hidden'});
			$('.SelectList-inner').addClass('is-visible');
		}
	});
	/////
	$('.confirmBlock .cancel').on('click', function(){
		$('body').css({overflow: 'auto'});
		$('.SelectList-inner').removeClass('is-visible');
	});
	$('.confirmBlock .send').on('click', function(){
		$('body').css({overflow: 'auto'});
		$('.SelectList-inner').removeClass('is-visible');
	});
	///////
	$('.category_1').on('click', function(){
		$(this).parent().parent().siblings('ul').removeClass('panel-hide');
	});

	$('.category_2').on('click', function(){
		$(this).parent().siblings('ul').removeClass('panel-hide');
	});
	/////
	///
	$('.export').on('click', function(){
		if( $('.MODAL').hasClass('is-visible') ) {
			$('body').css({overflow: 'auto'});
			$('.MODAL').removeClass('is-visible');
		} else {
			$('body').css({overflow: 'hidden'});
			$('.MODAL').addClass('is-visible');
		}
	});
	$('.MODAL .cancel').on('click', function(){
		$('body').css({overflow: 'auto'});
		$('.MODAL').removeClass('is-visible');
	});

	$('.delete').on('click', function(){
		if( $('.Dialog').hasClass('is-visible') ) {
			$('body').css({overflow: 'auto'});
			$('.Dialog').removeClass('is-visible');
		} else {
			$('body').css({overflow: 'hidden'});
			$('.Dialog').addClass('is-visible');
		}
	});
	$('.Dialog .cancel, .Dialog .send,.Dialog .icon_14_close').on('click', function(){
		$('body').css({overflow: 'auto'});
		$('.Dialog').removeClass('is-visible');
	});
	
	$('.youtubemMov').on('click', function(){
		if( $('.movMODAL').hasClass('is-visible') ) {
			$('body').css({overflow: 'auto'});
			$('.movMODAL').removeClass('is-visible');
		} else {
			$('body').css({overflow: 'hidden'});
			$('.movMODAL').addClass('is-visible');
			//$('.movMODAL .inner .innerMOV').html("<iframe class='YTplayer' id='innerMOV' src='https://www.youtube.com/embed/2ips2mM7Zqw?autoplay=1&hd=1&vq=hd720' frameborder='0' allowfullscreen></iframe>");
			setMov();
		}
	});

	$('.movMODAL .icon_14_close ,.movMODAL').on('click', function(){
		$('body').css({overflow: 'auto'});
		$('.movMODAL').removeClass('is-visible');
		//$('.movMODAL .inner .innerMOV').html('');
		deleteMov();
	});
	var player;
	function deleteMov() {
		//player.stopVideo();
		player.destroy();
	}
	function setMov() {
	  player = new YT.Player('innerMOV', {
	  	videoId: 'ggWNnVdxNms',
	  	playerVars: { 'autoplay': 1},
	    events: {
	      'onStateChange': onPlayerStateChange,
	      'onReady': onPlayerReady,
	    }
	  });
	}
	function onPlayerStateChange(event) {
	  if(event.data ==0){
	    //alert('Video Ended;')
	  }
	}
	function onPlayerReady(event) {
	  event.target.setPlaybackQuality('hd720');
	}
	///////
	$('.openPublishContract').on('click', function(){
		if( $('.scrollDialog').hasClass('is-visible') ) {
			$('body').css({overflow: 'auto'});
			$('.scrollDialog').removeClass('is-visible');
		} else {
			$('body').css({overflow: 'hidden'});
			$('.scrollDialog').addClass('is-visible');
		}
	});
	$('.scrollDialog .cancel, .scrollDialog .send,.scrollDialog .icon_14_close').on('click', function(){
		$('body').css({overflow: 'auto'});
		$('.scrollDialog').removeClass('is-visible');
	});
	///////
	$('.showGallery').on('click', function(){
		$('.coverGallery').removeClass('is-hide');
		$('.coverOption').addClass('is-hide');
	});
	$('.resetcoverOption').on('click', function(){
		$('.coverGallery').addClass('is-hide');
		$('.coverOption').removeClass('is-hide');
	});

	////accountSetting
	$('.accountDataBtn').on('click', function(){
		$('.accountSetting_1').hide();
		$('.accountSetting_2').show();
		$('.accountSetting_3').hide();
	});
	$('.gototep_2').on('click', function(){
		$('.accountSetting_1').hide();
		$('.accountSetting_2').show();
	})
	$('.backStep_1').on('click', function(){
		$('.accountSetting_1').show();
		$('.accountSetting_2').hide();
	});
	/////
	///
	var tempNum1=1;
	var tempNum2=1;
	$('input[name="radio1"]').change(function(e) { // Select the radio input group
		tempNum1= $(this).val();
		radioChecking(tempNum1,tempNum2);
	});
	$('input[name="radio2"]').change(function(e) { // Select the radio input group
		tempNum2= $(this).val();
		radioChecking(tempNum1,tempNum2);
	});
	function radioChecking(A,B) {
		if(A =="1"){
			$('.accountTips_1').hide();
			$('.accountTips_2').hide();
		}else if(A =="2"){
			$('.occ1').hide();
			$('.occ1-2').hide();
			$('.occ2').show();
			 if(B != "1"){
			 	$('.accountTips_1').show();
			 	$('.accountTips_2').hide();
			 }else{
				$('.accountTips_1').hide();
				$('.accountTips_2').show();
			 }
		}else if(A == "1" && B == "1"  ){
			$('.occ1').show();
			$('.occ1-2').hide();
			$('.occ2').hide();
		}else{
			$('.occ1').hide();
			$('.occ1-2').show();
			$('.occ2').hide();
		}
	}

	////////////// powerTips 套件 //////////////
	// 關於售價
	$('#tips_aboutPrice').data('powertipjq', $([
		'<h4 class="cololr_black">關於售價</h4>',
		'<p>您可再次修改您的售價與幣別，</br>資料更新時間依各平台作業時間為準</p>'
	].join('\n')));
	$('#tips_aboutPrice').powerTip({
		placement: 'n',
		mouseOnToPopup: true,
		smartPlacement: true
	});
	//google上架規則
	$('#tips_googleRules').data('powertipjq', $([
		'<h4 class="cololr_black">Google Play 上架規則</h4>',
		'<p>・銷售地區為全世界</p>',
		'<p>・銷售地區為全世界</p>',
		'<p>・書籍異動於24小時內更新</p>',
		'<p>・Google Play有權調整售價。</br>　您的銷售收入以您在雲書bestbook建議售價為計算基準</p>',
		'<p>・試讀範圍為全書的20%</p>',
		'<p>・消費者可於七天內退書、退款</p>',
		'<p>・限制級書籍不提供預覽，自訂售價需≧1美元</p>'
	].join('\n')));
	$('#tips_googleRules').powerTip({
		placement: 'n',
		mouseOnToPopup: true,
		smartPlacement: true
	});
	//ibooks上架規則
	$('#tips_ibooksRules').data('powertipjq', $([
		'<h4 class="cololr_black">iBooks 上架規則</h4>',
		'<p>・上架至全部iBooks Store(範圍見下方說明)</p>',
		'<p>・95%書籍異動於24小時內更新</p>',
		'<p>・iBooks有權調整售價。</br>　您的銷售收入以iBooks 顯示售價為計算基準</p>',
		'<p>・試讀範圍為全書的10%</p>',
		'<p>・消費者可於七天內退書、退款</p>',
		'<hr>',
		'<h5 class="cololr_black">iBooks Store 目前在51 個地區供應書籍</h5>',
		'<p>阿根廷、澳洲、奧地利、比利時、玻利維亞、巴西、</p>',
		'<p>保加利亞、加拿大、智利、哥倫比亞、哥斯大黎加、</p>',
		'<p>塞浦路斯、捷克、丹麥、多明尼加共和國、厄瓜多、</p>',
		'<p>薩爾瓦多、愛沙尼亞、芬蘭、法國、德國、希臘、</p>',
		'<p>瓜地馬拉、宏都拉斯、匈牙利、愛爾蘭、義大利、</p>',
		'<p>日本、拉脫維亞、立陶宛、盧森堡、馬爾他、墨西哥、</p>',
		'<p>荷蘭、紐西蘭、尼加拉瓜、挪威、巴拿馬、巴拉圭、</p>',
		'<p>秘魯、波蘭、葡萄牙、羅馬尼亞、斯洛伐克、</p>',
		'<p>斯洛維尼亞、西班牙、瑞典、瑞士、英國、美國、</p>',
		'<p>委內瑞拉。</p>',
	].join('\n')));
	$('#tips_ibooksRules').powerTip({
		placement: 'n',
		mouseOnToPopup: true,
		smartPlacement: true
	});
		//51 個地區供應書籍
	$('#whereBuy').data('powertipjq', $([
		'<h4 class="cololr_black">iBooks Store 目前在51 個地區供應書籍</h4>',
		'<p>阿根廷、澳洲、奧地利、比利時、玻利維亞、巴西、</p>',
		'<p>保加利亞、加拿大、智利、哥倫比亞、哥斯大黎加、</p>',
		'<p>塞浦路斯、捷克、丹麥、多明尼加共和國、厄瓜多、</p>',
		'<p>薩爾瓦多、愛沙尼亞、芬蘭、法國、德國、希臘、</p>',
		'<p>瓜地馬拉、宏都拉斯、匈牙利、愛爾蘭、義大利、</p>',
		'<p>日本、拉脫維亞、立陶宛、盧森堡、馬爾他、墨西哥、</p>',
		'<p>荷蘭、紐西蘭、尼加拉瓜、挪威、巴拿馬、巴拉圭、</p>',
		'<p>秘魯、波蘭、葡萄牙、羅馬尼亞、斯洛伐克、</p>',
		'<p>斯洛維尼亞、西班牙、瑞典、瑞士、英國、美國、</p>',
		'<p>委內瑞拉。</p>',
	].join('\n')));
	$('#whereBuy').powerTip({
		placement: 's',
		mouseOnToPopup: true,
		smartPlacement: true
	});
});

