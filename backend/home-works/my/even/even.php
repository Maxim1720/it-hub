<?php

if(!array_key_exists(1, $argv)){
	echo "I need at least one argument" . "\n";
	die();	
}

foreach($argv as $key=>$val){
	if($key>0){
		$num = (int) $val;
		echo $val%2===0?"Yes":"No";
		echo "\n";
	}
}
