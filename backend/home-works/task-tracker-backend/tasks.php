<?php

require_once "./vendor/autoload.php";

use Taskforge\Backend\controller\Controller;
use Taskforge\Backend\model\saver\InFileSaver;

$saver = new InFileSaver();
$controller = new Controller($saver);


if($_SERVER["REQUEST_METHOD"] == "POST") {
    $task = new \Taskforge\Backend\model\Task();
    $task->setDone(false);
    $task->setTitle($_POST["title"]);
    $task->setProject($_POST["project"]);
    $controller->save($task);
}
else if($_SERVER["REQUEST_METHOD"] === "GET"){
    echo "lol";
}