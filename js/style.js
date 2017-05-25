

$(function(){

	//关闭 弹窗
	$(document).on("click","#alertInfo .close",dialog.closeDiv);

	//居中据点弹窗
	showDiv($('.holdArea'));
	center($('.holdArea'));
	showDiv($('.warCar_wrap'));
	center($('.warCar_wrap'));
	
})

var Tips; if (!Tips) Tips = {};
/**
 * 显示隐藏 登陆框
 */
Tips.showLogin = function(){
	//显示登陆框的时候刷新验证码
	//Util.verifyImg();
	dialog.alertLog('请登录','dialog.closeDiv()');
    // dialog.alertLog("请登录","dialog.alertMsg(\"提示\",\"签到失败！\",\"dialog.closeDiv()\",\"d\")");
}
/**
 * 显示隐藏 提示弹窗
 */
Tips.showTips = function(){
	dialog.alertMsg("恭喜您",'领取成功',"dialog.closeDiv()","s");
}
/**
 * 显示隐藏 提示未登录弹窗
 */
Tips.showLoginTwo = function(){
	 dialog.alertLogTwo("dialog.alertLog(\"请登录\",\"dialog.closeDiv()\")","dialog.closeDiv()");
}	
/**
 * 显示隐藏 个人动态弹窗
 */
Tips.showPerDt = function(){
	 dialog.alertPerDt();
	 $('#alertInfo .close').show();
}	
/**
 * 显示隐藏  二次确认购买
 */
Tips.showConfirm = function(){
	 dialog.alertConfirm('签到需要花费600军功，是否继续签到？','dialog.closeDiv()','d');
	$('#alertInfo .close').show();
}	
/**
 * 显示隐藏  个人中心弹窗：退出登录，是否开启排位，是否关闭排位
 */
Tips.showRank=function(){
	dialog.alertRank('','是否退出登录？','暂不退出','确认退出',"dialog.closeDiv()","d");
}
/**
 * 显示隐藏  个人中心弹窗：退出登录，是否开启排位，是否关闭排位
 */
Tips.showRank1=function(){
	var txt='<p class="rank_spe">排位的开启与关闭不会影响数据的展现。）排位开启后，您的战车战斗数据将会计入排位统计。</p>'
	dialog.alertRank(txt,'是否开启排位？','暂不开启','开启排位',"dialog.closeDiv()","d");
}
/**
 * 显示隐藏  个人中心弹窗：退出登录，是否开启排位，是否关闭排位
 */
Tips.showRank2=function(){
	var txt='<p class="rank_spe">排位的开启与关闭不会影响数据的展现。）排位开启后，您的战车战斗数据将会计入排位统计。</p>'
	dialog.alertRank(txt,'是否关闭排位？','暂不关闭','关闭排位',"dialog.closeDiv()","d");
}
/**
 * 显示隐藏  个人军衔与积分
 */
Tips.showInte=function(){
	dialog.alertInte();
}
/**
 * 显示隐藏  常用车辆
 */
Tips.showCar=function(){
	dialog.alertCar();
}
/**
 * 显示隐藏  据点弹窗
 */
Tips.showHold=function(){
	showHide('.overOpa','.holdArea');
}
/**
 * 显示隐藏  据点弹窗
 */
Tips.hideHold=function(){
	hide('.overOpa','.holdArea');
}
/**
 * 显示隐藏  战区弹窗
 */
Tips.showWarZone=function(){
	dialog.alertWarZone('北京市海淀区','dialog.closeDiv()','d')
}
/**
 * 显示隐藏  我的好友赠送提示
 */
Tips.showFriTips=function(){
	dialog.alertFriTips('赠送好友1积分');
	//设定一定时间后自动关闭
	delayClose();
}
/**
 * 显示隐藏  聊天弹窗
 */
Tips.showChat=function(){
	dialog.alertChatWrap();
}
/**
 * 显示隐藏  是否删除好友
 */
Tips.showDelete=function(){
	dialog.alertRank('','是否删除该好友？','暂不删除','确认删除',"dialog.closeDiv()","d");
}
/**
 * 显示隐藏  添加好友
 */
Tips.showAddFri=function(){
	dialog.alertAddFri("dialog.closeDiv()","d");
}
/**
 * 显示隐藏  据点弹窗
 */
Tips.showWarCar=function(){
	showHide('.overOpa','.warCar_wrap');
}
/**
 * 显示隐藏  据点弹窗
 */
Tips.hideWarCar=function(){
	hide('.overOpa','.warCar_wrap');
}
/**
 * 显示隐藏  个人排位规则弹窗
 */
Tips.showPerRule=function(){
	dialog.alertPerRule();
}
/**
 * 显示隐藏  战车规则弹窗
 */
Tips.showCarRule=function(){
	dialog.alertCarRule();
}
/**
 * 显示隐藏  是否删除系统好友消息
 */
Tips.showMessage=function(){
	dialog.alertRank('','是否删除该消息？','暂不删除','确认删除',"dialog.closeDiv()","d");
}
/**
 * 显示隐藏  对战数据-综合得分
 */
Tips.showScores=function(){
	dialog.alertScores();
}
/**
 * 显示隐藏  对战数据-颜色-车辆-类型
 */
Tips.showColorCar=function(){
	dialog.alertColorCar();
}
/**
 * 显示隐藏  对战数据-颜色-车辆-系别
 */
Tips.showColorCarTie=function(){
	dialog.alertColorCarTie();
}
/**
 * 显示隐藏  对战数据-DBA
 */
Tips.showDataDBA=function(){
	dialog.alertDataDBA();
	bFlag=true;
	console.log(bFlag)
}


//点击显示隐藏
function showHide(Ele,iTaget){
	$(Ele).show();
	$(iTaget).show();
}

//点击显示隐藏
function hide(Ele,iTaget){
	$(Ele).hide();
	$(iTaget).hide();
}
//弹出居中
function showDiv(obj) {
	center(obj);
	$(window).scroll(function() {
		center(obj);
	});
	$(window).resize(function() {
		center(obj);
	});
}

function center(obj) {
	var windowWidth = document.documentElement.clientWidth;
	var windowHeight = document.documentElement.clientHeight;
	var popupHeight = $(obj).height();
	var popupWidth = $(obj).width();
	$(obj).css({
		"position": "absolute",
		"top": (windowHeight - popupHeight) / 2 + $(document).scrollTop(),
		"left": (windowWidth - popupWidth) / 2
	});
}

function delayClose(){
	setTimeout(function(){
		dialog.closeDiv();
	},1000)
}