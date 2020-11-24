const express = require("express");
const router = express();
const Makeup = require("./models/Makeup");
const Shade = require("./models/Shades");
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

router.get("/Shade", (req, res) => {
    Shade.find({}).then(data => {
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

router.post("/Makeup", (req, res) =>{
    Makeup.create(req.body).then((data) =>
    res.json(data))
})

router.put("/Makeup/colour_name/:colour_name", (req, res) =>{
    // console.log("It works!")
    Makeup.findOneAndUpdate({"colour_name": req.params.colour_name}, req.body)
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

// router.delete("/Makeup/:currency", (req, res) => {
//     Makeup.findOneAndDelete({ "currency": req.params.currency }, req.body)
//     .then(data => {
//         res.json(data)
//     })
// })


router.set("port", process.env.PORT || 8080);

router.listen(router.get("port"), () => console.log("They see me rollin...on port 8080..."));


