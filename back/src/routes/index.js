const express = require('express');
const movieController = require('../controllers/moviescontroller'); 

const router = express.Router();

// Ruta para obtener todas las películas
router.get('/movies', movieController.getMovies); 

module.exports = router;