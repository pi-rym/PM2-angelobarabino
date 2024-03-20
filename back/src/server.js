const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const indexRouter = require('./routes');

const app = express();

app.use(cors());

mongoose.connect('mongodb+srv://angelobarabino17:171205ANGELO@projectohomework.q9ameqv.mongodb.net/movies?retryWrites=true&w=majority&appName=projectohomework', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conexión a MongoDB establecida'))
    .catch(err => console.error('Error al conectar a MongoDB', err));

let Pelicula;
try {
    Pelicula = mongoose.model('Pelicula');
} catch (error) {
    const peliculaSchema = new mongoose.Schema({
        titulo: String,
        director: String
    });
    Pelicula = mongoose.model('Pelicula', peliculaSchema);
}

app.use(morgan('dev'));
app.use(express.json());
app.use('/', indexRouter);


app.get('/peliculas', async (req, res) => {
    try {
        const peliculas = await Pelicula.find();
        res.json(peliculas);
    } catch (error) {
        console.error('Error al obtener películas', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

const port = process.env.PORT || 4057;

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});

// Servidor HTTP local
const http = require('http');

const server = http.createServer(app);

const LOCAL_PORT = 3000;

server.listen(LOCAL_PORT, () => {
    console.log(`Servidor local corriendo en http://localhost:${LOCAL_PORT}`);
});

module.exports = app;
