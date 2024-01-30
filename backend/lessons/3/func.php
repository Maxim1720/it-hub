<?php
function multiply($arg1, $arg2): float
{
    return $arg1 * $arg2;
}

function add($arg1, $arg2)
{
    return $arg1 + $arg2;
}

function sum(...$args)
{
    $sum = 0;
    foreach ($args as $arg) {
        $sum += $arg;
    }
    return $sum;
}

function addTwoNum($arg1, $arg2): int
{
    return $arg1 + $arg2;
}

echo "{$argv[1]} and {$argv[2]}\n";

echo multiply($argv[1], $argv[2]) . "\n";
echo add($argv[1], $argv[2]) . "\n";


function getMin($num1, $num2)
{
    if ($num1 < $num2) {
        return $num1;
    }
    return $num2;
}

echo "Min is " . getMin($argv[1], $argv[2]) . "\n";


echo "Sum = " . sum(1, 2, 3, 4, 5, 6) . "\n";




$products = [
    [
        "title" => "product 1",
        "price" => 500
    ], [
        "title" => "product 2",
        "price" => 700
    ], [
        "title" => "product 3",
        "price" => 650
    ], [
        "title" => "product 4",
        "price" => 1000
    ],
];


function searchByPriceRange(array $products, int $min, int $max){
    $result = [];
    foreach($products as $product){
        if($product['price'] >= $min && $product['price'] <= $max){
            $result[] = $product;
        }
    }
    return $result;
}

$name = "product 3";
foreach ($products as $product) {
    if($product['title'] === $name){
        var_dump($product);
    }
}

$min = 600;
$max = 800;

echo "In range [$min, $max]: ";
var_dump(searchByPriceRange($products, $min, $max));
