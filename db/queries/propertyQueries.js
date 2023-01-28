const db = require('../connection');

const getPropertyById =(id) =>{
    return db.query(`
    SELECT * FROM properties
    WHERE id=$1
    `,[id])
    .then((data)=>{
        return data.rows
    })
}

module.exports = {getPropertyById}