/*------------案例1-------------分割线--------------------*/
echarts.init(document.getElementById("demo_1")).setOption({
		title:{
			text:'默认仪表盘'
		},
		series:{
			type:'gauge',
			name:'时速表盘',
//			data:[45],
			data:[{
				name:'体重(公斤)',
				value:45,
			}],
		},
});








/*------------案例2-------------分割线--------------------*/
echarts.init(document.getElementById("demo_2")).setOption({
	tooltip:{},
	series:{
		type:'gauge',
		name:'时钟',
		radius:'95%',
		startAngle:90,
		endAngle:-269.999,
		min:0,
		max:12,
		splitNumber: 12,
		clockwise:true,
		axisLine:{
			lineStyle:{
				width:25,
				color:[
					[1,new echarts.graphic.LinearGradient(0, 0, 1, 0, [
	                      {
	                        offset: 0.1,
	                        color: "#FFC600"
	                      },
	                      {
	                        offset: 0.5,
	                        color: "#30D27C"
	                      },
	                      {
	                        offset: 1,
	                        color: "#0B95FF"
	                      }
	                    ])
					]
				],
			},
		},
		splitLine:{
			length:18,
			lineStyle:{
				color:'white',
			},
		},
		axisTick:{
			splitNumber:5,
			length:5,
			lineStyle:{
				color:'white'
			},
		},
		axisLabel:{
			distance:10,
			formatter:'{a|{value}}',
			rich:{
				a:{
					color:'black',
				},
			},
		},
		pointer:{
			length:'70%',
			width:5,
		},
		itemStyle:{
			color:'MediumVioletRed',
		},
		tooltip:{
			backgroundColor:'transparent',
			textStyle:{
				color:'black',
			},
		},
		title:{
			show:false,
		},
		detail:{
			show:false,
		},		
		data:[{name:'时',value:12}]
	}
});







