const app = require("./src/server");
const conDB = require("./src/config/conDB");

conDB().then((res) => {
    app.listen(4058, () => {
        console.log("Server listening on port 4058")
    });
})
.catch(err => {
    console.log("Error al conectar a la DB");
});
