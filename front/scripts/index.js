console.log("tempData");
const movieContainer = document.getElementById("movie-container");
const { render } = require("../../back/src/server");
const renderCards = require ("./rendercards");

const axios = require('axios');


async function obtenerPeliculas() {
 
  const url = 'https://students-api.up.railway.app/movies';

  try {
    
    const response = await axios.get(url);
    
    
    console.log('Películas obtenidas:', response.data);
  } catch (error) {
    
    console.error('Error al obtener las películas:', error);
  }
}
obtenerPeliculas();


const main = async () => {
  console.log("esta saliendo todo bien");
  const response = await axios.get("https://localhost:3500/movies")
  renderCards(response.data); 
};

main();