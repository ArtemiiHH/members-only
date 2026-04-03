const db = require("../db/queries");
const bcrypt = require("bcryptjs");

// Sign Up
// Render Sign Up Form (GET)
exports.renderSignUpForm = async function (req, res) {
  res.render("sign-up-form", { error: req.flash("error") });
};

// Handle Form Submission (POST)
exports.handleSignUpSubmission = async function (req, res, next) {
  try {
    // Destructure req.body
    const { password, confirmPassword } = req.body;
    // Trim input data, to prevent white spaces
    const firstName = req.body.firstName.trim();
    const lastName = req.body.firstName.trim();
    const username = req.body.firstName.trim();
    const email = req.body.firstName.trim();

    // Check if user already exists
    const existingUser = await db.getUserByUsername(username);
    if (existingUser) {
      req.flash("error", "User already exists");
      return res.redirect("/signup");
    }

    // Check if email already exists
    const existingEmail = await db.getUserByEmail(email);
    if (existingEmail) {
      req.flash("error", "Email already exists");
      return res.redirect("/signup");
    }

    // Check if password matches confirm password
    if (password !== confirmPassword) {
      req.flash("error", "Passwords must be the same");
      return res.redirect("/signup");
    }

    // Password checks (REGEX)
    if (password.length < 8) {
      req.flash("error", "Password must be at least 8 characters");
      return res.redirect("/signup");
    }
    if (!/[A-Z]/.test(password)) {
      req.flash("error", "Password must contain at least one uppercase letter");
      return res.redirect("/signup");
    }
    if (!/[0-9]/.test(password)) {
      req.flash("error", "Password must be at least one number");
      return res.redirect("/signup");
    }
    if (!/[!@#$%^&*]/.test(password)) {
      req.flash("error", "Password must be at least one special character");
      return res.redirect("/signup");
    }

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
