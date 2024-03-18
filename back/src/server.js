
const express = require('express');
const indexRouter = require('./routes');
const nodemon = require('nodemon');
{const app = nodemon();}

const app = express();

 app.use = indexrouter()

 module.exports = app




const port = 3500; 
app.listen(port, () => {
  app.get('/movies', (req, res) => {
   
    res.send('Próximamente estarán disponibles los datos de películas');
  });
  const port = process.env.PORT || 3500;
  
  // Ejecutar el método listen del objeto app
  app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
  });
});
module.exports = app;
const express = require('express');
const archivo = require('./archivo'); // Requiere el archivo.js

const app = express();
const PORT = process.env.PORT || 3500;

// Define la ruta /movies que llama al método getmovies del archivo.js
app.get('/movies', archivo.getmovies);

// Inicia el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
