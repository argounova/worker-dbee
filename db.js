const mysql = require('mysql2');

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'r32r33r34@GTR',
      database: 'employeeCMS_db'
    },
    console.log('Connected to the employeeCMS_db database.')
  );

  module.exports = db;