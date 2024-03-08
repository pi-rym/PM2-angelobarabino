const path = require("path");

 

module.exports =  {

    entry: {

        index: "./public/scripts/index.js",

        script: "./public/scripts/scriptList.js",

      },

      output: {

        path: path.resolve(__dirname, 'public'),

        filename: '[name].bundle.js'

      },

};