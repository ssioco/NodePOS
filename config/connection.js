const mongoose = require('mongoose');
//gestionar coneccion a bases de datos en mongo.

const url = 'mongodb+srv://Cossio:99122608880juan@adsi2364482.rz6w0.mongodb.net/?retryWrites=true&w=majority'

const conectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
 }

 mongoose.connect(url,conectionParams)
    .then( () => {
        console.log('Connected to the database ');
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
        
    })

module.exports = { mongoose }