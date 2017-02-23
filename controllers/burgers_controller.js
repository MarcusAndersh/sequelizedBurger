var express = require("express");

var router = express.Router();

var db = require("../models");

router.get("/", function(req, res) {
  db.Burgers.findAll({}).then(function(dbBurgers) {

   var hbsObject = {
      burgers: dbBurgers
    };
    res.render("index", hbsObject);
   
  });
});

router.post("/", function(req, res) {
    db.Burgers.create({
    burger: req.body.burger,
    date_devoured: new Date()
  }).then(function(dbBurgers) {
      res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
    db.Burgers.update({
      devoured: req.body.devoured
    }, {
      where: {
        id: req.params.id
      }
    }).then(function(dbBurgers) {
      res.redirect("/");
  });
});

module.exports = router;