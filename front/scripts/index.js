console.log("tempData");
const movieContainer = document.getElementById("movie-container");
const renderCards = require("./rendercards");
const axios = require('axios');

async function obtenerPeliculas() {
  const url = 'http://localhost:4057/peliculas';

  try {
    const response = await axios.get(url);
    console.log('Películas obtenidas:', response.data);
  } catch (error) {
    console.error('Error al obtener las películas:', error);
  }
}

obtenerPeliculas();

const main = async () => {
  console.log("Todo está funcionando correctamente");
  const response = await axios.get('http://localhost:4057/peliculas');
  renderCards(response.data);
};

main();

$(document).ready(function() {
  $('#movieForm').submit(function(event) {
      event.preventDefault();
      
      const formData = {
        title: $('#title').val(),
        year: $('#year').val(),
        director: $('#director').val(),
        genre: $('#genre').val().split(',').map(genre => genre.trim()),
        duration: $('#duration').val(),
        rating: parseFloat($('#rating').val()),
        poster: $('#poster').val()
    };
      $.ajax({
          type: 'POST',
          url: 'http://localhost:4057/peliculas', 
          contentType: 'application/json', 
          data: JSON.stringify(formData), 
          success: function(response) {
              console.log('Película creada:', response);
          },
          error: function(error) {
              console.error('Error al crear la película:', error);
          }
      });
  });
});