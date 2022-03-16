const express = require("express");
const router = express.Router();
const cors = require("cors");
router.use(cors());

/// Post new todo
router.post("/addTodo", (req, res) => {
  console.log(req.body);
  //{ logedin: 2, text: 'hej', reminder: true }
  const user_id = req.body.logedin;
  const text = req.body.text;
  const reminder = req.body.reminder;

  req.app.locals.con.connect((err) => {
    if (err) {
      console.log(err);
    }

    let sql = `INSERT INTO todoListTable (todoList_title, user_id) VALUES ('${text}', ${user_id})`;
    console.log(sql);
    req.app.locals.con.query(sql, (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
      res.status(200).json({ message: "success", insertId: result.insertId });
    });
  });
});

/// get all todo
router.get("/todos/:id", (req, res) => {
  const user_id = req.params.id;
  req.app.locals.con.connect((err) => {
    if (err) {
      console.log(err);
    }
    let sql = `SELECT * from todoListTable WHERE user_id = ${user_id}`;

    req.app.locals.con.query(sql, (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
      res.json(result);
    });
  });
});

/// get one todo
router.get("/todo/:id", (req, res) => {
  console.log(req.params.id);
  req.app.locals.con.connect((err) => {
    if (err) {
      console.log(err);
    }
    let sql = `SELECT * from todoListTable WHERE todoList_id = ${req.params.id}`;
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

/// update task
/// get one todo
router.post("/todo/:id", (req, res) => {
  console.log(req.params.id);
  req.app.locals.con.connect((err) => {
    if (err) {
      console.log(err);
    }
    let sql = `UPDATE todoListTable SET todoList_reminder = NOT todoList_reminder WHERE todoList_id = ${req.params.id}`;
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

/// delete todo
router.delete("/todo/:id", (req, res) => {
  console.log(req.params.id);

  req.app.locals.con.connect((err) => {
    if (err) {
      console.log(err);
    }
    let sql = `DELETE FROM todoListTable WHERE todoList_id = ${req.params.id}`;
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

module.exports = router;
