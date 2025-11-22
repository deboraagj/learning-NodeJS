// IMPORTAÇÃO DO MÓDULO SEUQELIZE PARA UMA CONSTANTE
const Sequelize = require("sequelize")

// CONFIGURAÇÃO DO BANCO DE DADOS
const sequelize = new Sequelize(
    "cadastro",
    "admin",
    "admin",
    {
        host: "localhost",
        dialect: "mysql"
    }
)

sequelize.authenticate().then((function(){
    console.log("BANCO DE DADOS CONECTADO COM SUCESSO!")
})).catch(function(erro){
    console.log(" ERRO AO CONECTAR O BANCO DE DADOS!")
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}