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
        description: req.body.description,
        engine: req.body.engine,
        bhp: req.body.bhp,
        zerotohundred: req.body.zerotohundred,
        topspeed: req.body.topspeed
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

router.get('/car', (req, res, next) => {
    Car.find()
      .then((allcar) => res.render('car/car-list.hbs', { car: allcar }))
      .catch((err) => {
        console.log('Error while creating the car');
        next(err);
      });
  });


router.get('/car/:carId', (req, res, next) => {
    const { carId } = req.params;
    console.log(req.params);
  
    Car.findById(carId)
      .then((car) => {
        console.log(car);
        res.render('car/car-details', car);
      })
      .catch((err) => {
        console.log(err);
        next(err);
      });
  });

module.exports = router;