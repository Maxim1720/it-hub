import '../scss/style.scss';


import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';

const swiper = new Swiper('.swiper',{
    loop:true,
    pagination:{
        el: '.swiper-pagination',
        clickable: true
    },
    modules:[Navigation, Pagination],
});