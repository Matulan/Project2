let nodemailer = require('nodemailer');

const Request = require("../models/Request.model");
// rammeverk for node.js
const router = require("express").Router();
// hvile api-forespørsel
router.get("/request", (req, res, next) => {
    res.render("request")
})

router.post('/request', (req, res, next) =>{
  const {username, vehiclename, startDate, endDate, totalPrice} = req.body
  Request.create({contactinformation: username, vehiclename, startDate, endDate, totalPrice})
    .then((request,error) => {
      console.log(request)
// bibliotek nodemailer
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'boukachni@gmail.com',
    pass: 'qcwsjrcliwwvafdu'
  }
});

let mailOptions = {
  from: 'client@gmail.com',
  to: 'matu_25@hotmail.com, boukachni@gmail.com',
  subject: 'Booking for User ' + username,
  text: "You have a booking from User " + username + " For " + vehiclename + " from " + startDate + " to " + endDate + " and the price is " + totalPrice
};
// bruke en funksjon fra nodemailer for å sende e-post til brukeren
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }});

res.redirect('/')
}).catch()

})

module.exports = router;