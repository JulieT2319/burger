//Server Dependencies
const express = require("express");
require("dotenv").config();

//Setting up server
const PORT = process.env.PORT;
const app = express();
app.use(express.static("public"));
//Setting up data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Setting up handlebars
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Setting up Routes
const routes = require("./controllers/burgers_controller.js");
app.use(routes);
app.listen(PORT, function() {
	// Log when server has started.
	console.log("Server listening on: http://localhost:" + PORT);
});
