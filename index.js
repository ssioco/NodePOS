const express = require("express");




//-----------CONTROLADOR DE RUTAS PARA CONSTANTES ----------------------
const rutica        = require("./routes/enrutamientoPrimario");
//const rutaCliente   = require("./routes/enrutadorCliente");
//const rutaProducto  = require("./routes/enrutadorProducto");
//const rutaVendedor  = require("./routes/enrutadorVendedor");
//const rutaVenta     = require("./routes/enrutadorVenta");

//-----------SELECCION DE PUERTO PARA LA EJECUCION DEL APLICATIVO---------------
const PORT = process.env.PORT || 9020;
const app = express();
app.set('view engine','ejs')
//----------DIRECCIONADOR DE RUTAS PARA EL APLICATIVO-------------------
app.use('/',rutica);
//app.use('/cliente',rutaCliente);
//app.use('/producto',rutaProducto);
//app.use('/vendedor',rutaVendedor);
//app.use('/venta',rutaVenta);

app.listen(PORT, ()=>{
    console.log("Ejecutando POS en el puerto "+ PORT);
});
