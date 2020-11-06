const Makeup = require("../models/Makeup");
const makeupData = require("../db/makeup.json");

Makeup.deleteMany({}).then(()=>{
    Makeup.create(makeupData).then(()=>{
        Makeup.find({})
        .then((data)=>
        console.log(data))
    })
    .catch((err)=>{
        console.log(err)
    })
})