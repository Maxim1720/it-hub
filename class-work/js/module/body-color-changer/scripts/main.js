let btn = document.querySelector('.btn');

btn.addEventListener('click', (e)=>{
    let hashColor = `0123456789ABCDEF`;
    let hash = '#';

    for(let i=0;i<6;i++){
        hash+=hashColor[Math.floor(Math.random()*16)]
    }
    console.log(hash);
    document.body.style.backgroundColor = hash;
});


btn.addEventListener('click', (e)=>{
    console.log(`hey, it's your ${e.target.className}` );

    let colors = ['red', 'yellow', 'black', 'gray', 'green'];
    let color = '';
    colors.forEach(()=>{
        color = colors[Math.floor(Math.random()*5)];
    });

    document.body.style.backgroundColor = color;

    let str = 'str';
    let arr = ['one', 'two'];

});