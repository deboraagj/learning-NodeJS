/**
 * npm install express -> Instalar biblioteca
 * npm uninstall express -> Desinstalar biblioteca
 * 
 * npm init -y
 * node app.js 
 * 
 * - Express
 * - Rotas
 * - Servidor Express
 * - Rota com parâmetro
 * - Função de callback
 * - __dirname
 * - nodemon
 */

const express = require('express'); // Servidor 
const app = express(); // Objeto express (servidor)

// ROTAS COM NODE JS

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/html/index.html")
})

app.get("/sobre", function(req, res) {
    res.sendFile(__dirname + "/html/sobre.html")
})

app.get("/ola/:nome", function(req,res) {
    res.send(`<h1>Olá ${req.params.nome} tudo bem ?`)
})


const PORT = 8080;
app.listen(PORT, function() {
    console.log("Servidor rodando na url http://localhost:"+PORT);
})