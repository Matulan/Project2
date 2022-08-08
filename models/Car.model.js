const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CarSchema = new Schema(
    {
        vehiclename: String,
        vehicletype: String,
        price: Number,
        size: Number,
        passengers: Number,
        picture: String,
        description: String
    },
);

const Car = new mongoose.model("Car", CarSchema);

module.exports = Car;

