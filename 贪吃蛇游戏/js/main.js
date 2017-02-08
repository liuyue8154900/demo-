var snakeCanvas = document.getElementById("snakeCanvas");
var context = snakeCanvas.getContext("2d");
//创建管理对象
var manager = new Manager();
var lock = false;  //false代表🔐是打开状态;
var timer = null; //定时器
var isDie = false; //false 表示🐍没有死亡;
var speed = 200; // 🐍移动的速度
manager.drawBackroundLine(20,snakeCanvas,context);

var aSnake = new Snake(10,"red",manager.boxSize);
aSnake.initSnake(context);

function get(){
	lock = false; //开锁🔐
	context.clearRect(0,0,snakeCanvas.width,snakeCanvas.height);
	manager.drawBackroundLine(20,snakeCanvas,context);
	//重新绘制蛇的身体
	aSnake.drawSnakeBody(context);
	//重新绘制食物
	aFood.drawFood(context);
}
function snakePlay(){
	timer = setInterval(function(){
	lock = false; //开锁🔐
	context.clearRect(0,0,snakeCanvas.width,snakeCanvas.height);
	manager.drawBackroundLine(20,snakeCanvas,context);
	aSnake.moveSnake();
	//重新绘制蛇的身体
	aSnake.drawSnakeBody(context);
	//重新绘制食物
	aFood.drawFood(context);
	//检测是否吃到食物
	manager.snakeEatFood(aSnake,aFood);
	//判断是否相撞
	aSnake.crashCheck(snakeCanvas,timer);
	if(aSnake.snakeBodyArray.length==10&&speed<=20){
		speed = 150;
		clearInterval(timer);
		snakePlay();
	}
	if(aSnake.snakeBodyArray.length==20&& speed<=10){
		speed = 50;
		clearInterval(timer);
		snakePlay();
	}
},speed);
}
snakePlay();
//键盘的监听事件
document.onkeydown = function(event){
	var ev = event || window.event;
	switch (ev.keyCode){
		case 37:
		if((aSnake.direction =="top" || aSnake.direction =="bottom") && lock ==false){
			aSnake.direction = "left";
			lock = true;
		}
			break;
		case 38:
		if((aSnake.direction =="left" || aSnake.direction =="right") && lock ==false){
			aSnake.direction = "top";
				lock = true;
		}
			break;
		case 39:
		if((aSnake.direction =="top" || aSnake.direction =="bottom") && lock ==false){
			aSnake.direction = "right";
				lock = true;
		}
			break;
		case 40:
	if((aSnake.direction =="left" || aSnake.direction =="right")&& lock ==false){
			aSnake.direction = "bottom";
				lock = true;
		}
			break;
	}
}
//控制食物
var  aFood = new Food(manager.boxSize,manager.numberBox);
aFood.changePos(aSnake);
aFood.drawFood(context);



