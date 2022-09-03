const express = require("express");
const rutica = require("./routes/enrutamientoPrimario")

const PORT = process.env.PORT || 9000;
const app = express();
app.use('/',rutica)

app.listen(PORT, ()=>{
    console.log("Ejecutando POS en el puerto "+ PORT)
});
