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
			data: convertData_dashed(item[1]) //当只有一个轴为类目轴（axis.type 为 'category'）的时候，数据可以简化用一个一维数组表示。
		}, {
			type: 'line',
			name: item[0],
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
var dataA = [5, 10, 15, 35, 25, 30, 21];
var dataB = [20, 11, 18, 30, 20, 25, 30];
var dataC = [10, 15, 30, 25, 28, 15, 33];
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
	},
	yAxis: {
		type: 'value',
	},
	series: setSeries([
		['A线', dataA],
		['B线', dataB],
		['C线', dataC]
	])
});