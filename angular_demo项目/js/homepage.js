app.controller("homePage",function($scope,$http){
	//轮播图
	var mySwiper = new Swiper('.swiper-container',{
	pagination:".pagination",
	autoplay:2000,
	simulateTouch : false,
	paginationClickable :true,
	autoplayDisableOnInteraction : false,
	observer:true,//修改swiper自己或子元素时，自动初始化swiper
	observeParents:true,//修改swiper的父元素时，自动初始化swiper
});  
	//连接数据库
	$http({
		method:"GET",
		url:"http://127.0.0.1/160811/%E8%8C%B6%E5%B1%85%E5%A3%AB%E9%A1%B9%E7%9B%AE/php/home.php",
	}).then(function(response){
			$scope.homeProduct = response.data;
	})
})

