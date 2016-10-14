var mongoose = require('mongoose')

var jobSchema = mongoose.Schema({

    title: {
        type: String,
        require: true
    },
    description: {
        type: String
    }
})

var job = mongoose.model('Job', jobSchema)

exports.seedJobs = function () {

    job.find({}).exec(function (err, jobs) {
        if (jobs.length === 0) {
            job.insert([{
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
                }

            ]).exec(function (err, collection) {
                if(err)
                    console.log(err)
                else    
                    console.log(collection)
            })
        }
    })


}