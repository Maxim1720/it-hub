<?php

for ($i = 9; $i >= 0; $i--) {
    echo "$i\n";
}

$row = [];

for($i = 0; $i < 5; $i++) {
    $col = [];
    for($j = 0; $j < 5; $j++) {
        $col[] = $j;
    }
}

echo var_dump($arr);