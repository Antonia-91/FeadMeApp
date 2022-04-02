const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const bodyParser = require("body-parser");
const mysql = require("mysql2");

/// Import routes
const userRouter = require("./routes/user.js");
const favoritesRouter = require("./routes/favorites.js");
const todoRouter = require("./routes/todo.js");
const dateRouter = require("./routes/date.js");
const breakfastRouter = require("./routes/breakfast.js");
const lunchRouter = require("./routes/lunch.js");
const dinnerRouter = require("./routes/dinner.js");
const bakingRouter = require("./routes/baking.js");

/// Enables CORS
const cors = require("cors");

dotenv.config();
//const client = new OAuth2Client(process.env.REACT_APP_GOOGLE_CLIENT_ID);

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   next();
// });

/// use routes
app.use(userRouter);
app.use(favoritesRouter);
app.use(todoRouter);
app.use(dateRouter);
app.use(breakfastRouter);
app.use(lunchRouter);
app.use(dinnerRouter);
app.use(bakingRouter);

/// connect to database  LOCAL
// app.locals.con = mysql.createConnection({
//   host: "localhost",
//   port: "8889",
//   user: "MealsApp",
//   password: "MealsApp",
//   database: "MealsApp",
// });

/// connect to database HEROKU
app.locals.con = mysql.createConnection({
  host: "eu-cdbr-west-02.cleardb.net",
  // port: "8889",
  user: "bd625d758bc100",
  password: "b944cdea",
  database: "heroku_f18251a49332320",
  dialect: "mysql",
});

app.listen(process.env.PORT || 5005, () => {
  console.log(
    `Server is ready at http://localhost:${process.env.PORT || 5005}`
  );
});

/// obs
// git add .
// git commit -am"xxx"
// git push heroku master

// mysql://bd625d758bc100:b944cdea@eu-cdbr-west-02.cleardb.net/heroku_f18251a49332320?reconnect=true
//mysql://bd625d758bc100:b944cdea@eu-cdbr-west-02.cleardb.net/heroku_f18251a49332320?reconnect=true
