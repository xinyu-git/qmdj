/*wlo:Cflower*/
var dialog; if(!dialog) dialog={};
dialog={
	//关闭
	closeDiv:function(){
		$("#alertInfo").stop(true,true).animate({
			"top":"-100%",
			"opacity":"0"
		},"fast",function(){
			$("#maskLayer,#alertInfo").remove().hide();
			$('.wrap').removeClass('row');
		});
	},
	//
	maskLayer:function(){
		$("#maskLayer,#alertInfo").remove();
		var maskLayer="<div id='maskLayer'></div>";
		var alertInfo="<div id='alertInfo'><span class='close'>关闭</span></div>";
		$("body").append(maskLayer,alertInfo);
		$("#maskLayer").height($(document).height()).show();
	},
	//显示提示信息框
	showInfo:function(alertHtml){
		dialog.maskLayer();
		var _winH=$(window).height();             //﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣┐
		var _scrollTop=$(document).scrollTop();   //　　　　　　　　　　　├→
		$("#alertInfo").append(alertHtml).show(); //﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣┘
		var _thisDomWidth=$("#alertInfo").outerWidth();
		var _thisDomHeight=$("#alertInfo").outerHeight();
		var topD=parseInt(_scrollTop+(_winH-_thisDomHeight)/2);
		var mL=parseInt(_thisDomWidth/2);
		if(_thisDomHeight>=_winH){
			topD=_scrollTop;
			if(_scrollTop+_thisDomHeight>=$(document).height()){
				topD=$(document).height()-_thisDomHeight;
			}
		};
		$("#alertInfo").css({
			"margin-left":"-"+mL+"px",
			"top":topD+"px",
			"margin-left":"-"+mL+"px",
			"opacity":"1"
		});
		//console.log("点击弹层时窗口的高度："+_winH);
	},
	//改变窗口大小时改变弹出层的位置
	alertInfoPo:function(){
		var _winHResize=$(window).height();
		var _scrollTopResize=$(document).scrollTop();
		var _thisDomWidthResize=$("#alertInfo").outerWidth();
		var _thisDomHeightResize=$("#alertInfo").outerHeight();
		var topResize=parseInt(_scrollTopResize+(_winHResize-_thisDomHeightResize)/2);
		if(_thisDomHeightResize>=_winHResize){
			topResize=_scrollTopResize;
			if(_scrollTopResize+_thisDomHeightResize>=$(document).height()){
				topResize=$(document).height()-_thisDomHeightResize;
			}
		};
		if(topResize>=$("body").height()-_thisDomHeightResize){
			_scrollTopResize=$("body").height()-_thisDomHeightResize;
			topResize=_scrollTopResize-(_winHResize-_thisDomHeightResize)/2;
		}
		$("html,body").css({scrollTop:_scrollTopResize});
		$("#alertInfo").css({
			"top":topResize+"px",
			"margin-left":"-"+(_thisDomWidthResize/2)+"px"
		})
		//console.log("改变大小时窗口的高度："+_winHResize);
		$("#maskLayer").height($("body").height());
	},
	//提示弹层
	alertMsg:function(msgTitle,msg,func,flag){//msgTitle：提示标题,msg：提示内容,func：为“确定”按钮动作处理函数,flag：双按钮标识，”d“为双按钮（”确定“和”取消“,“取消”时的按钮动作是关闭窗口），”s“为单按钮（只有”确定“）
		var btn="<div class='infoBtn'><a class='click-btn' href='javascript:"+func+";'>确 定</a></div>";
		if(flag=="d") btn="<div class='infoBtn dd'><a class='click-btn' href='javascript:"+func+";'>确 定</a><a class='click-btn c' href='javascript:dialog.closeDiv();'>取 消</a></div>";
		dialog.showInfo("<div class='tsInfo'>"
			+" <h4><span>"+msgTitle+"</span></h4>"
			+" <div class='p'>"+msg+"</div>"
			+btn+"</div>");
	},
	//登录弹层
	alertLog:function(logTitle,func){//func：为“登录”按钮动作处理函数
		dialog.showInfo("<div class='logInfo'>"
			+" <h4><span>"+logTitle+"</span></h4>"
			+" <ul class='logUl clearfloat'>"
			+"  <li><label for='zH'>账　号：</label><input type='text'  id='username' value=''></li>"
			+"  <li><label for='mM'>密　码：</label><input type='password'  id='password' value=''></li>"
			+"  <li><label for=''>大　区：</label><div class='selBox'>"
			+"   <i>请选择大区</i><em><b></b></em>"
			+"   <div class='selC'>"
			+"    <a href='javascript:;' value=''>请选择大区</a>"
			+"    <a href='javascript:;' value='150000'>电信南方区</a>"
			+"    <a href='javascript:;' value='150001'>联通北方区</a>"
			+"   </div><input type='hidden' class='sel-ed' id='dQ' validate='true' value='' msg='请选择大区'>"
			+"  </div></li>"
			+"  <li class='yzM'><label for='yzM'>验证码：</label><input type='text' class='vcode' id='vcode_txt' maxlength='4' value=''><img class='verifyImg' id='vcode_img' onclick='javascript:changeImg();'></li>"
			+"  <li class='tsli' id='logTs'>账号密码错误</li>"
			+" </ul>"
			+" <div class='infoBtn'><a class='click-btn' href='javascript:;' onclick='login();'>登 录</a></div>"
			+"</div>");
		$.divselect(".selBox",".sel-ed");
	},
	//未登录
	alertLogTwo:function(func,func1){
		dialog.showInfo("<div class='tsInfo'>"
			+"<div class='login'>您还未登录,请先 <a href='javascript:"+func+";'>登录</a></div>"
			+"<div class='infoBtn'><a class='click-btn' href='javascript:"+func1+";'>确 定</a></div>"
			+"</div>");
	},
	//个人动态
	alertPerDt:function(){
		dialog.showInfo("<div class='userInfo'>"
				+" <h4><span>个人动态</span></h4>"
				+" <table>"
				+"  <tr>"
				+"   <th class='w1'>时间</th>"
				+"   <th>奖励</th>"
				+"   <th>任务</th>"
				+"  </tr>"
				+" </table>"
				+" <div class='etable mCustomScrollbar _mCS_1' >"
				+" <table>"
				+"  <tr>"
				+"   <td>2016-08-02 10:00</td>"
				+"   <td>XXX</td>"
				+"   <td>XXX</td>"
				+"  </tr>"
				+"  <tr>"
				+"   <td>2016-08-02 10:00</td>"
				+"   <td>XXX</td>"
				+"   <td>XXX</td>"
				+"  </tr>"
				+"  <tr>"
				+"   <td>2016-08-02 10:00</td>"
				+"   <td>XXX</td>"
				+"   <td>XXX</td>"
				+"  </tr>"
				+"  <tr>"
				+"   <td>2016-08-02 10:00</td>"
				+"   <td>XXX</td>"
				+"   <td>XXX</td>"
				+"  </tr>"
				+"  <tr>"
				+"   <td>2016-08-02 10:00</td>"
				+"   <td>XXX</td>"
				+"   <td>XXX</td>"
				+"  </tr>"
				+"  <tr>"
				+"   <td>2016-08-02 10:00</td>"
				+"   <td>XXX</td>"
				+"   <td>XXX</td>"
				+"  </tr>"
				+"  <tr>"
				+"   <td>2016-08-02 10:00</td>"
				+"   <td>XXX</td>"
				+"   <td>XXX</td>"
				+"  </tr>"
				+" </table>"
				+" </div>"
				+"</div>")
				 $(".etable").mCustomScrollbar();
	},
	//二次确认
	alertConfirm:function(msg,func,flag){
		//msgTitle：提示标题,msg：提示内容,func：为“确定”按钮动作处理函数,flag：双按钮标识，”d“为双按钮（”确定“和”点券充值“,“点券充值”跳转到新页面），”s“为单按钮（只有”确定“）
		var btn="<div class='pasBtn'><a class='' href='javascript:"+func+";'>确 定</a></div>";
		if(flag=="d") btn="<div class='pasBtn'><a class='confir' href='javascript:"+func+";'>确 定</a><a href='https://passport.kongzhong.com/billing/pay/payment_bank'  target='_blank' class='recharge'>点券充值</a></div>";
		dialog.showInfo("<div class='passInfo'>"
			+"<div class='close'></div>"
			+"<p>"+msg+"</p>"
			+btn
			+"</div>");
	},
	//退出、排位弹窗
	alertRank:function(msgTitle,msg,msg_left,msg_right,func,flag){//msgTitle：提示标题,msg：提示内容,func：为“确定”按钮动作处理函数,flag：双按钮标识，”d“为双按钮（”确定“和”取消“,“取消”时的按钮动作是关闭窗口），”s“为单按钮（只有”确定“）msg_left：左侧按钮的文字，msg_right：右侧按钮的文字
		var btn="<div class='infoBtn'><a class='click-btn' href='javascript:"+func+";'>确 定</a></div>";
		if(flag=="d") btn="<div class='infoBtn infoBtn1'><a class='click-btn left' href='javascript:dialog.closeDiv();'>"+msg_left+"</a><a class='click-btn' href='javascript:"+func+";'>"+msg_right+"</a></div>";
		dialog.showInfo("<div class='tsInfo1'>"
			+" <h2>"+msgTitle+"</h2>"
			+" <div class='ts_con'>"+msg+"</div>"
			+btn+"</div>");
	},
	//个人军衔积分帮助弹窗
	alertInte:function(){
		dialog.showInfo("<div class='taskInfo'>"
			+"<span class='close'></span>"
			+"<p>星获得规则</p>"
			+"<p>1.、每获胜一场获得1颗星，输一场减一颗星。</p>"
			+"<p>2.、在游戏内打出特殊战绩给2颗星（如单场击杀3辆或更高）</p>"
			+"<p>3.、完成每日任务积累积分至100分直接获得1颗星</p>"
			+"<br />"
			+"<p>军衔升降规则：</p>"
			+"<p>1、初始军衔为士兵，士兵进阶需获得5颗星后自动进阶为士官，以此类推</p>"
			+"<p>2、当军衔升到最高级时只累计星，并显示为：如将军x99颗星</p>"
			+"<br />"
			+"<p>二、积分获得方式</p>"
			+"<p>1、完成每日任务获得相应积分。 </p>"
			+"<p>2、好友互赠获得积分（每人每日只可赠送5积分）</p>"
			+"</div>");
	},
	//常用车辆弹窗
	alertCar:function(){
		dialog.showInfo("<div class='taskInfo'>"
			+"<span class='close'></span>"
			+"<p>战车数据规则：</p>"
			+"<p>1、只限10级车</p>"
			+"<p>2、只可在开启排位赛后记录并显示参与排位赛的车辆数据</p>"
			+"<br />"
			+"</div>");
	},
	//设置战区
	alertWarZone:function(msg,func,flag){//msgTitle：提示标题,msg：提示内容,func：为“确定”按钮动作处理函数,flag：双按钮标识，”d“为双按钮（”确定“和”取消“,“取消”时的按钮动作是关闭窗口），”s“为单按钮（只有”确定“）
		var btn="<div class='infoBtn'><a class='click-btn' href='javascript:"+func+";'>确 定</a></div>";
		if(flag=="d") btn="<div class='infoBtn infoBtn1'><a class='click-btn left' href='javascript:dialog.closeDiv();'>暂不使用</a><a class='click-btn' href='javascript:"+func+";'>使用该位置</a></div>";
		dialog.showInfo("<div class='tsInfo1 WarZone'>"
			+" <h2>设置我的战区</h2>"
			+" <div class='ts_con'>"
			+"<p>获取当前的位置</p>"
			+"<p class='warArea'>"+msg+"</p>"
			+"<p>是否将此设置为本周的战区？</p>"
			+"</div>"
			+btn+"</div>");
	},
	//提示弹层
	alertFriTips:function(msg){//,msg：提示内容
		dialog.showInfo("<div class='tsInfo2'>"
			+" <div class='p'>"+msg+"</div>"
			+"</div>");
	},
	// 聊天弹窗
	alertChatWrap:function(){
		dialog.showInfo("<div class='chat_Wrap'>"
			+"<span class='close'></span>"
			+"<div class='chat_bottom'>"
				+"<textarea class='chat_area'></textarea>"
				+"<input type='button' value='发送' class='chat_send'>"
			+"</div>"
			+"</div>");
	},
	//添加好友弹窗
	alertAddFri:function(func,flag){//msgTitle：提示标题,msg：提示内容,func：为“确定”按钮动作处理函数,flag：双按钮标识，”d“为双按钮（”确定“和”取消“,“取消”时的按钮动作是关闭窗口），”s“为单按钮（只有”确定“）msg_left：左侧按钮的文字，msg_right：右侧按钮的文字
		var btn="<div class='infoBtn'><a class='click-btn' href='javascript:"+func+";'>保存</a></div>";
		if(flag=="d") btn="<div class='infoBtn infoBtn1'><a class='click-btn left' href='javascript:dialog.closeDiv();'>取消</a><a class='click-btn' href='javascript:"+func+";'>保存</a></div>";
		dialog.showInfo("<div class='tsInfo1 tsFri'>"
			+"<span class='close'></span>"
			+"<div class='tsFri_con'>"
			+" <h2>是否申请添加该用户为好友?</h2>"
			+"<textarea placeholder='请对您要添加的好友说几句话吧'></textarea>"
			+"</div>"
			+btn+"</div>");
	},
	//战车排位规则
	alertCarRule:function(){
		dialog.showInfo("<div class='taskInfo'>"
			+"<span class='close'></span>"
			+"<p>战车排位规则：</p>"
			+"<p>1、周战车排名规则根据各“战区”的地理位置，分为全国、省、市区3级排行榜，且每级排行榜只排序各级的前100位</p>"
			+"<p>2、三级的排行榜是基于省级行政区域/市级行政区域/县&区级行政区域划分。</p>"
			+"<p>3、每级排行榜经过一周的比拼于每周日“24”点，产出下一周可以显示的“称号”</p>"
			+"<p>4、计算规则：</p>"
			+"<p>单车战斗次数在>=50场开始计算排名：<br />战车排行榜由高到低进行排名。<br />战车排行榜=一周胜场数+一周胜率 *10000 </p>"
			+"<p>例：一周胜场数=100，一周胜率=30%，<br />个人排行榜=100+0.3*10000=3100</p>"
			+"<p>胜场不足50的玩家：<br />使用胜场数从高到低进行排名，且始终排在胜场数>=50的玩家后面。</p>"
			+"<p>5、排行榜每周重置。</p>"
			+"</div>");
	},
	//个人排位规则
	alertPerRule:function(){
		dialog.showInfo("<div class='taskInfo'>"
			+"<span class='close'></span>"
			+"<p>个人排位规则：</p>"
			+"<p>1、优先按照军衔排序</p>"
			+"<p>2、如军衔相同，则按照星等级排序</p>"
			+"<p>3、如军衔星级都相同，则按照总DBA</p>"
			+"<br />"
			+"</div>");
	},
	//个人排位规则
	alertPerRule:function(){
		dialog.showInfo("<div class='taskInfo'>"
			+"<span class='close'></span>"
			+"<p>个人排位规则：</p>"
			+"<p>1、优先按照军衔排序</p>"
			+"<p>2、如军衔相同，则按照星等级排序</p>"
			+"<p>3、如军衔星级都相同，则按照总DBA</p>"
			+"<br />"
			+"</div>");
	},
	//对战数据-综合得分
	alertScores:function(){
		dialog.showInfo("<div class='taskInfo'>"
			+"<span class='close'></span>"
			+"<p>1.综合得分是D, B, A三个数值之和;</p>"
			+"<p>2. D指伤害类得分，由直接伤害和击杀数组成;</p>"
			+"<p>3. B指防守类得分，由装甲吸收伤害和占旗护旗组成;</p>"
			+"<p>4. A指助攻类得分，由首次点亮数和点亮助攻、断履带助攻、震晕助攻组成;</p>"
			+"</div>");
	},
	//战斗车辆分布-类型-颜色-车辆
	alertColorCar:function(){
		dialog.showInfo("<div class='taskInfo'>"
			+"<span class='close'></span>"
			+"<p>不同颜色代表的不同类型车辆</p>"
			+"<p class='colorCar clearfloat'>"
			+"<span><em class='car_spe1'></em><i>重型坦克1</i></span>"
			+"<span><em class='car_spe2'></em><i>重型坦克2</i></span>"
			+"<span><em class='car_spe3'></em><i>重型坦克3</i></span>"
			+"<span><em class='car_spe4'></em><i>重型坦克4</i></span>"
			+"<span><em class='car_spe5'></em><i>重型坦克5</i></span>"
			+"<span><em class='car_spe6'></em><i>重型坦克6</i></span>"
			+"<span><em class='car_spe7'></em><i>重型坦克7</i></span>"
			+"<span><em class='car_spe8'></em><i>重型坦克8</i></span>"
			+"</p>"
			+"</div>");
	},
	//战斗车辆分布-系别-颜色-车辆
	alertColorCarTie:function(){
		dialog.showInfo("<div class='taskInfo'>"
			+"<span class='close'></span>"
			+"<p>不同颜色代表的不同系别车辆</p>"
			+"<p class='colorCar clearfloat colorCarTie'>"
			+"<span><em class='car_spe1'></em><i>S系</i></span>"
			+"<span><em class='car_spe2'></em><i>M系</i></span>"
			+"<span><em class='car_spe3'></em><i>C系</i></span>"
			+"<span><em class='car_spe4'></em><i>V系</i></span>"
			+"<span><em class='car_spe5'></em><i>F系</i></span>"
			+"<span><em class='car_spe6'></em><i>Y系</i></span>"
			+"<span><em class='car_spe7'></em><i>J系</i></span>"
			+"<span><em class='car_spe8'></em><i>D系</i></span>"
			+"<span><em class='car_spe9'></em><i>R系</i></span>"
			+"</p>"
			+"</div>");
	},
	//对战数据-DBA
	alertDataDBA:function(){
		dialog.showInfo("<div class='taskInfo'>"
			+"<span class='close'></span>"
			+"<p class='data_dba clearfloat'>"
			+"<span class='data_exper'><em class='data_ico7'></em><i>平均经验</i></span>"
			+"<span><em class='data_ico5'></em><i>平均护旗次数</i></span>"
			+"<span><em class='data_ico1'></em><i>平均击杀</i></span>"
			+"<span><em class='data_ico3'></em><i>平均点亮次数</i></span>"
			+"<span><em class='data_ico4'></em><i>平均伤害</i></span>"
			+"<span><em class='data_ico6'></em><i>平均助攻</i></span>"
			+"<span><em class='data_ico2'></em><i>平均占领次数</i></span>"
			+"</p>"
			+"</div>");
	}
};



