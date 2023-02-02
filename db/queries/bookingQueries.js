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

module.exports = {getBookingByUserId};
//     JOIN reviews
// ON  bookings.user_id = reviews.user_id

