var express = require('express'); // Carica in memoria la libreria express usando la variabile express

var app = express(); // Assegno la variabile express nella variabile app

app.use(express.static(__dirname + '/public')); 

app.set('view engine', 'pug');  

const canzoni = require('./album-songs.json'); 

app.get('/', function (req, res)
 { 
  res.render('index', {
   title: 'Album Songs',
   canzoni: canzoni.songs 
 });
});

app.listen(3000, function () {
 console.log('Apertura server web su porta 3000!!');
});
