<?php

namespace Itschool\Lesson4\Example5;

use Itschool\Lesson4\Example5\ShapeInterface;

class Square implements ShapeInterface
{
    private float $sideSize;

    public function __construct($sideSize)
    {
        $this->sideSize = $sideSize;
    }

    public function sideSize()
    {
        return $this->sideSize;
    }

    public function calculateArea()
    {
        return pow($this->sideSize, 2);
    }
}
