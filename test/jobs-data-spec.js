var expect = require('chai').expect;
var mongoose = require('mongoose');
var jobModel = require('../app/helpers/jobs.data.js');
var Promise = require('bluebird');

function resetJobs() {
    return new Promise(function (resolve, reject) {
        mongoose.connection.collections.jobs.drop(resolve, reject);
    });
}

describe('get jobs', function () {
    var jobs;
    before(function (done) {
        jobModel.connectDb('mongodb://localhost/jobfinder')
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