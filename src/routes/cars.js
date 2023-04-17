const express = require("express");

const CarsControllers = require ("../controllers/cars.js");

const router = express.Router();

// GET LIST CARS
router.get("/", CarsControllers.getCarsData)

// GET DETAIL CARS
router.get("/id", CarsControllers.getCarsDataById)

// UPDATE CARS DATA
router.put("/:id", CarsControllers.updateCarsData)

router.delete("/:id", CarsControllers.deleteCarsData)


// POST NEW DATA
router.post("/", CarsControllers.createCarsData)

module.exports = router;