const router = require("express").Router();
const bookingQueries = require("../db/queries/bookingQueries");
const db = require('../db/connection');

router.post('/', (req, res) => {
  const bookingDetail = req.body;
  bookingQueries.bookings(bookingDetail)
    .then(booking => {
      if (!booking) {
        console.log("loginnnnnnn")
        res.send({ error: "error" })
        return;
      }
      res.send({
        booking: {
          user_id: booking.user_id,
          property_id: booking.property_id,
          check_in_date: booking.check_in_date,
          check_out_date: booking.check_out_date,
          price_per_day: booking.price_per_day,
          price_for_stay: booking.price_for_stay,
          created_at: booking.created_at,
          updated_at: booking.updated_at
        }
      });
    })
    .catch(e => res.send(e))

});

router.put('/',(req,res)=>{
  console.log('update:',req.body);
  const newRating=req.body;
  const query = `
    UPDATE bookings
    SET rating=$1
    WHERE property_id=$2
  `
  db.query(query,[newRating.rating,newRating.property_id])
  .then(query=>{
    res.send({
      newRating:{
        rating:newRating.rating,
        property_id:newRating.property_id
      }
    })
  })
})


module.exports = router;