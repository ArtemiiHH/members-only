const db = require("../db/queries");

// Render New Post Form (GET)
exports.renderPostForm = async function (req, res) {
  res.render("newPost");
};

// Handle Form Submission (POST)
exports.handleNewPostSubmission = async function (req, res) {};
