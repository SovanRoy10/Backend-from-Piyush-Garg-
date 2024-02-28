const express = require("express");
const userRoute = require("./routes/user");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/blogify').then((e)=>{
  console.log("MongoDB is connected...")
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("home");
});

app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`);
});
