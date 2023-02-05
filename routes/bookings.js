const router = require("express").Router();
const bookingQueries = require("../db/queries/bookingQueries");

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
module.exports = router;