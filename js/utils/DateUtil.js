/*获取 前num天的所有日期  提起 
 * flag1:-1 倒序 默认 正序
 * flag2:0 包含当天日期，1 不包含当天日期
 * format:日期格式化形式  yyyy-MM-dd HH:MM:SS
 */
Date.prototype.getPreDate_Arr=function(num,flag1,flag2){
	var m = this.getTime();
	var arr = [];
	if(flag2===0||flag2===1){
		for(var i=flag2;i<= num;i++){
			this.setTime(m-i*24*60*60*1000)
			arr.push(this.getFormat(this));
		}		
	}

	if(flag1==-1){
		return arr.reverse();
	}
	return arr;
}
/* 日期格式化
 * yy/MM/dd
 */
Date.prototype.getFormat=function(date){
	var date = date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate();
	return date;
}


/*测试*/
//var date = new Date();
//console.log(date.getPreDate_Arr(2,-1,0).toString());
