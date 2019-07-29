/*------------ECharts 入门示例 -bar-----分割线----------------------------*/
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));

// 指定图表的配置项和数据
var option = {
	//通用设置： 全局调色盘。
	color: ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'],
	backgroundColor: '#F0FFFF', //通用设置：
	textStyle: { //通用设置：
		color: 'rgba(139, 0, 139, 1)'
	},
	label: { //通用设置：
		textStyle: {
			color: 'rgba(255, 255, 255, 0.3)'
		}
	},
	title: { //通用设置：
		text: 'ECharts 入门示例'
	},
	tooltip: {//通用设置：鼠标悬停时会显示提示，默认提示内容有series.name、xAxis.data(bar/line)、series.data
		trigger:'axis',
		formatter:'{a0}<br/>{b0} : {c0}',
	}, 
	legend: { //通用设置：要配合series.name使用,单独存在不起作用
		data: ['销量']
	},
	toolbox: { //通用设置：bar/pie
		feature: {
			dataView: {}, //修改 相对 还原restore
			saveAsImage: { //图片下载
				pixelRatio: 2 //下载后图片放大的倍数，效果只有0和2的区别
			},
			restore: {} //还原 相对 修改dataView
		}
	},
	itemStyle: { //通用设置：诸如阴影、透明度、颜色、边框颜色、边框宽度等，这些样式一般都会在系列的 itemStyle 里设置
		// 阴影的大小
		shadowBlur: 200,
		// 阴影水平方向上的偏移
		shadowOffsetX: 0,
		// 阴影垂直方向上的偏移
		shadowOffsetY: 0,
		// 阴影颜色
		shadowColor: 'rgba(0, 0, 0, 0.5)',
		emphasis: { //itemStyle的emphasis是鼠标 hover 时候的高亮样式。
			shadowBlur: 200,
			shadowColor: 'rgba(0, 0, 0, 1)'
		},
	},
	xAxis: {
		data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
	},
	yAxis: {},
	series: [{
		// 此系列自己的调色盘。
		color: ['#dd6b66', '#759aa0', '#e69d87', '#8dc1a9', '#ea7e53', '#eedd78', '#73a373', '#73b9bc', '#7289ab', '#91ca8c', '#f49f42'],
		name: '销量',
		type: 'bar',
		data: [5, 20, 36, 10, 10, 20]
	},{
		// 此系列自己的调色盘。
		color: ['#759aa0', '#e69d87', '#8dc1a9', '#ea7e53', '#eedd78', '#73a373', '#73b9bc', '#7289ab', '#91ca8c', '#f49f42'],
		name: '销量',
		type: 'line',
		data: [5, 20, 36, 10, 10, 20]
	}]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);





