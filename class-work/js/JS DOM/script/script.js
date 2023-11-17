// console.log(document);

// console.log(document.querySelector('.div'));
// console.log(document.querySelector('#div-id'));
// console.log(document.querySelector('script'));

// console.log(document.querySelectorAll('.div'));

// let inp = document.querySelector('.inp');

// console.log(inp.getAttribute('placeholder'));
// console.log(inp.getAttribute('value'));

// inp.setAttribute('id', 'inp');

// console.log(inp.id);

// let squal = document.querySelector(".squal");

// squal.classList.add('active');
// // squal.classList.remove('squal');

// squal.addEventListener('click', ()=>{
//     squal.classList.toggle('active');
// });

// console.log(squal.dataset.age);
// console.log(squal.dataset.name);

// squal.innerHTML = '<p class="squal-p">lorem </p>'

// let squalParag = document.querySelector('.squal-p');

// console.log(squalParag.innerTxt = 'New Text');
// console.log(squalParag.textContent = 'New Text 2');

// console.log(squalParag.value);

// let btn = document.querySelector(".btn");
// btn.addEventListener('click', (e)=>{
//     e.preventDefault();
//     alert("Мандальное окно!");
// });

let input = document.querySelector(".inp2");

input.addEventListener("input", (e) => {
  e.preventDefault();
  if (e.target.value.length > 5) {
    alert("Вы опять обосрались(");
    e.stopPropagation();
  }
});

setInterval((e) => {
  console.log(new Date().toLocaleString());
  setTimeout(() => {
    alert("Прошло 5 сек");
  }, 5000);
}, 1000);
