function validarSenha(req, res, next) {
    if (req.method === 'GET' && req.url === '/alunos' || req.query.senha === 'cubos123') {
        console.log();
        next();
    } else {
        res.status(401);
        res.json({
            "mensagem": "Autenticação Necessária."
        });
    }
}

module.exports = { validarSenha };