const pool = require("../db/pool");

// GET USERS USERNAME AND PASSWORD
exports.addUserDataToDb = async function (
  firstName,
  lastName,
  username,
  email,
  password,
) {
  await pool.query(
    "INSERT INTO members (first_name, last_name, username, email, password) VALUES ($1, $2, $3, $4, $5)",
    [
      req.body.firstName,
      req.body.lastName,
      req.body.username,
      req.body.email,
      req.body.password,
    ],
  );
};
