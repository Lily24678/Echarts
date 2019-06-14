$.get("json/treedata.json", function(data) {
	echarts.init(document.getElementById("tree1"), "light").setOption({
		color: ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'],
		title: {
			text: '树图：',
			link: 'js/tree1.js',
			subtext: '副标题：图书馆藏书',
			sublink: 'json/treedata.json',
		},
		tooltip: {
			trigger: 'item',
			triggerOn: 'mousemove',
		},
		legend: {},
		series: [{
			type: 'tree',
			name: '图书馆A',
			roam: true, //鼠标平移、缩放
			expandAndCollapse: true, //子树折叠和展开的交互
			top: '5%',
			left: '7%',
			bottom: '2%',
			right: '60%',
			itemStyle: {
				color: '#c23531'
			},
			lineStyle: {
				color: '#c23531'
			},
			label: {
				position: 'left',
				verticalAlign: 'middle',
				align: 'right',
				fontSize: 9,
			},
			leaves: {
				label: {
					position: 'right',
					verticalAlign: 'middle',
					align: 'left'
				}
			},
			data: [data.A],
		}, {
			type: 'treemap',
			name: '图书馆B',
			roam: false, //鼠标平移、缩放
			leafDepth: 1,//每次点击后展开几层
			nodeClick: 'zoomToNode',
			top: '15%',
			left: '60%',
			bottom: '10%',
			right: '18%',
			label: {
				show: true,
			},
			levels: setLeves_color(data.color), //可以对树的每个层级进行配置
			data: [data.B],
		}, ],
	});
});

function setLeves_color(colorArr) {
	var levels = [];
	for(var i = 0; i < 7; i++) {
		var obj = new Object();
		obj.color = colorArr;
		levels.push(obj);
	}
	return levels;
}