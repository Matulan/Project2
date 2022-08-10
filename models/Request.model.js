const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const RequestSchema = new Schema(
    {
        vehiclename: String,
        startDate: String,
        endDate: String,
        contactinformation: String,
        totalPrice: Number
    },
);

const Request = mongoose.model("Request", RequestSchema);

module.exports = Request;

