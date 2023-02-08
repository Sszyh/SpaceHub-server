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
    .getBookingByUserId(req.params.id)
    .then((user)=>{
      // console.log(user,"usersss")
        res.json({user})
    })

})


router.get('/host/:id',(req,res)=>{
  bookingQueries
  .getBookingByHostId(req.params.id)
  .then((host)=>{
      res.json({host})
  })

})

module.exports = router;