<!-- ----------------------数据到图形的映射--分割线----------------------->
var myChart = echarts.init(document.getElementById('main3'));
var option = {
	legend: {},
	tooltip: {},
	dataset: {
		source: [
			['product', '2012', '2013', '2014', '2015'],
			['Matcha Latte', 41.1, 30.4, 65.1, 53.3],
			['Milk Tea', 86.5, 92.1, 85.7, 83.1],
			['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4]
		]
	},
	xAxis: [{
			type: 'category',
			gridIndex: 0
		},
		{
			type: 'category',
			gridIndex: 1
		}
	],
	yAxis: [{
			gridIndex: 0
		},
		{
			gridIndex: 1
		}
	],
	grid: [{
			bottom: '55%'
		},
		{
			top: '55%'
		}
	],
	series: [
		// 这几个系列会在第一个直角坐标系中，每个系列对应到 dataset 的每一行。
		{
			type: 'bar',
			seriesLayoutBy: 'row'
		},
		{
			type: 'bar',
			seriesLayoutBy: 'row'
		},
		{
			type: 'bar',
			seriesLayoutBy: 'row'
		},
		// 这几个系列会在第二个直角坐标系中，每个系列对应到 dataset 的每一列。
		{
			type: 'bar',
			xAxisIndex: 1,
			yAxisIndex: 1
		},
		{
			type: 'bar',
			xAxisIndex: 1,
			yAxisIndex: 1
		},
		{
			type: 'bar',
			xAxisIndex: 1,
			yAxisIndex: 1
		},
		{
			type: 'bar',
			xAxisIndex: 1,
			yAxisIndex: 1
		}
	]
};
myChart.setOption(option);





<!-- -------------dataset管理数据--------分割线------------------------->
var myChart = echarts.init(document.getElementById('main4'));
var option = {
	legend: {},
	tooltip: {},
	dataset: {
		// 提供一份数据。
		source: [
			['product', '2015', '2016', '2017'], //这里指定了维度名的顺序
			['Matcha Latte', 43.3, 85.8, 93.7],
			['Milk Tea', 83.1, 73.4, 55.1],
			['Cheese Cocoa', 86.4, 65.2, 82.5],
			['Walnut Brownie', 72.4, 53.9, 39.1]
		]
	},
	// 声明一个 X 轴，类目轴（category）。默认情况下，类目轴对应到 dataset 第一列。
	xAxis: {
		type: 'category'
	},
	// 声明一个 Y 轴，数值轴。
	yAxis: {},
	// 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。
	series: [{
			type: 'bar'
		},
		{
			type: 'bar'
		},
		{
			type: 'bar'
		}
	]
};
myChart.setOption(option);





<!-- -----------------异步数据加载示例-----分割线---------------->
var myChart = echarts.init(document.getElementById("main2"));
var app = {};
option = null;

function fetchData(cb) {
	// 通过 setTimeout 模拟异步加载
	setTimeout(function() {
		cb({
			categories: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
			data: [5, 20, 36, 10, 10, 20]
		});
	}, 3000);
}

// 初始 option
option = {
	title: {
		text: '异步数据加载示例'
	},
	tooltip: {},
	legend: {
		data: ['销量']
	},
	xAxis: {
		data: []
	},
	yAxis: {},
	series: [{
		name: '销量',
		type: 'bar',
		data: []
	}]
};

myChart.showLoading(); //显示loading 动画

fetchData(function(data) {
	myChart.hideLoading(); //隐藏loading 动画
	myChart.setOption({
		xAxis: {
			data: data.categories
		},
		series: [{
			// 根据名字对应到相应的系列
			name: '销量',
			data: data.data
		}]
	});
});;
if(option && typeof option === "object") {
	myChart.setOption(option, true);
}





/*---------------案例1-----分割线-----------------*/
echarts.init(document.getElementById("demo_1")).setOption({
	title:{
		text:'纵坐标-类目显示',
		left:'center',
		top:'20',
	},
	tooltip: {
		show:true,
		trigger:'item',
	},	
	legend:{
		left:'right',
		top:'bottom',
		orient:'vertical',
	},
	grid:{
		containLabel:true,		
	},
	xAxis:{
		type:'value',
		show:false,
	},
	yAxis:{
		type:'category',
		data:['上海','安徽','长安'],
		axisLine:{
			show:false,
		},
		axisTick:{
			show:false,
		},
		axisLabel:{
			fontSize:24,
		},
	},
	series:[
		{
			name:'1-3天以内',
			type:'bar',
	        itemStyle: {
	            barBorderRadius:20
	        },			
			barWidth:'20%',
			stack:'sum',//数据堆叠
			data:[10,20,30],
			z: 10,			
		},{
			name:'3-5天以内',
			type:'bar',
	        itemStyle: {
	            barBorderRadius:20
	        },			
			barWidth:'20%',
			stack:'sum',//数据堆叠
			data:[10,20,30],
			z: 10,	
		},{
			name:'5天以上',
			type:'bar',
	        itemStyle: {
	            barBorderRadius:20
	        },			
			barWidth:'20%',
			stack:'sum',//数据堆叠
			data:[10,20,30],
			z: 10,
		},{
	        type: 'bar',//灰色背景部分
	        itemStyle: {
                color: '#ddd'
	        },
	        silent: true,
	       	barWidth:'20%',
	        barGap: '-100%', // Make series be overlap
	        data: [100, 100, 100]
		}
	]
});


