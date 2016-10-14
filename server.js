
var express = require('express');
var path = require('path');

var PORT = process.env.PORT || 8000;
var app = express();

app.use(express.static('./app/public'));

app.set('views', path.join(__dirname,'app/views'));
app.set('view engine', 'jade');


app.get('/', function(req, res) {
    res.render('index');
});

app.listen(PORT);