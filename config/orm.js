//bring in connection
const connection = require("../config/connection.js");

orm = {
	selectAll: function(table, cb) {
		const query = "SELECT * FROM ??";
		connection.query(query, [table], function(err, results) {
			if (err) throw err;
			cb(results);
		});
	},
	insertOne: function(table, columns, values, cb) {
		const query = "INSERT INTO ?? (??) VALUES (?);";
		connection.query(query, [table, columns, values], function(err, results) {
			if (err) throw err;
			cb(results);
		});
	},
	updateOne: function(table, column, value, conditionCol, conditionVal, cb) {
		const query = "UPDATE ?? SET ??=? WHERE ?? = ?";
		connection.query(
			query,
			[table, column, value, conditionCol, conditionVal],
			function(err, results) {
				if (err) throw err;
				cb(results);
			}
		);
	},
	removeOne: function(table, conditionCol, conditionVal, cb) {
		const query = "DELETE FROM ?? WHERE ?? = ?";
		connection.query(query, [table, conditionCol, conditionVal], function(
			err,
			results
		) {
			if (err) throw err;
			cb(results);
		});
	}
};

module.exports = orm;
