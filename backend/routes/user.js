const express = require("express");
const router = express.Router();
const cors = require("cors");
router.use(cors());

/// get user
router.post("/login", (req, res) => {
  console.log(req.body);
  const userName = req.body.userName;
  const userPass = req.body.userPass;
  req.app.locals.con.connect((err) => {
    if (err) {
      console.log(err);
    }

    let sql = `SELECT * FROM userTable WHERE userPass = "${userPass}"`;
    req.app.locals.con.query(sql, (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log("result", result);
      res.json(result);
    });
  });
});

module.exports = router;
