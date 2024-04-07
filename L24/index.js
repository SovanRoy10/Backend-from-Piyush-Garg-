const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

const cookieParser = require("cookie-parser");

const URLroute = require("./routes/url");
const staticRouter = require("./routes/staticRouter");
const userRouter = require("./routes/user");

const { restrictToLoggedInUserOnly, checkAuth } = require("./middlewares/auth");

const { connectDB } = require("./connection");

connectDB("mongodb://127.0.0.1:27017/urlShortner_test").then(() => {
  console.log("MongoDb is connected");
});

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/url", restrictToLoggedInUserOnly, URLroute);
app.use("/",checkAuth, staticRouter);
app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
