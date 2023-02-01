const db = require('../connection');

const addUser = (user) => {
  let queryString = `
 
  INSERT INTO users (email, password, user_type, first_name, last_name, created_at,phone_number)
  VALUES ($1,$2,$3,$4,$5,$6,$7)
  RETURNING *;
  `;
  let values = [`${user.email}`, `${user.password}`, `${user.user_type}`, `${user.first_name}`, `${user.last_name}`, `${user.created_at}`, `${user.phone_number}`];
  return db
    .query(queryString, values)
    .then((data) => {
      return data.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    })
}

module.exports = { addUser }