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

module.exports = router;