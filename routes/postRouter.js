const { Router } = require("express");
const post = Router();
const postController = require("../controllers/postController");

// Render Form
post.get("/posts/new", postController.renderPostForm);

module.exports = post;
