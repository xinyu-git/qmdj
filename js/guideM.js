tips(3)
//进入指引
function tips(num){
	$(".guideBox > div").hide().eq(num-1).show();
	if(num==3){
		var domH=$(".warZone").children('.warZone_s2').html();
		$(".guideBox .guide3").show().find(".g_con3 .warZone_s2").html(domH);
	}
}
//关闭指引
function closeTips(){
	$(".guideOpa,.guideBox").remove();
	//setTipsCookies("isFirstTips","isFirstTips");
}