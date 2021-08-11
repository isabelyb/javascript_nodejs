const express = require('express'); // importar módulo express
//const bodyParser = require('body-parser') // body parser para trabajar ocn las peticiones de una forma mas sencilla

// const router = express.Router(); // permite separar cabeceras, métodos, urls, peticiones

//const router = require('./components/message/network')

const router = require('./network/routes');

var app = express(); // inicializar express

app.use(express.json()); //alternativa a body-parser antes: bodyParser.json()

//app.use(router); //añadir el router a la app de express

router(app); //servidor configurado al que se le pasan las rutas

// app.use('/', function(req, res){  // para cualquier ruta que me devuelva "hola"  ->  Función HTTP req y resp
//     res.send('Hola');
// })

app.listen(3000);

console.log('La app  está escuchando en http://localhost:3000')
