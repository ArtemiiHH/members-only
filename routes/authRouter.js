const { Router } = require("express");
const auth = Router();

auth.get("/sign-up", (req, res) => {
  res.render("sign-up-form");
});
auth.post("/sign-up", (req, res) => {
  res.redirect("/");
});
auth.get("/log-in", (req, res) => {
  res.render("log-in-form");
});
auth.post("/log-in", (req, res) => {
  res.redirect("/posts");
});

module.exports = auth;
