var express = require('express')
var router = express.Router()
var Student = require('../services/studentServices');


router.get('/students' , function(req, res) {
    
    //res.send("You suck");

    Student
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

module.exports = router;