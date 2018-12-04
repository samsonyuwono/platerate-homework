const express = require("express"),
  app = express();

var postRoute = require("./routes/posts.js");
var aboutRoute = require("./routes/aboutme.js");

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/assets"));
postRoute(app);
aboutRoute(app);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("*", (req, res) => {
  res.render("error");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
