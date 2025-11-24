const express = require("express")
const app = express()
const Produtos = require("./models/Produtos")
const PORT = 8080;

// CONFIGURANDO O BodyParser
const bodyParser = require("body-parser");
const { where } = require("sequelize");
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// ---------- ROTAS ---------- //

// PARA INSERIR UM REGISTRO É NECESSÁRIO UTILIZAR O MÉTODO POST

// CREATE
app.post("/cadastro", function(req, res){
    Produtos.create({
        nome: req.body.nome,
        preco: req.body.preco,
        descricao: req.body.descricao
    }).then(function(){
        res.send("PRODUTO CADASTRADO COM SUCESSO!")
    }).catch(function(erro){
        res.send("FALHA AO CADASTRAR O PRODUTO!")
    })
})

//READ
app.get("/", function(req, res){
    Produtos.findAll().then(function(produtos){
        res.send({produtos: produtos})
    }).catch(function(erro){
        res.send("ERRO AO BUSCAR OS DADOS"+erro)
    })
})

// UPDATE
app.patch("/atualizar/:id", function(req, res){
    Produtos.update({
        nome: req.body.nome,
        preco: req.body.preco,
        descricao: req.body.descricao},
        {where: {"id": req.params.id}}
    ).then(function(){
        res.send("ATUALIZAÇÃO FEIRA COM SUCESSO!")
    }).catch(function(erro){
        res.send("ERRO AO ATUALIZAR!"+erro)
    })
})

//DELETAR
app.delete("/deletar/:id", function(req, res){
    Produtos.destroy({where: {"id": req.params.id}}).then(function(){
        res.send("DELETADO COM SUCESSO!")
    }).catch(function(erro){
        res.send("ERRO AO DELETAR!"+erro)
    })
})

// app.get("/home", function(req, res){
//     res.send("Heloo World!")
// })

// app.get("/contatos/:id", function(req,res){
//     if(req.params.id == "1"){
//         res.send("NOME: João \n NÚMERO: (77)99999-9999")
//     }
//     if(req.params.id == "2"){
//         res.send("NOME: Maria \n NÚMERO: (77)99999-9999")
//     }
//     if(req.params.id == "3"){
//         res.send("NOME: Jozé \n NÚMERO: (77)99999-9999")
//     }
// })

app.listen(PORT, function(){console.log(`Servidor rodando na url http://localhost:${PORT}`)})