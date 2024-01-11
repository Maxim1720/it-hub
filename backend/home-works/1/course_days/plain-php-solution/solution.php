<?php
require_once "Group.php";
$evening = new Group("Evening", ["Monday", "Thursday"]);
$morning = new Group("Morning", ["Tuesday", "Friday"]);
$groups = [$evening, $morning];

$selectedDay = $argv[1];
foreach ($groups as $g){
    if($g->isInStudyDays($selectedDay)){
        echo "$selectedDay is day studying for {$g->getName()} group";
        echo "\n";
        exit(0);
    }
}
echo "Oh, shit, $selectedDay isn't day for studying :(";
echo "\n";
