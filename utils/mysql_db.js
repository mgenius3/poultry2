const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mgenius',
  database: 'poultry',
  port: 3306,
});

module.exports = { connection };
