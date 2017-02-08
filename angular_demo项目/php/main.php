<?php 
 		$my = new mysqli("127.0.0.1","root","","BJH160811");

 	if($my->connect_errno){
 		die("连接错误".$my->connect_error);
 	}

 	$my->query("set names utf8");

 	$sql = "SELECT * FROM TABLETEA";

 	$rs = $my->query($sql);

 	$final = $rs->fetch_all(MYSQL_ASSOC);

 	echo json_encode($final);

 ?>