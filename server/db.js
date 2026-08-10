const { Pool } = require("pg");
require("dotenv").config();
const pool = new Pool({
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  port: process.env.DATABASE_PORT,
  database: process.env.DATABASE,
  host: process.env.DATABASE_HOST,
});

module.exports = pool;
