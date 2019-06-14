//初始化echarts，并设置option
$.get('json/data.json', function(data) {
	echarts.init(document.getElementById("bar1")).setOption({
		color: ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'],
		grid: {
			top: 100,
		},
		title: {
			text: '标题：坐标轴指示器、渐变、动画、标题链接',
			link: 'js/bar1.js',
			subtext: '副标题：近7日的观影人数',
			sublink: '',
		},
		legend: {
			formatter: function(name) {
				return echarts.format.truncateText(name, 100, '14px Microsoft Yahei', '…');
			},
			top:'30',
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
			min: function(value) { //value={min: 800, max: 2000}
				return value.min - 100;
			},
			max: function(value) { //value={min: 800, max: 2000}
				return value.max;
			},
			splitNumber: 6,
			axisLabel: {
				formatter: '{value} 人'
			},
		},
		tooltip: {
			/*formatter:'{a}:{c}<br/>时间：{b}',*/
			formatter: function(params) {
				if(params.componentType === "markPoint") {
					return params.data.seriesName + "：" + (params.value / 1000) + "万人<br/>日期：" + params.name.substring(0, 5);
				}
				if(params.componentType === "markLine") {
					return params.data.seriesName + "：" + (params.value / 1000) + "万人";
				}
				return params.seriesName + "：" + (params.value / 1000) + "万人<br/>日期：" + params.name.substring(0, 5);
			},
			axisPointer: { //坐标轴指示器
				type: 'cross',
			},
		},

		series: [{
			type: 'bar',
			/*barWidth:30,*/
			name: 'A影院',
			markPoint: {
				data: [{
						type: 'max',
						seriesName: 'A最大值'
					},
					{
						type: 'min',
						seriesName: 'A最小值'
					}
				]
			},
			markLine: {
				data: [{
					type: 'average',
					seriesName: 'A平均值'
				}]
			},
			label: {
				show: true,
				position: 'insideTop', //label显示的位置
				formatter: '{c}',
			},
			itemStyle: {
				/*颜色渐变*/
				color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
					offset: 0, //offset与上面一组如0,1,0,0数字共同决定渐变颜色的层次的位置
					color: '#c23531'
				}, {
					offset: 1,
					color: '#2f4554'
				}]),
			},
			data: data.A
		}, {
			type: 'bar',
			/*barWidth:30,*/
			name: 'B影院',
			markPoint: {
				data: [{
						type: 'max',
						seriesName: 'B最大值'
					},
					{
						type: 'min',
						seriesName: 'B最小值'
					}
				]
			},
			markLine: {
				data: [{
					type: 'average',
					seriesName: 'B平均值'
				}]
			},
			/*barGap:'0',//不同系列的柱间距离*/
	        itemStyle: {
	            color: {
	              type: "linear",
	              x: 0,
	              y: 0,
	              x2: 0,
	              y2: 1,
	              colorStops: [
	                {
	                  offset: 0,
	                  color: "rgba(97,160,168,0.7)"
	                },
	                {
	                  offset: 0.5,
	                  color: "rgba(194,53,49,0.8)"
	                },
	                {
	                  offset: 1,
	                  color: "rgba(0,133,245,0.3)"
	                }
	              ],
	            }
	        },
	        /*动画显示*/
         	animationDuration: function(idx) {
                // 越往后的数据延迟越大
                return Math.abs(idx - 26) * 2000;
            },
			data: data.B
		}]
	});
}, 'json');