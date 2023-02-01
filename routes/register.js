const router = require("express").Router();
const db = require('../db/connection');
const bcrypt = require("bcrypt");
const userQueries = require('../db/queries/userQueires');

router.get("/", (req, res) => {
  const user = users[req.session.user_id];
  if (user) {
    return res.redirect(`urls`);
  }
  // const templateVars = { user };
  // res.render("urls_register", templateVars);
});


// Create a new user
router.post("/", (req, res) => {

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
    .catch(e => res.send(e));

  const query = `
    SELECT * FROM users 
    WHERE email LIKE $1 
    
  `;
  db.query(query, [email])
    .then(data => {
      return data.rows[0];
    })
    .catch(err => {
      console.log(err.message);
    })
});

module.exports = router;