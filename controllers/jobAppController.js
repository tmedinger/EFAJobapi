var router = require('express').Router();
var sequelize = require('../db');
var AuthJobAppData = sequelize.import('../models/jobApplied');
const Op = sequelize.Op

router.get('/studentaccount', function (req, res) {

    AuthJobAppData
        .findAll({
            where: {
                student_account_Id: req.body.student.id,
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
});