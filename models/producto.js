const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productoSchema = new Schema ({
    referencia  : String,
    nombre      : String,
    descripcion : String,
    precio      : Number,
    stock       : Number,
    imagen      : String,
    habilitado  : Boolean
});

const Producto = mongoose.model('producto', productoSchema);

module.exports = Producto;