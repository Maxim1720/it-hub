<?php

namespace Itschool\Lesson4\Example5;

class Circle extends Shape{
    private $radius;

    public function __construct($radius){
        $this->radius = $radius;
    }

    public function calculateArea(){
        return pi() * $this->radius * $this->radius;
    }
    
}