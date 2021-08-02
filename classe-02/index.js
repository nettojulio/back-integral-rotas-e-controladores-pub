const express = require('express');
const app = express();
const { validarSenha } = require('./intermediarios')
const roteador = require('./roteador')

app.use(express.json());
app.use(validarSenha);
app.use(roteador);

app.listen(8000);