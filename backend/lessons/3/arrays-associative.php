<?php
$products = [
    'product 1' => 100,
    'product 2' => 200,
    'product 3' => 300
];
foreach ($products as $name => $price){
    echo "$name: $price\n";
}


$array  =[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];


echo $array[0][1] . "\n";
echo $array[2][0] . "\n";
echo $array[1][0] . "\n";
echo $array[0][0] . "\n";