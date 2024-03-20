const mongoose = require('mongoose');

const peliculaSchema = new mongoose.Schema({
    title: String,
    year: Number,
    director: String,
    duration: String,
    genre: [String],
    rate: Number,
    poster: String
});

const Pelicula = mongoose.model('Pelicula', peliculaSchema);

module.exports = Pelicula;