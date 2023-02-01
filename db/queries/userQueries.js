const db = require('../connection');

const addUser = (user) => {
  let queryString = `
  INSERT INTO users (email, password, user_type, first_name, last_name)
  VALUES ($1,$2,$3)
  RETURNING *;
  `;
  let values = [`${user.email}`, `${user.password}`, `${user.user_type}`, `${user.first_name}`, `${user.last_name}`];
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