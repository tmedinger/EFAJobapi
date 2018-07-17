var router = require('express').Router();
var sequelize = require('../db');

var AuthStudentData = sequelize.import('../models/');
const Op = sequelize.Op //Use for sequelize operators--queries etc...

router.get('/getall', function (req, res) {

    AuthStudentData
        .findAll()
        .then(
            function findAllSuccess(data) {
                res.json(data);
            },
            function findAllError(err) {
                res.send(500, err.message);
            }
        );
});