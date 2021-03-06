const express = require("express"),
  app = express(),
  fs = require("fs"),
  url = "https://jsonplaceholder.typicode.com",
  request = require("request");

module.exports = app => {
  app.get("/posts", (req, res, next) => {
    let postData = require("../posts.json");
    res.render("posts", {
      title: "Posts",
      posts: postData
    });
    next();
  });
  app.use("/posts", (req, res, next) => {
    request(
      {
        url: url + "/posts"
      },
      (err, resp, body) => {
        if (resp.statusCode === 200) {
          fs.writeFile("./posts.json", body, err => {
            if (err) {
              console.log("Not found");
            } else {
              console.log("Success!");
            }
          });
        }
      }
    );
  });
};
