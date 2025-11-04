/* 

BODYPARSER - PACOTE PARA TRABALHAR COM FORMULÁRIOS

    npm install body-parser --save
    npm install express --save

*/

// importação das bibliotecas
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//Middlware - primeira linha a ser executada porque está utilizando o "use"
app.use(bodyParser.urlencoded({extended: false})); // DECODIFICANDO O HTML 

//Rotas
app.get("/", (req, res) =>{
    res.sendFile(__dirname+'/index.html');
});

app.post("/add", (req, res) =>{
    res.send("NOME: "+req.body.nome+"</br>E-AMAIL: "+req.body.email);
});

const PORT = 8080;
app.listen(PORT, () =>{
    console.log("SERVIDOR RODANDO NA URL http//:localhost:"+PORT);
});

