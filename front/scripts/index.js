console.log("tempData");
const movieContainer = document.getElementById("movie-container");
const renderCards = require ("./rendercards");

const axios = require('axios');


async function obtenerPeliculas() {
  // URL de la petición
  const url = 'https://students-api.up.railway.app/movies';

  try {
    
    const response = await axios.get(url);
    
    
    console.log('Películas obtenidas:', response.data);
  } catch (error) {
    
    console.error('Error al obtener las películas:', error);
  }
}
obtenerPeliculas();

