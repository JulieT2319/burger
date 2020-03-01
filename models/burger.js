const orm = require("../config/orm");

const burger = {
	all: function(cb) {
		orm.selectAll("burgers", function(res) {
			cb(res);
		});
	},
	add: function(value, cb) {
		orm.insertOne("burgers", "burger_name", value, function(res) {
			cb(res);
		});
	},
	update: function(conditionVal, cb) {
		//table, column, value, conditionCol, conditionVal
		orm.updateOne("burgers", "devoured", true, "id", conditionVal, function(
			res
		) {
			cb(res);
		});
	},
	delete: function(conditionVal, cb) {
		orm.removeOne("burgers", "id", conditionVal, function(res) {
			cb(res);
		});
	}
};

module.exports = burger;
