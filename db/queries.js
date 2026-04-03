const pool = require("./pool");

// USERS
// GET USER BY USERNAME
exports.getUserByUsername = async function (username) {
  const { rows } = await pool.query(
    "SELECT * FROM members WHERE username = $1",
    [username],
  );

  // Return single user
  return rows[0];
};

exports.getUserByEmail = async function (email) {
  const { rows } = await pool.query("SELECT * FROM members WHERE email = $1", [
    email,
  ]);

  // Return single email
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

// POSTS
// GET ALL POSTS
exports.getAllPosts = async function () {
  const { rows } = await pool.query("SELECT * FROM posts");

  return rows;
};

// GET POSTS WITH AUTHORS INFO
exports.getPostsWithUsersInfo = async function () {
  const { rows } = await pool.query(
    "SELECT posts.title, posts.message, TO_CHAR(posts.created_at, 'DD-MM-YYYY HH24:MI') AS created_at, members.username, members.first_name, members.last_name FROM posts LEFT JOIN members ON members.id = posts.member_id ORDER BY created_at DESC",
  );

  return rows;
};

// ADD POSTS DATA TO DB
exports.addPostsDataToDb = async function (newPost) {
  await pool.query(
    "INSERT INTO posts (member_id, title, message) VALUES ($1, $2, $3)",
    [newPost.memberId, newPost.title, newPost.message],
  );
};
