require("dotenv").config();
const mongoose = require('mongoose');




const conDB = async () => {
    "mongodb+srv://angelobarabino17:171205ANGELO@projectohomework.q9ameqv.mongodb.net/?retryWrites=true&w=majority&appName=projectohomework"
console.log(process.env.MONGO_URI)
};

module.exports = conDB;