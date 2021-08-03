const express = require('express');
const { listarAlunos, buscarAluno, addAluno, excluirAluno } = require('./controladores/controladores');

const roteador = express();

roteador.get('/alunos', listarAlunos);
roteador.get('/alunos/:id', buscarAluno);
roteador.post('/alunos', addAluno);
roteador.delete('/alunos/:id', excluirAluno);

module.exports = roteador;