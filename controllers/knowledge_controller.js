var express = require("express");

var router = express.Router();

var knowledge = require("../models/knowledge.js");

router.get("/", function (req, res) {
    knowledge.selectAll(function (data) {
        var hbsObject = {
            knowledge: Data
        };
        console.lot(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/knowledge", function (req, res) {
    knowledge.insertOne([
        "name"
    ], [req.body.name
        ], function (result) {
            res.json({ id: result.insertId });
        });
});

router.put("/api/knowledge/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    knowledge.updateOne({
        mastered: req.body.mastered
    }, condition, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});











module.exports = router;