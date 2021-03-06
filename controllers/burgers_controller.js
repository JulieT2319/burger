const express = require("express");
const router = express.Router();
const burger = require("../models/burger");

router.get("/", function(req, res) {
	burger.all(function(data) {
		console.log(data);
		let eaten = data.filter(burger => {
			return burger.devoured == 1;
		});
		let uneaten = data.filter(burger => {
			return burger.devoured == 0;
		});
		let hbsObject = {
			eaten: eaten,
			uneaten: uneaten
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

router.post("/api/burgers", function(req, res) {
	burger.add(req.body.burger_name, function(result) {
		// Send back the ID of the new burger
		res.json({ id: result.insertId });
	});
});

router.put("/api/eatburgers/:id", function(req, res) {
	burger.eat(req.params.id, function(result) {
		if (result.changedRows == 0) {
			// If no rows were changed, then the ID must not exist, so 404
			return res.status(404).end();
		} else {
			res.status(200).end();
		}
	});
});
router.put("/api/orderburgers/:id", function(req, res) {
	burger.reorder(req.params.id, function(result) {
		if (result.changedRows == 0) {
			// If no rows were changed, then the ID must not exist, so 404
			return res.status(404).end();
		} else {
			res.status(200).end();
		}
	});
});
router.delete("/api/burgers/:id", function(req, res) {
	burger.delete(req.params.id, function(result) {
		if (result.affectedRows == 0) {
			// If no rows were changed, then the ID must not exist, so 404
			return res.status(404).end();
		} else {
			res.status(200).end();
		}
	});
});

module.exports = router;
