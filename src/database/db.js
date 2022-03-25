const mysql = require("mysql");

const connection = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  port: process.env.port,
  database: process.env.database,
});

connection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("DB Successfully connected");
});

module.exports = connection;
