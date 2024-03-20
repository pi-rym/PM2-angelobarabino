const pelicula = require('../models/pelicula'); 

async function getAllMovies() {
    try {
        const peliculas = await Pelicula.find(); 
        return peliculas;
    } catch (error) {
        console.error('Error al obtener las películas:', error);
        return []; 
    }
}

module.exports = {
    getAllMovies
}