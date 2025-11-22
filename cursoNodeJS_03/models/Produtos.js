const db = require("./db")
const Produto = db.sequelize.define("produtos", {
    // COLUNA NOME
    nome:{
        type: db.Sequelize.STRING,
        allowNull: false
    },
    // COLUNA PREÇO
    preco: {
        type: db.Sequelize.DOUBLE,
        allowNull: false
    },
    // COLUNA DESCRIÇÃO
    descricao: {
        type: db.Sequelize.TEXT,
        allowNull: false
    }
})

// TESTANDO CRIAÇÃO DE REGSITROS NO BANCO DE DADOS
Produto.create({
    nome: "Tecaldo",
    preco: "49.99",
    descricao: "RGB"
})

Produto.sync({force: false})


