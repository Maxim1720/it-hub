<?php
class Task{
	private string $title;
	private DateTime $expiryAt;
	private bool $done;
	private int $projectId;


	public function __get($name){
		return $this->{$name};
	}

	public function setExpiryDate(Datetime $expiryAt){
		$this->expiryAt = $date;
	}
}
