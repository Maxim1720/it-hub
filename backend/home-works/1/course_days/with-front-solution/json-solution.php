<?php
header("Content-Type: application/json");

$day = $_GET["day"];
$response = exec("php ../plain-php-solution/solution.php $day");

$jsonResponse = json_encode(["answer"=>$response]);
echo $jsonResponse;