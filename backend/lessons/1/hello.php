<?php

$arr = [];
$arr[] = 10+20;

$arr[] = 10-20;

$arr["10+20"]=30;
$arr["10-20"]=-10;
$arr["5+5"]=10;

foreach($arr as $k => $v){
	echo $k . "=" . $v . "<br>";
}

?>
