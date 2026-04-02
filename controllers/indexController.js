const db = require("../db/queries");

exports.renderIndex = async function (req, res) {
  const user = req.user;
  const posts = await db.getPostsWithUsersInfo();
  res.render("index", { user, posts });
};
