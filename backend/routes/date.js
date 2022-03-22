const express = require("express");
const router = express.Router();
const cors = require("cors");
router.use(cors());

router.post("/savaDate", (req, res) => {
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
    let sql = `INSERT INTO dateTable ( date, day, meal_id, meal_title, user_id) VALUES ('${date}', '${day}', '${mealId}', '${meal}', ${user_id})`;
    console.log(sql);

    req.app.locals.con.query(sql, (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
      res.json(result);
    });
  });

  // day: 'Sunday',
  // date: '2022-03-20',
  // mealId: '52955',
  // meal: 'Egg Drop Soup',
  // user_id: 2
  // sql = INSERT INTO `dateTable`( `date`, `day`, `meal_id`, `meal_title`, `user_id`) VALUES ('2022-03-20','wensday','52955','Egg Drop Soup',2)
});

module.exports = router;
