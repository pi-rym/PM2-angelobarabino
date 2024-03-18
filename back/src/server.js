const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const indexRouter = require('./routes');

const app = express();


app.use(morgan('dev'));


app.use(cors());


app.use(express.json());


app.use('/', indexRouter);

const port = process.env.PORT || 3311;


app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});

module.exports = app;
