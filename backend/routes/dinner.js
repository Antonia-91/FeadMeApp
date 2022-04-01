const express = require("express");
const router = express.Router();
const cors = require("cors");
router.use(cors());

const fs = require("fs");
//Download from database
const data = fs.readFileSync("./database/dinner.json", "utf8");
//console.log("data", data);

/// get all meals data 
router.get("/dinner", (req, res) => {
 res.json({dinner: JSON.parse(data)})
})
module.exports = router;
