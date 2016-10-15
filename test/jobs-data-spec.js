var expect = require('chai').expect
var mongoose = require('mongoose')
var jobs = require('../app/models/Job')



describe('get jobs', function() {

    it('shuold should always return a job since jobs are seeded', function () {
        mongoose.model('job').find({}).exec(function(err, collection) {
            expect(collection).to.be.at.least(1)
        })

    })


})