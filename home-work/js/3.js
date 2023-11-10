class Automobile {
  constructor(props) {
    this.brand = props.brand;
    this.model = props.model;
    this.year = props.year;
    this.color = props.color;
  }
}

let automobile = {
  ...new Automobile({
    brand: "BMW",
    model: "X5",
    year: 2005,
    color: "red",
  }),
};

console.log(automobile);

automobile = {
  ...automobile,
  mileage: 2000,
};

console.log(automobile);

automobile.year = 2008;
console.log(automobile);

const str = "Hey, i am string!";
console.log(str.toLowerCase());
console.log(str.toUpperCase());

const items = [];

items.push(automobile, str);
console.log(items);

items[1] = Boolean(null);
console.log(items);

console.log(items.length);
console.log(items[items.length - 1]);

class User {
  constructor(props) {
    this.firstname = props.firstname;
    this.lastname = props.lastname;
    this.age = props.age;
  }
}

const users = [
  new User({
    firstname: "Maxim",
    lastname: "Musiev",
    age: 30,
  }),
  new User({
    firstname: "Alexey",
    lastname: "Petrov",
    age: 25,
  }),
  new User({
    firstname: "Lol",
    lastname: "Kekov",
    age: 100500,
  }),
];

users.push(
  new User({
    firstname: "new",
    lastname: "user",
    age: 50,
  })
);

console.log(users);

function strLength(str) {
  return str.length;
}

function capitalizeLetter(str) {
  return str
    .split(" ")
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    }).join(' ');
}

console.log(capitalizeLetter("hello world"));
