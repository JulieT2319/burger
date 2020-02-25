//bring in connection
const connection = require("../config/connection.js");

module.exports = orm{
  selectAll: function(tableToSelect) {
    const query = 'SELECT * FROM ??';
    connection.query(query, [tableToSelect], function (err, results) {
      if (err) throw err;
      console.log(result);
    })
  }
};