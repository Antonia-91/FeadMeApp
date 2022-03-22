const express = require("express");
const router = express.Router();
const cors = require("cors");
router.use(cors());

router.post("/savaDate", (req, res) => {
    console.log(req.body)
})

module.exports = router;
