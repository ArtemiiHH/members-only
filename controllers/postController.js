const db = require("../db/queries");

// Render New Post Form (GET)
exports.renderPostForm = async function (req, res) {
  res.render("newPost");
};

// Handle Form Submission (POST)
exports.handleNewPostSubmission = async function (req, res, next) {
  try {
    // Destructure req.body
    const { member_id, title, message, created_at } = req.body;
    // New Post Object
    const newPost = {
      member_id,
      title,
      message,
      created_at,
    };

    // Add New Post Object into DB
    await db.addPostsDataToDb(newPost);

    // Redirect back to Home
    res.redirect("/");
  } catch (error) {
    console.error(error);
    next(error);
  }
};
