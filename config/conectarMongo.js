const { MongoClient } = require("mongodb");

const uri ='mongodb+srv://Cossio:99122608880juan@adsi2364482.rz6w0.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);

const database = client.db('TiendaPOS');
const coleccion = database.collection('Productos');
    module.exports ={
      client,
      coleccion
    }


/** 
 * const { MongoClient } = require("mongodb");

const uri ='mongodb+srv://usuario:pass@cluster.nzwbkjo.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);

const database = client.db('_ _');
const coleccion = database.collection('Productos');

    module.exports ={
      client,
      coleccion
    }
    
    
  //esto de abajo va en el enrutador
  
router.get('/inicio', async (req, res) => {
   console.log(await db.findOne())
   res.render('pages/index');
  });

router.post('/registrar',(req,res)=>{
  db.insertOne(
    { Referencia: 'A04',
      Nombre: 'Tennis Adidas',
      ...
    }
  res.render('pages/index')
});/ */