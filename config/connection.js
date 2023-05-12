const mysql = require("mysql");

let mysqlConnection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER_NAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

function connectToDB() {
  mysqlConnection.connect((err) => {
    if (!err) console.log("Connection Established Successfully");
    else console.log("Connection Failed!" + JSON.stringify(err, undefined, 2));
  });
}

module.exports = { connectToDB, mysqlConnection };

// //ENV FILE DATA
// PORT = 8080;
// HOST = localhost;
// USER_NAME = root;
// PASSWORD = 12345;
// DATABASE = Task;
