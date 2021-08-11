const express = require('express');
const message = require('../components/message/network')


// funcion que añada todas las rutas
const routes = function (server){
    server.use('/message', message);
}  

module.exports = routes;