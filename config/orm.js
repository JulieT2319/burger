//bring in connection
const connection = require("../config/connection.js");

orm = {
  selectAll: function (table) {
    const query = 'SELECT * FROM ??';
    connection.query(query, [table], function (err, results) {
      if (err) throw err;
      console.log(results);
    })
  },
  insertOne: function (table, columns, values) {
    const query = "INSERT INTO ?? (??) VALUES (?);";
    connection.query(query, [table, columns, values],
      function (err) {
        if (err) throw err;
        console.log("Your table was added to successfully!");
      });
  },
  updateOne: function (table, column, value, conditionCol, conditionVal) {
    const query = "UPDATE ?? SET ??=? WHERE ?? = ?";
    connection.query(query, [table, column, value, conditionCol, conditionVal],
      function (err) {
        if (err) throw err;
        console.log("Your table was updated successfully!");
      });
  }
};

module.exports = orm;