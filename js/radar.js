/*------------案例1------分割线--------------------------*/
echarts.init(document.getElementById("demo_1")).setOption({
	title:{
		text:'事件分析',
		left:'center',
		top:'10%',
	},
	radar:{
		startAngle: 180,
		name:{
			show:true,
			fontSize:8,
		},
		nameGap:2.5,
		splitNumber:2,
		radius: '50%',
		shape:'polygon',
		center:['50%','60%'],
		axisLine:{
			show:true,
		},
		splitLine:{
			show:true,
		},
		splitArea:{
			show:true,
		},
		indicator: [
		   { name: '销售（sales）', max: 100},
		   { name: '管理（Administration）', max: 160, color: 'red'}, // 标签设置为红色
		   { name: '信息技术（Information Techology）', max: 300},
		   { name: '客服（Customer Support）', max: 380},
		   { name: '研发（Development）', max: 520},
		   { name: '市场（Marketing）', max: 250}
		],
        
	},	
	series:{
		type:'radar',
		name:'事件',
		symbol:'none',
        areaStyle: {
            color:'yellow',
                opacity: 0.1
            
        },  
        lineStyle:{
        	width :0.3,
        },
        //赋值方式1
		//data: [{value:[100,112,256,498,520,240]},{value:[88,111,200,455,517,244]}],
		//赋值方式2
		data: [[100,112,101,45,75,240],[88,111,200,75,102,200]],

	}
	
});


