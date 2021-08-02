const { alunos } = require('../dados/index');

function listarAlunos(req, res) {
    res.json(alunos);
}

function buscarAluno(req, res) {

    const erro = validarID(req.params.id);

    if (erro) {
        res.status(400);
        res.json({ erro });
        return;
    }

    const aluno = alunos.find((aluno) => aluno.id === Number(req.params.id));

    if (!aluno) {
        res.status(404);
        res.json({
            "mensagem": "Aluno não encontrado."
        });
        return;
    }
    res.json(aluno);
}

function addAluno(req, res) {

    const erro = validarDados(req.body);

    if (erro) {
        res.status(400);
        res.json({ erro });
        return;
    }

    let novoId = (alunos.length + 1);
    const novoAluno = {
        id: novoId,
        nome: req.body.nome.trim(),
        sobrenome: req.body.sobrenome.trim(),
        idade: req.body.idade,
        curso: req.body.curso.trim()
    }

    alunos.push(novoAluno);
    res.status(201);
    res.json();
    console.log('Add');
}

function excluirAluno(req, res) {
    const erro = validarID(req.params.id);

    if (erro) {
        res.status(400);
        res.json({ erro });
        return;
    }

    const aluno = alunos.find((aluno) => aluno.id === Number(req.params.id));

    if (!aluno) {
        res.status(404);
        res.json({
            "mensagem": "Aluno não encontrado."
        });
        return;
    }

    const indice = alunos.indexOf(aluno);
    alunos.splice(indice, 1);
    res.json(aluno);
    console.log(alunos);
}

function validarID(id) {
    if (isNaN(id) || id < 0 || id % 1 !== 0) {
        return "Número Inválido!"
    }
}

function validarDados(aluno) {
    if (!aluno.nome || !aluno.sobrenome || !aluno.idade || !aluno.curso) {
        return "Dados Incompletos. Preencha todos os campos"
    }

    if (aluno.nome.length === 0 || typeof aluno.nome !== 'string' || (aluno.nome.split("").every((x) => x === " "))) {
        return "Campo 'Nome' possui inconsistências que não permitem a gravação"
    }

    if (aluno.sobrenome.length === 0 || typeof aluno.sobrenome !== 'string' || (aluno.sobrenome.split("").every((x) => x === " "))) {
        return "Campo 'Sobrenome' possui inconsistências que não permitem a gravação"
    }

    if (aluno.curso.length === 0 || typeof aluno.curso !== 'string' || (aluno.curso.split("").every((x) => x === " "))) {
        return "Campo 'Curso' possui inconsistências que não permitem a gravação"
    }

    if (typeof aluno.idade !== 'number' || aluno.idade < 0 || aluno.idade % 1 !== 0) {
        return "Campo 'Idade' possui inconsistências que não permitem a gravação"
    } else if (aluno.idade < 18) {
        return "Não possui idade mínima inclusão em sistema."
    }
}

module.exports = {
    listarAlunos,
    buscarAluno,
    addAluno,
    excluirAluno
}