// const db = require('../connection');

const login =  function(email, password) {
  return db.getUserWithEmail(email)
  .then(user => {
    if (bcrypt.compareSync(password, user.password)) {
      return user;
    }
    return null;
  });
}
exports.login = login;