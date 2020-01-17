var express = require("express");


var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burgerDB = require("../models/burger");

// Create all our routes and set up logic within those routes where required.

//read all the burgers route
router.get("/", function (req, res) {
    burgerDB.selectAll(function (data) {
        var hbsObject = {
            burgerdb: data
        };
        //   console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

//create a burger route
router.post("/api/burger", function (req, res) {
    console.log(req.body)
    burgerDB.insertOne([
      "burger_name", "devoured"
    ], [
      req.body.burger_name,false
    ], function (result) {
      res.json({
        result
      });
    });
  });


// Export routes for server.js to use.
module.exports = router;