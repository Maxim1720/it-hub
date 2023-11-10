// 1. Вывод чисел от 1 до 10
function printNumbers() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}
printNumbers();

// 2. Оценка оценки
function getGrade(score) {
    if (score >= 90 && score <= 100) {
        return "A";
    } else if (score >= 80 && score <= 89) {
        return "B";
    } else if (score >= 70 && score <= 79) {
        return "C";
    } else if (score >= 60 && score <= 69) {
        return "D";
    } else if (score >= 0 && score <= 59) {
        return "F";
    } else {
        return "Invalid score";
    }
}
console.log(getGrade(85));

// 3. Проверка на наименьшее число
function getSmallestNumber(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}
console.log(getSmallestNumber(15, 7));

// 4. Сумма двух чисел
function sum(a, b) {
    return a + b;
}
console.log(sum(5, 3));

// 5. Определение числа (положительное, отрицательное или ноль)
function checkNumber(num) {
    if (num > 0) {
        return "Положительное";
    } else if (num < 0) {
        return "Отрицательное";
    } else {
        return "Ноль";
    }
}
console.log(checkNumber(-7));

// 6. Определение дня недели по номеру
function getDayOfWeek(dayNumber) {
    switch (dayNumber) {
        case 1:
            return "Понедельник";
        case 2:
            return "Вторник";
        case 3:
            return "Среда";
        case 4:
            return "Четверг";
        case 5:
            return "Пятница";
        case 6:
            return "Суббота";
        case 7:
            return "Воскресенье";
        default:
            return "Неверный номер дня";
    }
}
console.log(getDayOfWeek(3));

// 7. Вывод названия месяца по его номеру
function getMonthName(monthNumber) {
    switch (monthNumber) {
        case 1:
            return "Январь";
        case 2:
            return "Февраль";
        case 3:
            return "Март";
        case 4:
            return "Апрель";
        case 5:
            return "Май";
        case 6:
            return "Июнь";
        case 7:
            return "Июль";
        case 8:
            return "Август";
        case 9:
            return "Сентябрь";
        case 10:
            return "Октябрь";
        case 11:
            return "Ноябрь";
        case 12:
            return "Декабрь";
        default:
            return "Неверный номер месяца";
    }
}
console.log(getMonthName(9));

// 8. Определение числа (положительное, отрицательное или ноль)
function checkPositiveNegativeZero(num) {
    if (num > 0) {
        return "Положительное число";
    } else if (num < 0) {
        return "Отрицательное число";
    } else {
        return "Ноль";
    }
}
console.log(checkPositiveNegativeZero(0));

// 9. Проверка, является ли год XXI веком
function isXXICentury(year) {
    if (year >= 2001 && year <= 2100) {
        return "Да, это XXI век";
    } else {
        return "Нет, это не XXI век";
    }
}
console.log(isXXICentury(prompt("Введите год")));

// 10. Функция для приветствия пользователя
function greetUser(name) {
    return("Привет, " + name + "!");
}

greetUser("Maxim");