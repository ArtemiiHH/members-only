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

// GET USERS USERNAME AND PASSWORD
exports.addUserDataToDb = async function (newUser) {
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
