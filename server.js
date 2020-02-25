//Server Dependencies
const express = require("express");
const exphbs = require("express-handlebars");
require('dotenv').config();

//Setting up server
const app = express();
const PORT = process.env.PORT;

//Setting up data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Setting up handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.listen(PORT, function () {
  // Log when server has started.
  console.log("Server listening on: http://localhost:" + PORT);
});