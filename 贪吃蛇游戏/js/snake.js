/*🐍🐍🐍*/
function Snake(bodylength,color,w){ //蛇头的颜色
	this.bodylength = bodylength;
	this.color = color;
	this.WIDTH = w;  //一节身体的大小
	this.snakeBodyArray =[]; // 用来存储🐍每节身体的坐标.
	this.direction = "right"; //🐍移动的初始方向.
	this.prevBody =[];
	//初始化蛇的状态,注意这个方法在初始化蛇对象的时候就需要调用.
	//数组里面最后一个元素是蛇头
	this.initSnake = function(context){
		for(var i =0; i< this.bodylength;i++){
			var pos ={
				x:i*this.WIDTH,
				y:0,
			}
	 	this.snakeBodyArray.push(pos);
		}
		this.drawSnakeBody(context);
			
			
	}
	
	//1.绘制🐍身体
	this.drawSnakeBody = function(context){
		var body = [];
		if(isDie){
			body = this.prevBody;
		}else{
			body = this.snakeBodyArray;
		}
		for(var i = 0; i < body.length;i++){
			var pos = body[i];
			context.beginPath();
			if( i == body.length-1){
				context.fillStyle = this.color;
			}else{
				context.fillStyle = "black";
			}
			context.fillRect(pos.x,pos.y,this.WIDTH,this.WIDTH);
			context.strokeStyle = "white";
			context.strokeRect(pos.x,pos.y,this.WIDTH,this.WIDTH);
			context.stroke();
			context.save();
		}
	}
	//2.🐍移动
	this.moveSnake = function(){
		this.prevBody = [];
		for(var i=0; i < this.snakeBodyArray.length;i++){
			this.prevBody.push(this.snakeBodyArray[i]);
		}
		this.snakeBodyArray.shift();
		var currentHead = this.snakeBodyArray[this.snakeBodyArray.length - 1];
		var newHead = {};
		switch (this.direction){
			case "left":
				newHead.x = currentHead.x-this.WIDTH;
				newHead.y = currentHead.y;
				break;
			case "top":
				newHead.x = currentHead.x;
				newHead.y = currentHead.y-this.WIDTH;
				break;
			case "right":
				newHead.x = currentHead.x + this.WIDTH;
				newHead.y = currentHead.y;
				break;
			case "bottom":
				newHead.x = currentHead.x ;
				newHead.y = currentHead.y + this.WIDTH;
				break;
		}
		this.snakeBodyArray.push(newHead);
	}
	
	//蛇身体增加长度
	this.addBody = function(){
		var pos ={x:200,y:100,}
		this.snakeBodyArray.unshift(pos);
	}
	
	//🐍是否碰撞了墙壁或者自己
	this.crashCheck = function(canvas,timer){
		var snakeHead = this.snakeBodyArray[this.snakeBodyArray.length-1];
		if(snakeHead.x >= canvas.width || snakeHead.x < 0 || snakeHead.y < 0 || snakeHead.y >= canvas.height){
				clearInterval(timer);
					isDie = true;
					alert("Game over");
					get();
					return;
//					
//					
		}
//		if(snakeHead.x >= canvas.width ){
//			for(var i = 0; i< this.snakeBodyArray.length;i++){
//						this.snakeBodyArray[i].x -=this.WIDTH;
//					}
//			alert("Game over");
//			this.drawSnakeBody(context);
//			clearInterval(timer);
//		}
//		if(snakeHead.x < 0){
//			for(var i = 0; i< this.snakeBodyArray.length;i++){
//						this.snakeBodyArray[i].x +=this.WIDTH;
//					}
//			alert("Game over");
//			this.drawSnakeBody(context);
//			clearInterval(timer);
//		}
//		if(snakeHead.y < 0 ){
//			for(var i = 0; i< this.snakeBodyArray.length;i++){
//						this.snakeBodyArray[i].y +=this.WIDTH;
//					}
//			alert("Game over");
//			this.drawSnakeBody(context);
//			clearInterval(timer);
//		}
//		if(snakeHead.y >= canvas.height ){
//			for(var i = 0; i< this.snakeBodyArray.length;i++){
//						this.snakeBodyArray[i].y -=this.WIDTH;
//					}
//			alert("Game over");
//			this.drawSnakeBody(context);
//			clearInterval(timer);
//		}
//		
		
		
		//循环检测身体部分是否发生了碰撞
		for(var i =0; i < this.snakeBodyArray.length-1;i++){
			var bodyPice = this.snakeBodyArray[i];
			if(snakeHead.x == bodyPice.x && snakeHead.y ==bodyPice.y){
						clearInterval(timer);
						isDie =true;
						alert("Game over");
						
			}
		}
	}
}

