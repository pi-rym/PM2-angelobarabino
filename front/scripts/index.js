console.log(tempData);

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

function renderMovies(movies) {
  const movieContainer = document.getElementById("movie-container");

  // Verifica que movieContainer no sea null
  if (movieContainer) {
    // Limpia el contenido previo del contenedor
    movieContainer.innerHTML = "";

    // Verifica que movies esté definido y sea un array
    if (Array.isArray(movies)) {
      movies.forEach(movie => {
        const card = createMovieCard(movie);
        movieContainer.appendChild(card);
      });
    } else {
      console.error("El formato de las películas no es válido.");
    }
  } else {
    console.error("El contenedor de películas no se encontró en el documento.");
  }
}

function fetchDataAndRenderMovies() {
  const apiUrl = "https://students-api.2.us-1.fl0.io/movies";

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => {
      // Imprime la respuesta para depuración
      console.log("Respuesta de la API:", data);

      // Verifica si la respuesta es un array y tiene al menos un elemento
      if (Array.isArray(data) && data.length > 0) {
        renderMovies(data);
      } else {
        console.error("La respuesta de la API no contiene un array válido de películas.");
      }
    })
    .catch(error => {
      console.error(`Error: ${error.message}`);
    });
}

document.addEventListener("DOMContentLoaded", function () {
  fetchDataAndRenderMovies();
});

