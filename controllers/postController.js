const db = require("../db/queries");

// Render New Post Form (GET)
exports.renderPostForm = async function (req, res) {
  res.render("newPost");
};

// Handle Form Submission (POST)
exports.handleNewPostSubmission = async function (req, res, next) {
  try {
    const memberId = req.user.id;
    // Destructure req.body
    const { title, message } = req.body;
    // New Post Object
    const newPost = {
      memberId,
      title,
      message,
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
