const mongoose = require("mongoose");

let mongoURI = "";
if(process.env.NODE_ENV==="production"){
  mongoURI = process.env.DB_URL
}else{
  mongoURI = "mongodb://localhost/makeup";
}

// mongoose.connect("mongodb://localhost/makeup", {useNewUrlParser: true});

module.exports = mongoose;