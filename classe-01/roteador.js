const express = require('express');
const { consultarImoveis, consultarImovel } = require('./controladores/imoveis');

const roteador = express();

roteador.get('/imoveis', consultarImoveis);
roteador.get('/imoveis/:id', consultarImovel);

module.exports = roteador;