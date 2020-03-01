const mysql = require("mysql");

const connection = mysql.createConnection(process.env.JAWSDB_URL); //||
// mysql.createConnection({
// 	host: "localhost",
// 	port: process.env.DB_PORT,
// 	user: "root",
// 	password: process.env.DB_PASSWORD,
// 	database: "burgers_db"
// });

// Make connection.
connection.connect(function(err) {
	if (err) {
		console.error("error connecting: " + err.stack);
		return;
	}
	console.log("connected as id " + connection.threadId);
});

// Export connection for ORM to use.
module.exports = connection;
