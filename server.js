
var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var jobs = require('./app/models/Job')

var PORT = process.env.PORT || 8000;
var app = express();


// mongoose connection
mongoose.connect('mongodb://localhost/jobfinder')
var con = mongoose.connection;
con.on('open', function() {
    console.log("whala mongoose has connected");
    jobs.seedJobs();

});


//setting up static files
app.use(express.static('./app/public'));

app.set('views', path.join(__dirname,'app/views'));
app.set('view engine', 'jade');


app.get('/', function(req, res) {
    res.render('index');
});




app.get('/api/jobs', function (req, res) {
    
    mongoose.model('Job').find({}).exec(function (err, collection) {
        res.status(200).json(collection);
    })
})
app.listen(PORT);