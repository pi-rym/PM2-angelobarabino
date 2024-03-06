console.log(tempData);
[    { title: 'Pelicula 1', year: 2017, director: 'Director 1' },
    { title: 'Pelicula 2', year: 1977, director: 'Director 2' },
    { title: 'Pelicula 3', year: 2001, director: 'Director 3' },
]
    ;

const movieContainer = document.getElementById("movie-container");

function createMovieCard(movie) {
  const card = document.createElement("div");
  card.classList.add("card");

  const img = document.createElement("img");
  img.src = movie.poster;
  img.alt = movie.title;

  const title = document.createElement("div");
  title.classList.add("card-title");
  title.textContent = movie.title;

  const info = document.createElement("div");
  info.classList.add("card-info");
  info.innerHTML = `<p><strong>Año:</strong> ${movie.year}</p>
                    <p><strong>Duración:</strong> ${movie.duration}</p>
                    <p><strong>Director:</strong> ${movie.director}</p>
                    <p><strong>Género:</strong> ${movie.genre.join(", ")}</p>
                    <p><strong>Rating:</strong> ${movie.rate}</p>`;

  card.appendChild(img);
  card.appendChild(title);
  card.appendChild(info);

  return card;
}

function renderMovies() {
  tempData.forEach(movie => {
    const card = createMovieCard(movie);
    movieContainer.appendChild(card);
  });
}document.addEventListener("DOMContentLoaded", function () {
    renderMovies();
  });
  

