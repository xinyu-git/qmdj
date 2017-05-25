$(function(){
	var myChart1 = echarts.init($('#scores_echarts')[0]);
	var myChart2 = echarts.init($('#car_echarts1')[0]);
	var myChart3 = echarts.init($('#car_echarts2')[0]);

	function findInArr(arr){
	    for(var i=0; i<arr.length; i++){
	        if(arr[i]!=0)return false;
	    }
	    return true;
	}
	//综合得分-环形图
	function echartst1(json){
		var myChart = json.obj;
		option = {
		    series: [{
		        name: '访问来源',
		        type: 'pie',
		        radius: ['80%', '100%'],
		        avoidLabelOverlap: false,
		        hoverAnimation: false,
		        label: {
		            normal: {
		                show: false,
		                position: 'center'
		            },
		            emphasis: {
		                show: false,
		            }
		        },
		        labelLine: {
		            normal: {
		                show: false
		            }
		        },
		        data: [{
		                value: json.data1[0],
		                name: '直接访问',
		                itemStyle: {
		                    normal: {
		                        color: '#ffad09'
		                    }
		                }
		            }, {
		                value: json.data1[1],
		                name: '邮件营销',
		                itemStyle: {
		                    normal: {
		                        color: '#e4e4e4'
		                    }
		                }
		            },

		        ]
		    }]
		};
		 myChart.setOption(option);
	}
	echartst1({
			obj:myChart1,
			data1:[500,800]
	})
	//战斗车辆分布-饼图1
	function echartst2(json){
		var myChart = json.obj;
		option = {
		    series : [
		        {
		            name: '访问来源',
		            type: 'pie',
		            selectedOffset:0,
		            radius : '80%',
		            center: ['50%', '50%'],
		            selectedMode:'single',
		            label:{
		              normal:{
		                  position:'inside',
		                  formatter:function(e){
		                  	if(findInArr(json.data1)){
		                  		return e.percent + '%'
		                  	}else{
		                  		if(e.percent==0){
		                  			return ''
		                  		}else{
		                  			return e.percent + '%'
		                  		}
		                  	}
		                  }
		              }  
		            },
		            data:[
		                {value:json.data1[0], name:'直接访问',selected:true},
		                {value:json.data1[1], name:'邮件营销'},
		                {value:json.data1[2], name:'联盟广告'},
		                {value:json.data1[3], name:'联盟广告'},
		                {value:json.data1[4], name:'联盟广告'},

		            ],
		            itemStyle: {
		                emphasis: {
		                    shadowBlur: 10,
		                    shadowOffset: 0,
		                    shadowColor: 'rgba(0, 0, 0, 0.5)'
		                }
		            }
		        }
		    ],
		    color:json.colorArr
		};
		myChart.setOption(option);
	}
	echartst2({
		obj:myChart2,
		data1:[0,0,0,0,0],
		colorArr:['#ffad09','#7cb5ec','#ff7b7b','#a8d980','#434348']
	})
	//战斗车辆分布-饼图2
	function echartst3(json){
		var myChart = json.obj;
		option = {
		    series : [
		        {
		            name: '访问来源',
		            type: 'pie',
		            selectedOffset:0,
		            radius : '80%',
		            center: ['50%', '50%'],
		            selectedMode:'single',
		            label:{
		              normal:{
		                  position:'inside',
		                  formatter:'{d}%'
		              }  
		            },
		            data:[
		                {value:json.data1[0], name:'直接访问',selected:true},
		                {value:json.data1[1], name:'邮件营销'},
		                {value:json.data1[2], name:'联盟广告'},
		                {value:json.data1[3], name:'联盟广告'},
		                {value:json.data1[4], name:'联盟广告'},
		                {value:json.data1[5], name:'联盟广告'},
		                {value:json.data1[6], name:'联盟广告'},
		                {value:json.data1[7], name:'联盟广告'}

		            ],
		            itemStyle: {
		                emphasis: {
		                    shadowBlur: 10,
		                    shadowOffsetX: 0,
		                    shadowColor: 'rgba(0, 0, 0, 0.5)'
		                }
		            }
		        }
		    ],
		    color:json.colorArr
		};
		myChart.setOption(option);
	}
	echartst3({
		obj:myChart3,
		data1:[200,200,200,200,200,200,200,600,100],
		colorArr:['#ffad09','#7cb5ec','#ff7b7b','#a8d980','#434348','#bf95f8','#ead459','#f474aa','#926c42']
	})

	//页面自适应
	 EchartsInit([myChart1])
})
//图表的resize
function EchartsInit(arr) {
    $(window).bind('resize.window', function () {
        setTimeout(function () {
            for (var i = 0; i < arr.length; i++) {
                arr[i].resize();
            }
        }, 300)
    });
}