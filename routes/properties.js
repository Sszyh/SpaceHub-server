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
  console.log(req.params.id,"iiiiiiiiii");
  propertyQueries
  .getPropertyById(req.params.id)
  .then((property)=>{
    console.log(property,"pro from back")
    res.json({property})
  })
  
})

router.put('/',(req,res)=>{
  console.log('update:',req.body);
  const newData=req.body;
  const query = `UPDATE properties SET title = $1, desc_short = $2, price_per_day =$3 WHERE id = $4`;
  db.query(query, [newData.title, newData.desc_short, newData.price||1, newData.proprety_id])
    .then(property => {
      if(!property){
        res.send({error:"error"})
        return;
      }
      console.log('test_res',res)
      res.send({
        property:{
          title:newData.title,
          desc_short: newData.desc_short, 
          price:  newData.price||1,
          proprety_id: newData.proprety_id
        }
      })
    })
    .catch(err => {
      console.error(err);
    });
})

module.exports = router;

