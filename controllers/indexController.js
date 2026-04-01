exports.renderIndex = async function (req, res) {
  const user = req.user;
  res.render("index", { user });
};
