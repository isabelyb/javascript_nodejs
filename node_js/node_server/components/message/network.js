//Archivo para todas las rutas de los mensajes

const express = require('express'); // importar express

const response = require('../../network/response');

const router = express.Router(); //crear el router

router.get('/', function(req, res){  // Atender peticiones GET
    console.log(req.headers); // mandar cabeceras
    //res.send('Lista de Mensajes')
    response.succes(req, res);
})

router.post('/', function(req, res){  // Atender peticiones POST
    console.log(req.body); // para verificar que funciona probando en el Postman
    console.log(req.query);
    res.send('Mensaje ' + req.body.text + ' añadido')
})

module.exports = router; //exportar modulo