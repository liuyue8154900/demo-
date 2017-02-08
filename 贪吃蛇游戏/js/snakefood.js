function Food(w,range){
	this.x =0;
	this.y =0;
	this.w =w;
	this.range = range;
	//随机位置的方法
	this.changePos = function(theSnake){
		var isEnd = true;
		while(isEnd){
			this.x = parseInt(Math.random()*this.range)*this.w;
			this.y = parseInt(Math.random()*this.range)*this.w;
			for(var i = 0; i < theSnake.snakeBodyArray.length;i++){
				var pos = theSnake.snakeBodyArray[i];
				if(pos.x == this.x && pos.y ==this.y){
					break;
				}
			}
			if(i ==theSnake.snakeBodyArray.length){
				isEnd =false;
			}
		}
		
	
	}
	
	//绘制食物
	this.drawFood = function(context){
		context.beginPath();
		context.fillStyle ="yellow";
		context.fillRect(this.x,this.y,this.w,this.w);
		context.strokeStyle = "black";
		context.strokeRect(this.x,this.y,this.w,this.w);
		context.stroke();
		context.save();
	}
}
