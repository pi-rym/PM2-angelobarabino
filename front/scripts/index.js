console.log("tempData");
const movieContainer = document.getElementById("movie-container");
const { render } = require("../../back/src/server");
const renderCards = require ("./rendercards");

const axios = require('axios');


async function obtenerPeliculas() {
 
  const url = 'http://localhost:3000/peliculas';

  try {
    
    const response = await axios.get(url);
    
    
    console.log('Películas obtenidas:', response.data);
  } catch (error) {
    
    console.error('Error al obtener las películas:', error);
  }
}
obtenerpeliculas();


const main = async () => {
  console.log("esta saliendo todo bien");
  const response = await axios.get('http://localhost:3000/peliculas')
  renderCards(response.data); 
};

main();
$(document).ready(function() {
  $('#movieForm').submit(function(event) {
    event.preventDefault(); 
    

    var title = $('#title').val();
    var year = $('#year').val();
    var director = $('#director').val();
    var genre = $('#genre').val();
    var poster = $('#poster').val();
    
    
    var movieData = {
      title: title,
      year: year,
      director: director,
      genre: genre,
      poster: poster
    };
    
    
  
});
})
