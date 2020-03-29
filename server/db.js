const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "dharmabumzeepass",
  host: "localhost",
  port: 5432,
  database: "procrastinator"
});

module.exports = pool;
