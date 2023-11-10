const action = (n1,n2,op)=>{
    switch(op){
        case 'add':
            return n1+n2;
        case 'sub':
            return n1-n2;
        case 'mul':
            return n1*n2;
        case 'div':
            return n1/n2;
    }
}
const n1 = document.querySelector('#num1');
const n2 = document.querySelector('#num2');
const res = document.querySelector('.answer');
const btn = document.querySelector('#calculate');

btn.addEventListener('click', (e)=>{
    const op = document.querySelector("input[name='method']:checked").value;
    const n1Val = Number(n1.value);
    const n2Val = Number(n2.value);
    console.log(`${n1Val} ${n2Val}`);
    res.innerHTML = action(n1Val,n2Val,op);
});