const Request = require("../models/Request.model");

const router = require("express").Router();

router.get("/request", (req, res, next) => {
    res.render("request")
})

router.post('/request', (req, res, next) =>{
  const {username, vehiclename, startDate, endDate, totalPrice} = req.body
  Request.create({contactinformation: username, vehiclename, startDate, endDate, totalPrice})
    .then((request) => {
      console.log(request)
      res.redirect('/')
    })
    .catch(err => next(error))

} )

module.exports = router;