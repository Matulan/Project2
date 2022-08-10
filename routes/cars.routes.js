const Car = require("../models/Car.model");

const router = require("express").Router();

router.get("/car", (req, res, next) => {
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
          .then((car) => {
            console.log(car);
            res.render('boat-details', car);
          })
          .catch((err) => {
            console.log(err);
            next(err);
          });
        });






  router.post("/search", (req, res, next) => {
    const {startDate,endDate, vehiclename, price} = req.body
    const {username} = req.session.user
  
    let today = new Date()
    if(today > new Date(startDate)){
      res.render("car-details", {errorMessage:"Invalid date, please choose right date"})
      return;
    } 
    let start = new Date(startDate)
    let end = new Date(endDate)

    let difference = end - start; 
    let days = difference / (1000 * 3600 * 24)

    let totalPrice = days * price

    res.render('summary', {totalPrice, endDate, startDate, vehiclename, price, username})
  });

  router.post("/search-boats", (req, res, next) => {
    const {startDate,endDate, vehiclename, price, passengers, size} = req.body
    const {username} = req.session.user
  
    let today = new Date()
    if(today > new Date(startDate)){
      res.render("boat-details", {errorMessage:"Invalid date, please choose right date"})
      return;
    } 
    let start = new Date(startDate)
    let end = new Date(endDate)

    let difference = end - start; 
    let days = difference / (1000 * 3600 * 24)

    let totalPrice = days * price

    res.render('summary-boat', {totalPrice, endDate, startDate, vehiclename, price, username, size, passengers})
  });



module.exports = router;
