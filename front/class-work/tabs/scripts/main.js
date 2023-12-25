let tabBtns = document.querySelectorAll('.tab-btn');
let tabs = document.querySelectorAll('.tab-item');

console.log(tabBtns);

tabBtns.forEach(i=>{
    i.addEventListener('click', (e)=>{

        let currentBtn = e.target.dataset.tabBtn;
        let tabContent = document.querySelector(`#${currentBtn}`);

        tabBtns.forEach(item=>{
            item.classList.remove('active');
        });

        tabs.forEach(t=>t.classList.remove('active'))

        i.classList.add('active');
        tabContent.classList.add('active');
    });
});

document.querySelector('.tab-btn').click();