/*-------------案例1---分割线------------------*/
var mycharts_1 = echarts.init(document.getElementById("demo_1")).setOption({
	title:{
		text:'案例一',
		left:'center',
	},
	tooltip:{},
	grid:{
		containLabel:true,//防止标签溢出
	},
	xAxis:[{
		data:['A','B','C'],
	},{
		boundaryGap:false,
		show:false,
		data:['A','B','C'],
	}],
	yAxis:{
		splitLine:{
			show:false,
		},
		splitNumber:4,
	},
	series:[
		{	
			xAxisIndex:0,
			z:1,
			name:'数量对比',
			type:'pictorialBar',
			label:{
				show:true,
				position:'top',
			},
			symbol:'image://images/symbol.png',
			data:[32105,33333,30120],
		},{
			xAxisIndex:1,
			z:0,
			name:'2018总体平均数据',
			type:'line',
			lineStyle: {
				type: 'dotted',
				color: '#38ffc9',
			},
			symbolSize:0,
			areaStyle:{
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: '#38ffc9'
					}, {
						offset: 1,
						color: 'rgba(0,0,0,.0)'
					}])				
			},
			data:[30000,30000,30000],
		}
	]
});