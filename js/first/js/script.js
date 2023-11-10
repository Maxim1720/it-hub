let a = document.getElementById("first");
let b = document.getElementById("second");

const operation = document.getElementById("operation");

const result = document.getElementById("result");

const calcBtn = document.getElementById("calc-btn");

calcBtn.onclick = ()=>{
    let res;
    let valueA = Number(a.value);
    let valueB = Number(b.value);
    switch(operation.value){
        case "+":
            res = valueA+valueB;
            break;
        case "-":
            res = valueA-valueB;
            break;
        case "*":
            res = valueA*valueB;
            break;
        case "/":
            res = valueA/valueB;
            break;
    }

    if(!res){
        alert("Invalid operands");
        a.value="";
        b.value="";
        result.innerHTML="";
    }
    else{
        result.innerHTML = res;
    }
    
}

console.log(a);

let _a = 555;
console.log();
