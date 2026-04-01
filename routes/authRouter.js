const { Router } = require("express");
const auth = Router();
const authController = require("../controllers/authController");

// Render Forms
auth.get("/sign-up", authController.renderSignUpForm);
auth.get("/log-in", authController.renderLogInForm);
auth.get("/log-out", authController.handleLogOut);

// Handle Form Submission
auth.post("/sign-up", authController.handleSignUpSubmission);
auth.post("/log-in", authController.handleLogInSubmission);

module.exports = auth;
