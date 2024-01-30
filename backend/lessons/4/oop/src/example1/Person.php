<?php

namespace Itschool\Lesson4\Example1;

class Person{
	private string $name;

	public function getName() : string{
		return $this->name;
	}

	public function setName(string $_name){
		$this->name = $_name;
	}

	public function sayHello(){
		return "Hello, my name is " . $this->name;
	}
}
