const { imoveis } = require('../dados/imoveis');


function consultarImoveis(req, res) {
    console.log(imoveis);
    res.json(imoveis);
}

function consultarImovel(req, res) {
    const imovel = imoveis.find((imovel) => imovel.id === Number(req.params.id));

    if (!imovel) {
        res.json({erro: "Não encontrado" });
        console.log(imovel);
    } else {
        res.json(imovel);
        console.log(imovel);
    }
}

module.exports = { 
    consultarImoveis, 
    consultarImovel 
};