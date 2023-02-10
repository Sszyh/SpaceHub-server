const router = require("express").Router();
const calenderQueires = require('../db/queries/calenderQueires');

router.get('/:id',(req,res)=>{
  calenderQueires
  .getBookingDateByPropertyId(req.params.id)
  .then((bookedDate)=>{
      res.json({bookedDate});
      console.log("bookedDate in backend",bookedDate)
  })

})

module.exports = router;