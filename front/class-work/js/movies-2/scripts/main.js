const API_KEY = "87e4fde3-7e84-4e55-a7f9-5264a30e1760";

const API_URL_POPULAR =
  "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1";

const API_URL_SEARCH =
  "https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=";

const API_URL_MOVIE_DETAILS =
  "https://kinopoiskapiunofficial.tech/api/v2.2/films/";

const movies = document.querySelector(".movies");

const search = document.querySelector(".header__search");

async function getMovies(url) {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "X-API-KEY": `${API_KEY}`,
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    renderMovies(result);
  } catch (e) {
    console.error("Ошибка при загрузке данных:", e);
  } finally {
  }
}

getMovies(API_URL_POPULAR);

function getClassByRate(vote) {
  if (vote >= 7) {
    return "green";
  } else if (vote > 5) {
    return "orange";
  } else {
    return "red";
  }
}

function renderMovies(result) {
  movies.innerHTML = "";
  result.films.forEach((item) => {
    const movie = document.createElement("div");
    movie.classList.add("movie");
    movie.innerHTML = `
            <div class="movie__cover-inner">
                <img
                    src="${item.posterUrl}"
                    class="movie__cover"
                    alt="image"
                />
                <div class="movie__cover--darkened"></div>
            </div>
            <div class="movie__info">
                <div class="movie__title">${item.nameRu}</div>
                <div class="movie__category">${item.genres.map(function (item) {
                  return item.genre;
                })}</div>
                <div class="movie__average movie__average--${getClassByRate(
                  item.rating
                )}">${item.rating}</div>
            </div>
        `;
    movie.addEventListener("click", function () {
      openModal(item.filmId);
    });
    movies.append(movie);
  });
}

search.addEventListener("input", function (event) {
  let currentSearch = event.target.value;
  let apiSearchUrl = `${API_URL_SEARCH}${currentSearch}`;

  if (event.target.value != 0) {
    getMovies(apiSearchUrl);
  } else {
    getMovies(API_URL_POPULAR);
  }
});

const container = document.querySelector(".container");
const modal = document.querySelector(".modal");

const openModal = (filmId) => {
  fetch(API_URL_MOVIE_DETAILS+filmId , {
    method: "GET",
    headers: {
      "X-API-KEY": "87e4fde3-7e84-4e55-a7f9-5264a30e1760",
      "Content-Type": "application/json",
    },
  })
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      }

      throw new Error("Movie doesn't exists");
    })
    .then((json) => {
      modal.innerHTML = `<div class="modal__card">
      <img src="${json.posterUrl}" alt="" class="modal_img">
      <h2>
      <span class="modal_movie-title">${json.nameRu}</span>
      <span class="modal_movie-year">${json.year}</span>
      </h2>
      <ul class="modal__movie-info">
      <li class="modal-li">${json.genres.map((i) => i.genre).join(", ")}</li>
      <li class="modal-li">${json.filmLength} мин</li>
      <li class="modal-li">${json.description}</li>
      </ul>
      <button class="close">Close</button>
      </div>`;
    })
    .catch((error) => {
      modal.innerHTML = `
      <div class="error">
        <h2>
          ${error.message}
        </h2>
        <button class="close">Close</button>
      </div>
      `;
    })
    .finally(()=>{
      document.body.classList.add("block-scrolling");
      modal.classList.toggle("modal-active");
      container.appendChild(modal);
      const closeBtn = document.querySelector(".close");
      closeBtn.addEventListener("click", (e) => {
        closeModal();
      });
      window.addEventListener('click', (e)=>{
        if(e.target === modal){
          closeModal();
        }
      });
      window.addEventListener('keydown', (e)=>{
        if(e.code === "Escape"){  
          closeModal();
        }
      })
    });
};

const closeModal = ()=>{
  modal.classList.remove("modal-active");
  document.body.classList.remove("block-scrolling");
} 