/*---------------入门示例-line---分割线--------------------*/
// 基于准备好的dom，初始化 echarts 实例并绘制图表。
echarts.init(document.getElementById('main')).setOption({
	backgroundColor: '#F0FFFF',
	title: {
		text: 'Line Chart'
	},
	tooltip: {},
	legend: {
		data: ['趋势']
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
	xAxis: {},
	yAxis: {},
	series: [{
		name: '趋势',
		type: 'line',
		smooth: true, //折线变平滑的曲线
		data: [
			[12, 5], //左x，右y.在该书写方式下xAxis{}，否则冲突
			[24, 20],
			[36, 36],
			[48, 10],
			[60, 10],
			[72, 20]
		]
	}]
});







/*-------------------------案例1-虚实混搭----分割线--------------------------------------------*/
/*---------数据处理 分割线--------*/
function setSeries(data) {
	var series = [];
	data.forEach(function(item, i) {
		series.push({
			type: 'line',
			name: item[0],
			lineStyle: {
				type: 'dashed',
			},
			symbolSize:0,
			data: convertData_dashed(item[1]) //当只有一个轴为类目轴（axis.type 为 'category'）的时候，数据可以简化用一个一维数组表示。
		}, {
			type: 'line',
			name: item[0],
			symbolSize:0,
			lineStyle: {
				type: 'solid',
			},
			data: convertData_solid(item[1]) //当只有一个轴为类目轴（axis.type 为 'category'）的时候，数据可以简化用一个一维数组表示。
		});
	});

	return series;
}

function convertData_dashed(data) {
	//				var date=new Date();
	//				var index = date.getDay();
	//				var res=[];
	//				for(var i=0;i<index+1;i++){
	//					res.push('-');
	//				}
	//				return res.concat(data.slice(index));
	return data;
}

function convertData_solid(data) {
	var date = new Date();
	var index = date.getDay();
	var res = [];
	res = res.concat(data.slice(0, index + 1));
	for(var i = index; i < data.length; i++) {
		res.push('-');
	}
	return res;
}

/*-------------line设置分割线---------------*/
var dataA = [51, 10, 15, 65, 45, 80, 100];
var dataB = [5, 87, 96, 45, 33, 55, 74];
var dataC = [13, 25, 49, 37, 51, 66, 89];
echarts.init(document.getElementById('demo_1')).setOption({
	title: {
		text: '虚实混搭',
	},
	legend: {},
	tooltip: {
		trigger: 'axis',
		//					formatter:function(param){
		//						debugger;
		//					},
		formatter: '{b0}: <br />{a0}:{c0}<br />{a2}: {c2}<br />{a4}: {c4}',
	},
	grid: {
		show: true,
	},
	xAxis: {
		data: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
		boundaryGap:false,
	},
	yAxis: {
		type: 'value',
	},
	dataZoom:[{
		//disabled:true,//停止组件功能，不可拖拽缩放来显示数据
		type:'inside',
//		start :25,
//		end:100,
		startValue:'周三',//数据窗口范围的起始数值，覆盖start的设置
		endValue:'周五',//覆盖end的设置
		minSpan:35,//缩放 最小数据显示
		maxSpan:65,//缩放 最大数据显示
		moveOnMouseMove:'alt',
	},{
		type:'slider',
		orient:'vertical',
	},{
		type:'slider',
		dataBackground:{
			lineStyle:{
				color:'green',
				width:2,
			},
			areaStyle:{
				color:'red',
			}			
		},
		orient:'horizontal',
	}],
	series: setSeries([
		['A线', dataA],
		['B线', dataB],
		['C线', dataC]
	])
});







/*------------案例2--------分割线----------------------*/
var demo2Charts=echarts.init(document.getElementById("demo_2"));
demo2Charts.setOption({
	series:[{
		type:'line',
		name:'日常数据',
		
	}]
});