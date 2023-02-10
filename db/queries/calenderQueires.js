const db = require('../connection');

const getBookingDateByPropertyId = (id) => {
  return db.query(`
  SELECT bookings.id, 
  bookings.check_in_date, 
  bookings.check_out_date
  from bookings
  JOIN properties ON properties.id = bookings.property_id
  WHERE properties.id = $1
  GROUP by bookings.id
  `,[id])
  .then((data)=>{
    console.log("datarow from query",data.rows.length)
    return data.rows
})
}

module.exports = { getBookingDateByPropertyId }