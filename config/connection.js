const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: DB_PORT,
  user: "root",
  password: DB_PASSWORD,
  database: "burgers_db"
});

// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for ORM to use.
module.exports = connection;