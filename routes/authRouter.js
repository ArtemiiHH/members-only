const { Router } = require("express");
const auth = Router();

auth.get("/sign-up", (req, res) => {
  res.render("sign-up-form");
});
auth.get("/log-in", (req, res) => {
  res.render("log-in-form");
});

module.exports = auth;
