const express = require("express");
const router = express.Router();
const cors = require("cors");
router.use(cors());

/// add new favorite
router.post("/addFav", (req, res) => {
  const userId = req.body.userId;
  const mealId = req.body.mealId;
  let newArray = [];
  console.log(userId, mealId);

  req.app.locals.con.connect((err) => {
    if (err) {
      console.log(err);
    }

    let sql = `SELECT * from userTable WHERE user_id = ${userId}`;
    req.app.locals.con.query(sql, (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log("result[0].user_favs", result[0].user_favs.length);

      let favResults = result[0].user_favs;
      /////// IF RESULT > O
      if (favResults.length > 0) {
        let split = favResults.split(",");
        console.log("split", split);
        split.push(mealId);
        let sql2 = `UPDATE userTable SET user_favs = '${split}' WHERE user_id = ${userId} `;
        console.log(sql2);

        req.app.locals.con.query(sql2, (err, res) => {
          if (err) {
            console.log(err);
          }
          console.log(res);
          console.log(split);
        });
        res.json({ ok: "ok", data: split });
      }
      ///// IF RESULT < 0
      else {
        let split = [];
        console.log("split", split);
        split.push(mealId);
        let sql2 = `UPDATE userTable SET user_favs = '${split}' WHERE user_id = ${userId} `;
        console.log(sql2);

        req.app.locals.con.query(sql2, (err, res) => {
          if (err) {
            console.log(err);
          }
          console.log(res);
          console.log(split);
        });
        res.json({ ok: "ok", data: split });
      }
    });
  });
});

/// remove favorite
router.post("/removeFav", (req, res) => {
  const userId = req.body.userId;
  const mealId = req.body.mealId;
  console.log("userId: ", userId, "mealId:", mealId);

  req.app.locals.con.connect((err) => {
    if (err) {
      console.log(err);
    }

    let sql = `SELECT * from userTable WHERE user_id = ${userId}`;
    req.app.locals.con.query(sql, (err, res) => {
      if (err) {
        console.log(err);
      }
      console.log("res", res);
      let favResults = res[0].user_favs;
      let split = favResults.split(",");
      console.log("split before", split);
      for (let i = 0; i < split.length; i++) {
        console.log("split[i]", split[i]);
        console.log("mealId", mealId);
        if (split[i] === mealId) {
          split.splice(i, 1);
        }
      }
      console.log("split after", split);

      let sql2 = `UPDATE userTable SET user_favs = '${split}' WHERE user_id = ${userId}`;
      console.log(sql2);
      req.app.locals.con.query(sql2, (err, result) => {
        if (err) {
          console.log(err);
        }
        console.log(result);
        console.log(split);
      });
    });
  });

  res.status(200).json({ message: "success" });
});

/// addDate
router.post("/addDate", (req, res) => {
  console.log(req.body);
  //{ value: '2022-03-13T15:26:54.086Z', user_id: 2, mealId: '52854' }
  let stringDate = req.body.value.toString();

  req.app.locals.con.connect((err) => {
    if (err) {
      console.log(err);
    }

    let sql = `INSERT INTO savedMealsDate (user_id, meal_id, date) VALUES ( ${req.body.user_id}, '${req.body.mealId}', '${stringDate}') `;
    console.log(sql);
    req.app.locals.con.query(sql, (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
    });
  });
});

/// get all saved dates
router.get("/dates/:id", (req, res) => {
  const user_id = req.params.id;
  req.app.locals.con.connect((err) => {
    if (err) {
      console.log(err);
    }
    let sql = `SELECT * from savedMealsDate WHERE user_id = ${user_id}`;

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
