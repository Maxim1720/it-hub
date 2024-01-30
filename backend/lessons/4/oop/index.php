<?php
include_once "./vendor/autoload.php";
//
//use Itschool\Lesson4\Example1\Person;
//use Itschool\Lesson4\Example1\Student;
//use Itschool\Lesson4\Example3\BankAccount;
//use Itschool\Lesson4\Example5\Circle;
//use Itschool\Lesson4\Example5\ShapeAreaPrinter;
//use Itschool\Lesson4\Example5\Square;
use Itschool\Lesson4\Example6\Arr;
use Itschool\Lesson4\Example6\User;

/*$person1 = new Person();
$person1->setName("Johny Sins");
echo $person1->getName() . "\n";
var_dump($person1);
echo "\n";


$person2 = new Person();
$person2->setName("Sagyndyq");
echo $person2->getName() . "\n";
var_dump($person2);
echo "\n";


echo $person1->sayHello() . "\n";
echo $person2->sayHello() . "\n";

$student = new Student();
$student->setName($person1->getName());
$student->setUniversity("It-Hub");

echo $student->study() . "\n";



$account = new BankAccount(500, 123456789);
$account->withdraw(150);
$account->deposit(1500);
echo $account->getBalance() . "\n";
var_dump($account);


$shapeAreaPrinter = new ShapeAreaPrinter();
$circle = new Circle(12);
$shapeAreaPrinter->print($circle);


$c1 = new Circle(15);
$c2 = new Circle(20);
$c3 = new Circle(25);

$shapes = [$c1, $c2, 456, $c3];

foreach($shapes as $i){
    try{
        $shapeAreaPrinter->print($i);
    }
    catch (TypeError $error){
        echo $i . " is not shape\n";
    }
}


$square = new Square(15);
echo "square area: ";
$shapeAreaPrinter->print($square);*/


// $arr = new Arr();

// $arr->add(5)->add(5)->add(5, 6, 7, 8)->add(1, 2, 3)->push([1])->push([1]);
// echo $arr->getSum() . "\n";

// echo $arr->add(5)->push([5,6])->getSum() . "\n";

// $user = new User("Max", 25);
// echo "$user \n";
// $user->name = "Lol";
// echo "$user \n";
// $user->age = 102;
// echo "$user \n";
// $user->age = -12;
// echo "$user \n";
// $user->name = "a";
// echo $user . "\n";
// $user->name = "ab";
// echo $user . "\n";
// $user->name = "abc";
// echo $user . "\n";
// $user->name = "Roma";
// echo $user . "\n";
// echo "\n";