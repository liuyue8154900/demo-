var planeCanvas = document.getElementById("planeCanvas");
var context = planeCanvas.getContext("2d");
var PLANEWIDTH = 66; //常量  飞机的宽度
var PLANEHEIGHT = 82 ; //飞机的高度  --- 常量
var timer = null; 
var bulletMusic  = document.getElementById("#bullet");//子弹音乐
var backgroundMusic = document.getElementById("background");
var gameover = document.getElementById("gameover");
var enemy1 = document.getElementById("enemy1");
var enemy2 = document.getElementById("enemy2");
var enemy3= document.getElementById("enemy3");
if(IsPC()){
	planeCanvas.width =320;
	planeCanvas.height = 568;
}else{
	planeCanvas.width  = document.documentElement.clientWidth || document.body.clientWidth;
	planeCanvas.height = document.documentElement.clientHeight || document.body.clientHeight;
}

var bg = new Background(planeCanvas.height);
bg.drawBG(context,planeCanvas);
var hero = new HeroPlane((planeCanvas.width-PLANEWIDTH)/2,planeCanvas.height-PLANEHEIGHT,PLANEWIDTH,context,planeCanvas);
var manager = new Manager();
manager.bindKeyBord(hero,6);

//子弹
var bulletVC = new BulletController();

//敌机
var enemyVC = new EnemyController(planeCanvas);

timer=setInterval(function(){
	context.clearRect(0,0,planeCanvas.width,planeCanvas.height);
	bg.moveBG(4,context,planeCanvas);
	hero.moveHero(hero.direction,6);
	hero.drawHero();
	//产生子弹
	bulletVC.produceBullet(hero);
	//移动子弹
	bulletVC.moveBullet();
	//绘制子弹
	bulletVC.drawBullet(context);
	
	//产生敌人
	enemyVC.produceEnemy();
	//移动敌人
	enemyVC.moveEnemy();
	//绘制敌人
	enemyVC.drawEnemy(context);
	
	manager.heroFireEnemy(bulletVC,enemyVC);
	
	manager.heroDie(enemyVC,hero);
	
},30)