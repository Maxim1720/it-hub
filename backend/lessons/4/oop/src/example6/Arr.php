<?php

namespace Itschool\Lesson4\Example6;

class Arr
{
    private array $numbers;
    public function __construct()
    {
        $this->numbers = [];
    }
    public function add(int|float ...$numbers): Arr
    {
        $this->numbers = array_merge($this->numbers, $numbers);
        return $this;
    }

    public function push(array $arr) : Arr{
        $this->numbers = array_merge($this->numbers, $arr);
        return $this;
    }

    public function getSum(): int|float {
        return array_sum($this->numbers);
    }
}