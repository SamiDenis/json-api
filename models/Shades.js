const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Shades = new Schema({
    hex_value: String,
    colour_name: String
})

module.exports = mongoose.model("Shades", Shades)