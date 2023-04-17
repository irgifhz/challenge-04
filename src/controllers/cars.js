let data = [
    {
        id : "1",
        merk : "honda",
        year : "2022"
    }
]

const getCarsData = (req, res) => {
    res.status(200).json({
        message : "Get all cars data",
        data: data
    })
}

const getCarsDataById = (req, res) => {
    let { id } = req.params
    let newCars = data.filter(el => el.id === id);
    data = newCars 

    res.status(200).json({
        message: "Get Detail Cars Data",
        data: data
    })
}

const updateCarsData = (req,res) => {
    const { id } = req.params
    const { merk, year } = req.body
    const index = data.findIndex(car => car.id === id);

    data[index] = {
        ...data[index],
        merk: merk,
        year: year
    }
    res.status(200).json({
        message: "Update Cars Data",
        data: data
    })
}

const createCarsData = (req, res) => {
    const { merk, year } = req.body
    data.push({
        id: (data.length + 1).toString(),
        merk: merk,
        year: year
    })
    res.status(201).json({
        message: "POST New Cars Success",
    })
}

const deleteCarsData = (req,res) => {
    const { id } = req.params;
    const deleteCars = data.filter(car => car.id ===! id);
    data = deleteCars

    res.status(200).json({
        message: "DELETE Cars Success",
    })
}

module.exports = {
    getCarsData,
    createCarsData,
    updateCarsData,
    getCarsDataById,
    deleteCarsData
}