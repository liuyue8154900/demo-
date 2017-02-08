<?php 
	header("Access-Control-Allow-Origin:*");
	$name = $_GET["name"];
	$phone =$_GET["phone"];
	$score =$_GET["score"];

	//1.跟Mysql建立连接
	$co=mysql_connect("w.rdc.sae.sina.com.cn:3307","mm23kxm022","yl4mx2ill4ii5h1liky00h3yiw4jjx0kxi3ji341");
	//判断是否连接成功
	if($co){
		mysql_select_db("app_liuyueaaa");
		mysql_query("set names utf8");

		$sql="INSERT INTO user_info(user_name,user_phone,score) VALUES ('$name','$phone','$score')";
		mysql_query($sql);
	}
//	// echo "asdasd";
//	echo $name;
//	$name = $_GET["name"];
//	header("Access-Control-Allow-Origin:*");
//	$arr =array("message"=>"ok");
////	echo json_encode($arr);
//	echo "$name";

 ?>