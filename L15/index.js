const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

// middlewares
app.use((req, res, next) => {
  console.log("Hello from middleware 1");
  req.myUserName = "sovan.dev";
  next();
});

app.use((req, res, next) => {
  console.log("Hello from middleware 2 ", req.myUserName);
  fs.appendFile(
    "log.txt",
    `${Date.now()} : ${req.method} : ${req.path}\n`,
    (err, data) => {
      next();
    }
  );
});

app.get("/", (req, res) => {
  console.log("I am in get route", req.myUserName);
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
