const Sequelize = require("sequelize");

// Configruações do Banco de dados
const sequelize = new Sequelize('sequelize','root','', {
    host: "localhost",
    dialect: 'mysql'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}