const task1 = ()=>{
    let name = "Maxim";
    console.log(name);
}
const task2 = ()=>{
    let x=5,y=10;
    let sum = x+y;
    console.log(sum);
}

// Задача 3
function task3() {
    alert("Привет, мир!");
}

// Задача 4
function task4() {
    const confirmation = confirm("Подтвердите");
    console.log(confirmation);
}

// Задача 5
function task5() {
    const yourName = prompt("Введите ваше имя");
    console.log(yourName);
}

// Задача 6
function task6() {
    const yourAge = prompt("Введите ваш возраст");
    alert("Ваш возраст: " + yourAge);
}

// Задача 7
function task7() {
    const numOne = parseInt(prompt("Введите первое число"));
    const numTwo = parseInt(prompt("Введите второе число"));
    const sum = numOne + numTwo;
    alert("Сумма чисел: " + sum);
}

// Задача 8
function task8() {
    let xIncrement = 5;
    xIncrement += 3;
    console.log(xIncrement);
}

// Задача 9
function task9() {
    const a = 10;
    const b = 3;
    const sum = a + b;
    const difference = a - b;
    const product = a * b;
    const quotient = a / b;
    console.log(`Сумма: ${sum}, Разность: ${difference}, Произведение: ${product}, Частное: ${quotient}`);
}

// Задача 10
function task10() {
    const num1 = 7;
    const num2 = 12;
    const isGreaterThan = num1 > num2;
    const isLessThan = num1 < num2;
    const isEqual = num1 === num2;
    console.log(`Больше: ${isGreaterThan}, Меньше: ${isLessThan}, Равно: ${isEqual}`);
}

// Задача 11
function task11() {
    const isTrue = true;
    const isFalse = false;
    const result1 = isTrue && !isFalse;
    console.log(`isTrue && !isFalse: ${result1}`);
}

// Задача 12
function task12() {
    const str1 = "Hello";
    const str2 = "World";
    const combinedStr = str1 + " " + str2;
    console.log(combinedStr);
}

// Задача 13
function task13() {
    const num15 = 5;
    const str15 = String(num15);
    console.log(str15);
}

// Задача 14
function task14() {
    const str16 = "10";
    const num16 = Number(str16);
    console.log(num16);
}

// Задача 15
function task15() {
    const bool17 = true;
    const num17 = Number(bool17);
    console.log(num17);
}

// Задача 16
function task16() {
    const num18 = 0;
    const bool18 = Boolean(num18);
    console.log(bool18);
}

// Задача 17
function task17() {
    const str19 = "true";
    const bool = Boolean(str19);
    console.log(bool);
}

task1();
task2();
task3();
task4();
task5();
task6();
task7();
task8();
task9();
task10();
task11();
task12();
task13();
task14();
task15();
task16();
task17();
