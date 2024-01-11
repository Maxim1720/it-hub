<?php
$arrayVar = [1,2,3];
$floatVar = 3.14;
$strVar = "Hello, PHP!";

$length = strlen($strVar);

//$isArray = is_array($arrayVar);
//
$isArray = is_array($strVar);
var_dump($isArray);
//exit(0);
//
echo $isArray;
echo $length;
echo "\n";


$intValue = intval($floatVar);
$strValue = strval($floatVar);
$floatValue = floatval(12456784566789456);
$doubleValue = doubleval(123124897984646483123456123123123);

var_dump($intValue, $strValue, $floatValue, $doubleValue);




$number = 1;

if($number){
    if($number>0) {
        echo $number . " Число положительное";
    }
    else{
        echo $number . " Число отрицательное";
    }
}
else{
    echo $number . " это 0";
}
echo "\n";

echo $number? $number>0?"Положительное":"Отрицательное":"Это ноль";

echo "\n";


$day = "";

switch ($day){
    case "Monday":
        echo "It's the beginning of the week.";
        break;
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
        echo "It's the middle of the week.";
        break;
    case "Friday":
        echo "It's almost the weekend!";
        break;
    default:
        echo "It's a weekends day.";
}

exit("\nok\n");