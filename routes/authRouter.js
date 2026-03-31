const { Router } = require("express");
const auth = Router();

auth.get("/sign-up", (req, res) => {
  res.render("sign-up-form");
});

module.exports = auth;
