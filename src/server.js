const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("server start");
  res.send({
    message: "hellow",
  });
});

module.exports = app;
