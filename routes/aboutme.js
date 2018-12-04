const express = require("express"),
  app = express(),
  about = require("../about.js");

module.exports = app => {
  app.get("/aboutme", (req, res) => {
    data = {
      description: about.description,
      technology: about.technology,
      techstack: about.techstack,
      hobbies: about.hobbies
    };
    res.send(data);
  });

  app.get("/aboutme/:q", (req, res, err) => {
    let query = req.params.q;
    if (query === "description") {
      res.send(about.description);
    } else if (query === "technology") {
      res.send(about.technology);
    } else if (query === "techstack") {
      res.send(about.techstack);
    } else if (query === "hobbies") {
      res.send(about.hobbies);
    } else {
      res.render("error");
    }
  });
};
