const express = require('express');
const router = express.Router();
const bdc = require('../config/connection')

router.get('/inicio', (req,res)=>{
    res.send("SOY UN INICIO ENRUTADO");
})

router.get('/about', (req,res)=>{
    res.send("Una aplicacion de desarrollo para aprendizaje");
})

router.get('/conectar', (req,res)=>{
    bdc.mongoose;
})
module.exports = router;

