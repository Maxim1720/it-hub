let hello = "Hello world";

console.log(hello.length);
console.log(hello[0]);
console.log(hello[hello.length-1]);
console.log(hello.charAt(-1));

console.log(hello.toUpperCase());
console.log(hello.toLowerCase());
console.log(hello.includes('H'));

let num = 5;

console.log(isNaN(hello));

console.log(Math.random());
console.log(Math.random());

console.log(Math.pow(2,3));

for(c in hello){
    console.log(hello[c]);
}

console.log(Object.keys(hello));
console.log(Object.values(hello));
console.log(Object.entries(hello));


let numbers = [1,2,3,4,5];
let fruits = ["Яблоко", "Банан", "Киви"];

console.log(numbers);
console.log(fruits);

console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[fruits.length-1]);

let countryAndCities = [
    "Казахстан", ["Алматы", "Астана", "Шымкент"],
    "Китай", ["Бейджин", "Шанхай", "Нанкин"],
    "Россия", ["Москва", "Самара", "Саратов"]
];

console.log(countryAndCities);

countryAndCities[4] = "Корея";
countryAndCities[5] = ["Сеул", "Пусан"];

console.log(countryAndCities);


let users = [{
    name: "Sagyndyk",
    age: 20,

},
{
    name: 'Maxat',
    age: 19
}]

users.push({
    name: "Maxim",
    age: 30
});

console.log(users);

users.unshift({
    name: "Artur",
    age: 25
});

console.log(users);


users.forEach((element, index)=>{
    console.log(element);
});

const users2 = users.map(el=>{
    return el.age + 2;
});

console.log(users2);


let users3 = users.filter(item=>{
    return item.age > 20;
});

console.log(users3);

let usersFind = users.find(item=>{
    return item.age > 20;
});
console.log(usersFind);


// users.pop();

// console.log(users);

// users.shift();

console.log(users);

users.splice(1,1);
console.log(users);


console.log(users.slice(0,2));


let vegatables =["Огурец", "Морковь"]

let food = fruits.concat(vegatables);

console.log(food);

console.log(fruits.indexOf("Банан"));
console.log(fruits.includes("Банан"));

fruits.push('Апельсин');

console.log(fruits.sort());
console.log(fruits.reverse());

let fru2 = 'Яблоко, Банан, Киви';

console.log(fru2.split(', '));

console.log(fruits.join(', '));

console.log(Array.isArray(fru2));