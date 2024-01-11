
<?php

/**
 * @author Maxim1720 <almatkruppov@gmail.com>
 * @note The script randomly selects a day of the week
 * and checks if it corresponds to a study day for either group.
 * @date 10.01.2024
 * @link https://github.com/Maxim1720
 * */

$daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
$selectedDay = $daysOfWeek[rand(0, count($daysOfWeek)-1)];
$result = exec("php solution.php $selectedDay");
echo $result;