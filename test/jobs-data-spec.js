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
        mongoose.connection.collections['jobs'].drop(resolve, reject)
    })
}

describe('get jobs', function () {
    it('shuold should always return a job since jobs are seeded', function (done) {
        connectDb('mongodb://localhost/jobfinder')
            .then(resetJobs())
            .then(jobModel.seedJobs)
            .then(jobModel.allJobs)
            .then(function (jobList) {
                console.log(jobList)
                expect(jobList.length).to.be.at.least(1)
                done()
            })
    })
})