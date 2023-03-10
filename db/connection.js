// PG database client/connection setup
const { Pool } = require('pg');
require('dotenv').config();

const dbParams = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
};

const db = new Pool(dbParams);

db.connect((err, res) => {
  if(err) {
    console.log(`dbConnectionReady Error: ${err.message}`);
    db.end();
    return;
  }
  console.log('db connection success!');
});

module.exports = db;
