var express = require('express')
var router = express.Router()
var sequelize = require('../db');
var Job = sequelize.import('../models/jobsmodel');

router.get("/jobs", function(req, res) {

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

module.exports = router;