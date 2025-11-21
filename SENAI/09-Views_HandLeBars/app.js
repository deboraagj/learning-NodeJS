/**
 * Assuntos da aula:
 * 
 * - Views
 * - Handlebars
 * - Arquivos Estático
 * - Variavel de Ambiente
 * 
 * 
 * npm install --save express-handlebars
 * 
 * Handlebars-> Template Engine, funcionalidade para o HTML
 * estruturas condicionas, exibir dados do backend 
 * 
 * {{{body}}} é usado para indicar onde o conteúdo dinâmico (de um template específico)
 * será inserido no layout principal.
 * 
 * npm install --save express-handlebars
 * npm install --save express
 * npm install --save handlebars
 * 
 * npm install -g win-node-env
 * npm install dotenv --save
 *
*/

// Importando o Express e o Express-handlebars var express = require('express');
var express = require('express');
var handlebars = require('express-handlebars');

// App
var app = express();
const path = require('path')
require('dotenv').config()

// Template
app.engine('handlebars', handlebars.engine({ defaultLayout: 'principal' }));
app.set('view engine', 'handlebars');

// Rotas
app.get('/', function (req, res) {

    res.render('inicio',{pagina:true}); // pagina é o nome da variavel que vai ser enviada para o inicio
});

app.use(express.static(path.join(__dirname,"assets")))

app.get('/sobre', function (req, res) {
    
    let pessoas = [
        {"Nome": "João", "Idade":20},
        {"Nome": "Maria", "Idade":30}
    ]

    let meuNome = "SENAI";
    

    res.render('sobre',{nome:meuNome});
});
// Servidor
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log("Servidor iniciado http://localhost:"+PORT)
});
