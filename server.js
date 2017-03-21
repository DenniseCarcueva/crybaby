var express = require('express');
var path = require('path');
//instantiate express
var app = express();
//set port
app.set('port', (process.env.PORT || 5000));
//use static files
app.use(express.static(path.join(__dirname, 'assets')));
//express routes
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'assets/index.html'));
});
app.get('/generic', function(req, res){
res.sendFile(path.join(__dirname, 'assets/generic.html'));
});
app.get('/crybaby', function(req, res){
res.sendFile(path.join(__dirname, 'assets/crybaby.html'));
});
app.get('/dollhouse', function(req, res){
res.sendFile(path.join(__dirname, 'assets/dollhouse.html'));
});
app.get('/elements', function(req, res){
res.sendFile(path.join(__dirname, 'assets/elements.html'));
});
app.get('/pityparty', function(req, res){
res.sendFile(path.join(__dirname, 'assets/pityparty.html'));
});
//express server listen
var server = app.listen(app.get('port'), function(){
  console.log('Server listening on port ',app.get('port'));
});