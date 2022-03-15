const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const bodyParser = require("body-parser");
const mysql = require("mysql2");

/// Import routes
const userRouter = require("./routes/user.js");


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

/// use routes
app.use(userRouter);


/// connect to database
app.locals.con = mysql.createConnection({
  host: "localhost",
  port: "8889",
  user: "MealsApp",
  password: "MealsApp",
  database: "MealsApp",
});

app.listen(process.env.PORT || 5005, () => {
  console.log(
    `Server is ready at http://localhost:${process.env.PORT || 5005}`
  );
});
