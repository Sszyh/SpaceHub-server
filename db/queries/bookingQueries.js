const db = require('../connection');

const getBookingByUserId = (id) =>{
    return db.query(`
    SELECT * 
    FROM properties
    JOIN (SELECT * FROM bookings
          WHERE bookings.user_id=$1) SUB
    ON SUB.property_id = properties.id
    ORDER BY SUB.created_at DESC
    `,[id])
    .then((data)=>{
        console.log(data.rows.length)
        return data.rows
    })
}

// const getBookingByUserId = (id) =>{
//   return db.query(`
//   SELECT properties.title, properties.image_url, properties.desc_long,properties.user_id, bookings.price_for_stay, bookings.price_per_day,bookings.check_in_date, bookings.check_out_date, bookings.rating,users.*
//   FROM properties
//   JOIN bookings
//   ON bookings.property_id = properties.id
//   JOIN users
//   ON users.id=bookings.user_id

//   WHERE bookings.user_id=$1
//   ORDER BY bookings.created_at DESC

//   `,[id])
//   .then((data)=>{
//       console.log(data.rows.length)
//       return data.rows
//   })
// }

const getBookingByHostId = (id) =>{
  return db.query(`
  SELECT properties.title, properties.image_url, properties.desc_long,properties.user_id, bookings.price_for_stay, bookings.price_per_day,bookings.check_in_date, bookings.check_out_date, users.*
  FROM bookings
  JOIN properties
  ON bookings.property_id = properties.id
  JOIN users
  ON users.id=bookings.user_id

  WHERE properties.user_id=$1
  ORDER BY bookings.created_at DESC
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

  const { user_id, property_id, check_in_date, check_out_date, price_per_day, price_for_stay, created_at, updated_at } = bookingDetail; 
  
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
  const values = [
    `${user_id}`,
    `${property_id}`,
    `${check_in_date}`,
    `${check_out_date}`,
    `${price_per_day}`,
    `${price_for_stay}`,
    `${created_at ?? formatDate(new Date())}`,
    `${updated_at ?? formatDate(new Date())}`
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



module.exports = {getBookingByUserId, bookings,getBookingByHostId};

