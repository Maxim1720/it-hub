import "./public/style/style.scss";

const hero = document.querySelector(".hero");
const burger = document.querySelector("#burger");
const nav = document.querySelector("nav");

const navUl = nav.getElementsByTagName("ul")[0];

const accordionItems = document.querySelectorAll(".accordion-list-item");

accordionItems.forEach((i) => {
  console.log(i);
  const btn = i.querySelector(".accordion-list-item-btn");
  btn.addEventListener("click", (e) => {
    i.classList.toggle("active");
    changeAccordionItem(i);
    accordionItems.forEach((item) => {
      if (item !== i) {
        item.classList.remove("active");
        changeAccordionItem(item);
      }
    });
  });
});

function changeAccordionItem(item){
  const btn = item.querySelector(".accordion-list-item-btn");
}

burger.addEventListener("click", (e) => {
  navUl.classList.toggle("active");
  burger.classList.toggle("active");
});

const programBtn = document.querySelector(".program-btn");
programBtn.addEventListener('click', (e)=>document.querySelector('.program').scrollIntoView())