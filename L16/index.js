const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/user", (req, res) => {
  // res.setHeader("myName", "Sovan Roy"); // custom headers
  res.setHeader("X-MyName", "Sovan Roy"); // custom headers // good practice
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
