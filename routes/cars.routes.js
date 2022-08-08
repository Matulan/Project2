const Car = require("../models/Car.model");

const router = require("express").Router();

router.get("/car", (req, res, next) => {
    res.render("car")
})

router.post("/car/create", (req, res, next) => {
    const carDetails = {
        vehiclename: req.body.vehiclename,
        vehicletype: req.body.vehicletype,
        price: req.body.price,
        size: req.body.size,
        passengers: req.body.passengers,
        picture: req.body.picture,
        description: req.body.description
    };

    Car.create(carDetails)
      .then(() => {
            res.redirect("/car");
        })
        .catch((error) => {
            console.log("Error creating boat in the DB", error);
            next(error);
        })
});

module.exports = router;