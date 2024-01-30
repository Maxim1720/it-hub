<?php
namespace Itschool\Lesson4\Example1;
class Student extends Person {
	private string $university;

	public function setUniversity(string $university){
		$this->university = $university;
	}

	public function study(): string{
		return $this->getName() . " учится в " . $this->university;
	}
}
