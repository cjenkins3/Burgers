//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

//Define port the server will be listening on.
var PORT = process.env.PORT || 3000;

var app = express();

app.use(express.static(__dirname + '/public'));

//Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

//Parse application/json
app.use(bodyParser.json());

//Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burger_controller.js");

app.use(routes);

//App is listening...
app.listen(PORT, function() {
  console.log("App now listening at http://localhost:" + PORT);
});