const pool = require("./pool");

// GET USER BY USERNAME
async function getUserByUsername(username) {
  const { rows } = await pool.query(
    "SELECT * FROM members WHERE username = $1",
    [username],
  );

  // Return single user
  return rows[0];
}

// GET USER BY ID
async function getUserById(id) {
  const { rows } = await pool.query("SELECT * FROM members WHERE id = $1", [
    id,
  ]);

  // Return single user
  return rows[0];
}

module.exports = {
  getUserByUsername,
  getUserById,
};
