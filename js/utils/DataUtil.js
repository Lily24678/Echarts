var DataUtil=new Object();


/**
 * 创建num个随机数，随机数的范围0-100
 */
DataUtil.getValues=function(num){
	var arr =[];
	for(var i=0;i<num;i++){
		arr.push(Math.round(Math.random()*100));
	}
	return arr;
}


/*测试*/
//console.log(DataUtil.getValues(2).toString());
