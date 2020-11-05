const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Makeup = new Schema({
    brand: String,
    name: String,
    price: Number,
    currency: String,
    product_type: String,

    product_colors: [{
        hex_value: String,
        colour_name: String
    }]

})

module.exports = mongoose.model("Makeup", Makeup)