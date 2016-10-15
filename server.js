var express = require('express');
var path = require('path');
var jobData = require('./app/helpers/jobs.data');

var PORT = process.env.PORT || 8000;
var app = express();


// mongoose connection
// mongoose.connect('mongodb://localhost/jobfinder')
jobData.connectDB('mongodb://jobfinder:federals@ds057816.mlab.com:57816/jobfinder')
    .then(function (con) {
        console.log("whala mongoose has connected");
        jobData.seedJobs();
    })


//setting up static files
app.use(express.static('./app/public'));

app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'jade');


app.get('/', function (req, res) {
    res.render('index');
});

app.get('/api/jobs', function (req, res) {

    jobData.allJobs().then(function(collection){
        res.status(200).json(collection)
    })

});
app.listen(PORT);