const {Router} = require ('express')
const moviescontroller = require('/Users/barab/OneDrive/Escritorio/henry angelo/PM2-angelobarabino/back/src/controllers/moviescontroller')
const {get} = require('../server')
const indexRouter = Router()
indexRouter.get("/movies" , moviescontroller.getmovies);
module.exports = indexRouter
