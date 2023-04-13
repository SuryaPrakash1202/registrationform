var mysql = require("mysql");
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "studentform",
});

pool.getConnection(function(err){
  if(err) {
    throw err
  } else {
    console.log("Connected");
  }
});

module.exports = pool;
