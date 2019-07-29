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

/*------------数据------------分割线-----------------*/
var date = new Date();
data = DataUtil.getValues(100);
var xData=date.getPreDate_Arr(100,-1,1);

/*------------echarts设置------分割线------------------*/
var demo2Charts=echarts.init(document.getElementById("demo_2"));
demo2Charts.setOption({
	title:{
		text:'动态xAxis',
	},
	legend:{
		selectedMode:'single',
	},
	tooltip:{
		trigger:'axis',
	},
	dataZoom:[{
		type:'slider',
		height:10,//组件高度
		zoomLock:true,//只能平移，不能缩放
	}],
	dataset:{
		source:{
		 'product':xData,
		 '7天':data.slice(data.length-7),
		 '30天':data.slice(data.length-30),
		 '100天':data,			
		}
	},
	xAxis:{
		type: 'category',
		boundaryGap:true,
		axisLabel:{
			rotate:20,
//			showMinLabel:false,
//			showMaxLabel:false,
		},
	},
		
	yAxis:{},
	series:[{
		type:'line',
	},{
		type:'line',
	},{
		type:'line',
	}]
});

/*-------------事件---分割线----------------------*/
//监听事件
demo2Charts.on('legendselectchanged',function(e){
	var dataNum=parseInt(e.name.slice(0,e.name.length-1));
	var option={
		dataset:{
			source:{
			 'product':xData.slice(xData.length-dataNum),
			}
		},
	};
	
	if(dataNum>=10&&dataNum<50){
		option.dataZoom={
			start:0,
			end:30,			
		};
	}else if(dataNum>=50){
		option.dataZoom={
			start:0,
			end:10,			
		};		
	}else{
		option.dataZoom={
			start:0,
			end:100,			
		};
	}
	
	demo2Charts.setOption(option);
});
//主动触发事件
demo2Charts.dispatchAction(
	{
		 type: 'legendToggleSelect',//主动触发legendselectchanged事件
		 name:'7天',
	}
);








/*------------案例3--------分割线----------------------*/

/*------------数据---------分割线-------------------------*/
var date=new Date();
var baseXData=date.getPreDate_Arr(99,-1,0);
var baseData=DataUtil.getValues(100);

var data3=baseData.slice(0,7);
var xData3=baseXData.slice(0,7);
var index=data3.length;

function addData() {
	if (index==baseData.length){
		data3=baseData.slice(0,7);
		xData3=baseXData.slice(0,7);
		index=data3.length;
	}else{
		//向数组尾部添加一个元素
		data3.push(baseData[index]);
		xData3.push(baseXData[index]);
		//删除数组的第一个元素
		data3.shift();
		xData3.shift();		
	}
	index++;
}
var dd =setInterval(function () {
    addData();
    demo3Chart.setOption({
        xAxis: {
            data: xData3
        },
        series: [{
            name:'成交',
            data: data3
        }]
    });
}, 1000);

/*-------------echarts设置-------分割线---------------*/
var demo3Chart = echarts.init(document.getElementById("demo_3"));
demo3Chart.setOption({
	title:{
		text:'轮播显示数据',
	},
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data:xData3,
    },
    yAxis: {
        boundaryGap: [0, '50%'],
        type: 'value'
    },
    series: [
        {
            name:'成交',
            type:'line',
            animation: false,
            smooth:true,
            symbol: 'none',
            stack: 'a',
            areaStyle: {
                normal: {}
            },
            data:data3,
        }
    ]	
});

