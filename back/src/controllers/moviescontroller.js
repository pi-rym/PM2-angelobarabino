const movieService = require('../services/movieservices');

module.exports = {
    getMovies: async (req, res) => {
        try {
            const movies = await movieService.getAllMovies();
            res.json(movies);
        } catch (error) {
            console.error("Error al obtener las películas:", error);
            res.status(500).send("Error al obtener las películas");
        }
    },

    createMovie: async (req, res) => {
        try {
            const newMovieData = {
                titulo: req.body.title,
                director: req.body.director,
                año: req.body.year,
                genero: req.body.genre,
                poster: req.body.poster
            };

            const newMovie = await movieService.createMovie(newMovieData);
            res.status(201).json(newMovie);
        } catch (error) {
            console.error("Error al crear la película:", error);
            res.status(500).send("Error al crear la película");
        }
    }
}
