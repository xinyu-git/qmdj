tips(1)
//进入指引
function tips(num){
	$(".guideBox > div").hide().eq(num-1).show();
	if(num==1){
		var ofTop=$(".ranking").offset().top;
		var domH=$(".ranking").children('a').html();
		var gConH=$(".g_con").height()+ofTop;
		$(".guideBox .guide1").show().find(".g_con").css("top",ofTop).html(domH);
		$(".g_btnBox").css("top",gConH);
	}else if(num==2){
		var ofH=$(".fixed_wrap").height();
		$(".guideBox .guide2").show().find(".g_btnBox2").css('bottom',ofH);
	}else if(num==3){
		window.location.href='map.html'
		var domH=$(".warZone").children('.warZone_s2').html();
		$(".guideBox .guide3").show().find(".g_con3 .warZone_s2").html(domH);
	}
}