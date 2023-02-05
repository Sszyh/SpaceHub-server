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
    const newPropertyInfo = req.body;
    console.log(newPropertyInfo);
    hostQueries.newProperty(newPropertyInfo)
    .then(property =>{
        if(!property){
            res.send({error:"error"})
            return;
        }
        res.send({
            property:{
                user_id:property.user_id,
                title:property.title,
                image_url:property.image_url,
                country: property.country,
                street: property.street,
                city: property.city,
                price_per_day: property.price_per_day,
                desc_short: property.desc_short
            }
        })
    }
    )
})

module.exports = router;