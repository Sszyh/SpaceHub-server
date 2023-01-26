const router = require("express").Router();
const db = require('../db/connection');

router.get('/',(req, res) => {
  const query = `
  SELECT * from properties
  LIMIT 1
  ;
  `;
  db.query(query)
  .then(data => {
    const properties = data.rows;
    res.json({ properties });
  })
  .catch(err => {
    res
    .status(500)
    .json({ error: err.message });
  });
});

module.exports = router;
