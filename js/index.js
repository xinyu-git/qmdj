$(function(){
	//页卡
	function tab(a,b,c,d){
		$(a).children(b).on('click',function(){
			$(this).addClass('active').siblings().removeClass('active');
			$(c).children(d).eq($(this).index()).addClass('show').siblings().removeClass('show');
		})
	}
	//tab('.fixed_wrap','a','.main_wrap','.main_public')
	//tab('.inte_btn','a','.integral_wrap','.inte_public')
	//tab('.friBtn_box','a','.fri_box','.fri_part')
	//tab('.ranking_btn','a','.ranking_box','.rank_part')
	//tab('.mes_btn','a','.mes_box','.mes_part')
	//tab('.data_btn','a','.data_box','.data_part')
	//tab('.warC_list','dd','.warC_Info','.warC_piclist')
	//个人中心五个内容点击样式
	$('.per_list').children('li').on('click',function(){
		$(this).addClass('active').siblings().removeClass('active');
	})
	//进度条
	function jfBar(w){
		$('.loader_bar').stop().animate({
			width:w+"%"
		},1000);
	}
	jfBar('50')

	//我的名片编辑页面中下拉
	$.divselect(".cardSel",".sel-ed");
	//index大区选择
	$('.region_box').children('a').on('click',function(){
			$(this).addClass('selected').siblings().removeClass('selected');
	})
	//好友筛选
	$('.selFri').children('a').on('click',function(){
			$(this).addClass('active').siblings().removeClass('active');
	})
	//标签选中
	$('.c_label p span').toggle(function(){
		$(this).addClass('active');
	},function(){
		$(this).removeClass('active');
	})
	//更换战车
	$('.warC_list').children('dd').on('click',function(){
			$(this).addClass('active').siblings().removeClass('active');
	})
	//对战数据-进度条
	//进度条 complete-完成量  total-总共量 bar-进度条
		function progess(scoScale,bar){
			var scoPercent=$(scoScale).html();
			$(bar).stop().animate({
				width:scoPercent
			},1000);
		}
		progess('.sco_scale','.scores_bar');
})
