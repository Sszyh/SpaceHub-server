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

module.exports = {getHostById}