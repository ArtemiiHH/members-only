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
