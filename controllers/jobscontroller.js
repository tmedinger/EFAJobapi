var express = require('express')
var router = express.Router()
var sequelize = require('../db');
var Job = sequelize.import('../models/jobsmodel');

router.get('/jobs', (req, res, next) => {
    Job.find(function(err, jobsmodel){
        res.json(jobsmodel);
    })
})






module.exports = router;