var express = require('express')
var router = express.Router()
var sequelize = require('../db');
var Job = sequelize.import('../models/jobsmodel');

var EmployerAccountService = require("../services/employerAccountServices");

const employerAccountService = () => new EmployerAccountService()

router.get("/jobs", function (req, res) {

    Job
        .findAll({
            attributes: ['job_title']
        })
        .then(
            function findAllSuccess(data) {
                res.json(data);
            },
            function findAllError(err) {
                res.send(500, err.message);
            }
        );
})

// /api/jobs/:jobid - GET (Authorize: Admin, Student, Employers) 

router.get('/job/:jobid', function (req,res) {

    
    Job
        .findOne({
            where: {
                id:req.params.id
            }
        })
        .then(
            function findAllSuccess(data) {
                res.json(data);
            },
            function findAllError(err) {
                res.send(500, err.message);
            }
        );
})




// /api/jobs/:employerid - GET (Authorize: Admin, Employers)
router.get("/jobs/:employerid", function (req, res) {
    var userId = req.user.id // req.user.id comes from validate-sessions middleware
    var paramsId = req.params.id // id parameter from endpoint

    employerAccountService(userId, paramsId).getOneEmployer()
    .then(data => res.json(data))
    .catch(err => err.status(500).send(err.message));
})


// /api/jobs/:employerid/:jobid - GET (Authorize: Admin, Employers)
router.get("/jobs/:employerid/:jobid", function (req, res) {
    var userId = req.user.id // req.user.id comes from validate-sessions middleware
    var paramsId = req.params.id // id parameter from endpoint

    employerAccountService(userId, paramsId).getOneEmployer()
    .then(data => res.json(data))
    .catch(err => err.status(500).send(err.message));
})

// /api/jobs/:employerid? - GET (Authorize: Admin, Employers)
// q = query
// jt = jobtype
// ca = createdAt
router.get("/jobs/:employerid?", function (req, res) {
    var userId = req.user.id // req.user.id comes from validate-sessions middleware
    var paramsId = req.params.id // id parameter from endpoint

    employerAccountService(userId, paramsId).getOneEmployer()
    .then(data => res.json(data))
    .catch(err => err.status(500).send(err.message));
})


module.exports = router;