var mongoose = require("mongoose");
var User = require("../models/users");
exports.user = (req, res, next) => {
  console.log('okok',req.body.name);
  var newUser = new User({
    name: req.body.name
    });
    newUser.save(function (err) {
      if (err == true) {
        console.log("erreur d'écriture");
      } else {
      }
    });
    console.log("enregistrement effectué");
    res.redirect("/");
  };
