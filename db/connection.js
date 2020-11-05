const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/makeup", {useNewUrlParser: true});

module.exports = mongoose;