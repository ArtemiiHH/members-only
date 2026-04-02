const { Router } = require("express");
const post = Router();
const postController = require("../controllers/postController");

// Render Form
post.get("/posts/new", postController.renderPostForm);

// Handle Form Submission
post.post("/posts/new", postController.handleNewPostSubmission);

module.exports = post;
