//Angular 
var app = angular.module("myapp",["ngRoute","customFilter"]);

//配置路由
app.config(["$locationProvider",function($locationProvider){
	$locationProvider.hashPrefix("");
}]);

app.config(function($routeProvider){
	$routeProvider.when("/homepage",{templateUrl:"首页.html"});
	$routeProvider.when("/xinyang",{templateUrl:"xinyang.html"});
	$routeProvider.otherwise({templateUrl:"首页.html"})
})


//配置控制器
app.controller("mainMVC",function($scope,$http,$rootScope){
	$http({
		url:"http://127.0.0.1/160811/%E8%8C%B6%E5%B1%85%E5%A3%AB%E9%A1%B9%E7%9B%AE/php/main.php",
		method:"GET",
	}).then(function(response){
		$rootScope.products = response.data;
		$rootScope.sliderSrcArr = [];
		$rootScope.sliderImg = function(){
			for(var i =0;i<$rootScope.products.length;i++){
				var sliderSrc = $rootScope.products[i]["sliderimg"];
				if(sliderSrc !=""){
					$rootScope.sliderSrcArr.push(sliderSrc);
				}
			}
		}
		$rootScope.sliderImg();
		$scope.changeAdd("首页");
		
	})
	
	
	//找出热销商品
	$scope.changeAdd = function(property){
		$scope.chooseName="";
		$scope.chooseNam1="";
		$scope.chooseName2="";
		$scope.chooseName3="";
		$scope.chooseName4="";
		switch (property){
			case "首页":
			$("#head_nav_list li").css("background","");
			window.location.href="http://127.0.0.1/160811/%E8%8C%B6%E5%B1%85%E5%A3%AB%E9%A1%B9%E7%9B%AE/main.html#/homepage";
			$("#head_nav_list li").eq(0).css("background","#D2691E")
				break;
			case "信阳毛尖":
			$("#head_nav_list li").css("background","");
			$("#head_nav_list li").eq(1).css("background","#D2691E")
				break;
			case "普洱茶":
			$("#head_nav_list li").css("background","");
			$("#head_nav_list li").eq(2).css("background","#D2691E")
				break;	
			case "福鼎白茶":
			$("#head_nav_list li").css("background","");
			$("#head_nav_list li").eq(3).css("background","#D2691E")
				break;	
			case "安溪铁观音":
			$("#head_nav_list li").css("background","");
			$("#head_nav_list li").eq(4).css("background","#D2691E")
				break;	
			default:
				break;
		}

		
		$scope.hotArr =[];//全部商品
		$rootScope.collage =[]; //净含量
		$rootScope.price = []; //价格
		
		for(var i =0; i <$scope.products.length;i++){
			var obj1 = $scope.products[i];
				if(obj1["catapoty"]== property){
					$scope.hotArr.push(obj1);
					$rootScope.chooseProduct=$scope.hotArr;
					$rootScope.collage.push(obj1["colgateArr"]);
					$rootScope.price.push(obj1["priceArr"]);
				}
		}
		$rootScope.hotProduct =[]; //热销商品
		for(var i =0;i<$scope.hotArr.length;i++){
			var product = $scope.hotArr[i];
			if(product["hotProducts"]!=""){
				$rootScope.hotProduct.push(product);
				$rootScope.type=product["catapoty"];
			}
		}
			$rootScope.pageNumber();
			$rootScope.productClass("1");
			$rootScope.chooseClick("1","全部");
			
	}
	

	//分页number
	$rootScope.pageNumber=function(){
		$rootScope.numArr=[];
		var num = $scope.hotArr.length/9;
		$scope.nb = num;
		for(var i =0; i< num;i++){
			$rootScope.numArr.push(i+1);
		}
	}
	
	//点击分页按钮显示对应商品
	$rootScope.productClass=function(page){
	
		if(page>=Math.ceil($scope.nb)){
			page=Math.ceil($scope.nb)
		}
		if(page<=0){
			page=1;
		}
		$rootScope.number1 =page;
		$rootScope.pageClass=[];
		$scope.pagenu =page;
		for(var i=(page-1)*9;i<page*9&&i<$scope.hotArr.length;i++){
			$rootScope.pageClass.push($scope.hotArr[i]);
		}
		$(".libtn").css({
			background:"",
			color:"",
		});
		$(".libtn").eq(page-1).css({
			background:"blue",
			color:"white",
		});
	}
	
	//筛选按钮点击
	$rootScope.chooseClick=function(property,obj){
//		$scope.hotArr=$scope.chooseProduct;
		$rootScope.chooseShop=[];
		if(obj=="全部"){
			$rootScope.chooseShop=$scope.hotArr;
			$(".choose_quan").css({
				background:"#bf8c26",
				color:"white",
			})
		}
		$scope.chooseArr=[];
		$rootScope.cliclArr=[];
		$rootScope.otherArr=[];//记录点击
		$scope.allArr=[]; //二维数组  记录全部数据
		for(var j=0;j<$rootScope.chooseProduct.length;j++){
			$scope.chooseArr.push($rootScope.chooseProduct[j][property])
			if($rootScope.chooseProduct[j][property]==obj){
				$rootScope.otherArr.push($rootScope.chooseProduct[j]);
				for(var i =0;i<$rootScope.otherArr.length;i++){
					var obj1 = $rootScope.otherArr[i];
					$scope.allArr.push(obj1);
				}
				
			}
			
		}
		
		console.log($scope.allArr);
	
		$scope.hotArr=$rootScope.chooseShop;
		var num1= $scope.chooseArr.indexOf(obj);
		console.log($scope.hotArr)
		$rootScope.cliclArr.push($scope.chooseName);
		switch (property){
			case "brand":
			$(".choose_quan").eq(0).css({background:"",color:""});
			$scope.chooseName = $scope.chooseArr[num1];
			
			if(obj=="1"){
				$(".choose_quan").eq(obj-1).css({background:"#bf8c26",color:"white"});
			$scope.hotArr = $rootScope.chooseProduct;
				
			}
				break;
			case "facade":
			$(".choose_quan").eq(1).css({background:"",color:""});
			$scope.chooseName1 = $scope.chooseArr[num1];
			if(obj=="2"){
				$(".choose_quan").eq(obj-1).css({background:"#bf8c26",color:"white"});
				$scope.hotArr = $rootScope.chooseProduct;
			}
				break;
			case "rank":
			$scope.chooseName2 = $scope.chooseArr[num1];
			$(".choose_quan").eq(2).css({background:"",color:""});
			if(obj=="3"){
				$(".choose_quan").eq(obj-1).css({background:"#bf8c26",color:"white"});
				$scope.hotArr = $rootScope.chooseProduct;
			}
				break;
			case "colgateArr":
			$scope.chooseName3 = $scope.chooseArr[num1];
			$(".choose_quan").eq(3).css({background:"",color:""});
			if(obj=="4"){
				$(".choose_quan").eq(obj-1).css({background:"#bf8c26",color:"white"});
				$scope.hotArr = $rootScope.chooseProduct;
			}
				break;
			case "priceArr":
			$scope.chooseName4 = $scope.chooseArr[num1];
			$(".choose_quan").eq(4).css({background:"",color:""});
			if(obj=="5"){
				$(".choose_quan").eq(obj-1).css({background:"#bf8c26",color:"white"});
				$scope.hotArr = $rootScope.chooseProduct;
			}
				break;
			default:
				break;
		}
		
	}
	
})


