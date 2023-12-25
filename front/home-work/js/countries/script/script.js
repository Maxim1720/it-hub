const getCountries = (name) => {
  const url = "https://restcountries.com/v3.1/name/";
  let fetchedCountryData = [];

  return fetch(url + name)
    .then((resp) => {
      if (resp.status === 404) {
        throw new Error("Country doesn't exists");
      }
      return resp;
    })
    .then((resp) => resp.json())
    .then((resp) => {
      resp.forEach((element) => {
        fetchedCountryData.push({
          name: element.name.common,
          population: element.population,
          continents: element.continents,
          img: element.flags.png,
        });
      });
      return fetchedCountryData;
    });
};

const resultContainer = document.querySelector(".result-container");

const setItems = (items) => {

  console.log(resultContainer.childNodes);
  resultContainer.innerHTML = "";

  items.forEach((i) => {
    const itemEl = document.createElement("div");
    itemEl.classList.add("result-item");

    itemEl.innerHTML = `<h2>${i.name}</h2>`;
    itemEl.innerHTML += `<img src=${i.img} alt="${i.name}"/>`;
    itemEl.innerHTML += `<p>Population: ${i.population}</p>`;
    itemEl.innerHTML += `<p>Continents: ${i.continents.join(", ")}</p>`;

    console.log(itemEl.innerHTML);

    resultContainer.appendChild(itemEl);
  });
};

const nameInput = document.querySelector("#name");
const submitBtn = document.querySelector("#submit-country-name");
const form = document.querySelector(".form");

submitBtn.onclick = (e) => {
  e.preventDefault();
  let nameVal = nameInput.value;

  resultContainer.style = {};
  resultContainer.innerHTML = "Wait a second";

  interval = setInterval(() => {
    let splittedInner = resultContainer.innerHTML.split(".");
    if (splittedInner.length === 4) {
      resultContainer.innerHTML = splittedInner[0];
    } else {
      resultContainer.innerHTML += ".";
    }
  }, 100);

  getCountries(nameVal)
    .then((resp) => {
      setItems(resp);
    })
    .catch((error) => {
      resultContainer.style.color = "red";
      resultContainer.innerHTML = error.message;
    })
    .finally(() => {
      clearInterval(interval);
    });
};
