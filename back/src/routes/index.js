const { router } = require ('express')
const moviescontroller = require("./contrllers/moviescontroller")
const { get } = require('../server')
const indexRouter = router()
indexRouter.get("/movies" , moviescontroller.getmovies);
module.exports = indexRouter
