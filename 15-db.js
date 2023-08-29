// este no funciona no se pudo crear la base en planetscale

// npm i mysql2

const mysql = require("mysql2/promise");

// credenciales para conectarse, en planetscale las dan
async function connectDB(){const connection = mysql.createConnection({
  host: "",
  user: "",
  database: "",
  ssl: {
    rejectUnauthorized: false
  }
});

// ejemplo
const result = await connection.query(
  'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
  function (err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  }
);}




module.exports = {connectDB} // luego la importamos en el archivo que lo necesitemos