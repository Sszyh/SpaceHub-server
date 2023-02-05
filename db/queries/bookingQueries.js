const db = require('../connection');

const getBookingByUserId = (id) =>{
    return db.query(`
    SELECT properties.title, properties.image_url, properties.desc_long, bookings.price_for_stay, bookings.price_per_day,bookings.check_in_date, bookings.check_out_date
    FROM bookings
    FULL OUTER JOIN properties
    ON bookings.property_id = properties.id


    WHERE bookings.user_id=$1
    `,[id])
    .then((data)=>{
        console.log(data.rows.length)
        return data.rows
    })
}

const bookings = (bookingDetail) => {

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return month + "-" + day + "-" + year;
  }
  
  console.log(formatDate(new Date()),"formant");

  let queryString = `
 
  INSERT INTO bookings (
    user_id, property_id, 
    check_in_date, 
    check_out_date, 
    price_per_day, 
    price_for_stay,
    created_at,
    updated_at
    )
  VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
  RETURNING *;
  `;
  let values = [
    `${bookingDetail.user_id}`,
    `${bookingDetail.property_id}`,
    `${bookingDetail.check_in_date}`,
    `${bookingDetail.check_out_date}`,
    `${bookingDetail.price_per_day}`,
    `${bookingDetail.price_for_stay}`,
    `${bookingDetail.created_at ?? formatDate(new Date())}`,
    `${bookingDetail.updated_at ?? formatDate(new Date())}`
  ];

  return db
  .query(queryString, values)
  .then((data) => {
    return data.rows[0];
  })
  .catch((err) => {
    console.log(err.message);
  })
}


module.exports = {getBookingByUserId, bookings};

