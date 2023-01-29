const router = require("express").Router();
const db = require('../db/connection');
const propertyQueries = require('../db/queries/propertyQueries');

router.get('/',(req, res) => {
  const query = `
  SELECT * from properties
  ;
  `;
  db.query(query)
  .then(data => {
    const properties = data.rows;
    res.json({ properties });
  })
  .catch(err => {
    res
    .status(500)
    .json({ error: err.message });
  });
});

router.get('/:id',(req,res)=>{

  propertyQueries
  .getPropertyById(req.params.id)
  .then((property)=>{
    res.json({property})
  })
  
})

module.exports = router;
