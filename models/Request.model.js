const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const RequestSchema = new Schema(
    {
        vehiclename: String,
        startdate: String,
        enddate: String,
        location: String,
        contactinformation: String
    },
);

const Request = new mongoose.model("Request", RequestSchema);

module.exports = Request;

