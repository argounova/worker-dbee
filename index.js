// const inquirer = require('inquirer');
const express = require('express');

const mainMenu = require('./lib/menu')

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

mainMenu();

app.listen(PORT, () => {});