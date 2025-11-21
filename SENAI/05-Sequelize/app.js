/**
 * 
 * npm install sequelize --save
 * npm install mysql2 --save
 * npm install express --save
 * npm install nodemon -g --save 
 * .+-
 * 
 */

const express = require("express");
const app = express();
const Sequelize = require("sequelize");

// Configruações do Banco de dados
const sequelize = new Sequelize('miqueias_ds','root','', {
    host: "localhost",
    dialect: 'mysql'
});

// Autenticação do Banco de Dados
sequelize.authenticate().then(function (){
    console.log("Conectado com sucesso")
}).catch((erro) => {
    console.log("falha ao se conectar" + erro);
})

// 1ª Passo: Criar tabela no banco de dados
const Post = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

// 2ª Passo: Criarção da tabela
// Post.sync({force: true});

// 3ª Passo: Inserir registros na tabela
Post.create({
    titulo: "Debora",
    conteudo: "Meu 2ª Post"
})


const PORT = 8080;
app.listen(PORT, () => {
    console.log("Servidor iniciado na url https://localhost:"+PORT)
})






