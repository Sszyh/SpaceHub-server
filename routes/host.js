const router = require("express").Router();
const db = require('../db/connection');
const hostQueries = require('../db/queries/hostQueries');

router.get('/:id',(req,res)=>{
    hostQueries
    .getHostById(req.params.id)
    .then((user)=>{
        res.json({user})
    })

})
router.post('/:id',(req,res)=>{
    const data = req.body;
    console.log("post")

    res.json({
        message: 'Data received successfully',
        data: data
      });

})

module.exports = router;