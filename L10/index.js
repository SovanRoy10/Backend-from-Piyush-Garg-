const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// app.get("/about", (req, res) => {
//   res.send("Hello from about page "+req.query.name+" "+req.query.age);
// }); // http://localhost:3000/about?name=sovan&age=21

app.get("/about", (req, res) => {
  res.send("Hello from about page");
});

app.get("/profile", (req, res) => {
  res.send("Hello from profile page");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
