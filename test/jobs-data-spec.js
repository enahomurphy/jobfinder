var expect = require('chai').expect
var mongoose = require('mongoose')
var jobModel = require('../app/models/Job')

mongoose.connect('mongodb://localhost/jobfinder')



function resetJobs(callback) {
    mongoose.connection.collections['jobs'].drop(callback)
}

describe('get jobs', function () {

    it('shuold should always return a job since jobs are seeded', function (done) {
        resetJobs(function () {
            jobModel.seedJobs(function () {
                mongoose.model('Job').find({}).exec(function (err, jobList) {
                    expect(jobList).to.have.length.of.at.least(2)
                    console.log(jobList.length, "hello")
                    done()
                    console
                })
            })
        })
    })
})