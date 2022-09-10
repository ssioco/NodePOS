const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clienteSchema = new Schema ({
    nombre           : String,
    tel              : String,
    totalComprado    : Number ,
    historicoCompras : Number,
    ubicacion        : {
        longitud : Number,    
        latitud  : Number,
        zoom     : Number}
});

const Cliente = mongoose.model('Cliente', clienteSchema); 

const productoSchema = new Schema ({
    referencia  : String,
    nombre      : String,
    descripcion : String,
    precio      : Number,
    stock       : Number,
    //imagen      : , //link
    habilitado  : Boolean
});

const Producto = mongoose.model('Producto', productoSchema);

const vendedorSchema = new Schema({
    nombre              : String,
    documento           : Number,
    ventasDespachadas   : Number
});

const Vendedor = mongoose.model('Vendedor', vendedorSchema);

const ventaSchema = new Schema({
    productoVendido  : String,
    subtotalVenta    : Number,
    fechaVenta       : Date,
    impuestoVenta    : Number,
    totalVenta       : Number,
    clienteCompra    : String,
    vendedorVende    : String

});

const Venta = mongoose.model('Venta', ventaSchema);

module.exports = {
    Venta,
    Vendedor,
    Producto,
    Cliente
};

 