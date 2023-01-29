const db = require('../connection');

const getSearchResult = (term) =>{
    return db.query(`
    SELECT * FROM properties
    WHERE title LIKE $1
    `,['%'+term+'%'])
    .then((data)=>{
        return data.rows
    })
}

module.exports = {getSearchResult}