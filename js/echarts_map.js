var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';


var migrate_map = echarts.init(document.getElementById("migrate_map"), null, {
	width: "1000",
	height: "1000"
});
var option = {
	backgroundColor: '#404a59',
	title: {
		text: "标题：迁徙地图",
		left: "center",
		textStyle:{
			color:"yellow",
		}
	},
	geo: {
		map: "china",
		center: [115.97, 32.71],
		roam: "scale",
		scaleLimit: {
			min: 1,
			max: 1.5,
		},
		nameMap: {
			"山东": "shandong",
			"新疆": "xinjiang",
		},
		itemStyle: {
			areaColor: "#2a333d",
			borderColor: "#404a59"
		},
		emphasis: {
			label: {
				show: false,
			},
			itemStyle: {
				areaColor: "",
			},
		},
		selectedMode: true,
	},
	series: [{
		type: "lines",
		name: "北京迁出",
		zlevel: 1,
		effect:{//特效
			show:true,
			period:10,
			symbol:planePath,
			symbolSize :10,
			color:"yellow",
			trailLength:0.7,
		},
		
		symbol:["circle","triangle"],
		symbolSize:10,
		label:{
			show:true,
			color:"#FF00FF",
		},
		data: [{
			name:"汇入1",
			fromName:"北京",
			toName:"上海",
			coords: [
				[115.97, 32.71], // 起点
				[120.97, 45.71], // 终点
			],
			lineStyle: {
				type:"dotted",
				color: "white",
				curveness:0.3//边的曲度，支持从 0 到 1 的值，值越大曲度越大。,
				
			},
		},
		{
			name:"汇入2",
			coords: [
				[115.97, 32.71], // 起点
				[90.97, 30.71], // 终点
			],
			lineStyle: {
				type:"dotted",
				color: "white",
			},
		}
		]
	}],
}
migrate_map.setOption(option);