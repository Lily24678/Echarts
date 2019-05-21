//初始化echarts，并设置option
$.get('json/data.json', function(data) {
	echarts.init(document.getElementById("bar3")).setOption({
		color: ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'],
		grid: {
			top: 100,
			containLabel: true,//防止标签溢出
		},
		title: {
			text: '标题：堆叠,legend样式',
			link: 'js/bar3.js',
			subtext: '副标题：近7日的观影人数',
			sublink: '',
		},
		legend: {
			icon: "circle",
			formatter: function(name) {
				return echarts.format.truncateText(name, 100, '14px Microsoft Yahei', '…');
			},
			/* tooltip: {
			     show: true
			 },*/
			/*selectedMode:false,//取消图例上的点击事件*/
		},
		toolbox: {
			show: true,
			feature: {
				dataZoom: {
					yAxisIndex: 'none'
				},
				dataView: {
					readOnly: false
				},
				magicType: {
					type: ['line', 'bar']
				},
				restore: {},
				saveAsImage: {},
			},
		},

		xAxis: {
			name: '日期',
			data: beforeDay(7),
		},
		yAxis: {
			name: '人数',
			type: 'value',
			axisLabel: {
				formatter: '{value} 人'
			},
		},
		tooltip: {
			trigger: 'axis',//合并提示
		},
		series: [{
			type: 'bar',
			name: 'A影院',
			stack: '观影人数',//stack的值一样的堆叠
			barWidth:30,//只需配置一个barWidth便可控制堆叠宽度
			label: {
				show: false,
				position: 'left', //label显示的位置
				formatter: '{c}',
			},
			data: data.A
		}, {
			type: 'bar',
			name: 'B影院',
			stack: '观影人数',//stack的值一样的堆叠
			label: {
				show: true,
				position: 'top', //label显示的位置
				distance:10,
				formatter: function(params){
					return "共计：\n"+(data.A[params.dataIndex]+data.B[params.dataIndex]);
				},
			},
			data: data.B
		}]
	});
}, 'json');