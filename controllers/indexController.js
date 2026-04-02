const db = require("../db/queries");

exports.renderIndex = async function (req, res) {
  const user = req.user;
  const posts = await db.getAllPosts();
  res.render("index", { user, posts });
};
