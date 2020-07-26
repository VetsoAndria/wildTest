var express = require('express');
var router = express.Router();
var User = require('../models/users');
var userCtrl = require("../controller/users");
/* GET home page. */
router.get('/', function(req, res, next) {
  User.find()
    .then((users)=>{
      console.log("ici",users);
      res.status(200);
      res.render("index", { users: users });
    })
    .catch((error) => res.status(400).json({ error }));
});
router.post('/', userCtrl.user)
//  res.render('index', { title: 'Express' });


module.exports = router;
