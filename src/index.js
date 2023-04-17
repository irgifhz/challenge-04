const express = require ('express')
const app = express();
const PORT = 4000;

const carRouters = require("./routes/cars")

app.use(express.json())

app.use(express.json())

app.use("/cars", carRouters)

app.listen(PORT, ()=> {
    console.log("Server sudah berjalan di port", PORT)
})

// CREATE CARS => POST /CARS
// LIST CAS => GET / CARS 
// UPDATE => PUT/CARS/ID 
// DELETE => DELETE/CARS/:ID