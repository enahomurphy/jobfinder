var expect = require('chai').expect;
var mongoose = require('mongoose');
var jobModel = require('../app/models/Job');
var Promise = require('bluebird');


mongoose.Promise = Promise;
var connectDb = Promise.promisify(mongoose.connect, {
    context: mongoose
});


function resetJobs() {
    return new Promise(function (resolve, reject) {
        mongoose.connection.collections.jobs.drop(resolve, reject);
    });
}

//  connectDb('mongodb://127.0.0.1/jobfinder')
//     .then(resetJobs())
//     .then(jobModel.seedJobs)
//     .then(jobModel.allJobs)
//     .then(function(job){
//         console.log(job)l
//     })



describe('get jobs', function () {
    var jobs;
    before(function (done) {
        connectDb('mongodb://localhost/jobfinder')
            .then(resetJobs())
            .then(jobModel.seedJobs)
            .then(jobModel.allJobs)
            .then(function (collections) {
                jobs = collections;
                done();
            });
    });


    it('should  always return a job since jobs are seeded', function () {
        expect(jobs.length).to.be.at.least(1);
    });

    it('should have jobs with title', function () {
        expect(jobs[0].title).to.not.be.empty;
    });

    it('should have jobs with description', function () {
        expect(jobs[0].description).to.not.be.empty;
    });

    after(function (done) {
        resetJobs();
        done();
    });
});