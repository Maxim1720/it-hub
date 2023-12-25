


let btn = document.querySelector("button");
let input = document.querySelector("input");
let todoContainer = document.querySelector(".todo");

let deleteBtn = 
btn.addEventListener("click", (e) => {
  e.preventDefault();
  let val = input.value;

  if (val.length !== 0) {
    let li = document.createElement("li");
    li.classList.add("todo-item");

    li.innerHTML = `
        <p onClick='completed(this)'>${val}</p>
        <i onClick='deleteTodo(this)' class="fas fa-trash delete"></i>
        `;
        
    todoContainer.append(li);
  } 
  else {
    alert("Input must be filled!");
  }
  input.value = '';
});



function completed (element){
    element.parentNode.classList.toggle('active');
};

function deleteTodo (element){
    console.log("removing...");
    let li = element.parentNode;
    li.remove();
}