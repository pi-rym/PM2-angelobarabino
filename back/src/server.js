const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const indexRouter = require('./routes');

const app = express();


app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/', indexRouter);

mongoose.connect('mongodb+srv://angelobarabino17:171205ANGELO@projectohomework.q9ameqv.mongodb.net/movies?retryWrites=true&w=majority&appName=projectohomework', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conexión a MongoDB establecida'))
    .catch(err => console.error('Error al conectar a MongoDB', err));

let Pelicula;
try {
    Pelicula = mongoose.model('Pelicula');
} catch (error) {
    const peliculaSchema = new mongoose.Schema({
        title: String,
        director: String,
        year: Number,
        genre: [String], // Cambiado a un array de Strings
        rating: Number, // Agregado rating como un número
        duration: String, // Agregado duration como String
        poster: String
    });
    
    Pelicula = mongoose.model('Pelicula', peliculaSchema);
}


app.post('/peliculas', async (req, res) => {
    try {
        const { title, director, year, genre, rating, duration, poster } = req.body; 
        console.log('Valor del rating recibido:', rating); // Agregado registro del rating
        const nuevaPelicula = new Pelicula({ 
            title: title, 
            director: director, 
            year: year, 
            genre: genre,
            rating: parseFloat(rating), 
            duration: duration,
            poster: poster 
        });
        await nuevaPelicula.save();
        res.status(201).json({ message: 'Película creada exitosamente' });
    } catch (error) {
        console.error('Error al crear película', error);
        res.status(500).json({ error: 'Error interno del servidor al crear película' });
    }
});




app.get('/peliculas', async (req, res) => {
    try {
        const peliculas = await Pelicula.find();
        res.json(peliculas);
    } catch (error) {
        console.error('Error al obtener películas', error);
        res.status(500).json({ error: 'Error interno del servidor al obtener películas' });
    }
});

const port = process.env.PORT || 4057;

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});

module.exports = app;
