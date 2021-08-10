const express = require('express'); // importar módulo express
//const bodyParser = require('body-parser') // body parser para trabajar ocn las peticiones de una forma mas sencilla

const response = require('./network/response');

const router = express.Router(); // permite separar cabeceras, métodos, urls, peticiones

var app = express(); // inicializar express

app.use(express.json()); //alternativa a body-parser antes: bodyParser.json()
app.use(router); //añadir el router a la app de express

router.get('/message', function(req, res){  // Atender peticiones GET
    console.log(req.headers); // mandar cabeceras
    //res.send('Lista de Mensajes')
    response.succes(req, res);
})

router.post('/message', function(req, res){  // Atender peticiones POST
    console.log(req.body); // para verificar que funciona probando en el Postman
    console.log(req.query);
    res.send('Mensaje ' + req.body.text + ' añadido')
})



// app.use('/', function(req, res){  // para cualquier ruta que me devuelva "hola"  ->  Función HTTP req y resp
//     res.send('Hola');
// })

app.listen(3000);

console.log('La app  está escuchando en http://localhost:3000')
