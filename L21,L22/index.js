const express = require("express");

const app = express();
const port = 3000;
const urlRoute = require("./routes/url");
const staticRoute = require("./routes/staticRouter");
const userRoute = require("./routes/user");

const cookieParser = require("cookie-parser");

const { restrictToLoggedInUserOnly } = require("./middlewares/auth");
const { connectMongoDB } = require("./connection");

connectMongoDB("mongodb://127.0.0.1:27017/urlShortener").then(() =>
  console.log("MongoDB is connected .......")
);

app.set("view engine", "ejs"); // setting up view engine for ejs

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.use("/url", restrictToLoggedInUserOnly, urlRoute);
app.use("/", staticRoute);
app.use("/user", userRoute);

// app.get("/test", (req,res)=>{
//   return res.render("home")
// })

app.listen(port, () => {
  console.log("Server started on port " + port);
});
