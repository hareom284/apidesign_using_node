const express = require("express");
const { protect } = require("./modules/auth");
const router = require("./router");
require("dotenv").config();
const morgan = require("morgan");

// const cors = require("cors");

const app = express();

app.use(morgan("dev"));
// app.use(cors);
app.use(express.json());
// to allow query
app.use(express.urlencoded({ extended: true }));
// //middle ware

// app.use((req, res, next) => {
//   (req.secret = "this is srect"), next();
// });
app.get("/", (req, res) => {
  res.json({
    message: "This is testing",
  });
});
app.use("/api", router);

module.exports = app;
