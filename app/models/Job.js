var mongoose = require('mongoose');


var jobSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String
    }
})


module.exports =  mongoose.model('Job', jobSchema)
