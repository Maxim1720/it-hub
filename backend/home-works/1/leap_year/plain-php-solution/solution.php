<?php
$year = (int)$argv[1];
$response = $year . " is " . ($year%4==0? $year%100==0? $year%400==0?"":"not ":"":"not ") . "leap";
echo $response;