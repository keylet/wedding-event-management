require('dotenv').config(); 
const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: process.env.DB_HOST_L_P,       
  user: process.env.DB_USER,       
  password: process.env.DB_PASSWORD, 
  database: process.env.DB_NAME_L_P,   
  port: process.env.DB_PORT
});

module.exports = db;