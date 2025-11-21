/**
 * O model é a camada que possui a lógica da aplicação. Ele é o responsável pelas 
 * regras de negócios, persistência com o banco de dados e as classes de entidades.
 * O model recebe as requisições vindas do controller e gera respostas a partir destas
 * requisições.
 */
const Post = require('./models/Post')
const express = require("express")
const app = express();
const bodyParser = require("body-parser"); // Pegar dados do formulario


app.use(bodyParser.urlencoded({extended: false})) 
app.use(bodyParser.json())
   
    
app.get('/', function(req,res){
    res.sendFile(__dirname+'/index.html')
})

app.get('/cadastro', function(req,res){
    res.sendFile(__dirname+'/cadastro.html')
})

app.post('/add', function(req,res) {
    Post.create({
        nome: req.body.nome,
        email: req.body.email
    }).then(function(){
        res.send("Post Criado com sucesso "+req.body.nome)
    }).catch(function(erro) {
        res.send("Houve um erro: " + erro)
    })
})

app.listen(8082, function(){
    console.log("Servidor rodando na url http://localhost:8082/")
})