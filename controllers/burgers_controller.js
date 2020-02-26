const express = require('express');
const router = express.Router();
const burger = require('../models/burger');

router.get('/', function (req, res) {
  burger.all(function (data) {
    let hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  })
})

router.post("/api", function (req, res) {
  burger.add(req.body.name, function (result) {
    // Send back the ID of the new burger
    res.json({ id: result.insertId });
  });
});

router.put("/api", function (req, res) {
  burger.update(req.body.id, function (result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  })
});