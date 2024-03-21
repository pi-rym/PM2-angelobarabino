const Pelicula = require('../models/pelicula');

async function getAllMovies() {
    try {
        const peliculas = await Pelicula.find(); 
        return peliculas;
    } catch (error) {
        console.error('Error al obtener las películas:', error);
        return []; 
    }
}

async function createMovie(newMovieData) {
    try {
        const newMovie = new Pelicula(newMovieData);
        await newMovie.save();
        return newMovie;
    } catch (error) {
        console.error('Error al crear una nueva película:', error);
        throw error;
    }
}

module.exports = {
    getAllMovies,
    createMovie
}
