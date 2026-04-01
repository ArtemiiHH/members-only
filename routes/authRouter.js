const { Router } = require("express");
const auth = Router();
const authController = require("../controllers/authController");
const passport = require("passport");

// Render Forms
auth.get("/signup", authController.renderSignUpForm);
auth.get("/login", authController.renderLogInForm);
auth.get("/logout", authController.handleLogOut);

// Handle Form Submission
auth.post("/signup", authController.handleSignUpSubmission);
auth.post("/login", authController.handleLogInSubmission);
// Authenticate Log In
auth.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
  }),
);

module.exports = auth;
