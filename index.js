const express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  fs = require("fs"),
  url = "https://jsonplaceholder.typicode.com",
  request = require("request"),
  path = require("path");

var postRoute = require("./routes/posts.js");
var aboutRoute = require("./routes/aboutme.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/assets"));

app.get("/", (req, res) => {
  res.render("index");
});
//
// app.use((req, res) => {
//   res.status(404).send("the fuck?");
// });

postRoute(app);
aboutRoute(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
