const cTable = require('console.table');
const inquirer = require('inquirer');
const express = require('express');
const sql = require('mysql2');

const mainMenu = require('./lib/menu')

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'r32r33r34@GTR',
    database: 'employeeCMS_db'
  },
  console.log('Connected to the employeeCMS_db database.')
);

mainMenu(mainMenu);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}...`);
});