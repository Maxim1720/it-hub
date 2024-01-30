<?php
$array = [1,2,3,4,5];
echo "$array[0]\n";
array_push($array,6);
var_dump($array);
array_pop($array);



foreach ($array as $value) {
    $res = $value<<1;
    
    echo "{$value} << 1 =  $res\n";
}

$sum = 0;
foreach ($array as $value){
    $sum += $value;
}

$sumArr = array_sum($array);

echo "sum = $sum\n";
echo "sum using array_sum =  {$sumArr}\n";