const express = require('express');
const router = express.Router();
const bcd = require('../config/connection');
// Clientes 
const Cliente = require('../models/orm').Cliente;
const Producto = require('../models/orm').Producto;
const Vendedores = require('../models/orm').Vendedor;
const Venta = require('../models/orm').Venta;

    
router.get('/cliente', async(req, res)=>{
    try {
        const arrayClienteDB = await Cliente.find()
        console.log(arrayClienteDB)

        res.render("clientes", {
            arrayCliente : arrayClienteDB
        })

    } catch (error) {
        console.log(error)
    }
})



module.exports = router;