/**
 * - express
 * - sequelize
 * - mysql2
 * - express-handlebars
 * - handlebars
 * - bootstrap
 * - body-parser
 * 
 */


const express = require("express");
const app = express();
const handlebars = require("express-handlebars")
const bodyParser = require("body-parser")
const Post = require("./models/Post")
const path = require('path');
const { BADFAMILY } = require("dns");
const { where } = require("sequelize");


app.engine('handlebars', handlebars.engine({
    defaultLayout: 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
    }
}));

app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/bootstrap', express.static('./node_modules/bootstrap/dist'));

// ASSETS
app.use(express.static(path.join(__dirname,"assets")));


app.get("/cadastro", (req,res) => {
    res.render('formulario');
})


// CRUD -> CREATE - READ - UPDATE - DELETE

// CREATE   

app.post("/add", (req,res) => {
   Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
   }).then(() => {
        res.render('add');
   }).catch((error) => {
        res.send("Houve um erro"+error)
   })
 })


app.get("/", (req,res) => {
   Post.findAll()
        .then((posts) => {
            res.render('home', {posts: posts})
        })
})

// DELETAR
app.get("/deletar/:id", (req,res) => {
    Post.destroy({ where: {'id': req.params.id }})
        .then(() => {
            const msg = "Postagem deletada com sucesso";
            res.render('delete', {msg: msg})
        }).catch((error) => { 
            const msg = "Este poste não foi deletado" + error;
            res.render('delete', {msg: msg})
        })
})

// APENAS PARA RETORNAR AS INFORMAÇÕES DO USUÁRIO 
app.get("/edit/:id", (req,res) => {
    Post.findOne({ where: {id: req.params.id}})
        .then((post) => {
            res.render('editposts', {post: post})
        }).catch((error) => {
            res.redirect("/");
        })
})

app.post("/edit", (req,res) => {
    Post.findOne({ where: {id: req.body.id}})
        .then((post) => {

            post.titulo = req.body.titulo;
            post.conteudo = req.body.conteudo;

            post.save().then(() => {
                res.redirect("/")
            }).catch((error) => {
                console.log(error)
                res.redirect("/")
            })
        })
})


const PORT = 8080;

app.listen(PORT, () => {
    console.log("Servidor rodando na url http://localhost:"+PORT)
})