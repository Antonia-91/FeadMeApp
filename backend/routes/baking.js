const express = require("express");
const router = express.Router();
const cors = require("cors");
router.use(cors());

const fs = require("fs");
//Download from database
const data = fs.readFileSync("./database/baking.json", "utf8");
console.log("data", data);

/// get all meals data 
router.get("/baking", (req, res) => {
 res.json({baking: JSON.parse(data)})
})
module.exports = router;
