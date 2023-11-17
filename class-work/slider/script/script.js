let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

let slides = document.querySelectorAll('.slide');
let index = 0;
next.addEventListener('click', (e)=>{
    index++;
    slides.forEach(i=>i.classList.remove('active'));
    if(slides.length - 1 < index){
        index=0;
    }
    slides[index].classList.add('active');
});