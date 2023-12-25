import "./public/style/style.scss";

const burger = document.querySelector("#burger");
const accordions = document.querySelectorAll(".accordion-list");
const programBtn = document.querySelector(".program-btn");

accordions.forEach((acc) => {
  const items = acc.querySelectorAll(".accordion-list-item");
  items.forEach((ai) => {
    const btn = ai.querySelector(".accordion-list-item-btn");
    btn.addEventListener("click", (e) => {
      ai.classList.toggle("active");
      Array.from(items)
        .filter((i) => i !== ai)
        .forEach((i) => i.classList.remove("active"));
    });
  });
});

burger.addEventListener("click", (e) => {
  const nav = document.querySelector("nav");
  const navUl = nav.querySelector("ul");
  navUl.classList.toggle("active");
  burger.classList.toggle("active");
});

programBtn.addEventListener("click", (e) =>
  document.querySelector(".program").scrollIntoView()
);