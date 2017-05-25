$(function(){
	//关闭 弹窗
	$(document).on("click",".chatBox .close",Chatdialog.closeDiv);
	
})
var Chatdialog; if(!Chatdialog) Chatdialog={};
Chatdialog={
	//关闭
	closeDiv:function(){
		$(".chatBody").stop(true,true).animate({
			"top":"-100%",
			"opacity":"0"
		},"fast",function(){
			$(".chatBody").remove().hide();
		});
	},
	//
	maskLayer:function(){
		$(".chatBody").remove();
		var chatLayer="<div class='chatBody'></div>";
		$("body").append(chatLayer);
	},
	//显示提示信息框
	showInfo:function(alertHtml){
		Chatdialog.maskLayer();
		$(".chatBody").append(alertHtml);
		$(".chatBody").show();
	},
	// 聊天弹窗
	alertChatBody:function(){
		Chatdialog.showInfo("<div class='chatBox'>"
			+"<div class='chat_Wrap'>"
				+"<a href='javascript:;' class='close'></a>"
				+"<div class='chat_bottom'>"
					+"<textarea class='chat_area'></textarea>"
					+"<input type='button' value='发送' class='chat_send'>"
				+"</div>"
			+"</div>"
		+"</div>");
	},
	//添加好友弹窗
	alertAddRequ:function(func,flag){//msgTitle：提示标题,msg：提示内容,func：为“确定”按钮动作处理函数,flag：双按钮标识，”d“为双按钮（”确定“和”取消“,“取消”时的按钮动作是关闭窗口），”s“为单按钮（只有”确定“）msg_left：左侧按钮的文字，msg_right：右侧按钮的文字
		var btn="<div class='infoBtn'><a class='click-btn' href='javascript:"+func+";'>发送</a></div>";
		if(flag=="d") btn="<div class='infoBtn infoBtn1'><a class='click-btn left' href='javascript:dialog.closeDiv();'>取消</a><a class='click-btn' href='javascript:;' onclick='zendRequest("+func+")'>发送</a></div>";
		Chatdialog.showInfo("<div class='chatBox'>"
			+"<div class='tsInfo1 tsFri'>"
				+"<a href='javascript:;' class='close'></a>"
				+"<div class='tsFri_con'>"
					+" <h2>是否申请添加该用户为好友?</h2>"
					+"<textarea name='note' id='note' placeholder='内容为空不可发送'></textarea>"
				+"</div>"
			+btn+"</div>"
		+"</div>");
	}	
};


//调用
var ChatTips; if (!ChatTips) ChatTips = {};
/**
 * 显示隐藏  聊天弹窗
 */
ChatTips.showChat = function(){
	Chatdialog.alertChatBody();
}
/**
 * 显示隐藏  加好友弹窗
 */
ChatTips.showAddRequ = function(){
	Chatdialog.alertAddRequ('','d');
}