const express = require("express");
const router = express.Router();
const cors = require("cors");
router.use(cors());

const fs = require("fs");
//Download from database
const data = fs.readFileSync("./database/lunch.json", "utf8");
//console.log("data", data);

/// get all meals data 
router.get("/lunch", (req, res) => {
 res.json({lunch: JSON.parse(data)})
})
module.exports = router;
