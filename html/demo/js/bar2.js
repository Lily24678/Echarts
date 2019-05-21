$.get('json/data.json', function(data) {
	echarts.init(document.getElementById("bar2")).setOption({
		color: ['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],
		grid: [
	        {bottom: '50%',top:90,width:'68%',},
	        {top: '65%',bottom:25,width:'68%',}
	    ],
		title:{
			text:'标题：dataset管理数据',
			link:'js/bar2.js',
			subtext:'副标题：近7日的观影人数',
			sublink:'',
		},
		legend:{
			top:40,
			orient:'vertical',//legend的显示方向
			align:'right',
			right:'5',
				
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
	            dataView: {readOnly: false},
	            magicType: {
	            	type: ['line', 'bar']
	            },
	            restore: {},
	            saveAsImage: {},
	        },
	    },
	    dataset: {
	        // 提供一份数据。
	        source: [
	           beforeDay_dataset(7),
	           data.A_dataset,
	           data.B_dataset
	        ],
	    },
		xAxis: [
			{
				type: 'category',//使用dataset，此不可少
				gridIndex: 0,//第n个grid
				name:'日期',
			},
			{
				type: 'category',//使用dataset，此不可少
				gridIndex: 1,//第n个grid
			},
		],
		yAxis: [
			{
				name:'人数',
				type: 'value',
				gridIndex: 0,//第n个grid
				min: function(value) {//value={min: 800, max: 2000}
					return value.min-100;
				},
				max: function(value) {//value={min: 800, max: 2000}
					return value.max;
				},
				splitNumber:2,
			},{
				gridIndex: 1,//第n个grid
			},
		],
		tooltip:{},
		series: [
		 // 这几个系列会在第一个直角坐标系中，每个系列对应到 dataset 的每一行。
			{
			type: 'bar',
			seriesLayoutBy: 'row',//默认column
			/*barWidth:30,*/
			name:'A影院',
			 markPoint : {
                data : [
                    {type : 'max',seriesName:'A最大值'},
                    {type : 'min',seriesName:'A最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average',seriesName:'A平均值'}
                ]
            },
			label:{
				show:true,
				position:'insideTop',
				formatter: function(params){
					return params.data[1];
				},
			},
		},{
			type: 'bar',
			seriesLayoutBy: 'row',//默认column
			/*barWidth:30,*/
			name:'B影院',
            markPoint : {
                data : [
                    {type : 'max',seriesName:'B最大值'},
                    {type : 'min',seriesName:'B最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average',seriesName:'B平均值'}
                ]
            },
		},
		// 这几个系列会在第二个直角坐标系中，每个系列对应到 dataset 的每一列。
		{type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
	   	{type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
	   	{type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
	   	{type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
	   	{type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
	   	{type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
	   	{type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
		]
	});
},'json');

/*dataset*/
function beforeDay_dataset(number) {
	var dates = [];
	var boundaryValue = new Date(); //获取系统当前时间
	for(var i = number; i > 0; i--) {
		boundaryValue.setDate(boundaryValue.getDate() - 1);
		dates.push((boundaryValue.getMonth()+1) + "/" + boundaryValue.getDate()+"\n"+boundaryValue.getFullYear() + "年");
		
	}
	dates.push('product');
	return dates.reverse();
}