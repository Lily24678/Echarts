/*--------饼图默认形状--分割线----------------------*/
// 绘制图表。
echarts.init(document.getElementById('main')).setOption({
	backgroundColor: '#F0FFFF',
	title: {
		text: 'ECharts 入门示例'
	},
	tooltip: {},
	legend: {
		data: ['访问来源']
	},
	toolbox: {
		feature: {
			dataView: {},
			saveAsImage: {
				pixelRatio: 2
			},
			restore: {}
		}
	},
	itemStyle: {
		// 设置扇形的颜色
		color: '#c23531',
		shadowBlur: 200,
		shadowOffsetX: 0,
		shadowOffsetY: 0,
		shadowColor: 'rgba(0, 0, 0, 0.5)',
		emphasis: {
			shadowBlur: 200,
			shadowColor: 'rgba(0, 0, 0, 1)'
		}
	},
	labelLine: { //饼图：标签的视觉引导线
		lineStyle: {
			color: 'rgba(75, 0, 130, 0.8)'
		}
	},
	visualMap: {//饼图：将数值的大小映射到明暗度。
		// 不显示 visualMap 组件，只用于明暗度的映射
		show: false,
		// 映射的最小值为 80
		min: 10,
		// 映射的最大值为 600
		max: 600,
		inRange: {
			// 明暗度的范围是 0 到 1
			colorLightness: [0, 1]
		}
	},

	series: {
		name: '访问来源',
		type: 'pie',
		radius: '80%', //控制饼图图形的大小
		data: [{
				value: 235,
				name: '视频广告',
				itemStyle: { //局部设置
					color: '#2E8B57' //设置扇形的颜色 ，
				}
			},
			{
				value: 274,
				name: '联盟广告'
			},
			{
				value: 310,
				name: '邮件营销'
			},
			{
				value: 335,
				name: '直接访问'
			},
			{
				value: 400,
				name: '搜索引擎'
			}
		]
	}
});





/*-------南丁格尔图---分割线-------------------------*/
var myChart = echarts.init(document.getElementById('main1'));
myChart.setOption({
	title:{
		text:'南丁格尔图',
	},	
	series: [{
		name: '访问来源',
		type: 'pie',
		roseType: 'area', //南丁格尔图
		radius: '80%',
		data: [{
				value: 235,
				name: '视频广告'
			},
			{
				value: 274,
				name: '联盟广告'
			},
			{
				value: 310,
				name: '邮件营销'
			},
			{
				value: 335,
				name: '直接访问'
			},
			{
				value: 400,
				name: '搜索引擎'
			}
		]
	}]
});




/*------------案例1:环形图---------------分割线------------------*/
echarts.init(document.getElementById("demo_1")).setOption({
	title:{
		text:'温度仪表',
		subtext:'红色不适应，蓝色适宜',
	},
//	tooltip:{},
	series:{
		type:'pie',
		name:'',
		center:['50%','50%'],
		radius:['60%','80%'],
		hoverAnimation:false,
//		avoidLabelOverlap:false
		startAngle:180,
		label:{
			show:false,
		},
		labelLine:{
			show:false,
		},
		data:[{
			name:'适宜',
			value:50,
			itemStyle:{
				color: {
				    type: 'linear',
				    x: 0,
				    y: 0,
				    x2: 1,
				    y2: 1,
				    colorStops: [{
				        offset: 0, color: 'red' // 0% 处的颜色
				    }, {
				        offset: 0.5, color: 'SlateBlue' // 50% 处的颜色
				    }, {
				        offset: 1, color: 'blue' // 100% 处的颜色
				    }],
				    global: false // 缺省为 false
				},				
			},
		},{
			name:'不适宜',
			value:50,
			itemStyle:{
				color: 'transparent',		
			},
			
		}]
	}
});
