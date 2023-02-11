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
        booking
        // booking: {
        //   user_id: booking.user_id,
        //   property_id: booking.property_id,
        //   check_in_date: booking.check_in_date,
        //   check_out_date: booking.check_out_date,
        //   price_per_day: booking.price_per_day,
        //   price_for_stay: booking.price_for_stay,
        //   created_at: booking.created_at,
        //   updated_at: booking.updated_at
        // }
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
    WHERE id=$2
  `
  db.query(query,[newRating.rating,newRating.booking_id])
  .then(query=>{
    return res.send({ ...newRating })
  })
})

router.put('/avg',(req,res)=>{
  const query = `
    UPDATE properties p
    SET average_rating = SUB.avg_rating
    FROM (
      SELECT property_id, round(avg(rating),1) as avg_rating
      FROM bookings
      group by property_id
    ) SUB
    WHERE SUB.property_id = p.id
  `
  db.query(query)

})


module.exports = router;