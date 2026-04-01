const db = require("../db/queries");
const bcrypt = require("bcryptjs");
const path = require("node:path");
const session = require("express-session");
const passport = require("passport");

// Sign Up
// Render Sign Up Form (GET)
exports.renderSignUpForm = async function (req, res) {
  res.render("sign-up-form");
};

// Handle Form Submission (POST)

// Log In
// Render Log In Form (GET)
exports.renderLogInForm = async function (req, res) {
  res.render("log-in-form");
};

// Handle Form Submission (POST)

// Log Out
// Handle Log Out
