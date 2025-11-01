/* INSTALANDO O SEQUELIZE E O MYSQL

   npm install sequelize --save
   npm install mysql2 --save
   npm install express --save
   npm install nodemon --save

*/

const express = require('express');
const { type } = require('os');
const app = express();
const Sequelize = require('sequelize');

// CONFIGURAÇÃO DO BANCO DE DADOS
//const sequelize = new Sequelize('nomeDoBancoDeDados','usuario_mysql','senha');
const sequelize = new Sequelize('deboraagj', 'admin','admin',{
    host: "localhost",
    dialect:'mysql'
});

// AUTENTICAÇÃO DO BANCO DE DADOS
sequelize.authenticate().then(function (){
    console.log("CONCETADO COM SUCESSO");
}).catch((erro) => {
    console.log("ERRO AO CONECTAR"+ erro);
});

// 1° PASSO - CRIANDO TABELA NO BANCO DE DADOS
const Post = sequelize.define('post', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
});

// 2° PASSO - FORÇAR CRIAÇÃO DA TABELA
// Post.sync({force: true});

// 3° PASSO - INSERIR REGISTROS NA TEBALA
Post.create({
    titulo: "Feira de Frutas",
    conteudo: "Morango, Abacaxi, Jaca, Caju"
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log("SERVIDOR INICIADO NA URL https://localhost:"+PORT);
});

