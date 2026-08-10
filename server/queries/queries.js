const existingUser = "SELECT id, email, password FROM users WHERE email = $1";
const addUser =
  "INSERT INTO users(email, password) VALUES ($1, $2) RETURNING id, email";

module.exports = { existingUser, addUser };
