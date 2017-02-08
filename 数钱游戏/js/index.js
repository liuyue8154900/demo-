$(".footer_btn").eq(0).on("touchstart",function(){
	$("#shade,#shade1").css("display","block");
	$("#shuqian").css("display","block");
})
$("#closeBtn").on("touchstart",function(){
	$("#shade").css("display","none");
	$("#shuqian").css("display","none");
})
$(".footer_btn").eq(1).on("touchstart",function(){
	$("#shade").css("display","block");
	$("#huodong").css("display","block");
	$("#closeBtn1").css("display","block");
})
$("#closeBtn1").on("touchstart",function(){
	$("#shade").css("display","none");
	$("#huodong").css("display","none");
	$("#closeBtn1").css("display","none");
})
$(".footer_btn").eq(2).on("touchstart",function(){
	$("#shade").css("display","block");
	$("#huodong2").css("display","block");
	$("#closeBtn2").css("display","block");
})
$("#closeBtn2").on("touchstart",function(){
	$("#shade").css("display","none");
	$("#huodong2").css("display","none");
	$("#closeBtn2").css("display","none");
})

$(".footer_btn").eq(3).on("touchstart",function(){
	$("#shade").css("display","block");
	$("#huodong3").css("display","block");
	$("#closeBtn3").css("display","block");
})
$("#closeBtn3").on("touchstart",function(){
	$("#shade").css("display","none");
	$("#huodong3").css("display","none");
	$("#closeBtn3").css("display","none");
})
$(".footer_btn").eq(4).on("touchstart",function(){
	$("#shade,#shade1").css("display","block");
	$("#shuqian1").css("display","block");
})
$("#closeBtn5").on("touchstart",function(){
	$("#shade1").css("display","none");
	$("#shuqian1").css("display","none");
})
$(".footer_btn").eq(5).on("touchstart",function(){
	$("#shade1").css("display","block");
	$("#huodong1").css("display","block");
	$("#closeBtn6").css("display","block");
})
$("#closeBtn6").on("touchstart",function(){
	$("#shade1").css("display","none");
	$("#huodong1").css("display","none");
	$("#closeBtn6").css("display","none");
})
$(".footer_btn").eq(6).on("touchstart",function(){
	$("#shade1").css("display","block");
	$("#huodong_a").css("display","block");
	$("#closeBtn7").css("display","block");
})
$("#closeBtn7").on("touchstart",function(){
	$("#shade1").css("display","none");
	$("#huodong_a").css("display","none");
	$("#closeBtn7").css("display","none");
})

$(".footer_btn").eq(7).on("touchstart",function(){
	$("#shade1").css("display","block");
	$("#huodong4").css("display","block");
	$("#closeBtn8").css("display","block");
})
$("#closeBtn8").on("touchstart",function(){
	$("#shade1").css("display","none");
	$("#huodong4").css("display","none");
	$("#closeBtn8").css("display","none");
})

//开始游戏
$("#startGame").on("touchstart",function(){
	$("#shade").css("display","block");
	$("#writeData").css("display","block");
	$("#closeBtn4").css("display","block");
})
$("#closeBtn4").on("touchstart",function(){
	$("#shade").css("display","none");
	$("#writeData").css("display","none");
	$("#closeBtn4").css("display","none");
})
var ajaxobj = null;
	if(window.XMLHttpRequest){
		ajaxobj = new XMLHttpRequest();
	}else{
		ajaxobj = new ActiveObject("Mircosoft.XMLHTTP");
	}
//正则判断

$("#form_btn").on("touchstart",function(){
	var res = /^[\u4e00-\u9fa5]{2,5}$/;
	var resPhone =/^1([3578]\d{9})|(4[57]\d{8}) $/;
	 value1 =$("#dataName").val();
	 value2 =$("#dataPhone").val();
	var resultName = res.test(value1);
	var resiltPhone = resPhone.test(value2);
	if(resultName&&resiltPhone){
		alert("提交成功");
		setTimeout(function(){
		$("#wrap").css("display","none");
		$("#page2").css("display","block");
		},1000);
//		$("#form").submit();
	//Ajax
	var url = "http://liuyueaaa.applinzi.com/index.php"+"?"+"name="+value1+"&"+"phone="+value2;
	ajaxobj.open("get",url,true);
	ajaxobj.send();
	}
	if(value1 ==""||resultName==false){
		alert("请输入2~5位的正确的人名");
	}
	if(value2 ==""||resiltPhone==false){
		alert("请输入正确的11位手机号码");
	}	
})

//背景图切换
var index =0;
setInterval(function(){
	index++;
	if(index >=4	){
		index=1;
	}
	$("#head_text").css({
		background:"url(image/p2_txt"+index+".png)",
		backgroundSize:"100% 100%",
		backgroundRepeat:"no-repeat",
	});
	
},1000)


//倒计时
var speed = 10;
var timer =null;
var lock = false;
function timerFun(){
	timer=setInterval(function(){
		speed--;
		if(speed <=0){
			clearInterval(timer);
			$("#page2").css("display","none");
			$("#page3").css("display","block");
		}
		$("#score_time").html(speed);
		
	},1000)
}
var scoreGe = 0; //个位数
var scoreShi = 0;//十位数
var scoreBai = 0; //百位数
var scoreCeshi= 0;

touch.on($("#footer_money"),"swipeup",function(event){
	event.preventDefault();
	if(lock ==false){
		timerFun();
		lock = true;
	}
	
	$("#footer_anrik").css("display","none");
	var new_money = $("<div></div>");
	new_money.appendTo($("#footer_money"));
	new_money.addClass("new_money");
	new_money.stop(true).animate({
		top:"-4rem",
		opacity:"0",
		width:"0",
		height:"0",
		left:"2rem"
	},500)
	
	setTimeout(function(){
		new_money.remove();
	},1000)
	
	//分数
	
	scoreGe++;
	scoreCeshi++;
	var scoreGea=$(".score_board").eq(2).html(scoreGe);
	if(scoreGe>=9){
		scoreGe=-1;
	}
	if(scoreCeshi%10 ==0){
		scoreShi++;
	$(".score_board").eq(1).html(scoreShi);
	if(scoreShi>=9){
		scoreShi=-1;
	}
	}
	if(scoreCeshi%100==0){
		scoreBai++;
		$(".score_board").eq(0).html(scoreBai);
	}
	if( String(scoreBai)==0){
		scoreBai="";
	}
	if( String(scoreShi)==0){
		scoreShi="";
	}
	
	var str = String(scoreBai)+String(scoreShi)+String(scoreGe);
	$("#page3_text").html("¥ "+str);
	$("#page3_txt").html("玩家最高战绩 :" +str+ " 当前排名 : 等一下");
	
	
})
	if($("#page3_text").html()!=""){
		var a=$("#page3_text").html();
		var url = "http://liuyueaaa.applinzi.com/index.php"+"?"+"score="+a;
		ajaxobj.open("get",url,true);
		ajaxobj.send();
		console.log(value1);
		alert("12");
	}
		

//再来一次
$("#again").on("touchstart",function(){
	window.location.reload();
})



