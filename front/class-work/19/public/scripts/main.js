import '../scss/style.scss'

// import Swiper JS
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    modules: [Navigation, Pagination],
    
  });


  const itemhead = document.querySelectorAll(".questions-item_head");

console.log(itemhead);

  itemhead.forEach(i=>{
    i.addEventListener('click', ()=>{
      i.nextElementSibling.classList.toggle('active');

      i.children[1].classList.toggle('active');
    });
  });