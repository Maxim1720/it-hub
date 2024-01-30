<?php

namespace Itschool\Lesson4\Example5;

use Itschool\Lesson4\Example5\ShapeInterface;

class ShapeAreaPrinter
{
    public function print(ShapeInterface $shape)
    {
        echo $shape->calculateArea() . "\n";
    }
}
