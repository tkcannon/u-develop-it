const mysql = require('mysql2');
require('dotenv').config();

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: process.env.USER,
        password: process.env.PASS,
        database: 'election'
    },
    console.log('Connected to the election database.')
)

module.exports = db;