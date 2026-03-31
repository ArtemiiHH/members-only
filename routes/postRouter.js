const { Router } = require("express");
const post = Router();

post.get("/post", (req, res) => {
  res.render("post");
});

module.exports = post;
