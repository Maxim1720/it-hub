<?php

namespace Itschool\Lesson4\Example6;

class User
{
    private string $name;
    private int $age;

    private array $fillableProps = ['age', 'name'];

    public function __construct($name, $age)
    {
        $this->name = $name;
        $this->age = $age;
    }

    public function __get(string $name)
    {
        return $this->{$name};
    }

    public function __set(string $name, $value)
    {
        if(!in_array($name, $this->fillableProps)){
            return;
        }
        if ($name === 'age') {
            if ($value > 0 && $value <= 100) {
                $this->age = $value;
            }
        } elseif ($name === "name") {
            if (strlen($value) > 3) {
                $this->name = $value;
            }
        }

    }

    public function __toString(): string
    {
        return "$this->name $this->age";
    }
}