$(window).on("load resize scroll",function(){
	//refreshRem();
	if($("#alertInfo").is(":visible")){
		dialog.alertInfoPo();
	}
});

function refreshRem(){
	var width=$(window).width();
	// 按照640比例可以直接用设计图尺寸除100
	//if(width>640) width=640;
	if(width<320) width=320;
	var rem=width/640*100;
	$("html").css("font-size",rem);
}	


jQuery.divselect = function(divselectid,inputselectid){
	var inputselect = $(inputselectid);
	$(divselectid+" i").click(function(e){
		var selC=$(this).siblings(".selC");
		e.stopPropagation();
		selC.toggle();
		selToggle(null,$(divselectid).not($(this).parent()));
		//if(selC.css("display")=="none"){
		//	selC.show();
		//}else{
		//	selC.hide();  
		//} 
	});
	$(divselectid+" .selC a").click(function(){
		 var ZoneId=$(this).attr("value");
		 var ZoneTex=$(this).html();
		 $(this).addClass("selectedV").siblings().removeClass("selectedV");
		 $(this).parent().siblings(".sel-ed").val(ZoneId);
		 $(this).parent().siblings("i").html(ZoneTex);
		 $(this).parent().hide();
	});
	$(document).click(function(){ 
	   $(divselectid+" .selC").hide(); 
	 })
	function selToggle(e,objs){
		var selDiv = objs ? objs : $(divselectid);
		selDiv.children('.selC').hide();
	}
};




var setTipsCookies=function(cookieName,value){
	var exdate=new Date();
	exdate.setTime(exdate.getTime()+(1000*24*60*60*1000));
	document.cookie=cookieName+"="+value+";expires="+exdate.toUTCString();
},getTipsCookies=function(cookieName){
	var arr=document.cookie.match(new RegExp("(^| )"+cookieName+"=([^;]*)(;|$)"));
	if(arr!=null) return unescape(arr[2]); return null;
};
if(getTipsCookies("isFirstTips")!=null){
	skip();
};