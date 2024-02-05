const express = require("express");

const app = express();
const port = 3000;
const urlRoute = require("./routes/url");
const staticRoute = require("./routes/staticRouter");
const { connectMongoDB } = require("./connection");

connectMongoDB("mongodb://127.0.0.1:27017/urlShortener").then(() =>
  console.log("MongoDB is connected .......")
);

app.set("view engine", "ejs"); // setting up view engine for ejs

app.use(express.urlencoded({ extended: false }));

app.use("/url", urlRoute);
app.use("/", staticRoute);

// app.get("/test", (req,res)=>{
//   return res.render("home")
// })

app.listen(port, () => {
  console.log("Server started on port " + port);
});
