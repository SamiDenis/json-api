const express = require("express");
const router = express();
const Makeup = require("./models/Makeup");
const Shades = require("./models/Shades");
const cors = require("cors");
const body = require("body-parser");


router.use(cors());

router.use(body.json());



router.get("/", (req, res) => {
    res.redirect("/Makeup")
})

router.get("/Makeup", (req, res) => {
    Makeup.find({}).then(data => {
        res.json(data)
        // console.log("It works!")
    })
})

router.get("/Shades", (req, res) => {
    Shades.find({}).then(data => {
        res.json(data)
        console.log("It works!")
    })
})

router.get("/Shades/:id", (req, res) => {
    Shades.find({"_id": req.params.id}
    ).then(data =>{
        res.json(data)
    })
})

router.post("/Shades", (req, res) =>{
    Shades.create(req.body).then((data) =>
    res.json(data))
})

router.put("/Shades/:id", (req, res) =>{
    // console.log("It works!")
    Shades.findOneAndUpdate({"_id": req.params.id}, req.body, {new:true})
    .then(data => {
        res.json(data)
    })
})

router.put("/Shades/colour/:name", (req, res) =>{
    // console.log("It works!")
    Shades.findOneAndUpdate({"colour_name": req.params.name}, req.body, {new:true})
    .then(data => {
        res.json(data)
    })
})

// router.put("/Makeup/currency/:currency", (req, res) =>{
//     // console.log("It works!")
//     Makeup.findOneAndUpdate({"currency": req.params.currency}, req.body)
//     .then(data => {
//         res.json(data)
//     })
// })

router.delete("/Shades/:id", (req, res) => {
    Shades.findOneAndDelete({ "_id": req.params.id }, req.body)
    .then(data => {
        res.json(data)
    })
})


router.set("port", process.env.PORT || 8080);

router.listen(router.get("port"), () => console.log("They see me rollin...on port 8080..."));


