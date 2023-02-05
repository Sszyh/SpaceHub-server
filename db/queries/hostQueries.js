const db = require('../connection');

const getHostById = (id) =>{
    return db.query(`
    SELECT * 
    FROM properties
    JOIN users
    ON users.id = properties.user_id
    WHERE users.id=$1
    `,[id])
    .then((data)=>{
        return data.rows
    })
}


const newProperty = (property) => {
    let queryString = `
   
    INSERT INTO properties (
      title,
      image_url,
      country,
      street,
      city,
      price_per_day,
      desc_short,
      user_id,
      coord_long, coord_lat
      )
    VALUES ($1,$2,$3,$4,$5,$6,$7,$8,-73.81669,45.44868)
    RETURNING *;
    `;
    let values = [
      `${property.title}`,
      `${property.image_url}`,
      `${property.country}`,
      `${property.street}`,
      `${property.city}`,
      `${property.price_per_day||0}`,
      `${property.desc_short}`,
      `${property.user_id}`
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
  

module.exports = {getHostById,newProperty}