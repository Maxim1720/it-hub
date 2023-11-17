// import {car, hello} from './function.js';
// import _default from './default.js';

// console.log(hello());
// console.log(car());
// console.log(_default());

// localStorage.setItem('name', "Maxim");
// console.log(localStorage.getItem("name"));

const textBody = document.querySelector('#text');

localStorage.setItem('name', 'Maxim');
textBody.textContent = "My name: " + localStorage.getItem("name");
localStorage.removeItem('name');

const user = {
    name: "Maxim",
    age: 22
}

localStorage.setItem('user', JSON.stringify(user));

const userFromJson = JSON.parse(localStorage.getItem('user'));

textBody.textContent = userFromJson.name + " : " + userFromJson.age;

console.log(JSON.parse(localStorage.getItem('user')));
 

sessionStorage.setItem('jwtToken', "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9");

textBody.innerHTML = textBody.innerHTML + `<p id="token"> token is ${sessionStorage.getItem('jwtToken')}</p>`
