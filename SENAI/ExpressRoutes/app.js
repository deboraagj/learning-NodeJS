/*

para ser possível a utilização da biblioteca express é necessário instalar a mesma na máquina local através do
comando "npm install express --save"

para desintalar alguma biblioteca usa-se o comando "npm uninstall nomedabiblioteca"

/*
    PARA INICIALIZAR O NPM

    npm init -y

    PARA RODAR O APP.JS

    node app.js
*/

const express = require('express'); 
const app = express();

// o primeiro argumento é a porta que vai ser ouvida
// o segundo argumento é para retornar o sucesso

// ROTAS COM NODEJS

app.get("/index", function(req, res){
    res.sendFile(__dirname+"/html/index.html"); // "__dirmane" aponta para o local específico no diretório
});

app.get("/about", function(req, res){
    res.sendFile(__dirname+"/html/about.html");
});

app.get("/ola/:name", function(req, res){
    res.send(`<h1> Olá meu caro(a) ${req.params.name} </h1>`);
});

const PORT = 8080;

app.listen(PORT, function(){
    console.log("Server runnig in url http://localhost:"+PORT);
});

// biblioteca para atualizar o servidor o servidor automaticamente: nodemon. Comando para instalar "npm install nodemon"

