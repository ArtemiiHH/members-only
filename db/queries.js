const pool = require("./pool");

// GET USER BY USERNAME
exports.getUserByUsername = async function (username) {
  const { rows } = await pool.query(
    "SELECT * FROM members WHERE username = $1",
    [username],
  );

  // Return single user
  return rows[0];
};

// GET USER BY ID
exports.getUserById = async function (id) {
  const { rows } = await pool.query("SELECT * FROM members WHERE id = $1", [
    id,
  ]);

  // Return single user
  return rows[0];
};

// ADD USERS DATA TO DB
exports.addUsersDataToDb = async function (newUser) {
  await pool.query(
    "INSERT INTO members (first_name, last_name, username, email, password) VALUES ($1, $2, $3, $4, $5)",
    [
      newUser.firstName,
      newUser.lastName,
      newUser.username,
      newUser.email,
      newUser.password,
    ],
  );
};

// GET POST BY ID
exports.getPostsById = async function (id) {
  const { rows } = await pool.query("SELECT * FROM posts WHERE id = $1", [id]);

  // Return single post
  return rows[0];
};

// ADD POSTS DATA TO DB
exports.addPostsDataToDb = async function (newPost) {
  await pool.query("INSERT INTO posts (title, message) VALUES ($1, $2)", [
    newPost.title,
    newPost.message,
  ]);
};
