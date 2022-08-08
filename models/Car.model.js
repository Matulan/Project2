const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CarSchema = new Schema(
    {
        vehiclename: String,
        vehicletype: String,
        price: Number,
        size: Number,
        passengers: Number,
        picture: {
        type: String,
        },
        description: String,
        engine: String,
        bhp: String,
        zerotohundred: String,
        topspeed: String,

    },
);

const Car = new mongoose.model("Car", CarSchema);

module.exports = Car;

