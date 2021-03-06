var mongoose = require('mongoose');
var Promise = require('bluebird');
var Job = require('../models/job')
mongoose.Promise = Promise;

//create a promise mongo connection
var connectDb = Promise.promisify(mongoose.connect, {context : mongoose});

var CreateJob = Promise.promisify(Job.create, { context: Job });

var allJobs = function (query) {
    return Promise.cast(Job.find(query).exec());
}

//simple jobs seeder
var seedJobs = function () {
    return allJobs().then(function (jobList) {
        if (jobList.length === 0) {
            return Promise.map(jobs, function (job) {
                return CreateJob(job);
            })
        }
    })
}


// simple jobs seed data
var jobs = [{
    title: "Saro agrosciences limited Jobs matching your search criteria",
    description: "Saro AgroSciences Limited is the leader in the Nigerian Crop Protection Industry. We are a wholly indigenous company, committed to the provision of dependable solutions to crop production problems..."
}, {
    title: "Social Media Internet Assessor",
    description: "ionbridge Technologies, Inc. (NASDAQ: LIOX) is a leading provider of globalization and testing services. Lionbridge has a global network of more than 200,000 resources focused on translation and localization services across 100+ countries. "

}, {
    title: "Head of Industrial Projects",
    description: "Our client, a leading investment holding company based in Abuja, Nigeria. With over 30 years high-level experience and investment success in several companies , requires for immediate employment"
}, {
    title: "Head of Industrial Projects",
    description: "Bradfield Consulting Limited - Our client is a major player in international freight forwarding business and they wish to fill this position with a suitable candidate   Overall Role.."
}]


exports.db = Job
exports.allJobs = allJobs
exports.seedJobs = seedJobs
exports.connectDB = connectDb