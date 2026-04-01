const { Router } = require("express");
const auth = Router();
const authController = require("../controllers/authController");

// Render Forms
auth.get("/sign-up", authController.renderSignUpForm);
auth.get("/log-in", authController.renderLogInForm);
auth.post("/sign-up", (req, res) => {
  res.redirect("/");
});
auth.post("/log-in", (req, res) => {
  res.redirect("/posts");
});

module.exports = auth;
