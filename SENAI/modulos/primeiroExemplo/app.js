// O arquivo "app.js" será equivalente a um "index.html", ou seja, ele será o primeiro a ser executado

var somarFunc = require('./somar');
var multiplicarFunc = require('./multiplicar');
var dividirFunc = require('./dividir');

console.log(somarFunc(10,20));
console.log(multiplicarFunc(10,20));
console.log(dividirFunc(10,20));


