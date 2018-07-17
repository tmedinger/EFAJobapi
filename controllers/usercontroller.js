const router = require('express').Router();
const sequelize = require('../db')
const User = sequelize.import('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/signup', (req, res) => {
// console.log(req.body)
  var pass = req.body.User.password;
  var email = req.body.User.email;
  var firstName = req.body.User.firstName;
  var lastName = req.body.User.lastName;

  User.create({
      password: bcrypt.hashSync(pass, 10),
      email: email,
      firstName: firstName,
      lastName: lastName
  }).then(
      function createSuccess(user){
          console.log(process.env.JWT_SECRET)
          var token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24});
          res.json({
              user: user,
              message: 'created',
              sessionToken: token
          });
      },
      function createError(err) {
          res.json(500, err.message);
      }
  );
});
 
router.post('/login', function(req, res) {
    // console.log(req.body)
  User.findOne( { where: { user_name: req.body.User.user_name } } ).then(
      function(user) {
          if(user) {
              bcrypt.compare(req.body.User.password, user.password, function (err, matches) {
                  if(matches){
                      var token = jwt.sign({id: user.id}, process.env.JWT_SECRET, { expiresIn: 60*60*24});
                      res.json({
                          user: user,
                          message: "successfully authenticated",
                          sessionToken: token
                      });
                  } else {
                      res.status(502).send({ error: "502 error"})
                  }
              });
          } else {
              res.status(500).send({ error: "500 error"});
          }
      },
      function (err) {
          res.status(501).send({ error: "501 error"});
      }
  );
});

module.exports = router;