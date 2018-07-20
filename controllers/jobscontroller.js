var express = require('express')
var router = express.Router()
var Job = sequelize.import('../models/jobsmodel');

var EmployerAccountService = require("../services/employerAccountServices");

router.get("/jobs", function (req, res) {

    Job
        .getAll()
        .then(
            function findAllSuccess(data) {
                res.json(data);
            },
            function findAllError(err) {
                res.send(500, err.message);
            }
        );
})
router.post('/api/createjob', function (req, res) {

    Job.createJob(req)
        .then(
            function createSuccess(job) {
                res.json({
                    job: job
                });
            },
            function createError(err) {
                res.send(500, err.message);
            }
        )
})

router.put(`/api/jobEdit/:id`, function (req, res) {
    var data = req.params.id;

    Job.editJob(req, data)

        .then(
            function updateSuccess(job) {
                res.json({
                    job: job
                });
            },
            function updateError(err) {
                res.send(500, err.message);
            }
        )
});

router.get(`/api/getJob/:id`, function (req, res) {
    var id = req.params.id;

    Job.getOneJob(req, id)
        .then(
            function findOneSuccess(data) {
                res.json(data);
            },
            function findOneError(err) {
                res.send(500, err.message);
            }
        );
});

router.delete(`/api/deleteJob/:id`, function (req, res) {
    var id = req.params.id;

    Job.deleteJob(req, id)
        .then(
            function deleteSuccess(data) {
                res.send("Student successfully deleted");
            },
            function deleteError(err) {
                res.send(500, err.message);
            }
        )
})

// /api/jobs/:employerid - GET (Authorize: Admin, Employers)
router.get("/jobs/:employerid", function (req, res) {
    var userId = req.user.id // req.user.id comes from validate-sessions middleware
    var paramsId = req.params.id // id parameter from endpoint

    EmployerAccountService.getOneEmployer(paramsId)
        .then(data => res.json(data))
        .catch(err => err.status(500).send(err.message));
})


// /api/jobs/:employerid/:jobid - GET (Authorize: Admin, Employers)
router.get("/jobs/:employerid/:jobid", function (req, res) {
    var userId = req.user.id // req.user.id comes from validate-sessions middleware
    var paramsId = req.params.id // id parameter from endpoint

    EmployerAccountService.getOneEmployer()
        .then(data => res.json(data))
        .catch(err => err.status(500).send(err.message));
})

// /api/jobs/:employerid? - GET (Authorize: Admin, Employers)
// q = querys
// jt = jobtype
// ca = createdAt
router.get("/jobs/:employerid?", function (req, res) {
    var userId = req.user.id // req.user.id comes from validate-sessions middleware
    var paramsId = req.params.id // id parameter from endpoint

    EmployerAccountService.getOneEmployer()
        .then(data => res.json(data))
        .catch(err => err.status(500).send(err.message));
})


module.exports = router;