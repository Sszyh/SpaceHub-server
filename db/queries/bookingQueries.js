const db = require('../connection');

const getUserById = (id) =>{
    return db.query(`
    SELECT * FROM bookings
    WHERE id=$1
    `,[id])
    .then((data)=>{
        return data.rows
    })
}

module.exports = {getUserById};