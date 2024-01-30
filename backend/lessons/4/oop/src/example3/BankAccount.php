<?php

namespace Itschool\Lesson4\Example3;

class BankAccount
{

	private int $balance;
	private int $accountNumber;
	private array $transactions;

	public function __construct($balance, $accountNumber){
		$this->balance = $balance;
		$this->accountNumber = $accountNumber;

		$this->generateTransaction();
	}

	public function withdraw($amount){
		$this->balance -= $amount;
		$this->generateTransaction();
	}
	public function deposit($amount){
		$this->balance += $amount;
		$this->generateTransaction();
	}

	public function getBalance(){
		return $this->balance;
	}

	private function generateTransaction(){
		$this->transactions[] = $this->balance;
	}

	public function getTransactions(){
		return $this->transaction;
	}


}
