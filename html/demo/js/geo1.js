/*echarts.registerMap('china', chinaJson);////中国地图方式2*/
var dataLength = null;
var myChart = echarts.init(document.getElementById("geo1"));
$.get("json/geoJson.json", function(data) {
	myChart.setOption({
		color: ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'],
		title: {
			text: '视觉映射,散点,tooltip轮播',
			link: 'js/geo1.js',
			subtext: 'geo',
			sublink: 'json/geoJson.json',
		},
		tooltip: {},
		visualMap: { //视觉映射
			type: 'continuous', //piecewise
			min: 0,
			max: 1000,
			range: [0, 1000], //指定手柄对应数值的位置
			calculable: true, //是否显示拖拽用的手柄
			realtime: true,
			text: ['高', '低'],
			textGap: 20,
			seriesIndex: [0], //映射到那个series[i]
			inRange: {
				color: ['#50a3ba', '#eac736', '#d94e5d']
			},
			textStyle: {
				color: '#eac736'
			}
		},

		geo: {
			id: 'geo1',
			map: 'china',
			label: {
				show: true
			},
			roam: true,
			zoom: 1.5,
		},

		series: [{
			id: 'scatter1',
			type: 'scatter',
			name: 'geo_scatter',
			coordinateSystem: 'geo',
			tooltip: {
				trigger: 'item',
				formatter: function(params) {
					return params.name + ' : ' + params.value[2];
				}
			},
			symbolSize: 12,
			data: setScatter_data(data),
		}],
	});

	dataLength = myChart.getOption().series[0].data.length;
});

function setScatter_data(m) {
	var data = [];
	for(var key in m) { // 遍历Map
		data.push({
			name: key,
			value: m[key].concat(Math.round(Math.random() * 1000))
		});
	}
	return data;
}

/*---------------轮播显示tooltip--------------------------------*/
timeTicket&&clearInterval(timeTicket);//防止多个定时器同时存在
var count = 0;
var timeTicket = window.setInterval(function() {
	/*var dataLength = myChart.getOption().series[0].data.length;*/
	myChart.dispatchAction({
		type: 'showTip',
		seriesIndex: 0,
		dataIndex: (count) % dataLength

	});
	count++;
}, 1000);

//当鼠标放在某个scatter上的时候，停止轮播
myChart.on("mouseover", function(params) {
	if(params.componentType === "series") {
		clearInterval(timeTicket);
	}

});
//当鼠标离开某个scatter上的时候，继续轮播
myChart.on("mouseout", function(params) {
	timeTicket&&clearInterval(timeTicket);//防止多个定时器同时存在
	timeTicket=setInterval(function() {
		myChart.dispatchAction({
			type: 'showTip',
			seriesIndex: 0,
			dataIndex: (count) % dataLength

		});
		count++;
	}, 1000);
});
/*---------------------结束---------------轮播显示tooltip--------------------------------*/