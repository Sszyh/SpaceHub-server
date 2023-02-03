
const router = require("express").Router();
const db = require('../db/connection');
const bcrypt = require("bcrypt");
const userQueries = require('../db/queries/userQueries');
const getUserQueries = require('../db/queries/getUserQueries');

const login = function (email, password) {
  return getUserQueries.getUserWithEmail(email)
    .then(user => {
      if (bcrypt.compareSync(password, user.password)) {
        return user;
      }
      return null;
    });
}
exports.login = login;

// Login
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  login(email, password)
    .then(user => {
      if (!user) {
        res.send({ error: "error" });
        return;
      }
      req.session.userId = user.id;
      res.send({ user: { 
        first_name: user.first_name, 
        last_name: user.last_name, 
        email: user.email, 
        id: user.id, 
        user_type: user.user_type,
        phone_number: user.phone_number
      } });
    })
    .catch(e => res.send(e));
});


// Create a new user
router.post("/register", (req, res) => {
  // it should check if user already in the database (later)

  const user = req.body;
  user.password = bcrypt.hashSync(user.password, 12);
  userQueries.addUser(user)
    .then(user => {
      if (!user) {
        res.send({ error: "error" });
        return;
      }
      req.session.userId = user.id;
      res.send("registered");
    })
    .catch(e => res.send(e.message));
});

module.exports = router;