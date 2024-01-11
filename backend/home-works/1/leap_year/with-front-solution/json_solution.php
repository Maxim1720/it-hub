<?php
header("Content-Type: application/json");
$year = isset($_GET["year"])?(int)$_GET["year"]:2012;
$response = exec("php ../plain-php-solution/random-day-solution.php $year");
$jsonResponse = json_encode(["answer"=>$response]);
echo $jsonResponse;