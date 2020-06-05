const terror = document.querySelector(".terror");
const infantil = document.querySelector(".infantil");
const acao = document.querySelector(".acao");


const url = "https://sky-frontend.herokuapp.com/movies";

fetch(url)
  .then((response) => response.json())
  .then((responseJson) => showResults(responseJson))
  .catch((error) => console.error(error));

function showResultsByCategory(movies, category) {
  console.log(movies)
  return movies.filter(movie => movie.categories.includes(category));
}

function renderCard(htmlElement, movie){
  let img = document.createElement("img");
  img.setAttribute("src", `${movie.images[0].url}`);
  img.classList.add("img");

  let card = document.createElement("div");
  card.classList.add("card");
  card.appendChild(img);
  htmlElement.appendChild(card);
}

function showResults(responseJson) {
  const moviesList = responseJson[2].movies;

  const terrorMovies =  showResultsByCategory(moviesList, 'Terror')
  const infantilMovies =  showResultsByCategory(moviesList, 'Infantil')
  const acaoMovies =  showResultsByCategory(moviesList, 'Ação')

  terrorMovies.forEach( movie => {
    renderCard(terror, movie)
  });

  infantilMovies.forEach( movie => {
    renderCard(infantil, movie)
  });

  acaoMovies.forEach( movie => {
    renderCard(acao, movie)
  });

}