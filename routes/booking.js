const router = require("express").Router();
const db = require('../db/connection');
const bookingQueries = require('../db/queries/bookingQueries');

router.get('/',(req, res) => {
    const query = `
    SELECT * from bookings
    ;
    `;
    db.query(query)
    .then(data => {
      const user = data.rows;
      res.json({ user });
    })
    .catch(err => {
      res
      .status(500)
      .json({ error: err.message });
    });
  });

router.get('/:id',(req,res)=>{
    bookingQueries
    .getUserById(req.params.id)
    .then((user)=>{
        res.json({user})
    })

})

module.exports = router;