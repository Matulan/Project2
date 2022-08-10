const Car = require("../models/Car.model");

const router = require("express").Router();

router.get("/car", (req, res, next) => {
<<<<<<< HEAD
  res.render("car");
});

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
    topspeed: req.body.topspeed,
  };

  Car.create(carDetails)
    .then(() => {
      res.redirect("/car");
    })
    .catch((error) => {
      console.log("Error creating boat in the DB", error);
      next(error);
    });
});

router.get("/car-list", (req, res, next) => {
  Car.find()
    .then((allcar) => {
      res.render("car-list", { car: allcar });
    })
    .catch((err) => {
      console.log("Error while creating the car");
      next(err);
    });
});

router.get("/car/:carId", (req, res, next) => {
  const { carId } = req.params;

  Car.findById(carId)
    .then((car) => {
      res.render("car-details", { car });
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
});

module.exports = router;
=======
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
      
      router.get('/car-list', (req, res, next) => {
        Car.find({vehicletype: 'car'})
        .then((allcar) => res.render('car-list', { car: allcar }))
        .catch((err) => {
          console.log('Error while creating the car');
          next(err);
        });
      });
      router.get('/car/:carId', (req, res, next) => {
          const { carId } = req.params;
          console.log(req.params);
      
          /* const user = req.session.user */
        
          Car.findById(carId)
            .then((car) => {
              console.log(car);
              res.render('car-details', car);
            })
            .catch((err) => {
              console.log(err);
              next(err);
            });
        });
      //Boat
      
      router.get('/boat-list', (req, res, next) => {
        Car.find({vehicletype: 'boat'})
        .then((allboats) => res.render('boat-list', { boat: allboats }))
        .catch((err) => {
          console.log('Error while creating the car');
          next(err);
        });
      });
      
      router.get('/boat/:boatId', (req, res, next) => {
        const { boatId } = req.params;
        console.log(req.params);
        
        /* const user = req.session.user */
        
        Car.findById(boatId)
        .then((boat) => {
        console.log(car);
        res.render('boat-details', boat);
      })
      .catch((err) => {
        console.log(err);
        next(err);
      });
  });



  router.post("/search", (req, res, next) => {
    const {startDate,endDate} = req.body
  
    let today = new Date()
    if(today > new Date(startDate)){
      res.render("car-details", {errorMessage:"Invalid date, please choose right date"})
    } else {
      res.redirect("/login");
    }
  
  });

module.exports = router;
>>>>>>> c2a4128acd70fa72a0927b3a1f4795386dd61286
