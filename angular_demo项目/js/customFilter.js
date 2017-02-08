var filters = angular.module("customFilter",[]);

filters.filter("unique",function(){
	return function(container,property){
		if(angular.isArray(container)){
			var arr = [];
			for(var i =0; i < container.length;i++){
				var obj1 = container[i];
				
				for(var j=0;j<arr.length;j++){
					var obj2 = arr[j];
					if(obj1[property]==obj2[property]){
						break;
					}
				}
				if( j == arr.length){
					arr.push(obj1);
				}
			}
			return arr;
			
		}else{
			return;
		}
	}
})

