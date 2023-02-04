const db = require('../connection');

const getUserWithEmail = (email) => {
  let queryString = `
  SELECT * FROM users 
  WHERE users.email = $1;
  `;
  let values = [email];
  return db
    .query(queryString,values)
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    })
}

module.exports = { getUserWithEmail }