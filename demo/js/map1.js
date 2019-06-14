var myChart = echarts.init(document.getElementById("map1"));
/*$.get('../../echarts/map/json/china.json', function(chinaJson) {//中国地图方式2
	echarts.registerMap('china', chinaJson);////中国地图方式2*/
	myChart.setOption({
			color: ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'],
			title: {
				text: '视觉映射',
				link: 'js/map1.js',
				subtext: 'series-map',
				sublink: '../../echarts/map/json/china.json',
			},
			tooltip: {},
			visualMap: { //视觉映射
				type: 'piecewise', //piecewise
				min: 0,
				max: 800,
				splitNumber:4,
				minOpen:true,
				maxOpen:true,
				showLabel:true,//minOpen,maxOpen,showLabel是一套，与text冲突
				range: [0, 500], //指定手柄对应数值的位置
				calculable: true, //是否显示拖拽用的手柄
				realtime: true,
				/*text: ['High', 'Low'],*/
				textGap: 10,
				seriesIndex: [0], //映射到那个series[i]
				inRange: {
					color: ['#e0ffff', '#006edd'],
					/*symbolSize: [30, 100]*/
				},
			},
			series: [{
				id: 'map1',
				name: '中国',
				type: 'map',
				map: 'china',
				/*zoom: 1,//当前视角的缩放比例。*/
				roam: true,
				scaleLimit: { //生效条件：配合roam使用
					min: 1,
					max: 2
				},
				/*nameMap: {//替代地图上的标记名，比如新疆用45替代
					'新疆': "45"
				},*/
				selectedMode: true,
				label: {
					show: true,
				},
				data: setMap_data(),
			}],
		}

	);
/*});*/

function setMap_data() {
	var data = [];
	var geodata = echarts.getMap('china').geoJson.features;
	for(var i = 0; i < geodata.length; i++) {
		data.push({
			name: geodata[i].properties.name,
			value: Math.round(Math.random() * 1000) //随机数
		});
	}
	return data;
}