const express = require("express");
const router = express.Router();
const cors = require("cors");
router.use(cors());

const fs = require("fs");
//Download from database
const data = fs.readFileSync("./database/breakfast.json", "utf8");
console.log("data", data);

/// get all meals data 
router.get("/breakfast", (req, res) => {
 res.json({breackfast: JSON.parse(data)})
})
module.exports = router;
