/*--------------------案例1--分割线-------------------------------*/

echarts.init(document.getElementById("demo_1")).setOption({
	title:{
		text:'购物行为统计',
		left:'center',
	},
	legend:{
		left:'left',
		top:'bottom',
	},
	tooltip:{},
	series:{
		name:'行为统计',
		type:'funnel',
		min:0,
		max:100,
		minSize:'0%',
		maxSize:'100%',
		sort:'descending',
		labelLine:{
			lineStyle:{
				type:'dashed',
			},
		},
        data: [
            {value: 60, name: '访问'},
            {value: 40, name: '咨询'},
            {value: 20, name: '订单'},
            {value: 80, name: '点击'},
            {value: 300, name: '展现'}
        ]
	},
});