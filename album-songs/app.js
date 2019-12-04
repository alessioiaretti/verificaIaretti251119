var express = require('express'); // Carica in memoria la libreria express usando la variabile express

var app = express(); // Assegno la variabile express nella variabile app

app.use(express.static(__dirname + '/public')); 

app.set('view engine', 'pug');  

const path = require('path');

const canzoni = require('./api/album-songs.json'); 

app.get('/', function (req, res)
 { 
  res.render('index', {
   title: 'Album Songs',
   canzoni: canzoni.songs 
 });
});

app.get('/api/album-songs',function(req,res){
 res.sendFile(path.join(__dirname+'/api/album-songs.json'));
});

app.get('/song', (req, res) => {
  const canzone = canzoni.songs.find((p) => p.song_id === req.query.song_id);
  res.render('song', {
    title: `About ${canzone.title}`,
    canzone
  });
});


app.listen(3000, function () {
 console.log('Apertura server web su porta 3000!!');
});
