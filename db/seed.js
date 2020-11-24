const Makeup = require("../models/Makeup");
const makeupData = require("../db/makeup.json");
const Shades = require("../models/Shades");
const shadesData = require("../db/shades.json");

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

Shades.deleteMany({}).then(()=>{
    Shades.create(shadesData).then(()=>{
        Shades.find({})
        .then((data)=>
        console.log(data))
    })
    .catch((err)=>{
        console.log(err)
    })
})