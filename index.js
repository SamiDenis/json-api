const express = require("express");
const router = express();
const Makeup = require("./models/Makeup");
const body = require("body-parser");
// const cors = require("cors");


router.use(body.json());

// router.use(cors());

router.get("/", (req, res) =>{
    res.redirect("Makeup")
})

router.get("/Makeup", (req, res) =>{
    Makeup.find({}).then(data => {
        res.json(data)
    })
})

// router.get("/Makeup/:id", (req, res) =>{
//     Makeup.find({"product_colors._id": req.params.id},{
//         "product_colors.$": 1
//     }).then(data =>{
//         res.json(data)
//     })
// })

// router.post("/Makeup", (req, res) =>{
//     Makeup.create(req.body).then((data) =>
//     res.json(data))
// })

// router.put("/Makeup/currency/:currency", (req, res) =>{
//     // console.log("It works!")
//     Makeup.findOneAndUpdate({ "currency": req.params.currency }, req.body)
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
// // router.listen(9000, () =>{
//     console.log("Its over 9000!")
// })

