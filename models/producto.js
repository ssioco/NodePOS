const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productoSchema = new Schema ({
    referencia : String,
    nombre : String,
    descripcion : Text,
    precio : Number,
    stock : Number,
    //imagen : , //link
    habilitado : Boolean
});

const Producto = mongoose.model('Producto', productoSchema);

module.exports = Producto;