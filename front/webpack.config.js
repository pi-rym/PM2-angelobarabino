const path = require("path");

 

module.exports =  {

    entry: {

        index: "./scripts/index.js",

        script: "./public/bundle.js",

      },

      output: {

        path: path.resolve(__dirname, 'public'),

        filename: '[name].bundle.js'

      },

};