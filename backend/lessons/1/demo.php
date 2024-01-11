<?php
// Пример переменных
$name = "John";         // Строковая переменная
$age = 25;              // Целочисленная переменная
$isStudent = true;      // Булева переменная

// Пример типов данных
$integerVar = 42;       // Целое число
$floatVar = 3.14;       // Дробное число
$stringVar = "Hello, PHP!"; // Строка
$boolVar = true;        // Булево значение

// Массив
$myArray = array("apple", "banana", "cherry");

// Объект
class MyClass {
    public $property = "value";
}
$objVar = new MyClass();

// NULL
$nullVar = null;

// Пример базовых операторов
// Арифметические операторы
$sum = $integerVar + $floatVar;    // Сложение
$difference = $integerVar - $floatVar; // Вычитание
$product = $integerVar * $floatVar; // Умножение
$quotient = $integerVar / $floatVar; // Деление
$remainder = $integerVar % 5;       // Остаток от деления

// Операторы сравнения
$isEqual = ($age == $sum);          // Равенство
$isNotEqual = ($age != $sum);        // Неравенство
$isGreaterThan = ($age > $sum);     // Больше
$isLessThan = ($age < $sum);        // Меньше

// Логические операторы
$andResult = ($isStudent && $boolVar);  // Логическое И
$orResult = ($isStudent || $boolVar);   // Логическое ИЛИ
$notResult = !$isStudent;               // Логическое НЕ

// Операторы инкремента и декремента
$a = 10;
$a++;  // Инкремент, $a станет равным 11
$b = 5;
$b--;  // Декремент, $b станет равным 4

// Операторы присваивания
$c = 15;
$c += 5;  // $c станет равным 20
$d = 8;
$d *= 2;  // $d станет равным 16

// Вывод результатов
echo "Name: $name, Age: $age, Student: $isStudent\n";
echo "Sum: $sum, Difference: $difference, Product: $product, Quotient: $quotient, Remainder: $remainder\n";
echo "Equal: $isEqual, Not Equal: $isNotEqual, Greater Than: $isGreaterThan, Less Than: $isLessThan\n";
echo "Logical AND: $andResult, Logical OR: $orResult, Logical NOT: $notResult\n";
echo "Increment: $a, Decrement: $b\n";
echo "Assignment: $c, $d\n";

?>

