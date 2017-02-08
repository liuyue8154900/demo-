/*功能:画线*/
function Manager(){
	this.boxSize = null; //格子大小
	this.numberBox = null; //格子数量
	//画线
	this.drawBackroundLine = function(boxSize,canvas,context){
		this.boxSize = boxSize;
		this.numberBox = canvas.width/this.boxSize;
		//横线
		for(var i =1; i < this.numberBox;i++){
			context.beginPath();
			context.moveTo(0,this.boxSize*i);
			context.lineTo(canvas.width,this.boxSize*i);
			context.strokeStyle ="black";
			context.stroke();
			context.save();
		}
		//竖线
		for(var i =1; i < this.numberBox;i++){
			context.beginPath();
			context.moveTo(this.boxSize*i,0);
			context.lineTo(this.boxSize*i,canvas.height);
			context.strokeStyle = "black";
			context.stroke();
			context.save();
		}
	}
	//🐍是否吃到食物
	this.snakeEatFood = function(theSnake,theFood){
		var snakeHead = theSnake.snakeBodyArray[theSnake.snakeBodyArray.length-1];
		if(snakeHead.x ==theFood.x && snakeHead.y == theFood.y){
			//吃到了食物
			//食物的位置重新随机
			theFood.changePos(theSnake);
			//🐍的身体加长
			theSnake.addBody();
		}
	}
}
