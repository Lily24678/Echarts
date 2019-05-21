$.get('json/data.json', function(data) {
	echarts.init(document.getElementById("line1")).setOption({
		color: ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'],
		grid: {
			top: 100,
		},
		title: {
			text: '标题：smooth，areaStyle，markArea，step，stack',
			link: 'js/line1.js',
			subtext: '副标题：近7日的观影人数',
			sublink: '',
		},
		legend: {
			top: '30',
			itemGap: 5,
			icon: 'rect',
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
			top: '20',
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
			min: function(value) { //value={min: 800, max: 2000}
				return value.min - 100;
			},
			max: function(value) { //value={min: 800, max: 2000}
				return value.max;
			},
			splitNumber: 3,
		},
		tooltip: {
			trigger: 'axis'
		},
		series: [{
			type: 'line',
			name: 'A影院',
			/*stack:'看看效果'*/
			/*step: 'middle', //阶梯形状，与stack冲突*/
			smooth: true, //平滑曲线显示，使角平滑
			label: {
				show: true,
				position: 'insideTop',
				formatter: '{c}',
			},
			markPoint: {
				data: [{
						type: 'max',
						name: '最大值'
					},
					{
						type: 'min',
						name: '最小值'
					}
				]
			},
			markLine: {
				data: [{
					type: 'average',
					name: '平均值'
				}]
			},
			areaStyle: { //与stack冲突
				color: { //渐变填充
					type: 'linear',
					x: 0,
					y: 0,
					x2: 0,
					y2: 1,
					colorStops: [{
						offset: 0,
						color: 'red' // 0% 处的颜色
					}, {
						offset: 1,
						color: 'blue' // 100% 处的颜色
					}],
					globalCoord: false // 缺省为 false
				},
			},
			data: data.A
		}, {
			type: 'line',
			name: 'B影院',
			/*stack:'看看效果',*/
			/*step: 'middle', //阶梯形状，与stack冲突*/
			markPoint: {
				data: [{
						type: 'max',
						name: '最大值'
					},
					{
						type: 'min',
						name: '最小值'
					}
				]
			},
			markLine: {
				data: [{
					type: 'average',
					name: '平均值'
				}]
			},
			markArea: {
				data: [
					[{
							name: 'markArea平均值到最大值',
							type: 'average'
						},
						{
							type: 'max'
						}
					],
				],
			},
			data: data.B
		}]
	});
}, 'json');