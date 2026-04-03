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
exports.handleSignUpSubmission = async function (req, res, next) {
  try {
    // Destructure req.body
    const { firstName, lastName, username, email, password } = req.body;
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    // New User Object
    const newUser = {
      firstName,
      lastName,
      username,
      email,
      password: hashedPassword,
    };

    // Add New User Object into DB
    await db.addUsersDataToDb(newUser);

    // Redirect back to Home
    res.redirect("/");
  } catch (error) {
    console.error(error);
    next(error);
  }
};

// Log In
// Render Log In Form (GET)
exports.renderLogInForm = async function (req, res) {
  res.render("log-in-form", { error: req.flash("error") });
};

// Handle Form Submission (POST)
exports.handleLogInSubmission = async function (req, res, next) {
  try {
    // Destructure req.body
    const { username, password } = req.body;
    // Get User from DB
    const user = await db.getUserByUsername(username);

    // Check if user exists
    if (!user) {
      // Display message
      req.flash("error", "User does not exist");
      return res.redirect("/login");
    }

    // Compare passwords
    const match = await bcrypt.compare(password, user.password);

    // Compare password against hash
    if (!match) {
      // Display message
      req.flash("error", "Incorrect password");
      return res.redirect("/login");
    }

    // Log In User
    req.login(user, (err) => {
      if (err) {
        return next(err);
      }

      res.redirect("/");
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

// Log Out
// Handle Log Out
exports.handleLogOut = async function (req, res, next) {
  req.logout((err) => {
    if (err) {
      return next(err);
    }

    res.redirect("/");
  });
};