/*------------案例3-------------分割线--------------------*/
var clockChart=echarts.init(document.getElementById("demo_3"));
var option={
	tooltip:{
		formatter:function(params){
			return showTooltip(params.seriesIndex,params.value);
		},
	},
	series:[{//秒针
		name:'秒针',
		type:'gauge',
		radius:'95%',		
		startAngle:90,
		endAngle:-269.999,		
		min:0,
		max:60,
		splitNumber: 12,
       	animation: false,//true：完全从头刷新, 和 false 的效果不同
       	title:{
       		offsetCenter:[0,'-50%'],
       		fontWeight:'bold',
       	},
       	detail:{
       		show:false,
       	},
		axisLabel:{
			distance:10,
			formatter:function(value){
				return showAxisLabel(value);
			},
			
		},	
		splitLine:{
			length:10,
			lineStyle:{
				color:'white',
			},
		},
		axisTick:{
			length:5,
			lineStyle:{
				color:'white'
			},
		},
		axisLine:{
			lineStyle:{
				width:10,
				color:[[1,'#337AB7']],
				shadowBlur:10,
			},
			
		},		
		itemStyle:{
			color:'#00B0B0',
		},
		pointer:{
			length:'90%',
			width:3,
		},
		data:[{}],
	},{//分针
		name:'分针',
		type:'gauge',
		radius:'95%',		
		startAngle:90,
		endAngle:-269.999,		
		min:0,
		max:60,
		splitNumber: 12,
       	animation: false,//true：完全从头刷新, 和 false 的效果不同
       	title:{
       		show:false,
       	},
       	detail:{
       		show:false,
       	},
		axisLabel:{
			show:false,
			
		},	
		splitLine:{
			show:false,
		},
		axisTick:{
			show:false,
		},	
		axisLine:{
			lineStyle:{
				width:0,
			},
		},		
		itemStyle:{
			color:'#CA8622',
		},
		pointer:{
			length:'80%',
			width:3,
		},
		data:[{}],
	},{//时针
		name:'时针',
		type:'gauge',
		radius:'95%',		
		startAngle:90,
		endAngle:-269.999,		
		min:0,
		max:12,
		splitNumber: 12,
       	animation: false,//true：完全从头刷新, 和 false 的效果不同
       	title:{
       		show:false,
       	},
       	detail:{
       		show:false,
       	},
		axisLabel:{
			show:false,
			
		},	
		splitLine:{
			show:false,
		},
		axisTick:{
			show:false,
		},	
		axisLine:{
			lineStyle:{
				width:0,
			},
		},		
		itemStyle:{
			color:'#109A39',
		},
		pointer:{
			length:'65%',
			width:3,
		},
		data:[{}],
	},{//时盘
		name:'时盘',
		type:'gauge',
		radius:'30%',	
		center:['40%',"50%"],
		startAngle:90,
		endAngle:-269.999,		
		min:0,
		max:24,
		splitNumber: 8,
       	animation: false,//true：完全从头刷新, 和 false 的效果不同
       	title:{
       		show:false,
       	},
       	detail:{
       		show:false,
       	},
		axisLabel:{
			formatter:function(value){
				if(value===0){
					return "";
				}
				return value;
			},			
			
		},	
		splitLine:{
			length:5,
			lineStyle:{
				color:'white',
			},
		},
		axisTick:{
			length:5,
			splitNumber:3,
			lineStyle:{
				color:'white'
			},
		},	
		axisLine:{
			lineStyle:{
				width:5,
				color:[[1,'#337AB7']],
			},
		},		
		itemStyle:{
			color:'#00B0B0',
		},
		pointer:{
			width:1.5,
		},
		data:[{}],
		z:1,
	},{//周盘针
		name:'周盘针',
		type:'gauge',
		radius:'30%',	
		center:['60%',"50%"],
		startAngle:90,
		endAngle:-269.999,		
		min:0,
		max:7,
		splitNumber: 7,
       	animation: false,//true：完全从头刷新, 和 false 的效果不同
       	title:{
       		show:false,
       	},
       	detail:{
       		show:false,
       	},
		axisLabel:{
			show:false,
		},	
		splitLine:{
			show:false,
		},
		axisTick:{
			show:false,
		},	
		axisLine:{
			lineStyle:{
				width:20,
                color: [
                    [0.07, 'rgba(192, 0, 0, 0.5)'],
                    [0.21, 'rgba(0, 0, 192, 0.5)'],
                    [0.35, 'rgba(0, 64, 192, 0.5)'],
                    [0.50, 'rgba(0, 96, 192, 0.5)'],
                    [0.64, 'rgba(0, 164, 192, 0.5)'],
                    [0.78, 'rgba(0, 128, 64, 0.5)'],
                    [0.93, 'rgba(192, 128, 0, 0.5)'],
                    [1, 'rgba(192, 0, 0, 0.5)']
                ],
			},
		},		
		itemStyle:{
			color:'#00B0B0',
		},
		pointer:{
			length:'65%',
			width:1.5,
		},
		data:[{}],
		z:1,
	},{
        name: '周盘',
        type: 'pie',
        hoverAnimation: false,
        animation: false,
        center:['60%',"50%"],
        radius: ['20%', '30%'],
        startAngle: 64.28,
        label: {
            show: false,
            position: 'inside'
        },
        labelLine: {
            show: false
        },
        markPoint: {
            symbolSize: 1,
            label: {
	            show: true,
	            fontSize:10,
	            formatter: function(t){
	                return t.name
                },
            },
            data: [
                {
                    name: '星期日',
                    x: '60%',
                    y: '38%'
                },
                {
                    name: '星期一',
                    x: '65%',
                    y: '42.8%',
                    label: {
                        normal: {
                            rotate: -51.42
                        }
                    }
                },
                {
                    name: '星期二',
                    x: '65.8%',
                    y: '52%',
                    label: {
                        normal: {
                            rotate: -102.84
                        }
                    }
                },
                {
                    name: '星期三',
                    x: '62.5%',
                    y: '60.8%',
                    label: {
                        normal: {
                            rotate: -154.28
                        }
                    }
                },
                {
                    name: '星期四',
                    x: '57.5%',
                    y: '60.8%',
                    label: {
                        normal: {
                            rotate: -205.7
                        }
                    }
                },
                {
                    name: '星期五',
                    x: '54%',
                    y: '52%',
                    label: {
                        normal: {
                            rotate: -257.12
                        }
                    }
                },
                {
                    name: '星期六',
                    x: '55%',
                    y: '42.8%',
                    label: {
                        normal: {
                            rotate: 51.46
                        }
                    }
                }
            ]
        },
        data: [
            {name: '星期日', value: 1},
            {name: '星期一', value: 1},
            {name: '星期二', value: 1},
            {name: '星期三', value: 1},
            {name: '星期四', value: 1},
            {name: '星期五', value: 1},
            {name: '星期六', value: 1},
        ],
        z: 1
    },{//时盘
		name:'时盘',
		type:'gauge',
		radius:'30%',	
		center:['50%',"72.5%"],
		startAngle:90,
		endAngle:-269.999,		
		min:0,
		max:12,
		splitNumber: 6,
       	animation: false,//true：完全从头刷新, 和 false 的效果不同
       	title:{
       		show:true,
       	},
       	detail:{
       		show:false,
       	},
		axisLabel:{
			formatter:function(value){
				if(value===0){
					return "";
				}
				return value;
			},			
			
		},	
		splitLine:{
			length:5,
			lineStyle:{
				color:'white',
			},
		},
		axisTick:{
			length:5,
			splitNumber:2,
			lineStyle:{
				color:'white'
			},
		},	
		axisLine:{
			lineStyle:{
				width:5,
				color:[[1,'#337AB7']],
			},
		},		
		itemStyle:{
			color:'#00B0B0',
		},
		pointer:{
			width:1.5,
		},
		data:[{}],
		z:1,
	},]
};
if(option && typeof option === "object") {
	clockChart.setOption(option);
}
clearInterval(timeTicket);
/*------------时钟动起来----------分割线---------------------*/
var timeTicket=setInterval(function(){
	var dateTime=new Date();
	var s  = dateTime.getSeconds();
	var ms = dateTime.getMilliseconds();
	var m  = dateTime.getMinutes();
	var h  = dateTime.getHours();
	var day = dateTime.getDate();
	var week = dateTime.getDay();
	var month = dateTime.getMonth()+1;
	var year = dateTime.getFullYear();
	
	
	
	var seconds=s+ms/1000;
	var minutes=m+s/60;
	var hours_24=h+m/60;
	var hours_12;
	if(hours_24>12){
		hours_12=hours_24-12;
	}else{
		hours_12=hours_24;
	}
	
	
	var str =year+"-"+month+"-"+ day+" "+  h+':'+m+':'+s;
	option.series[0].data[0].name='当前时间:\n'+str;
	option.series[0].data[0].value=seconds;
	option.series[1].data[0].value=minutes;
	option.series[2].data[0].value=hours_12;
	option.series[3].data[0].value=hours_24;
	option.series[4].data[0].value=week;
	option.series[6].data[0].value=month;
	option.series[6].data[0].name=day;
	
	clockChart.setOption(option,true);
},100)
/*--------------数据处理------------分割线------------------*/
function showTooltip(seriesIndex,time){
	time=Math.floor(time);
	switch (seriesIndex){
		case 0:
			return '当前秒：'+ time;
			break;
		case 1:
			return '当前分钟：'+ time;
			break;
		case 2:
			return '当前小时：'+ time;
			break;
		case 3:
			return '当前小时：'+ time;
			break;	
		case 4:
			return '当前星期：'+ time;
			break;
		case 6:
			return '当前月份：'+ time;
			break;				
		default:
			break;
	}
};
function showAxisLabel(data){
	switch (data){
		case 0:
			return 12;
			break;
		case 5:
			return 1;
			break;
		case 10:
			return 2;
			break;
		case 15:
			return 3;
			break;
		case 20:
			return 4;
			break;
		case 25:
			return 5;
			break;
		case 30:
			return 6;
			break;
		case 35:
			return 7;
			break;
		case 40:
			return 8;
			break;
		case 45:
			return 9;
			break;
		case 50:
			return 10;
			break;
		case 55:
			return 11;
			break;
		default:
			break;
	}
	
}



