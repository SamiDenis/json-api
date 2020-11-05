const express = require("express");
const router = express();
const Makeup = require("./models/Makeup");
const body = require("body-parser");
const { findOneAndUpdate } = require("./models/Makeup");

router.use(body.json());

router.get("/", (req, res) =>{
    res.redirect("Makeup")
})

router.get("/Makeup", (req, res) =>{
    Makeup.find({}).then(data => {
        res.json(data)
    })
})

router.get("/Makeup/:id", (req, res) =>{
    Makeup.find({"product_colors._id": req.params.id},{
        "product_colors.$": 1
    }).then(data =>{
        res.json(data)
    })
})

router.post("/Makeup", (req, res) =>{
    Makeup.create(req.body).then((data) =>
    res.json(data))
})

router.put("/Makeup/:id", (req, res) =>{
    Makeup,findOneAndUpdate({id: req.params.id }, req.body)
    .then(data => {
        res.json(data)
    })
})



router.listen(9000, () =>{
    console.log("Its over 9000!")
})