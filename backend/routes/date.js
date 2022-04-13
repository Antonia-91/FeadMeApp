const express = require("express");
const router = express.Router();
const cors = require("cors");
router.use(cors());

/// get all dates
router.get("/date/:id", (req, res) => {
  const user_id = req.params.id;
  req.app.locals.con.connect((err) => {
    if (err) {
      console.log(err);
    }
    let sql = `SELECT * from datesTable WHERE user_id = ${user_id}`;
    //let sql2 = `SELECT   (day, meal_id, meal_title) FROM dateTable WHERE user_id = ${user_id}`;
    console.log(sql);

    req.app.locals.con.query(sql, (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
      res.json(result);
    });
  });
});

/// delete  date
router.delete("/date/:id", (req, res) => {
  console.log(req.params.id);

  req.app.locals.con.connect((err) => {
    if (err) {
      console.log(err);
    }
    let sql = `DELETE FROM datesTable WHERE date_id = ${req.params.id}`;
    req.app.locals.con.query(sql, (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
      res.status(200).json({
        message: "delete success",
      });
    });
  });
});

/// post new date
router.post("/savedate", (req, res) => {
  console.log(req.body);

  const date = req.body.date;
  const day = req.body.day;
  const mealId = req.body.mealId;
  const meal = req.body.meal;
  const user_id = req.body.user_id;

  req.app.locals.con.connect((err) => {
    if (err) {
      console.log(err);
    }
    let sql = `INSERT INTO datesTable ( date, day, meal_id, meal_title, user_id) VALUES ('${date}', '${day}', '${mealId}', '${meal}', ${user_id})`;
    console.log(sql);

    req.app.locals.con.query(sql, (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
      res.json(result);
    });
  });
});

module.exports = router;
