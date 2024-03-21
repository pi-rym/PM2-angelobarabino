const express = require('express');
const movieController = require('../controllers/moviescontroller');

const router = express.Router();

router.get('/movies', movieController.getMovies);
router.post('/movies', movieController.createMovie);

module.exports = router;