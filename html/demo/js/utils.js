//前n天时间数组,不包括当前日期
function beforeDay(number) {
	var dates = [];
	var boundaryValue = new Date(); //获取系统当前时间
	for(var i = number; i > 0; i--) {
		boundaryValue.setDate(boundaryValue.getDate() - 1);
		dates.push((boundaryValue.getMonth()+1) + "/" + boundaryValue.getDate()+"\n"+boundaryValue.getFullYear() + "年");
		
	}
	return dates.reverse();
}
