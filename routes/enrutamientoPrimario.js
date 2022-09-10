const express = require('express');
const router = express.Router();
const bdc = require('../config/connection');
const producto = require('../models/producto');


router.get('/', (req,res)=>{
    res.render('../templates/index')
})

router.get('/inicio', (req,res)=>{
    res.send("SOY UN INICIO ENRUTADO");
})

router.get('/about', (req,res)=>{
    res.send("Una aplicacion de desarrollo para aprendizaje");
})

router.get('/conectar', (req,res)=>{
    bdc.mongoose;
})
router.get('/registrar',(req,res)=>{
    const productoDb = new producto({
        referencia    : 'A04',
        nombre        : 'Tennis Adidas',
        descripcion   : 'Tennis del rayo Mcqueen',
        precio        : 250000,
        stock         : 2,
        imagen        : 'Url',
        habilitada    : true
    });
    productoDb.save();
    console.log(productoDb)
    res.render('../templates/index')
  });

module.exports = router;



