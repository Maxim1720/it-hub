const API_KEY = "87e4fde3-7e84-4e55-a7f9-5264a30e1760";

const API_URL_PAGE =
  "https://kinopoiskapiunofficial.tech/api/v2.2/films" + "?page=";

const API_URL_SEARCH =
  "https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=";

const movies = document.querySelector(".movies");

const ratingColor = (rating) => {
    console.log(rating);
    let val = Number(rating);
    if(val>=7){
        return "green";
    }
    else if(val>=5){
        return "orange";
    }
    else{
        return "red";
    }
//   return val >= 7 ? "green" : val >= 5 ? "orange" : "red";
};

const setMovies = (items)=>{
    movies.innerHTML = "";
    items.forEach(element=>{
        const movie = document.createElement("div");
        const movieCoverInner = document.createElement("div");
        const movieInfo = document.createElement("div");

        movieInfo.classList.add("movie__info");
        movieCoverInner.classList.add("movie__cover-inner");
        movie.classList.add("movie");

        const movieConnerInnerImg = document.createElement("img");
        movieConnerInnerImg.src = element.posterUrl;
        movieConnerInnerImg.classList.add("movie__cover");

        movieCoverInner.appendChild(movieConnerInnerImg);

        const darkened = document.createElement("div");
        darkened.classList.add("movie__cover--darkened");

        movieCoverInner.appendChild(darkened);

        const movieInfoTitle = document.createElement("div");
        movieInfoTitle.classList.add("movie__title");
        movieInfoTitle.innerText = element.nameRu;

        const movieInfoCategory = document.createElement("div");
        movieInfoCategory.classList.add("movie__category");
        movieInfoCategory.innerText = element.genres
          .map((e) => e.genre)
          .join(", ");

        const movieInfoAverage = document.createElement("div");
        movieInfoAverage.classList.add("movie__average");
        movieInfoAverage.classList.add(
          `movie__average--${ratingColor(element.rating)}`
        );
        movieInfoAverage.innerText = element.ratingKinopoisk?element.ratingKinopoisk:element.rating;

        movieInfo.appendChild(movieInfoTitle);
        movieInfo.appendChild(movieInfoCategory);
        movieInfo.appendChild(movieInfoAverage);
        movie.appendChild(movieCoverInner);
        movie.appendChild(movieInfo);
        movies.appendChild(movie);
    })
}

const fetchPage = (pageNumber) => {
  fetch(API_URL_PAGE + pageNumber, {
    method: "GET",
    headers: {
      "X-API-KEY": API_KEY,
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((json) => {
        setMovies(json.items);
        console.log(json);
    })
    .catch((err) => console.log(err));
};

fetchPage(2);


const searchInput = document.querySelector('.header__search');

searchInput.addEventListener('input', (e)=>{
    let val = e.target.value;
    fetch(API_URL_SEARCH+val, {
        method: "GET",
        headers: {
          "X-API-KEY": API_KEY,
          "Content-Type": "application/json",
        },
      })
    .then(resp=>resp.json())
    .then(resp=>{
        console.log(resp);
        setMovies(resp.films);
    })
    .catch(error=>console.log(error))
});