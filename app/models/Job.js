var mongoose = require('mongoose');
var Promise = require('bluebird');
mongoose.Promise = Promise


var jobSchema = mongoose.Schema({

    title: {
        type: String,
        require: true
    },
    description: {
        type: String
    }
})

var Job = mongoose.model('Job', jobSchema)
exports.db = Job

exports.allJobs = function() {
    console.log("dkdkdk")
    return  Job.find({}).exec()
}

exports.seedJobs = function () {
    return new Promise(function (resolve, reject) {
        Job.find({}).exec(function (err, jobs) {
            if (jobs.length === 0) {
                Job.create({
                    title: "Saro agrosciences limited Jobs matching your search criteria",
                    description: "Saro AgroSciences Limited is the leader in the Nigerian Crop Protection Industry. We are a wholly indigenous company, committed to the provision of dependable solutions to crop production problems..."
                })
                Job.create({
                    title: "Social Media Internet Assessor",
                    description: "ionbridge Technologies, Inc. (NASDAQ: LIOX) is a leading provider of globalization and testing services. Lionbridge has a global network of more than 200,000 resources focused on translation and localization services across 100+ countries. "

                })
                Job.create({
                    title: "Head of Industrial Projects",
                    description: "Our client, a leading investment holding company based in Abuja, Nigeria. With over 30 years high-level experience and investment success in several companies , requires for immediate employment"
                })
                Job.create({
                    title: "Head of Industrial Projects",
                    description: "Bradfield Consulting Limited - Our client is a major player in international freight forwarding business and they wish to fill this position with a suitable candidate   Overall Role.."
                }, resolve)
            }
        })
    })
}